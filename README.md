# MiniPdf visual benchmarks

This repository is the static GitHub Pages dashboard for MiniPdf cross-language visual benchmark results.

Generate or refresh all published report data from the sibling `MiniPdf` repository:

```powershell
.\scripts\Publish-VisualBenchmarkPages.ps1 -Clean
```

To run every language benchmark and publish the resulting dashboard in one command:

```powershell
.\scripts\Run-All-Language-VisualBenchmarks.ps1 -Publish -Suite issue -Format xlsx -MinimumScore 0
```

The publisher copies comparison reports, rendered page images, and heatmaps into `assets/benchmarks/`, then writes `data/manifest.json`. Add `-IncludeCompositeImages` when the larger side-by-side composites are also required. Pushing this repository's `main` branch deploys the static site through the existing GitHub Pages workflow.