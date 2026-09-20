const state = {
  manifest: null,
  cases: [],
  visibleCount: 60,
};

const elements = {
  generatedAt: document.querySelector("#generated-at"),
  languageGrid: document.querySelector("#language-grid"),
  resultsBody: document.querySelector("#results-body"),
  resultCount: document.querySelector("#result-count"),
  emptyState: document.querySelector("#empty-state"),
  loadMore: document.querySelector("#load-more"),
  search: document.querySelector("#search"),
  language: document.querySelector("#language-filter"),
  suite: document.querySelector("#suite-filter"),
  format: document.querySelector("#format-filter"),
  score: document.querySelector("#score-filter"),
  sort: document.querySelector("#sort-select"),
  dialog: document.querySelector("#case-dialog"),
  dialogTitle: document.querySelector("#dialog-title"),
  dialogScope: document.querySelector("#dialog-scope"),
  dialogContent: document.querySelector("#dialog-content"),
};

function scoreBand(score) {
  if (score == null) return "unscored";
  if (score >= 0.9) return "excellent";
  if (score >= 0.7) return "acceptable";
  return "needs-work";
}

function formatScore(score) {
  return score == null ? "N/A" : `${(score * 100).toFixed(1)}%`;
}

function assetUrl(item, folder, fileName) {
  if (!fileName) return null;
  const encodedName = fileName.split("/").map(encodeURIComponent).join("/");
  return `${item.assets}/${folder}/${encodedName}`;
}

function addOptions(select, values) {
  for (const value of [...new Set(values)].sort()) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
}

function applyUrlFilters() {
  const parameters = new URLSearchParams(window.location.search);
  const filters = {
    q: elements.search,
    language: elements.language,
    suite: elements.suite,
    format: elements.format,
    score: elements.score,
    sort: elements.sort,
  };

  for (const [name, element] of Object.entries(filters)) {
    const value = parameters.get(name);
    if (value != null && [...element.options ?? []].some((option) => option.value === value)) {
      element.value = value;
    } else if (name === "q" && value != null) {
      element.value = value;
    }
  }
}

function updateUrlFilters() {
  const parameters = new URLSearchParams();
  const values = {
    q: elements.search.value.trim(),
    language: elements.language.value,
    suite: elements.suite.value,
    format: elements.format.value,
    score: elements.score.value,
    sort: elements.sort.value,
  };
  for (const [name, value] of Object.entries(values)) {
    if (value) parameters.set(name, value);
  }
  const query = parameters.toString();
  history.replaceState(null, "", `${location.pathname}${query ? `?${query}` : ""}`);
}

function setSummary() {
  const scored = state.cases.filter((item) => item.overall_score != null);
  const average = scored.length ? scored.reduce((sum, item) => sum + item.overall_score, 0) / scored.length : null;
  document.querySelector("#metric-average").textContent = formatScore(average);
  document.querySelector("#metric-cases").textContent = scored.length.toLocaleString();
  document.querySelector("#metric-reports").textContent = state.manifest.reports.length.toLocaleString();
  document.querySelector("#metric-languages").textContent = new Set(state.cases.map((item) => item.language)).size;

  const generatedAt = new Date(state.manifest.generated_at);
  elements.generatedAt.textContent = `Published ${generatedAt.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}`;
}

function renderLanguages() {
  const groups = new Map();
  for (const item of state.cases.filter((candidate) => candidate.overall_score != null)) {
    const cases = groups.get(item.language) ?? [];
    cases.push(item);
    groups.set(item.language, cases);
  }
  const order = ["dotnet", "rust", "java", "go", "python", "node"];
  elements.languageGrid.replaceChildren();

  for (const language of order.filter((name) => groups.has(name))) {
    const cases = groups.get(language);
    const average = cases.reduce((sum, item) => sum + item.overall_score, 0) / cases.length;
    const card = document.createElement("article");
    card.className = "language-card";

    const header = document.createElement("header");
    const name = document.createElement("span");
    name.className = "language-name";
    name.textContent = language === "dotnet" ? ".NET" : language;
    const score = document.createElement("span");
    score.className = "language-score";
    score.textContent = formatScore(average);
    header.append(name, score);

    const track = document.createElement("div");
    track.className = "score-track";
    const fill = document.createElement("div");
    fill.className = "score-fill";
    fill.style.width = `${Math.max(0, Math.min(100, average * 100))}%`;
    track.append(fill);

    const count = document.createElement("small");
    count.textContent = `${cases.length.toLocaleString()} scored cases`;
    card.append(header, track, count);
    elements.languageGrid.append(card);
  }
}

