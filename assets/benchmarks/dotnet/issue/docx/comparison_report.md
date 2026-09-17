# dotnet MiniPdf vs Microsoft 365 Word Reference PDF Comparison Report

Generated: 2026-09-11T09:57:59.068677

## Summary

| # | Test Case | Valid | Text Sim | Visual Avg | Pages (M/R) | Overall |
|---|-----------|-------|----------|------------|-------------|--------|
| 1 | 🟢 Issue159_PageLayoutOptions | ✅ | 1.0 | 0.983 | 1/1 | **0.9932** |

**Average Overall Score: 0.9932**

## Labeled Side-by-Side Comparison

<table>
<tr><th>Case</th><th>Comparison</th></tr>
<tr>
  <td><b>Issue159_PageLayoutOptions<br><small>format: docx | case: Issue159_PageLayoutOptions | scope: dotnet-issue-docx</small></b><br>Page 1</td>
  <td><img src="side-by-side/Issue159_PageLayoutOptions_p1_dotnet_minipdf_vs_microsoft_365_word_reference_vs_libreoffice.png" width="760" alt="Issue159_PageLayoutOptions page 1 comparison"></td>
</tr>
</table>

## Difference Heatmaps

Blue areas are below the configured difference threshold; red areas have stronger pixel differences. The reference rendering is retained as faint context.

<table>
<tr><th>Case</th><th>Heatmap</th><th>Metrics</th></tr>
<tr>
  <td><b>Issue159_PageLayoutOptions</b><br>Page 1</td>
  <td><img src="images/Issue159_PageLayoutOptions_p1_heatmap.png" width="760" alt="Issue159_PageLayoutOptions page 1 difference heatmap"></td>
  <td>changed: 43822 px (2.08%)<br>bbox: [152, 157, 1135, 1427]<br>mean abs RGB: 3.4487<br>RMSE RGB: 26.654<br>threshold: 12, gain: 5.0</td>
</tr>
</table>

## Visual Comparison

Scores compare dotnet MiniPdf against Microsoft 365 Word Reference. LibreOffice is an auxiliary rendering and does not affect scores.

<table>
<tr><th>dotnet MiniPdf</th><th>Microsoft 365 Word Reference</th><th>LibreOffice</th></tr>
<tr>
  <td><b>Issue159_PageLayoutOptions<br><small>format: docx | case: Issue159_PageLayoutOptions | scope: dotnet-issue-docx</small></b></td>
  <td colspan="2">Issue159_PageLayoutOptions <span style="color:#3fb950">⬤</span> 99.3%</td>
</tr>
<tr>
  <td><img src="images/Issue159_PageLayoutOptions_p1_minipdf.png" width="260" alt="dotnet MiniPdf"></td>
  <td><img src="images/Issue159_PageLayoutOptions_p1_reference.png" width="260" alt="Microsoft 365 Word Reference"></td>
  <td><img src="images/Issue159_PageLayoutOptions_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
</table>

## Detailed Results

### Issue159_PageLayoutOptions

- **Case Metadata:** format: docx | case: Issue159_PageLayoutOptions | scope: dotnet-issue-docx
- **Source:** tests/Issue_Files/docx/Issue159_PageLayoutOptions.docx
- **Text Similarity:** 1.0
- **Visual Average:** 0.983
- **Overall Score:** 0.9932
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=2876 bytes, Reference=19277 bytes

Text content: ✅ Identical

## Improvement Suggestions

All test cases scored 0.8 or above. 🎉