function filteredCases() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  return state.cases.filter((item) => {
    if (elements.language.value && item.language !== elements.language.value) return false;
    if (elements.suite.value && item.suite !== elements.suite.value) return false;
    if (elements.format.value && item.format !== elements.format.value) return false;
    if (elements.score.value && scoreBand(item.overall_score) !== elements.score.value) return false;
    return !query || item.name.toLocaleLowerCase().includes(query);
  });
}

function compareCases(left, right) {
  const order = elements.sort.value;
  if (order === "name-asc") return left.name.localeCompare(right.name);
  const key = order.startsWith("visual") ? "visual_avg"
    : order.startsWith("text") ? "text_similarity"
    : "overall_score";
  const leftScore = left[key] ?? -1;
  const rightScore = right[key] ?? -1;
  const ascending = order.endsWith("asc");
  return (ascending ? leftScore - rightScore : rightScore - leftScore)
    || left.name.localeCompare(right.name);
}

function scoreCell(value, pill = false) {
  const cell = document.createElement("td");
  const valueElement = document.createElement("span");
  valueElement.className = pill ? `score score-pill ${scoreBand(value)}` : "score";
  valueElement.textContent = formatScore(value);
  cell.append(valueElement);
  return cell;
}

function renderResults() {
  const filtered = filteredCases().sort(compareCases);
  const visible = filtered.slice(0, state.visibleCount);
  elements.resultsBody.replaceChildren();

  for (const item of visible) {
    const row = document.createElement("tr");
    row.tabIndex = 0;
    row.addEventListener("click", () => openCase(item));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCase(item);
      }
    });

    const name = document.createElement("td");
    name.className = "case-name";
    name.textContent = item.name;
    const runtime = document.createElement("td");
    runtime.className = "runtime";
    runtime.textContent = item.language === "dotnet" ? ".NET" : item.language;
    const scope = document.createElement("td");
    scope.className = "scope";
    scope.textContent = `${item.suite} / ${item.format}`;
    const pages = document.createElement("td");
    pages.textContent = `${item.minipdf_pages ?? "-"} / ${item.reference_pages ?? "-"}`;
    const action = document.createElement("td");
    const button = document.createElement("button");
    button.className = "view-button";
    button.type = "button";
    button.textContent = "Inspect";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openCase(item);
    });
    action.append(button);

    row.append(name, runtime, scope, pages, scoreCell(item.text_similarity), scoreCell(item.visual_avg), scoreCell(item.overall_score, true), action);
    elements.resultsBody.append(row);
  }

  elements.resultCount.textContent = `${filtered.length.toLocaleString()} of ${state.cases.length.toLocaleString()} cases`;
  elements.emptyState.hidden = filtered.length !== 0;
  elements.loadMore.hidden = visible.length >= filtered.length;
}

function createStat(label, value) {
  const stat = document.createElement("div");
  stat.className = "case-stat";
  const strong = document.createElement("strong");
  strong.textContent = value;
  const span = document.createElement("span");
  span.textContent = label;
  stat.append(strong, span);
  return stat;
}

function createFigure(item, folder, fileName, label) {
  if (!fileName) return null;
  const figure = document.createElement("figure");
  figure.className = "comparison-figure";
  const link = document.createElement("a");
  link.href = assetUrl(item, folder, fileName);
  link.target = "_blank";
  const image = document.createElement("img");
  image.src = link.href;
  image.alt = `${item.name}: ${label}`;
  image.loading = "lazy";
  link.append(image);
  const caption = document.createElement("figcaption");
  caption.textContent = label;
  figure.append(link, caption);
  return figure;
}

function openCase(item) {
  elements.dialogTitle.textContent = item.name;
  elements.dialogScope.textContent = `${item.language} / ${item.suite} / ${item.format}`;
  elements.dialogContent.replaceChildren();

  const stats = document.createElement("div");
  stats.className = "case-stats";
  stats.append(
    createStat("Overall", formatScore(item.overall_score)),
    createStat("Visual", formatScore(item.visual_avg)),
    createStat("Text", formatScore(item.text_similarity)),
    createStat("Pages", `${item.minipdf_pages ?? "-"} / ${item.reference_pages ?? "-"}`),
  );
  elements.dialogContent.append(stats);

  for (const page of item.diff_images ?? []) {
    const block = document.createElement("section");
    block.className = "page-block";
    const heading = document.createElement("div");
    heading.className = "page-heading";
    const title = document.createElement("h3");
    title.textContent = `Page ${page.page}`;
    const pageScore = document.createElement("span");
    pageScore.textContent = `visual ${formatScore(item.visual_scores?.[page.page - 1])}`;
    heading.append(title, pageScore);

    const grid = document.createElement("div");
    grid.className = "comparison-grid";
    const figures = [
      createFigure(item, "images", page.minipdf_img, "MiniPdf"),
      createFigure(item, "images", page.reference_img, "Microsoft 365"),
      createFigure(item, "images", page.auxiliary_img, "LibreOffice"),
      createFigure(item, "images", page.heatmap_img, "Difference heatmap"),
    ].filter(Boolean);
    grid.append(...figures);
    block.append(heading, grid);

    if (item.includes_composite_images && page.composite_img) {
      const actions = document.createElement("div");
      actions.className = "report-actions";
      const composite = document.createElement("a");
      composite.href = assetUrl(item, "side-by-side", page.composite_img);
      composite.target = "_blank";
      composite.textContent = "Open combined comparison";
      actions.append(composite);
      block.append(actions);
    }
    elements.dialogContent.append(block);
  }

  const reportActions = document.createElement("div");
  reportActions.className = "report-actions";
  const rawReport = document.createElement("a");
  rawReport.href = item.report;
  rawReport.target = "_blank";
  rawReport.textContent = "Open raw JSON report";
  reportActions.append(rawReport);
  elements.dialogContent.append(reportActions);
  elements.dialog.showModal();
}

async function loadData() {
  const manifestResponse = await fetch("data/manifest.json");
  if (!manifestResponse.ok) throw new Error(`Manifest request failed: ${manifestResponse.status}`);
  state.manifest = await manifestResponse.json();

  const reportData = await Promise.all(state.manifest.reports.map(async (report) => {
    const response = await fetch(report.report);
    if (!response.ok) throw new Error(`${report.id} request failed: ${response.status}`);
    const payload = await response.json();
    const results = Array.isArray(payload) ? payload : payload.results ?? [];
    return results.map((item) => ({ ...item, ...report }));
  }));

  state.cases = reportData.flat().sort((left, right) => {
    const leftScore = left.overall_score ?? -1;
    const rightScore = right.overall_score ?? -1;
    return rightScore - leftScore || left.name.localeCompare(right.name);
  });

  addOptions(elements.language, state.manifest.reports.map((item) => item.language));
  addOptions(elements.suite, state.manifest.reports.map((item) => item.suite));
  addOptions(elements.format, state.manifest.reports.map((item) => item.format));
  applyUrlFilters();
  setSummary();
  renderLanguages();
  renderResults();
}

for (const filter of [elements.search, elements.language, elements.suite, elements.format, elements.score, elements.sort]) {
  filter.addEventListener("input", () => {
    state.visibleCount = 60;
    updateUrlFilters();
    renderResults();
  });
}

elements.loadMore.addEventListener("click", () => {
  state.visibleCount += 60;
  renderResults();
});
document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});

loadData().catch((error) => {
  console.error(error);
  elements.generatedAt.textContent = "Benchmark data could not be loaded";
  elements.emptyState.hidden = false;
  elements.emptyState.textContent = error.message;
});