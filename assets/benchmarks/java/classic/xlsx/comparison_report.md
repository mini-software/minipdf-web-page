# java MiniPdf vs Microsoft 365 Excel Reference PDF Comparison Report

Generated: 2026-09-06T13:35:55.663453

## Summary

| # | Test Case | Valid | Text Sim | Visual Avg | Pages (M/R) | Overall |
|---|-----------|-------|----------|------------|-------------|--------|
| 1 | 🟢 classic01_basic_table_with_headers | ✅ | 1.0 | 0.9947 | 1/1 | **0.9979** |
| 2 | 🟢 classic02_multiple_worksheets | ✅ | 0.9645 | 0.9962 | 3/3 | **0.9843** |
| 3 | 🟢 classic03_empty_workbook | ✅ | 1.0 | 1.0 | 1/1 | **1.0** |
| 4 | 🟢 classic04_single_cell | ✅ | 1.0 | 0.9996 | 1/1 | **0.9998** |
| 5 | 🟡 classic05_wide_table | ✅ | 0.6667 | 0.9907 | 3/3 | **0.863** |
| 6 | 🟡 classic06_tall_table | ✅ | 0.6664 | 0.8479 | 5/5 | **0.8057** |
| 7 | 🟢 classic07_numbers_only | ✅ | 1.0 | 0.9971 | 1/1 | **0.9988** |
| 8 | 🟢 classic08_mixed_text_and_numbers | ✅ | 1.0 | 0.9957 | 1/1 | **0.9983** |
| 9 | 🔴 classic09_long_text | ✅ | 0.1667 | 0.0557 | 1/12 | **0.189** |
| 10 | 🟡 classic10_special_xml_characters | ✅ | 0.646 | 0.9935 | 1/1 | **0.8558** |
| 11 | 🟢 classic11_sparse_rows | ✅ | 0.8602 | 0.9984 | 2/2 | **0.9434** |
| 12 | 🔴 classic12_sparse_columns | ✅ | 0.9211 | 0.4983 | 1/2 | **0.6678** |
| 13 | 🟢 classic13_date_strings | ✅ | 0.9158 | 0.9932 | 1/1 | **0.9636** |
| 14 | 🟢 classic14_decimal_numbers | ✅ | 1.0 | 0.9943 | 1/1 | **0.9977** |
| 15 | 🟢 classic15_negative_numbers | ✅ | 0.9068 | 0.9957 | 1/1 | **0.961** |
| 16 | 🟢 classic16_percentage_strings | ✅ | 0.9689 | 0.994 | 1/1 | **0.9852** |
| 17 | 🟢 classic17_currency_strings | ✅ | 0.9951 | 0.9932 | 1/1 | **0.9953** |
| 18 | 🔴 classic18_large_dataset | ✅ | 0.9001 | 0.4939 | 24/42 | **0.6576** |
| 19 | 🟢 classic19_single_column_list | ✅ | 1.0 | 0.9944 | 1/1 | **0.9978** |
| 20 | 🟢 classic20_all_empty_cells | ✅ | 1.0 | 1.0 | 1/1 | **1.0** |
| 21 | 🟢 classic21_header_only | ✅ | 1.0 | 0.9986 | 1/1 | **0.9994** |
| 22 | 🟢 classic22_long_sheet_name | ✅ | 1.0 | 0.998 | 1/1 | **0.9992** |
| 23 | 🟢 classic23_unicode_text | ✅ | 0.7833 | 0.991 | 1/1 | **0.9097** |
| 24 | 🟢 classic24_red_text | ✅ | 0.7922 | 0.9888 | 1/1 | **0.9124** |
| 25 | 🟢 classic25_multiple_colors | ✅ | 0.8263 | 0.9881 | 1/1 | **0.9258** |
| 26 | 🟢 classic26_inline_strings | ✅ | 1.0 | 0.9968 | 1/1 | **0.9987** |
| 27 | 🟢 classic27_single_row | ✅ | 1.0 | 0.9983 | 1/1 | **0.9993** |
| 28 | 🟢 classic28_duplicate_values | ✅ | 1.0 | 0.9955 | 1/1 | **0.9982** |
| 29 | 🟢 classic29_formula_results | ✅ | 1.0 | 0.9938 | 1/1 | **0.9975** |
| 30 | 🔴 classic30_mixed_empty_and_filled_sheets | ✅ | 0.96 | 0.4981 | 4/2 | **0.6832** |
| 31 | 🟢 classic31_bold_header_row | ✅ | 0.9593 | 0.992 | 1/1 | **0.9805** |
| 32 | 🟢 classic32_right_aligned_numbers | ✅ | 0.9725 | 0.9958 | 1/1 | **0.9873** |
| 33 | 🟢 classic33_centered_text | ✅ | 1.0 | 0.9973 | 1/1 | **0.9989** |
| 34 | 🟢 classic34_explicit_column_widths | ✅ | 0.9372 | 0.9922 | 1/1 | **0.9718** |
| 35 | 🟢 classic35_explicit_row_heights | ✅ | 0.9157 | 0.9981 | 1/1 | **0.9655** |
| 36 | 🟢 classic36_merged_cells | ✅ | 0.9682 | 0.9925 | 1/1 | **0.9843** |
| 37 | 🟡 classic37_freeze_panes | ✅ | 0.5946 | 0.9832 | 1/1 | **0.8311** |
| 38 | 🟡 classic38_hyperlink_cell | ✅ | 0.6903 | 0.9931 | 1/1 | **0.8734** |
| 39 | 🟢 classic39_financial_table | ✅ | 1.0 | 0.9901 | 1/1 | **0.996** |
| 40 | 🟢 classic40_scientific_notation | ✅ | 0.8557 | 0.9934 | 1/1 | **0.9396** |
| 41 | 🟢 classic41_integer_vs_float | ✅ | 0.9951 | 0.9945 | 1/1 | **0.9958** |
| 42 | 🟢 classic42_boolean_values | ✅ | 0.8901 | 0.9931 | 1/1 | **0.9533** |
| 43 | 🟢 classic43_inventory_report | ✅ | 0.9884 | 0.9813 | 1/1 | **0.9879** |
| 44 | 🟢 classic44_employee_roster | ✅ | 0.7952 | 0.9672 | 1/1 | **0.905** |
| 45 | 🟢 classic45_sales_by_region | ✅ | 1.0 | 0.9955 | 4/4 | **0.9982** |
| 46 | 🟢 classic46_grade_book | ✅ | 1.0 | 0.9875 | 1/1 | **0.995** |
| 47 | 🟢 classic47_time_series | ✅ | 1.0 | 0.9723 | 1/1 | **0.9889** |
| 48 | 🟢 classic48_survey_results | ✅ | 0.9254 | 0.988 | 1/1 | **0.9654** |
| 49 | 🟢 classic49_contact_list | ✅ | 0.8382 | 0.9818 | 1/1 | **0.928** |
| 50 | 🟢 classic50_budget_vs_actuals | ✅ | 0.9731 | 0.983 | 3/3 | **0.9824** |
| 51 | 🟢 classic51_product_catalog | ✅ | 0.9122 | 0.9779 | 1/1 | **0.956** |
| 52 | 🟢 classic52_pivot_summary | ✅ | 0.9911 | 0.9827 | 1/1 | **0.9895** |
| 53 | 🟢 classic53_invoice | ✅ | 0.8485 | 0.9843 | 1/1 | **0.9331** |
| 54 | 🟢 classic54_multi_level_header | ✅ | 1.0 | 0.9857 | 1/1 | **0.9943** |
| 55 | 🟢 classic55_error_values | ✅ | 0.9718 | 0.9911 | 1/1 | **0.9852** |
| 56 | 🟢 classic56_alternating_row_colors | ✅ | 0.9662 | 0.9679 | 1/1 | **0.9736** |
| 57 | 🟢 classic57_cjk_only | ✅ | 0.9609 | 0.9887 | 1/1 | **0.9798** |
| 58 | 🟢 classic58_mixed_numeric_formats | ✅ | 0.8289 | 0.9914 | 1/1 | **0.9281** |
| 59 | 🟢 classic59_multi_sheet_summary | ✅ | 0.9949 | 0.9931 | 4/4 | **0.9952** |
| 60 | 🔴 classic60_large_wide_table | ✅ | 0.802 | 0.6118 | 4/6 | **0.6655** |
| 61 | 🟢 classic61_product_card_with_image | ✅ | 0.898 | 0.9878 | 1/1 | **0.9543** |
| 62 | 🟢 classic62_company_logo_header | ✅ | 0.8661 | 0.984 | 1/1 | **0.94** |
| 63 | 🟢 classic63_two_products_side_by_side | ✅ | 0.8636 | 0.9769 | 1/1 | **0.9362** |
| 64 | 🟢 classic64_employee_directory_with_photo | ✅ | 0.8791 | 0.9773 | 1/1 | **0.9426** |
| 65 | 🟢 classic65_inventory_with_product_photos | ✅ | 0.9677 | 0.9857 | 1/1 | **0.9814** |
| 66 | 🟢 classic66_invoice_with_logo | ✅ | 0.8364 | 0.9837 | 1/1 | **0.928** |
| 67 | 🟢 classic67_real_estate_listing | ✅ | 0.8379 | 0.9731 | 1/1 | **0.9244** |
| 68 | 🟡 classic68_restaurant_menu | ✅ | 0.6769 | 0.8485 | 1/1 | **0.8102** |
| 69 | 🟡 classic69_image_only_sheet | ✅ | 1.0 | 0.6516 | 1/1 | **0.8606** |
| 70 | 🟡 classic70_product_catalog_with_images | ✅ | 0.71 | 0.962 | 1/1 | **0.8688** |
| 71 | 🟢 classic71_multi_sheet_with_images | ✅ | 0.9754 | 0.9924 | 3/3 | **0.9871** |
| 72 | 🟡 classic72_bar_chart_image_with_data | ✅ | 0.9535 | 0.7836 | 1/1 | **0.8948** |
| 73 | 🟡 classic73_event_flyer_with_banner | ✅ | 0.7015 | 0.9183 | 1/1 | **0.8479** |
| 74 | 🟡 classic74_dashboard_with_kpi_image | ✅ | 0.9017 | 0.7587 | 1/1 | **0.8642** |
| 75 | 🟡 classic75_certificate_with_seal | ✅ | 0.459 | 0.8508 | 1/1 | **0.7239** |
| 76 | 🟢 classic76_product_image_grid | ✅ | 0.8333 | 0.961 | 1/1 | **0.9177** |
| 77 | 🔴 classic77_news_article_with_hero_image | ✅ | 0.2344 | 0.7635 | 1/1 | **0.5992** |
| 78 | 🟢 classic78_small_icon_per_row | ✅ | 0.9507 | 0.9875 | 1/1 | **0.9753** |
| 79 | 🟡 classic79_wide_panoramic_banner | ✅ | 0.7087 | 0.8663 | 1/1 | **0.83** |
| 80 | 🟡 classic80_portrait_tall_image | ✅ | 0.5447 | 0.9803 | 1/1 | **0.81** |
| 81 | 🟡 classic81_step_by_step_with_images | ✅ | 0.5068 | 0.9685 | 1/1 | **0.7901** |
| 82 | 🟢 classic82_before_after_images | ✅ | 0.8285 | 0.9325 | 1/1 | **0.9044** |
| 83 | 🟡 classic83_color_swatch_palette | ✅ | 0.7651 | 0.9771 | 1/1 | **0.8969** |
| 84 | 🟡 classic84_travel_destination_cards | ✅ | 0.4904 | 0.9581 | 1/1 | **0.7794** |
| 85 | 🟢 classic85_lab_results_with_image | ✅ | 0.8972 | 0.9445 | 1/1 | **0.9367** |
| 86 | 🟢 classic86_software_screenshot_features | ✅ | 0.8593 | 0.9774 | 1/1 | **0.9347** |
| 87 | 🟢 classic87_sports_results_with_logos | ✅ | 0.931 | 0.9856 | 1/1 | **0.9666** |
| 88 | 🟢 classic88_image_after_data | ✅ | 0.8771 | 0.9729 | 1/1 | **0.94** |
| 89 | 🟢 classic89_nutrition_label_with_image | ✅ | 0.8633 | 0.9813 | 1/1 | **0.9378** |
| 90 | 🟡 classic90_project_status_with_milestones | ✅ | 0.7593 | 0.9349 | 1/1 | **0.8777** |
| 91 | 🔴 classic91_simple_bar_chart | ✅ | 0.6667 | 0.3 | 1/2 | **0.4867** |
| 92 | 🔴 classic92_horizontal_bar_chart | ✅ | 0.6102 | 0.2902 | 1/2 | **0.4602** |
| 93 | 🔴 classic93_line_chart | ✅ | 0.75 | 0.3607 | 1/2 | **0.5443** |
| 94 | 🔴 classic94_pie_chart | ✅ | 0.6027 | 0.2207 | 1/2 | **0.4294** |
| 95 | 🔴 classic95_area_chart | ✅ | 0.9434 | 0.3222 | 1/2 | **0.6062** |
| 96 | 🔴 classic96_scatter_chart | ✅ | 0.7387 | 0.3389 | 1/2 | **0.531** |
| 97 | 🔴 classic97_doughnut_chart | ✅ | 0.6916 | 0.2238 | 1/2 | **0.4662** |
| 98 | 🔴 classic98_radar_chart | ✅ | 0.6019 | 0.3434 | 1/2 | **0.4781** |
| 99 | 🔴 classic99_bubble_chart | ✅ | 0.7586 | 0.3162 | 1/2 | **0.5299** |
| 100 | 🟡 classic100_stacked_bar_chart | ✅ | 0.8621 | 0.6002 | 1/1 | **0.7849** |
| 101 | 🟡 classic101_percent_stacked_bar | ✅ | 0.8696 | 0.5989 | 1/1 | **0.7874** |
| 102 | 🔴 classic102_line_chart_with_markers | ✅ | 0.8148 | 0.3795 | 1/2 | **0.5777** |
| 103 | 🔴 classic103_pie_chart_with_labels | ✅ | 0.3151 | 0.241 | 1/2 | **0.3224** |
| 104 | 🔴 classic104_combo_bar_line_chart | ✅ | 0.875 | 0.2982 | 1/2 | **0.5693** |
| 105 | 🔴 classic105_3d_bar_chart | ✅ | 0.7931 | 0.2699 | 1/2 | **0.5252** |
| 106 | 🔴 classic106_3d_pie_chart | ✅ | 0.6367 | 0.2688 | 1/2 | **0.4622** |
| 107 | 🔴 classic107_multi_series_line | ✅ | 0.9498 | 0.4733 | 1/2 | **0.6692** |
| 108 | 🔴 classic108_stacked_area_chart | ✅ | 0.8861 | 0.2178 | 1/2 | **0.5416** |
| 109 | 🔴 classic109_scatter_with_trendline | ✅ | 0.7294 | 0.3277 | 1/2 | **0.5228** |
| 110 | 🔴 classic110_chart_with_legend | ✅ | 0.7547 | 0.2944 | 1/2 | **0.5196** |
| 111 | 🔴 classic111_chart_with_axis_labels | ✅ | 0.6308 | 0.3177 | 1/2 | **0.4794** |
| 112 | 🔴 classic112_multiple_charts | ✅ | 0.7714 | 0.3087 | 1/2 | **0.532** |
| 113 | 🔴 classic113_chart_sheet | ✅ | 0.7692 | 0.268 | 1/2 | **0.5149** |
| 114 | 🟡 classic114_chart_large_dataset | ✅ | 0.9596 | 0.717 | 3/4 | **0.7706** |
| 115 | 🔴 classic115_chart_negative_values | ✅ | 0.68 | 0.3095 | 1/2 | **0.4958** |
| 116 | 🔴 classic116_percent_stacked_area | ✅ | 0.8718 | 0.1935 | 1/2 | **0.5261** |
| 117 | 🔴 classic117_stock_ohlc_chart | ✅ | 0.9342 | 0.3927 | 1/2 | **0.6308** |
| 118 | 🔴 classic118_bar_chart_custom_colors | ✅ | 0.625 | 0.2887 | 1/2 | **0.4655** |
| 119 | 🔴 classic119_dashboard_multi_charts | ✅ | 0.6538 | 0.2458 | 1/2 | **0.4598** |
| 120 | 🔴 classic120_chart_with_date_axis | ✅ | 0.3714 | 0.3763 | 1/2 | **0.3991** |
| 121 | 🟢 classic121_thin_borders | ✅ | 0.9825 | 0.8797 | 1/1 | **0.9449** |
| 122 | 🟢 classic122_thick_outer_thin_inner | ✅ | 1.0 | 0.8539 | 1/1 | **0.9416** |
| 123 | 🟢 classic123_dashed_borders | ✅ | 0.852 | 0.9865 | 1/1 | **0.9354** |
| 124 | 🟡 classic124_colored_borders | ✅ | 0.7684 | 0.9757 | 1/1 | **0.8976** |
| 125 | 🟢 classic125_solid_fills | ✅ | 0.9167 | 0.9737 | 1/1 | **0.9562** |
| 126 | 🟢 classic126_dark_header | ✅ | 0.8366 | 0.9771 | 1/1 | **0.9255** |
| 127 | 🟡 classic127_font_styles | ✅ | 0.4225 | 0.9794 | 1/1 | **0.7608** |
| 128 | 🟢 classic128_font_sizes | ✅ | 0.8475 | 0.9897 | 1/1 | **0.9349** |
| 129 | 🟢 classic129_alignment_combos | ✅ | 0.8912 | 0.9915 | 1/1 | **0.9531** |
| 130 | 🟢 classic130_wrap_and_indent | ✅ | 0.9839 | 0.9906 | 1/1 | **0.9898** |
| 131 | 🟢 classic131_number_formats | ✅ | 1.0 | 0.9808 | 1/1 | **0.9923** |
| 132 | 🟡 classic132_striped_table | ✅ | 0.711 | 0.943 | 1/1 | **0.8616** |
| 133 | 🟡 classic133_gradient_rows | ✅ | 0.75 | 0.9495 | 1/1 | **0.8798** |
| 134 | 🟢 classic134_heatmap | ✅ | 1.0 | 0.9109 | 1/1 | **0.9644** |
| 135 | 🟢 classic135_bottom_border_only | ✅ | 0.8507 | 0.9439 | 1/1 | **0.9178** |
| 136 | 🟢 classic136_financial_report_styled | ✅ | 0.9794 | 0.9416 | 1/1 | **0.9684** |
| 137 | 🟢 classic137_checkerboard | ✅ | 1.0 | 0.9419 | 1/1 | **0.9768** |
| 138 | 🟢 classic138_color_grid | ✅ | 1.0 | 0.9538 | 1/1 | **0.9815** |
| 139 | 🟡 classic139_pattern_fills | ✅ | 0.8636 | 0.8214 | 1/1 | **0.874** |
| 140 | 🟢 classic140_rotated_text | ✅ | 0.898 | 0.9912 | 1/1 | **0.9557** |
| 141 | 🟢 classic141_mixed_edge_borders | ✅ | 0.9433 | 0.9816 | 1/1 | **0.97** |
| 142 | 🟢 classic142_styled_invoice | ✅ | 0.9873 | 0.9192 | 1/1 | **0.9626** |
| 143 | 🟢 classic143_colored_tabs | ✅ | 0.9803 | 0.9976 | 4/4 | **0.9912** |
| 144 | 🟢 classic144_note_style_cells | ✅ | 1.0 | 0.9569 | 1/1 | **0.9828** |
| 145 | 🟢 classic145_status_badges | ✅ | 0.9803 | 0.9332 | 1/1 | **0.9654** |
| 146 | 🟢 classic146_double_border_table | ✅ | 0.9677 | 0.958 | 1/1 | **0.9703** |
| 147 | 🟢 classic147_multi_sheet_styled | ✅ | 0.9907 | 0.9668 | 3/3 | **0.983** |
| 148 | 🟡 classic148_frozen_styled_grid | ✅ | 0.8104 | 0.8322 | 1/1 | **0.857** |
| 149 | 🟢 classic149_merged_styled_sections | ✅ | 0.9862 | 0.9202 | 1/1 | **0.9626** |
| 150 | 🟢 classic150_kitchen_sink_styles | ✅ | 0.9412 | 0.9172 | 1/1 | **0.9434** |
| 151 | 🟡 classic151_multilingual_greetings | ✅ | 0.7634 | 0.9829 | 1/1 | **0.8985** |
| 152 | 🟡 classic152_emoji_sampler | ✅ | 0.6583 | 0.9263 | 1/1 | **0.8338** |
| 153 | 🟢 classic153_currency_symbols | ✅ | 0.9441 | 0.9844 | 1/1 | **0.9714** |
| 154 | 🟢 classic154_math_symbols | ✅ | 0.9014 | 0.9892 | 1/1 | **0.9562** |
| 155 | 🟢 classic155_diacritical_marks | ✅ | 0.8247 | 0.9911 | 1/1 | **0.9263** |
| 156 | 🟡 classic156_rtl_bidi_text | ✅ | 0.525 | 0.9948 | 1/1 | **0.8079** |
| 157 | 🟢 classic157_cjk_extended | ✅ | 0.9378 | 0.976 | 1/1 | **0.9655** |
| 158 | 🟡 classic158_emoji_skin_tones | ✅ | 0.6667 | 0.9833 | 1/1 | **0.86** |
| 159 | 🟡 classic159_zwj_emoji | ✅ | 0.7493 | 0.9874 | 1/1 | **0.8947** |
| 160 | 🟢 classic160_punctuation_marks | ✅ | 0.8466 | 0.9934 | 1/1 | **0.936** |
| 161 | 🟢 classic161_box_drawing | ✅ | 0.8843 | 0.9831 | 1/1 | **0.947** |
| 162 | 🟢 classic162_cjk_emoji_styled | ✅ | 0.9341 | 0.9814 | 1/1 | **0.9662** |
| 163 | 🟢 classic163_cyrillic_alphabets | ✅ | 0.9273 | 0.9824 | 1/1 | **0.9639** |
| 164 | 🟡 classic164_indic_scripts | ✅ | 0.6129 | 0.9913 | 1/1 | **0.8417** |
| 165 | 🟡 classic165_southeast_asian | ✅ | 0.5185 | 0.9846 | 1/1 | **0.8012** |
| 166 | 🟡 classic166_emoji_progress | ✅ | 0.5904 | 0.8169 | 1/1 | **0.7629** |
| 167 | 🟡 classic167_musical_symbols | ✅ | 0.7308 | 0.9813 | 1/1 | **0.8848** |
| 168 | 🟢 classic168_mixed_ltr_rtl_styled | ✅ | 0.8462 | 0.9623 | 1/1 | **0.9234** |
| 169 | 🟡 classic169_korean_invoice | ✅ | 0.5783 | 0.9747 | 1/1 | **0.8212** |
| 170 | 🟢 classic170_emoji_dashboard | ✅ | 0.9477 | 0.9691 | 1/1 | **0.9667** |
| 171 | 🟡 classic171_ipa_phonetic | ✅ | 0.625 | 0.9889 | 1/1 | **0.8456** |
| 172 | 🟢 classic172_emoji_timeline | ✅ | 0.8852 | 0.9771 | 1/1 | **0.9449** |
| 173 | 🟢 classic173_african_languages | ✅ | 0.8791 | 0.9835 | 1/1 | **0.945** |
| 174 | 🟢 classic174_technical_symbols | ✅ | 0.9441 | 0.9832 | 1/1 | **0.9709** |
| 175 | 🟢 classic175_multiscript_catalog | ✅ | 0.8378 | 0.9707 | 1/1 | **0.9234** |
| 176 | 🟢 classic176_combining_characters | ✅ | 0.8916 | 0.9873 | 1/1 | **0.9516** |
| 177 | 🟢 classic177_emoji_calendar | ✅ | 0.7797 | 0.9827 | 1/1 | **0.905** |
| 178 | 🟡 classic178_caucasus_ethiopic | ✅ | 0.3441 | 0.9799 | 1/1 | **0.7296** |
| 179 | 🟢 classic179_emoji_inventory | ✅ | 0.8371 | 0.9698 | 1/1 | **0.9228** |
| 180 | 🟡 classic180_polyglot_paragraph | ✅ | 0.7506 | 0.9877 | 1/1 | **0.8953** |
| 181 | 🔴 classic181_feedback_tracker_with_images | ✅ | 0.9301 | 0.416 | 1/2 | **0.6384** |
| 182 | 🟡 classic182_dense_long_text_columns | ✅ | 0.7197 | 0.9567 | 2/2 | **0.8706** |
| 183 | 🟢 classic183_mixed_content_grid | ✅ | 0.977 | 0.9506 | 1/1 | **0.971** |
| 184 | 🟢 classic184_wide_narrow_columns | ✅ | 0.9912 | 0.9404 | 1/1 | **0.9726** |
| 185 | 🟢 classic185_tall_rows_vertical_align | ✅ | 0.9054 | 0.9848 | 1/1 | **0.9561** |
| 186 | 🟢 classic186_multi_sheet_image_report | ✅ | 0.9408 | 0.9654 | 2/2 | **0.9625** |
| 187 | 🟢 classic187_bug_report_with_screenshots | ✅ | 0.9815 | 0.8976 | 1/1 | **0.9516** |
| 188 | 🟢 classic188_merged_header_with_images | ✅ | 1.0 | 0.9632 | 1/1 | **0.9853** |
| 189 | 🟢 classic189_alternating_image_text_rows | ✅ | 0.9435 | 0.9191 | 1/1 | **0.945** |
| 190 | 🟢 classic190_dashboard_kpi_images | ✅ | 1.0 | 0.9624 | 1/1 | **0.985** |
| 191 | 🟡 classic191_payroll_calculator | ✅ | 0.7669 | 0.8369 | 9/9 | **0.8415** |

**Average Overall Score: 0.8576**

## Labeled Side-by-Side Comparison

<table>
<tr><th>Case</th><th>Comparison</th></tr>
<tr>
  <td><b>classic01_basic_table_with_headers<br><small>format: xlsx | case: classic01_basic_table_with_headers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic01_basic_table_with_headers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic01_basic_table_with_headers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets<br><small>format: xlsx | case: classic02_multiple_worksheets | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic02_multiple_worksheets_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic02_multiple_worksheets page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets<br><small>format: xlsx | case: classic02_multiple_worksheets | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic02_multiple_worksheets_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic02_multiple_worksheets page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets<br><small>format: xlsx | case: classic02_multiple_worksheets | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic02_multiple_worksheets_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic02_multiple_worksheets page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic03_empty_workbook<br><small>format: xlsx | case: classic03_empty_workbook | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic03_empty_workbook_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic03_empty_workbook page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic04_single_cell<br><small>format: xlsx | case: classic04_single_cell | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic04_single_cell_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic04_single_cell page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic05_wide_table<br><small>format: xlsx | case: classic05_wide_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic05_wide_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic05_wide_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic05_wide_table<br><small>format: xlsx | case: classic05_wide_table | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic05_wide_table_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic05_wide_table page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic05_wide_table<br><small>format: xlsx | case: classic05_wide_table | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic05_wide_table_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic05_wide_table page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic06_tall_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic06_tall_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic06_tall_table_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic06_tall_table page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic06_tall_table_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic06_tall_table page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic06_tall_table_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic06_tall_table page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b><br>Page 5</td>
  <td><img src="side-by-side/classic06_tall_table_p5_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic06_tall_table page 5 comparison"></td>
</tr>
<tr>
  <td><b>classic07_numbers_only<br><small>format: xlsx | case: classic07_numbers_only | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic07_numbers_only_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic07_numbers_only page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic08_mixed_text_and_numbers<br><small>format: xlsx | case: classic08_mixed_text_and_numbers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic08_mixed_text_and_numbers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic08_mixed_text_and_numbers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic09_long_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic09_long_text_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic09_long_text_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic09_long_text_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 5</td>
  <td><img src="side-by-side/classic09_long_text_p5_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 5 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 6</td>
  <td><img src="side-by-side/classic09_long_text_p6_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 6 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 7</td>
  <td><img src="side-by-side/classic09_long_text_p7_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 7 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 8</td>
  <td><img src="side-by-side/classic09_long_text_p8_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 8 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 9</td>
  <td><img src="side-by-side/classic09_long_text_p9_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 9 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 10</td>
  <td><img src="side-by-side/classic09_long_text_p10_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 10 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 11</td>
  <td><img src="side-by-side/classic09_long_text_p11_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 11 comparison"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b><br>Page 12</td>
  <td><img src="side-by-side/classic09_long_text_p12_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic09_long_text page 12 comparison"></td>
</tr>
<tr>
  <td><b>classic10_special_xml_characters<br><small>format: xlsx | case: classic10_special_xml_characters | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic10_special_xml_characters_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic10_special_xml_characters page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic11_sparse_rows<br><small>format: xlsx | case: classic11_sparse_rows | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic11_sparse_rows_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic11_sparse_rows page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic11_sparse_rows<br><small>format: xlsx | case: classic11_sparse_rows | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic11_sparse_rows_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic11_sparse_rows page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic12_sparse_columns<br><small>format: xlsx | case: classic12_sparse_columns | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic12_sparse_columns_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic12_sparse_columns page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic13_date_strings<br><small>format: xlsx | case: classic13_date_strings | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic13_date_strings_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic13_date_strings page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic14_decimal_numbers<br><small>format: xlsx | case: classic14_decimal_numbers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic14_decimal_numbers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic14_decimal_numbers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic15_negative_numbers<br><small>format: xlsx | case: classic15_negative_numbers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic15_negative_numbers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic15_negative_numbers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic16_percentage_strings<br><small>format: xlsx | case: classic16_percentage_strings | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic16_percentage_strings_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic16_percentage_strings page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic17_currency_strings<br><small>format: xlsx | case: classic17_currency_strings | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic17_currency_strings_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic17_currency_strings page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic18_large_dataset_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic18_large_dataset_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic18_large_dataset_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic18_large_dataset_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 5</td>
  <td><img src="side-by-side/classic18_large_dataset_p5_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 5 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 6</td>
  <td><img src="side-by-side/classic18_large_dataset_p6_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 6 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 7</td>
  <td><img src="side-by-side/classic18_large_dataset_p7_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 7 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 8</td>
  <td><img src="side-by-side/classic18_large_dataset_p8_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 8 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 9</td>
  <td><img src="side-by-side/classic18_large_dataset_p9_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 9 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 10</td>
  <td><img src="side-by-side/classic18_large_dataset_p10_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 10 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 11</td>
  <td><img src="side-by-side/classic18_large_dataset_p11_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 11 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 12</td>
  <td><img src="side-by-side/classic18_large_dataset_p12_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 12 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 13</td>
  <td><img src="side-by-side/classic18_large_dataset_p13_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 13 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 14</td>
  <td><img src="side-by-side/classic18_large_dataset_p14_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 14 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 15</td>
  <td><img src="side-by-side/classic18_large_dataset_p15_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 15 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 16</td>
  <td><img src="side-by-side/classic18_large_dataset_p16_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 16 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 17</td>
  <td><img src="side-by-side/classic18_large_dataset_p17_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 17 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 18</td>
  <td><img src="side-by-side/classic18_large_dataset_p18_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 18 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 19</td>
  <td><img src="side-by-side/classic18_large_dataset_p19_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 19 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 20</td>
  <td><img src="side-by-side/classic18_large_dataset_p20_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 20 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 21</td>
  <td><img src="side-by-side/classic18_large_dataset_p21_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 21 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 22</td>
  <td><img src="side-by-side/classic18_large_dataset_p22_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 22 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 23</td>
  <td><img src="side-by-side/classic18_large_dataset_p23_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 23 comparison"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b><br>Page 24</td>
  <td><img src="side-by-side/classic18_large_dataset_p24_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic18_large_dataset page 24 comparison"></td>
</tr>
<tr>
  <td><b>classic19_single_column_list<br><small>format: xlsx | case: classic19_single_column_list | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic19_single_column_list_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic19_single_column_list page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic20_all_empty_cells<br><small>format: xlsx | case: classic20_all_empty_cells | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic20_all_empty_cells_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic20_all_empty_cells page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic21_header_only<br><small>format: xlsx | case: classic21_header_only | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic21_header_only_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic21_header_only page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic22_long_sheet_name<br><small>format: xlsx | case: classic22_long_sheet_name | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic22_long_sheet_name_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic22_long_sheet_name page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic23_unicode_text<br><small>format: xlsx | case: classic23_unicode_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic23_unicode_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic23_unicode_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic24_red_text<br><small>format: xlsx | case: classic24_red_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic24_red_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic24_red_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic25_multiple_colors<br><small>format: xlsx | case: classic25_multiple_colors | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic25_multiple_colors_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic25_multiple_colors page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic26_inline_strings<br><small>format: xlsx | case: classic26_inline_strings | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic26_inline_strings_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic26_inline_strings page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic27_single_row<br><small>format: xlsx | case: classic27_single_row | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic27_single_row_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic27_single_row page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic28_duplicate_values<br><small>format: xlsx | case: classic28_duplicate_values | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic28_duplicate_values_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic28_duplicate_values page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic29_formula_results<br><small>format: xlsx | case: classic29_formula_results | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic29_formula_results_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic29_formula_results page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic30_mixed_empty_and_filled_sheets<br><small>format: xlsx | case: classic30_mixed_empty_and_filled_sheets | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic30_mixed_empty_and_filled_sheets_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic30_mixed_empty_and_filled_sheets page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic30_mixed_empty_and_filled_sheets<br><small>format: xlsx | case: classic30_mixed_empty_and_filled_sheets | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic30_mixed_empty_and_filled_sheets_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic30_mixed_empty_and_filled_sheets page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic31_bold_header_row<br><small>format: xlsx | case: classic31_bold_header_row | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic31_bold_header_row_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic31_bold_header_row page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic32_right_aligned_numbers<br><small>format: xlsx | case: classic32_right_aligned_numbers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic32_right_aligned_numbers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic32_right_aligned_numbers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic33_centered_text<br><small>format: xlsx | case: classic33_centered_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic33_centered_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic33_centered_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic34_explicit_column_widths<br><small>format: xlsx | case: classic34_explicit_column_widths | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic34_explicit_column_widths_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic34_explicit_column_widths page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic35_explicit_row_heights<br><small>format: xlsx | case: classic35_explicit_row_heights | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic35_explicit_row_heights_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic35_explicit_row_heights page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic36_merged_cells<br><small>format: xlsx | case: classic36_merged_cells | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic36_merged_cells_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic36_merged_cells page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic37_freeze_panes<br><small>format: xlsx | case: classic37_freeze_panes | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic37_freeze_panes_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic37_freeze_panes page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic38_hyperlink_cell<br><small>format: xlsx | case: classic38_hyperlink_cell | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic38_hyperlink_cell_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic38_hyperlink_cell page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic39_financial_table<br><small>format: xlsx | case: classic39_financial_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic39_financial_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic39_financial_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic40_scientific_notation<br><small>format: xlsx | case: classic40_scientific_notation | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic40_scientific_notation_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic40_scientific_notation page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic41_integer_vs_float<br><small>format: xlsx | case: classic41_integer_vs_float | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic41_integer_vs_float_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic41_integer_vs_float page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic42_boolean_values<br><small>format: xlsx | case: classic42_boolean_values | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic42_boolean_values_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic42_boolean_values page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic43_inventory_report<br><small>format: xlsx | case: classic43_inventory_report | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic43_inventory_report_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic43_inventory_report page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic44_employee_roster<br><small>format: xlsx | case: classic44_employee_roster | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic44_employee_roster_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic44_employee_roster page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic45_sales_by_region<br><small>format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic45_sales_by_region_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic45_sales_by_region page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic45_sales_by_region<br><small>format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic45_sales_by_region_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic45_sales_by_region page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic45_sales_by_region<br><small>format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic45_sales_by_region_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic45_sales_by_region page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic45_sales_by_region<br><small>format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic45_sales_by_region_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic45_sales_by_region page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic46_grade_book<br><small>format: xlsx | case: classic46_grade_book | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic46_grade_book_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic46_grade_book page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic47_time_series<br><small>format: xlsx | case: classic47_time_series | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic47_time_series_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic47_time_series page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic48_survey_results<br><small>format: xlsx | case: classic48_survey_results | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic48_survey_results_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic48_survey_results page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic49_contact_list<br><small>format: xlsx | case: classic49_contact_list | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic49_contact_list_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic49_contact_list page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals<br><small>format: xlsx | case: classic50_budget_vs_actuals | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic50_budget_vs_actuals_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic50_budget_vs_actuals page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals<br><small>format: xlsx | case: classic50_budget_vs_actuals | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic50_budget_vs_actuals_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic50_budget_vs_actuals page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals<br><small>format: xlsx | case: classic50_budget_vs_actuals | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic50_budget_vs_actuals_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic50_budget_vs_actuals page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic51_product_catalog<br><small>format: xlsx | case: classic51_product_catalog | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic51_product_catalog_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic51_product_catalog page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic52_pivot_summary<br><small>format: xlsx | case: classic52_pivot_summary | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic52_pivot_summary_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic52_pivot_summary page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic53_invoice<br><small>format: xlsx | case: classic53_invoice | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic53_invoice_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic53_invoice page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic54_multi_level_header<br><small>format: xlsx | case: classic54_multi_level_header | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic54_multi_level_header_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic54_multi_level_header page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic55_error_values<br><small>format: xlsx | case: classic55_error_values | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic55_error_values_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic55_error_values page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic56_alternating_row_colors<br><small>format: xlsx | case: classic56_alternating_row_colors | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic56_alternating_row_colors_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic56_alternating_row_colors page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic57_cjk_only<br><small>format: xlsx | case: classic57_cjk_only | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic57_cjk_only_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic57_cjk_only page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic58_mixed_numeric_formats<br><small>format: xlsx | case: classic58_mixed_numeric_formats | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic58_mixed_numeric_formats_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic58_mixed_numeric_formats page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary<br><small>format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic59_multi_sheet_summary_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic59_multi_sheet_summary page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary<br><small>format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic59_multi_sheet_summary_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic59_multi_sheet_summary page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary<br><small>format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic59_multi_sheet_summary_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic59_multi_sheet_summary page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary<br><small>format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic59_multi_sheet_summary_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic59_multi_sheet_summary page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic60_large_wide_table<br><small>format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic60_large_wide_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic60_large_wide_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic60_large_wide_table<br><small>format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic60_large_wide_table_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic60_large_wide_table page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic60_large_wide_table<br><small>format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic60_large_wide_table_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic60_large_wide_table page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic60_large_wide_table<br><small>format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic60_large_wide_table_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic60_large_wide_table page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic61_product_card_with_image<br><small>format: xlsx | case: classic61_product_card_with_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic61_product_card_with_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic61_product_card_with_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic62_company_logo_header<br><small>format: xlsx | case: classic62_company_logo_header | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic62_company_logo_header_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic62_company_logo_header page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic63_two_products_side_by_side<br><small>format: xlsx | case: classic63_two_products_side_by_side | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic63_two_products_side_by_side_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic63_two_products_side_by_side page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic64_employee_directory_with_photo<br><small>format: xlsx | case: classic64_employee_directory_with_photo | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic64_employee_directory_with_photo_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic64_employee_directory_with_photo page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic65_inventory_with_product_photos<br><small>format: xlsx | case: classic65_inventory_with_product_photos | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic65_inventory_with_product_photos_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic65_inventory_with_product_photos page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic66_invoice_with_logo<br><small>format: xlsx | case: classic66_invoice_with_logo | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic66_invoice_with_logo_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic66_invoice_with_logo page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic67_real_estate_listing<br><small>format: xlsx | case: classic67_real_estate_listing | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic67_real_estate_listing_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic67_real_estate_listing page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic68_restaurant_menu<br><small>format: xlsx | case: classic68_restaurant_menu | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic68_restaurant_menu_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic68_restaurant_menu page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic69_image_only_sheet<br><small>format: xlsx | case: classic69_image_only_sheet | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic69_image_only_sheet_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic69_image_only_sheet page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic70_product_catalog_with_images<br><small>format: xlsx | case: classic70_product_catalog_with_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic70_product_catalog_with_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic70_product_catalog_with_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images<br><small>format: xlsx | case: classic71_multi_sheet_with_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic71_multi_sheet_with_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic71_multi_sheet_with_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images<br><small>format: xlsx | case: classic71_multi_sheet_with_images | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic71_multi_sheet_with_images_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic71_multi_sheet_with_images page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images<br><small>format: xlsx | case: classic71_multi_sheet_with_images | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic71_multi_sheet_with_images_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic71_multi_sheet_with_images page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic72_bar_chart_image_with_data<br><small>format: xlsx | case: classic72_bar_chart_image_with_data | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic72_bar_chart_image_with_data_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic72_bar_chart_image_with_data page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic73_event_flyer_with_banner<br><small>format: xlsx | case: classic73_event_flyer_with_banner | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic73_event_flyer_with_banner_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic73_event_flyer_with_banner page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic74_dashboard_with_kpi_image<br><small>format: xlsx | case: classic74_dashboard_with_kpi_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic74_dashboard_with_kpi_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic74_dashboard_with_kpi_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic75_certificate_with_seal<br><small>format: xlsx | case: classic75_certificate_with_seal | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic75_certificate_with_seal_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic75_certificate_with_seal page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic76_product_image_grid<br><small>format: xlsx | case: classic76_product_image_grid | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic76_product_image_grid_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic76_product_image_grid page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic77_news_article_with_hero_image<br><small>format: xlsx | case: classic77_news_article_with_hero_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic77_news_article_with_hero_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic77_news_article_with_hero_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic78_small_icon_per_row<br><small>format: xlsx | case: classic78_small_icon_per_row | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic78_small_icon_per_row_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic78_small_icon_per_row page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic79_wide_panoramic_banner<br><small>format: xlsx | case: classic79_wide_panoramic_banner | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic79_wide_panoramic_banner_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic79_wide_panoramic_banner page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic80_portrait_tall_image<br><small>format: xlsx | case: classic80_portrait_tall_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic80_portrait_tall_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic80_portrait_tall_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic81_step_by_step_with_images<br><small>format: xlsx | case: classic81_step_by_step_with_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic81_step_by_step_with_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic81_step_by_step_with_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic82_before_after_images<br><small>format: xlsx | case: classic82_before_after_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic82_before_after_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic82_before_after_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic83_color_swatch_palette<br><small>format: xlsx | case: classic83_color_swatch_palette | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic83_color_swatch_palette_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic83_color_swatch_palette page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic84_travel_destination_cards<br><small>format: xlsx | case: classic84_travel_destination_cards | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic84_travel_destination_cards_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic84_travel_destination_cards page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic85_lab_results_with_image<br><small>format: xlsx | case: classic85_lab_results_with_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic85_lab_results_with_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic85_lab_results_with_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic86_software_screenshot_features<br><small>format: xlsx | case: classic86_software_screenshot_features | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic86_software_screenshot_features_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic86_software_screenshot_features page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic87_sports_results_with_logos<br><small>format: xlsx | case: classic87_sports_results_with_logos | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic87_sports_results_with_logos_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic87_sports_results_with_logos page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic88_image_after_data<br><small>format: xlsx | case: classic88_image_after_data | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic88_image_after_data_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic88_image_after_data page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic89_nutrition_label_with_image<br><small>format: xlsx | case: classic89_nutrition_label_with_image | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic89_nutrition_label_with_image_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic89_nutrition_label_with_image page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic90_project_status_with_milestones<br><small>format: xlsx | case: classic90_project_status_with_milestones | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic90_project_status_with_milestones_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic90_project_status_with_milestones page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic91_simple_bar_chart<br><small>format: xlsx | case: classic91_simple_bar_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic91_simple_bar_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic91_simple_bar_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic91_simple_bar_chart<br><small>format: xlsx | case: classic91_simple_bar_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic91_simple_bar_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic91_simple_bar_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic92_horizontal_bar_chart<br><small>format: xlsx | case: classic92_horizontal_bar_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic92_horizontal_bar_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic92_horizontal_bar_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic92_horizontal_bar_chart<br><small>format: xlsx | case: classic92_horizontal_bar_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic92_horizontal_bar_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic92_horizontal_bar_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic93_line_chart<br><small>format: xlsx | case: classic93_line_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic93_line_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic93_line_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic93_line_chart<br><small>format: xlsx | case: classic93_line_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic93_line_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic93_line_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic94_pie_chart<br><small>format: xlsx | case: classic94_pie_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic94_pie_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic94_pie_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic94_pie_chart<br><small>format: xlsx | case: classic94_pie_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic94_pie_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic94_pie_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic95_area_chart<br><small>format: xlsx | case: classic95_area_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic95_area_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic95_area_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic95_area_chart<br><small>format: xlsx | case: classic95_area_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic95_area_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic95_area_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic96_scatter_chart<br><small>format: xlsx | case: classic96_scatter_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic96_scatter_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic96_scatter_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic96_scatter_chart<br><small>format: xlsx | case: classic96_scatter_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic96_scatter_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic96_scatter_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic97_doughnut_chart<br><small>format: xlsx | case: classic97_doughnut_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic97_doughnut_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic97_doughnut_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic97_doughnut_chart<br><small>format: xlsx | case: classic97_doughnut_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic97_doughnut_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic97_doughnut_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic98_radar_chart<br><small>format: xlsx | case: classic98_radar_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic98_radar_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic98_radar_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic98_radar_chart<br><small>format: xlsx | case: classic98_radar_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic98_radar_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic98_radar_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic99_bubble_chart<br><small>format: xlsx | case: classic99_bubble_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic99_bubble_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic99_bubble_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic99_bubble_chart<br><small>format: xlsx | case: classic99_bubble_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic99_bubble_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic99_bubble_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic100_stacked_bar_chart<br><small>format: xlsx | case: classic100_stacked_bar_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic100_stacked_bar_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic100_stacked_bar_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic101_percent_stacked_bar<br><small>format: xlsx | case: classic101_percent_stacked_bar | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic101_percent_stacked_bar_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic101_percent_stacked_bar page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic102_line_chart_with_markers<br><small>format: xlsx | case: classic102_line_chart_with_markers | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic102_line_chart_with_markers_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic102_line_chart_with_markers page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic102_line_chart_with_markers<br><small>format: xlsx | case: classic102_line_chart_with_markers | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic102_line_chart_with_markers_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic102_line_chart_with_markers page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic103_pie_chart_with_labels<br><small>format: xlsx | case: classic103_pie_chart_with_labels | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic103_pie_chart_with_labels_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic103_pie_chart_with_labels page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic103_pie_chart_with_labels<br><small>format: xlsx | case: classic103_pie_chart_with_labels | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic103_pie_chart_with_labels_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic103_pie_chart_with_labels page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic104_combo_bar_line_chart<br><small>format: xlsx | case: classic104_combo_bar_line_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic104_combo_bar_line_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic104_combo_bar_line_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic104_combo_bar_line_chart<br><small>format: xlsx | case: classic104_combo_bar_line_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic104_combo_bar_line_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic104_combo_bar_line_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic105_3d_bar_chart<br><small>format: xlsx | case: classic105_3d_bar_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic105_3d_bar_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic105_3d_bar_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic105_3d_bar_chart<br><small>format: xlsx | case: classic105_3d_bar_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic105_3d_bar_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic105_3d_bar_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic106_3d_pie_chart<br><small>format: xlsx | case: classic106_3d_pie_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic106_3d_pie_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic106_3d_pie_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic106_3d_pie_chart<br><small>format: xlsx | case: classic106_3d_pie_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic106_3d_pie_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic106_3d_pie_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic107_multi_series_line<br><small>format: xlsx | case: classic107_multi_series_line | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic107_multi_series_line_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic107_multi_series_line page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic107_multi_series_line<br><small>format: xlsx | case: classic107_multi_series_line | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic107_multi_series_line_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic107_multi_series_line page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic108_stacked_area_chart<br><small>format: xlsx | case: classic108_stacked_area_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic108_stacked_area_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic108_stacked_area_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic109_scatter_with_trendline<br><small>format: xlsx | case: classic109_scatter_with_trendline | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic109_scatter_with_trendline_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic109_scatter_with_trendline page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic109_scatter_with_trendline<br><small>format: xlsx | case: classic109_scatter_with_trendline | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic109_scatter_with_trendline_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic109_scatter_with_trendline page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic110_chart_with_legend<br><small>format: xlsx | case: classic110_chart_with_legend | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic110_chart_with_legend_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic110_chart_with_legend page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic110_chart_with_legend<br><small>format: xlsx | case: classic110_chart_with_legend | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic110_chart_with_legend_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic110_chart_with_legend page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic111_chart_with_axis_labels<br><small>format: xlsx | case: classic111_chart_with_axis_labels | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic111_chart_with_axis_labels_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic111_chart_with_axis_labels page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic111_chart_with_axis_labels<br><small>format: xlsx | case: classic111_chart_with_axis_labels | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic111_chart_with_axis_labels_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic111_chart_with_axis_labels page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic112_multiple_charts<br><small>format: xlsx | case: classic112_multiple_charts | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic112_multiple_charts_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic112_multiple_charts page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic112_multiple_charts<br><small>format: xlsx | case: classic112_multiple_charts | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic112_multiple_charts_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic112_multiple_charts page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic113_chart_sheet<br><small>format: xlsx | case: classic113_chart_sheet | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic113_chart_sheet_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic113_chart_sheet page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic113_chart_sheet<br><small>format: xlsx | case: classic113_chart_sheet | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic113_chart_sheet_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic113_chart_sheet page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset<br><small>format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic114_chart_large_dataset_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic114_chart_large_dataset page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset<br><small>format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic114_chart_large_dataset_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic114_chart_large_dataset page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset<br><small>format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic114_chart_large_dataset_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic114_chart_large_dataset page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset<br><small>format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic114_chart_large_dataset_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic114_chart_large_dataset page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic115_chart_negative_values<br><small>format: xlsx | case: classic115_chart_negative_values | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic115_chart_negative_values_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic115_chart_negative_values page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic115_chart_negative_values<br><small>format: xlsx | case: classic115_chart_negative_values | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic115_chart_negative_values_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic115_chart_negative_values page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic116_percent_stacked_area<br><small>format: xlsx | case: classic116_percent_stacked_area | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic116_percent_stacked_area_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic116_percent_stacked_area page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic117_stock_ohlc_chart<br><small>format: xlsx | case: classic117_stock_ohlc_chart | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic117_stock_ohlc_chart_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic117_stock_ohlc_chart page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic117_stock_ohlc_chart<br><small>format: xlsx | case: classic117_stock_ohlc_chart | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic117_stock_ohlc_chart_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic117_stock_ohlc_chart page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic118_bar_chart_custom_colors<br><small>format: xlsx | case: classic118_bar_chart_custom_colors | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic118_bar_chart_custom_colors_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic118_bar_chart_custom_colors page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic118_bar_chart_custom_colors<br><small>format: xlsx | case: classic118_bar_chart_custom_colors | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic118_bar_chart_custom_colors_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic118_bar_chart_custom_colors page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic119_dashboard_multi_charts<br><small>format: xlsx | case: classic119_dashboard_multi_charts | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic119_dashboard_multi_charts_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic119_dashboard_multi_charts page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic119_dashboard_multi_charts<br><small>format: xlsx | case: classic119_dashboard_multi_charts | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic119_dashboard_multi_charts_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic119_dashboard_multi_charts page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic120_chart_with_date_axis<br><small>format: xlsx | case: classic120_chart_with_date_axis | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic120_chart_with_date_axis_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic120_chart_with_date_axis page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic120_chart_with_date_axis<br><small>format: xlsx | case: classic120_chart_with_date_axis | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic120_chart_with_date_axis_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic120_chart_with_date_axis page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic121_thin_borders<br><small>format: xlsx | case: classic121_thin_borders | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic121_thin_borders_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic121_thin_borders page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic122_thick_outer_thin_inner<br><small>format: xlsx | case: classic122_thick_outer_thin_inner | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic122_thick_outer_thin_inner_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic122_thick_outer_thin_inner page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic123_dashed_borders<br><small>format: xlsx | case: classic123_dashed_borders | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic123_dashed_borders_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic123_dashed_borders page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic124_colored_borders<br><small>format: xlsx | case: classic124_colored_borders | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic124_colored_borders_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic124_colored_borders page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic125_solid_fills<br><small>format: xlsx | case: classic125_solid_fills | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic125_solid_fills_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic125_solid_fills page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic126_dark_header<br><small>format: xlsx | case: classic126_dark_header | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic126_dark_header_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic126_dark_header page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic127_font_styles<br><small>format: xlsx | case: classic127_font_styles | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic127_font_styles_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic127_font_styles page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic128_font_sizes<br><small>format: xlsx | case: classic128_font_sizes | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic128_font_sizes_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic128_font_sizes page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic129_alignment_combos<br><small>format: xlsx | case: classic129_alignment_combos | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic129_alignment_combos_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic129_alignment_combos page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic130_wrap_and_indent<br><small>format: xlsx | case: classic130_wrap_and_indent | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic130_wrap_and_indent_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic130_wrap_and_indent page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic131_number_formats<br><small>format: xlsx | case: classic131_number_formats | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic131_number_formats_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic131_number_formats page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic132_striped_table<br><small>format: xlsx | case: classic132_striped_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic132_striped_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic132_striped_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic133_gradient_rows<br><small>format: xlsx | case: classic133_gradient_rows | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic133_gradient_rows_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic133_gradient_rows page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic134_heatmap<br><small>format: xlsx | case: classic134_heatmap | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic134_heatmap_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic134_heatmap page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic135_bottom_border_only<br><small>format: xlsx | case: classic135_bottom_border_only | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic135_bottom_border_only_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic135_bottom_border_only page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic136_financial_report_styled<br><small>format: xlsx | case: classic136_financial_report_styled | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic136_financial_report_styled_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic136_financial_report_styled page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic137_checkerboard<br><small>format: xlsx | case: classic137_checkerboard | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic137_checkerboard_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic137_checkerboard page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic138_color_grid<br><small>format: xlsx | case: classic138_color_grid | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic138_color_grid_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic138_color_grid page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic139_pattern_fills<br><small>format: xlsx | case: classic139_pattern_fills | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic139_pattern_fills_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic139_pattern_fills page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic140_rotated_text<br><small>format: xlsx | case: classic140_rotated_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic140_rotated_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic140_rotated_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic141_mixed_edge_borders<br><small>format: xlsx | case: classic141_mixed_edge_borders | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic141_mixed_edge_borders_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic141_mixed_edge_borders page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic142_styled_invoice<br><small>format: xlsx | case: classic142_styled_invoice | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic142_styled_invoice_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic142_styled_invoice page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic143_colored_tabs<br><small>format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic143_colored_tabs_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic143_colored_tabs page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic143_colored_tabs<br><small>format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic143_colored_tabs_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic143_colored_tabs page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic143_colored_tabs<br><small>format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic143_colored_tabs_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic143_colored_tabs page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic143_colored_tabs<br><small>format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic143_colored_tabs_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic143_colored_tabs page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic144_note_style_cells<br><small>format: xlsx | case: classic144_note_style_cells | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic144_note_style_cells_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic144_note_style_cells page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic145_status_badges<br><small>format: xlsx | case: classic145_status_badges | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic145_status_badges_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic145_status_badges page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic146_double_border_table<br><small>format: xlsx | case: classic146_double_border_table | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic146_double_border_table_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic146_double_border_table page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled<br><small>format: xlsx | case: classic147_multi_sheet_styled | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic147_multi_sheet_styled_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic147_multi_sheet_styled page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled<br><small>format: xlsx | case: classic147_multi_sheet_styled | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic147_multi_sheet_styled_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic147_multi_sheet_styled page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled<br><small>format: xlsx | case: classic147_multi_sheet_styled | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic147_multi_sheet_styled_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic147_multi_sheet_styled page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic148_frozen_styled_grid<br><small>format: xlsx | case: classic148_frozen_styled_grid | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic148_frozen_styled_grid_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic148_frozen_styled_grid page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic149_merged_styled_sections<br><small>format: xlsx | case: classic149_merged_styled_sections | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic149_merged_styled_sections_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic149_merged_styled_sections page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic150_kitchen_sink_styles<br><small>format: xlsx | case: classic150_kitchen_sink_styles | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic150_kitchen_sink_styles_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic150_kitchen_sink_styles page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic151_multilingual_greetings<br><small>format: xlsx | case: classic151_multilingual_greetings | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic151_multilingual_greetings_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic151_multilingual_greetings page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic152_emoji_sampler<br><small>format: xlsx | case: classic152_emoji_sampler | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic152_emoji_sampler_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic152_emoji_sampler page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic153_currency_symbols<br><small>format: xlsx | case: classic153_currency_symbols | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic153_currency_symbols_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic153_currency_symbols page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic154_math_symbols<br><small>format: xlsx | case: classic154_math_symbols | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic154_math_symbols_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic154_math_symbols page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic155_diacritical_marks<br><small>format: xlsx | case: classic155_diacritical_marks | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic155_diacritical_marks_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic155_diacritical_marks page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic156_rtl_bidi_text<br><small>format: xlsx | case: classic156_rtl_bidi_text | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic156_rtl_bidi_text_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic156_rtl_bidi_text page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic157_cjk_extended<br><small>format: xlsx | case: classic157_cjk_extended | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic157_cjk_extended_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic157_cjk_extended page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic158_emoji_skin_tones<br><small>format: xlsx | case: classic158_emoji_skin_tones | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic158_emoji_skin_tones_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic158_emoji_skin_tones page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic159_zwj_emoji<br><small>format: xlsx | case: classic159_zwj_emoji | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic159_zwj_emoji_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic159_zwj_emoji page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic160_punctuation_marks<br><small>format: xlsx | case: classic160_punctuation_marks | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic160_punctuation_marks_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic160_punctuation_marks page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic161_box_drawing<br><small>format: xlsx | case: classic161_box_drawing | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic161_box_drawing_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic161_box_drawing page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic162_cjk_emoji_styled<br><small>format: xlsx | case: classic162_cjk_emoji_styled | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic162_cjk_emoji_styled_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic162_cjk_emoji_styled page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic163_cyrillic_alphabets<br><small>format: xlsx | case: classic163_cyrillic_alphabets | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic163_cyrillic_alphabets_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic163_cyrillic_alphabets page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic164_indic_scripts<br><small>format: xlsx | case: classic164_indic_scripts | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic164_indic_scripts_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic164_indic_scripts page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic165_southeast_asian<br><small>format: xlsx | case: classic165_southeast_asian | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic165_southeast_asian_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic165_southeast_asian page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic166_emoji_progress<br><small>format: xlsx | case: classic166_emoji_progress | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic166_emoji_progress_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic166_emoji_progress page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic167_musical_symbols<br><small>format: xlsx | case: classic167_musical_symbols | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic167_musical_symbols_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic167_musical_symbols page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic168_mixed_ltr_rtl_styled<br><small>format: xlsx | case: classic168_mixed_ltr_rtl_styled | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic168_mixed_ltr_rtl_styled_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic168_mixed_ltr_rtl_styled page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic169_korean_invoice<br><small>format: xlsx | case: classic169_korean_invoice | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic169_korean_invoice_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic169_korean_invoice page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic170_emoji_dashboard<br><small>format: xlsx | case: classic170_emoji_dashboard | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic170_emoji_dashboard_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic170_emoji_dashboard page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic171_ipa_phonetic<br><small>format: xlsx | case: classic171_ipa_phonetic | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic171_ipa_phonetic_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic171_ipa_phonetic page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic172_emoji_timeline<br><small>format: xlsx | case: classic172_emoji_timeline | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic172_emoji_timeline_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic172_emoji_timeline page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic173_african_languages<br><small>format: xlsx | case: classic173_african_languages | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic173_african_languages_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic173_african_languages page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic174_technical_symbols<br><small>format: xlsx | case: classic174_technical_symbols | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic174_technical_symbols_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic174_technical_symbols page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic175_multiscript_catalog<br><small>format: xlsx | case: classic175_multiscript_catalog | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic175_multiscript_catalog_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic175_multiscript_catalog page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic176_combining_characters<br><small>format: xlsx | case: classic176_combining_characters | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic176_combining_characters_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic176_combining_characters page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic177_emoji_calendar<br><small>format: xlsx | case: classic177_emoji_calendar | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic177_emoji_calendar_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic177_emoji_calendar page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic178_caucasus_ethiopic<br><small>format: xlsx | case: classic178_caucasus_ethiopic | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic178_caucasus_ethiopic_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic178_caucasus_ethiopic page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic179_emoji_inventory<br><small>format: xlsx | case: classic179_emoji_inventory | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic179_emoji_inventory_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic179_emoji_inventory page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic180_polyglot_paragraph<br><small>format: xlsx | case: classic180_polyglot_paragraph | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic180_polyglot_paragraph_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic180_polyglot_paragraph page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic181_feedback_tracker_with_images<br><small>format: xlsx | case: classic181_feedback_tracker_with_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic181_feedback_tracker_with_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic181_feedback_tracker_with_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic181_feedback_tracker_with_images<br><small>format: xlsx | case: classic181_feedback_tracker_with_images | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic181_feedback_tracker_with_images_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic181_feedback_tracker_with_images page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic182_dense_long_text_columns<br><small>format: xlsx | case: classic182_dense_long_text_columns | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic182_dense_long_text_columns_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic182_dense_long_text_columns page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic182_dense_long_text_columns<br><small>format: xlsx | case: classic182_dense_long_text_columns | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic182_dense_long_text_columns_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic182_dense_long_text_columns page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic183_mixed_content_grid<br><small>format: xlsx | case: classic183_mixed_content_grid | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic183_mixed_content_grid_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic183_mixed_content_grid page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic184_wide_narrow_columns<br><small>format: xlsx | case: classic184_wide_narrow_columns | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic184_wide_narrow_columns_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic184_wide_narrow_columns page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic185_tall_rows_vertical_align<br><small>format: xlsx | case: classic185_tall_rows_vertical_align | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic185_tall_rows_vertical_align_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic185_tall_rows_vertical_align page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic186_multi_sheet_image_report<br><small>format: xlsx | case: classic186_multi_sheet_image_report | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic186_multi_sheet_image_report_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic186_multi_sheet_image_report page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic186_multi_sheet_image_report<br><small>format: xlsx | case: classic186_multi_sheet_image_report | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic186_multi_sheet_image_report_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic186_multi_sheet_image_report page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic187_bug_report_with_screenshots<br><small>format: xlsx | case: classic187_bug_report_with_screenshots | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic187_bug_report_with_screenshots_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic187_bug_report_with_screenshots page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic188_merged_header_with_images<br><small>format: xlsx | case: classic188_merged_header_with_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic188_merged_header_with_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic188_merged_header_with_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic189_alternating_image_text_rows<br><small>format: xlsx | case: classic189_alternating_image_text_rows | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic189_alternating_image_text_rows_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic189_alternating_image_text_rows page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic190_dashboard_kpi_images<br><small>format: xlsx | case: classic190_dashboard_kpi_images | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic190_dashboard_kpi_images_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic190_dashboard_kpi_images page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 1</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p1_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 1 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 2</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p2_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 2 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 3</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p3_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 3 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 4</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p4_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 4 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 5</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p5_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 5 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 6</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p6_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 6 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 7</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p7_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 7 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 8</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p8_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 8 comparison"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b><br>Page 9</td>
  <td><img src="side-by-side/classic191_payroll_calculator_p9_java_minipdf_vs_microsoft_365_excel_reference_vs_libreoffice.png" width="760" alt="classic191_payroll_calculator page 9 comparison"></td>
</tr>
</table>

## Difference Heatmaps

Blue areas are below the configured difference threshold; red areas have stronger pixel differences. The reference rendering is retained as faint context.

<table>
<tr><th>Case</th><th>Heatmap</th><th>Metrics</th></tr>
<tr>
  <td><b>classic01_basic_table_with_headers</b><br>Page 1</td>
  <td><img src="images/classic01_basic_table_with_headers_p1_heatmap.png" width="760" alt="classic01_basic_table_with_headers page 1 difference heatmap"></td>
  <td>changed: 9389 px (0.46%)<br>bbox: [113, 148, 416, 299]<br>mean abs RGB: 0.7142<br>RMSE RGB: 11.8924<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets</b><br>Page 1</td>
  <td><img src="images/classic02_multiple_worksheets_p1_heatmap.png" width="760" alt="classic02_multiple_worksheets page 1 difference heatmap"></td>
  <td>changed: 5819 px (0.28%)<br>bbox: [114, 148, 318, 300]<br>mean abs RGB: 0.448<br>RMSE RGB: 9.4631<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets</b><br>Page 2</td>
  <td><img src="images/classic02_multiple_worksheets_p2_heatmap.png" width="760" alt="classic02_multiple_worksheets page 2 difference heatmap"></td>
  <td>changed: 6385 px (0.31%)<br>bbox: [114, 148, 318, 268]<br>mean abs RGB: 0.4891<br>RMSE RGB: 9.8742<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets</b><br>Page 3</td>
  <td><img src="images/classic02_multiple_worksheets_p3_heatmap.png" width="760" alt="classic02_multiple_worksheets page 3 difference heatmap"></td>
  <td>changed: 6470 px (0.32%)<br>bbox: [113, 147, 318, 268]<br>mean abs RGB: 0.4911<br>RMSE RGB: 9.8838<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic03_empty_workbook</b><br>Page 1</td>
  <td><img src="images/classic03_empty_workbook_p1_heatmap.png" width="760" alt="classic03_empty_workbook page 1 difference heatmap"></td>
  <td>changed: 0 px (0.00%)<br>bbox: None<br>mean abs RGB: 0.0<br>RMSE RGB: 0.0<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic04_single_cell</b><br>Page 1</td>
  <td><img src="images/classic04_single_cell_p1_heatmap.png" width="760" alt="classic04_single_cell page 1 difference heatmap"></td>
  <td>changed: 643 px (0.03%)<br>bbox: [115, 147, 165, 174]<br>mean abs RGB: 0.0509<br>RMSE RGB: 3.214<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic05_wide_table</b><br>Page 1</td>
  <td><img src="images/classic05_wide_table_p1_heatmap.png" width="760" alt="classic05_wide_table page 1 difference heatmap"></td>
  <td>changed: 18769 px (0.92%)<br>bbox: [113, 148, 988, 330]<br>mean abs RGB: 1.429<br>RMSE RGB: 16.8848<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic05_wide_table</b><br>Page 2</td>
  <td><img src="images/classic05_wide_table_p2_heatmap.png" width="760" alt="classic05_wide_table page 2 difference heatmap"></td>
  <td>changed: 19906 px (0.97%)<br>bbox: [115, 148, 989, 332]<br>mean abs RGB: 1.533<br>RMSE RGB: 17.5044<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic05_wide_table</b><br>Page 3</td>
  <td><img src="images/classic05_wide_table_p3_heatmap.png" width="760" alt="classic05_wide_table page 3 difference heatmap"></td>
  <td>changed: 11460 px (0.56%)<br>bbox: [114, 148, 871, 330]<br>mean abs RGB: 0.888<br>RMSE RGB: 13.2995<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic06_tall_table</b><br>Page 1</td>
  <td><img src="images/classic06_tall_table_p1_heatmap.png" width="760" alt="classic06_tall_table page 1 difference heatmap"></td>
  <td>changed: 192807 px (9.42%)<br>bbox: [115, 147, 712, 1505]<br>mean abs RGB: 14.7158<br>RMSE RGB: 53.9781<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic06_tall_table</b><br>Page 2</td>
  <td><img src="images/classic06_tall_table_p2_heatmap.png" width="760" alt="classic06_tall_table page 2 difference heatmap"></td>
  <td>changed: 200088 px (9.77%)<br>bbox: [115, 147, 712, 1505]<br>mean abs RGB: 15.2505<br>RMSE RGB: 54.929<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic06_tall_table</b><br>Page 3</td>
  <td><img src="images/classic06_tall_table_p3_heatmap.png" width="760" alt="classic06_tall_table page 3 difference heatmap"></td>
  <td>changed: 211134 px (10.31%)<br>bbox: [115, 147, 724, 1505]<br>mean abs RGB: 16.1424<br>RMSE RGB: 56.5473<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic06_tall_table</b><br>Page 4</td>
  <td><img src="images/classic06_tall_table_p4_heatmap.png" width="760" alt="classic06_tall_table page 4 difference heatmap"></td>
  <td>changed: 213532 px (10.43%)<br>bbox: [115, 147, 724, 1505]<br>mean abs RGB: 16.3224<br>RMSE RGB: 56.8365<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic06_tall_table</b><br>Page 5</td>
  <td><img src="images/classic06_tall_table_p5_heatmap.png" width="760" alt="classic06_tall_table page 5 difference heatmap"></td>
  <td>changed: 72459 px (3.54%)<br>bbox: [115, 147, 724, 1049]<br>mean abs RGB: 5.5561<br>RMSE RGB: 33.1409<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic07_numbers_only</b><br>Page 1</td>
  <td><img src="images/classic07_numbers_only_p1_heatmap.png" width="760" alt="classic07_numbers_only page 1 difference heatmap"></td>
  <td>changed: 3154 px (0.15%)<br>bbox: [113, 148, 423, 268]<br>mean abs RGB: 0.2438<br>RMSE RGB: 6.9954<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic08_mixed_text_and_numbers</b><br>Page 1</td>
  <td><img src="images/classic08_mixed_text_and_numbers_p1_heatmap.png" width="760" alt="classic08_mixed_text_and_numbers page 1 difference heatmap"></td>
  <td>changed: 7664 px (0.37%)<br>bbox: [113, 148, 318, 330]<br>mean abs RGB: 0.5827<br>RMSE RGB: 10.7442<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic09_long_text</b><br>Page 1</td>
  <td><img src="images/classic09_long_text_p1_heatmap.png" width="760" alt="classic09_long_text page 1 difference heatmap"></td>
  <td>changed: 23326 px (1.14%)<br>bbox: [113, 147, 1056, 298]<br>mean abs RGB: 1.8127<br>RMSE RGB: 19.2284<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic10_special_xml_characters</b><br>Page 1</td>
  <td><img src="images/classic10_special_xml_characters_p1_heatmap.png" width="760" alt="classic10_special_xml_characters page 1 difference heatmap"></td>
  <td>changed: 8803 px (0.43%)<br>bbox: [113, 147, 442, 361]<br>mean abs RGB: 0.6715<br>RMSE RGB: 11.542<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic11_sparse_rows</b><br>Page 1</td>
  <td><img src="images/classic11_sparse_rows_p1_heatmap.png" width="760" alt="classic11_sparse_rows page 1 difference heatmap"></td>
  <td>changed: 3126 px (0.15%)<br>bbox: [113, 148, 212, 768]<br>mean abs RGB: 0.2339<br>RMSE RGB: 6.7679<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic11_sparse_rows</b><br>Page 2</td>
  <td><img src="images/classic11_sparse_rows_p2_heatmap.png" width="760" alt="classic11_sparse_rows page 2 difference heatmap"></td>
  <td>changed: 1003 px (0.05%)<br>bbox: [115, 176, 183, 361]<br>mean abs RGB: 0.0746<br>RMSE RGB: 3.8238<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic12_sparse_columns</b><br>Page 1</td>
  <td><img src="images/classic12_sparse_columns_p1_heatmap.png" width="760" alt="classic12_sparse_columns page 1 difference heatmap"></td>
  <td>changed: 4414 px (0.22%)<br>bbox: [115, 147, 951, 240]<br>mean abs RGB: 0.3413<br>RMSE RGB: 8.2595<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic13_date_strings</b><br>Page 1</td>
  <td><img src="images/classic13_date_strings_p1_heatmap.png" width="760" alt="classic13_date_strings page 1 difference heatmap"></td>
  <td>changed: 11674 px (0.57%)<br>bbox: [114, 148, 312, 334]<br>mean abs RGB: 0.8859<br>RMSE RGB: 13.2651<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic14_decimal_numbers</b><br>Page 1</td>
  <td><img src="images/classic14_decimal_numbers_p1_heatmap.png" width="760" alt="classic14_decimal_numbers page 1 difference heatmap"></td>
  <td>changed: 9126 px (0.45%)<br>bbox: [114, 147, 318, 333]<br>mean abs RGB: 0.6956<br>RMSE RGB: 11.7511<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic15_negative_numbers</b><br>Page 1</td>
  <td><img src="images/classic15_negative_numbers_p1_heatmap.png" width="760" alt="classic15_negative_numbers page 1 difference heatmap"></td>
  <td>changed: 9082 px (0.44%)<br>bbox: [113, 147, 318, 364]<br>mean abs RGB: 0.6875<br>RMSE RGB: 11.6609<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic16_percentage_strings</b><br>Page 1</td>
  <td><img src="images/classic16_percentage_strings_p1_heatmap.png" width="760" alt="classic16_percentage_strings page 1 difference heatmap"></td>
  <td>changed: 10245 px (0.50%)<br>bbox: [114, 148, 291, 330]<br>mean abs RGB: 0.7695<br>RMSE RGB: 12.2991<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic17_currency_strings</b><br>Page 1</td>
  <td><img src="images/classic17_currency_strings_p1_heatmap.png" width="760" alt="classic17_currency_strings page 1 difference heatmap"></td>
  <td>changed: 12875 px (0.63%)<br>bbox: [114, 148, 315, 361]<br>mean abs RGB: 0.9594<br>RMSE RGB: 13.7057<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 1</td>
  <td><img src="images/classic18_large_dataset_p1_heatmap.png" width="760" alt="classic18_large_dataset page 1 difference heatmap"></td>
  <td>changed: 333630 px (16.29%)<br>bbox: [114, 147, 1013, 1501]<br>mean abs RGB: 25.3502<br>RMSE RGB: 70.8826<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 2</td>
  <td><img src="images/classic18_large_dataset_p2_heatmap.png" width="760" alt="classic18_large_dataset page 2 difference heatmap"></td>
  <td>changed: 356597 px (17.41%)<br>bbox: [115, 148, 1013, 1501]<br>mean abs RGB: 27.0142<br>RMSE RGB: 73.0614<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 3</td>
  <td><img src="images/classic18_large_dataset_p3_heatmap.png" width="760" alt="classic18_large_dataset page 3 difference heatmap"></td>
  <td>changed: 392794 px (19.18%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 29.7497<br>RMSE RGB: 76.7425<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 4</td>
  <td><img src="images/classic18_large_dataset_p4_heatmap.png" width="760" alt="classic18_large_dataset page 4 difference heatmap"></td>
  <td>changed: 403955 px (19.73%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 30.5073<br>RMSE RGB: 77.6085<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 5</td>
  <td><img src="images/classic18_large_dataset_p5_heatmap.png" width="760" alt="classic18_large_dataset page 5 difference heatmap"></td>
  <td>changed: 407764 px (19.91%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 30.8462<br>RMSE RGB: 78.0992<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 6</td>
  <td><img src="images/classic18_large_dataset_p6_heatmap.png" width="760" alt="classic18_large_dataset page 6 difference heatmap"></td>
  <td>changed: 408724 px (19.96%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.0013<br>RMSE RGB: 78.333<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 7</td>
  <td><img src="images/classic18_large_dataset_p7_heatmap.png" width="760" alt="classic18_large_dataset page 7 difference heatmap"></td>
  <td>changed: 414535 px (20.24%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.3357<br>RMSE RGB: 78.7046<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 8</td>
  <td><img src="images/classic18_large_dataset_p8_heatmap.png" width="760" alt="classic18_large_dataset page 8 difference heatmap"></td>
  <td>changed: 413473 px (20.19%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.1057<br>RMSE RGB: 78.3072<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 9</td>
  <td><img src="images/classic18_large_dataset_p9_heatmap.png" width="760" alt="classic18_large_dataset page 9 difference heatmap"></td>
  <td>changed: 417183 px (20.37%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.4649<br>RMSE RGB: 78.8147<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 10</td>
  <td><img src="images/classic18_large_dataset_p10_heatmap.png" width="760" alt="classic18_large_dataset page 10 difference heatmap"></td>
  <td>changed: 414861 px (20.26%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.4638<br>RMSE RGB: 78.8785<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 11</td>
  <td><img src="images/classic18_large_dataset_p11_heatmap.png" width="760" alt="classic18_large_dataset page 11 difference heatmap"></td>
  <td>changed: 415775 px (20.30%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.4234<br>RMSE RGB: 78.7132<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 12</td>
  <td><img src="images/classic18_large_dataset_p12_heatmap.png" width="760" alt="classic18_large_dataset page 12 difference heatmap"></td>
  <td>changed: 416809 px (20.36%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.3892<br>RMSE RGB: 78.5885<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 13</td>
  <td><img src="images/classic18_large_dataset_p13_heatmap.png" width="760" alt="classic18_large_dataset page 13 difference heatmap"></td>
  <td>changed: 417269 px (20.38%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.4117<br>RMSE RGB: 78.7111<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 14</td>
  <td><img src="images/classic18_large_dataset_p14_heatmap.png" width="760" alt="classic18_large_dataset page 14 difference heatmap"></td>
  <td>changed: 422104 px (20.61%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.7092<br>RMSE RGB: 79.0127<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 15</td>
  <td><img src="images/classic18_large_dataset_p15_heatmap.png" width="760" alt="classic18_large_dataset page 15 difference heatmap"></td>
  <td>changed: 417298 px (20.38%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.5904<br>RMSE RGB: 79.0235<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 16</td>
  <td><img src="images/classic18_large_dataset_p16_heatmap.png" width="760" alt="classic18_large_dataset page 16 difference heatmap"></td>
  <td>changed: 412308 px (20.14%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.0886<br>RMSE RGB: 78.2865<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 17</td>
  <td><img src="images/classic18_large_dataset_p17_heatmap.png" width="760" alt="classic18_large_dataset page 17 difference heatmap"></td>
  <td>changed: 411503 px (20.10%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.0975<br>RMSE RGB: 78.3775<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 18</td>
  <td><img src="images/classic18_large_dataset_p18_heatmap.png" width="760" alt="classic18_large_dataset page 18 difference heatmap"></td>
  <td>changed: 414966 px (20.27%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 31.2387<br>RMSE RGB: 78.4489<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 19</td>
  <td><img src="images/classic18_large_dataset_p19_heatmap.png" width="760" alt="classic18_large_dataset page 19 difference heatmap"></td>
  <td>changed: 424998 px (20.76%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 32.0812<br>RMSE RGB: 79.5726<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 20</td>
  <td><img src="images/classic18_large_dataset_p20_heatmap.png" width="760" alt="classic18_large_dataset page 20 difference heatmap"></td>
  <td>changed: 424329 px (20.72%)<br>bbox: [115, 148, 1025, 1501]<br>mean abs RGB: 32.0937<br>RMSE RGB: 79.6315<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 21</td>
  <td><img src="images/classic18_large_dataset_p21_heatmap.png" width="760" alt="classic18_large_dataset page 21 difference heatmap"></td>
  <td>changed: 404016 px (19.73%)<br>bbox: [115, 148, 1025, 1486]<br>mean abs RGB: 30.5484<br>RMSE RGB: 77.7088<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 22</td>
  <td><img src="images/classic18_large_dataset_p22_heatmap.png" width="760" alt="classic18_large_dataset page 22 difference heatmap"></td>
  <td>changed: 252173 px (12.32%)<br>bbox: [115, 147, 949, 1501]<br>mean abs RGB: 19.3303<br>RMSE RGB: 62.1508<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 23</td>
  <td><img src="images/classic18_large_dataset_p23_heatmap.png" width="760" alt="classic18_large_dataset page 23 difference heatmap"></td>
  <td>changed: 255958 px (12.50%)<br>bbox: [115, 148, 949, 1501]<br>mean abs RGB: 19.5364<br>RMSE RGB: 62.4051<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic18_large_dataset</b><br>Page 24</td>
  <td><img src="images/classic18_large_dataset_p24_heatmap.png" width="760" alt="classic18_large_dataset page 24 difference heatmap"></td>
  <td>changed: 91593 px (4.47%)<br>bbox: [115, 148, 949, 1501]<br>mean abs RGB: 7.0252<br>RMSE RGB: 37.4372<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic19_single_column_list</b><br>Page 1</td>
  <td><img src="images/classic19_single_column_list_p1_heatmap.png" width="760" alt="classic19_single_column_list page 1 difference heatmap"></td>
  <td>changed: 15983 px (0.78%)<br>bbox: [115, 148, 189, 799]<br>mean abs RGB: 1.1892<br>RMSE RGB: 15.216<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic20_all_empty_cells</b><br>Page 1</td>
  <td><img src="images/classic20_all_empty_cells_p1_heatmap.png" width="760" alt="classic20_all_empty_cells page 1 difference heatmap"></td>
  <td>changed: 0 px (0.00%)<br>bbox: None<br>mean abs RGB: 0.0<br>RMSE RGB: 0.0<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic21_header_only</b><br>Page 1</td>
  <td><img src="images/classic21_header_only_p1_heatmap.png" width="760" alt="classic21_header_only page 1 difference heatmap"></td>
  <td>changed: 2784 px (0.14%)<br>bbox: [114, 147, 576, 174]<br>mean abs RGB: 0.2128<br>RMSE RGB: 6.4883<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic22_long_sheet_name</b><br>Page 1</td>
  <td><img src="images/classic22_long_sheet_name_p1_heatmap.png" width="760" alt="classic22_long_sheet_name page 1 difference heatmap"></td>
  <td>changed: 3857 px (0.19%)<br>bbox: [115, 147, 318, 236]<br>mean abs RGB: 0.2988<br>RMSE RGB: 7.7392<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic23_unicode_text</b><br>Page 1</td>
  <td><img src="images/classic23_unicode_text_p1_heatmap.png" width="760" alt="classic23_unicode_text page 1 difference heatmap"></td>
  <td>changed: 16606 px (0.81%)<br>bbox: [113, 148, 423, 364]<br>mean abs RGB: 1.2004<br>RMSE RGB: 15.1545<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic24_red_text</b><br>Page 1</td>
  <td><img src="images/classic24_red_text_p1_heatmap.png" width="760" alt="classic24_red_text page 1 difference heatmap"></td>
  <td>changed: 9654 px (0.47%)<br>bbox: [114, 148, 440, 272]<br>mean abs RGB: 0.5588<br>RMSE RGB: 10.3944<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic25_multiple_colors</b><br>Page 1</td>
  <td><img src="images/classic25_multiple_colors_p1_heatmap.png" width="760" alt="classic25_multiple_colors page 1 difference heatmap"></td>
  <td>changed: 19562 px (0.96%)<br>bbox: [114, 147, 409, 427]<br>mean abs RGB: 0.8758<br>RMSE RGB: 12.8498<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic26_inline_strings</b><br>Page 1</td>
  <td><img src="images/classic26_inline_strings_p1_heatmap.png" width="760" alt="classic26_inline_strings page 1 difference heatmap"></td>
  <td>changed: 7294 px (0.36%)<br>bbox: [113, 147, 391, 236]<br>mean abs RGB: 0.5465<br>RMSE RGB: 10.3999<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic27_single_row</b><br>Page 1</td>
  <td><img src="images/classic27_single_row_p1_heatmap.png" width="760" alt="classic27_single_row page 1 difference heatmap"></td>
  <td>changed: 3247 px (0.16%)<br>bbox: [115, 147, 778, 174]<br>mean abs RGB: 0.2539<br>RMSE RGB: 7.1355<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic28_duplicate_values</b><br>Page 1</td>
  <td><img src="images/classic28_duplicate_values_p1_heatmap.png" width="760" alt="classic28_duplicate_values page 1 difference heatmap"></td>
  <td>changed: 8134 px (0.40%)<br>bbox: [114, 148, 462, 299]<br>mean abs RGB: 0.6241<br>RMSE RGB: 11.171<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic29_formula_results</b><br>Page 1</td>
  <td><img src="images/classic29_formula_results_p1_heatmap.png" width="760" alt="classic29_formula_results page 1 difference heatmap"></td>
  <td>changed: 8598 px (0.42%)<br>bbox: [113, 147, 527, 299]<br>mean abs RGB: 0.6617<br>RMSE RGB: 11.5194<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic30_mixed_empty_and_filled_sheets</b><br>Page 1</td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p1_heatmap.png" width="760" alt="classic30_mixed_empty_and_filled_sheets page 1 difference heatmap"></td>
  <td>changed: 1679 px (0.08%)<br>bbox: [119, 147, 279, 223]<br>mean abs RGB: 0.1337<br>RMSE RGB: 5.2153<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic30_mixed_empty_and_filled_sheets</b><br>Page 2</td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p2_heatmap.png" width="760" alt="classic30_mixed_empty_and_filled_sheets page 2 difference heatmap"></td>
  <td>changed: 3501 px (0.17%)<br>bbox: [115, 147, 422, 238]<br>mean abs RGB: 0.273<br>RMSE RGB: 7.3822<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic31_bold_header_row</b><br>Page 1</td>
  <td><img src="images/classic31_bold_header_row_p1_heatmap.png" width="760" alt="classic31_bold_header_row page 1 difference heatmap"></td>
  <td>changed: 15978 px (0.78%)<br>bbox: [114, 147, 527, 299]<br>mean abs RGB: 1.2683<br>RMSE RGB: 16.0938<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic32_right_aligned_numbers</b><br>Page 1</td>
  <td><img src="images/classic32_right_aligned_numbers_p1_heatmap.png" width="760" alt="classic32_right_aligned_numbers page 1 difference heatmap"></td>
  <td>changed: 7379 px (0.36%)<br>bbox: [115, 147, 318, 268]<br>mean abs RGB: 0.5695<br>RMSE RGB: 10.6473<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic33_centered_text</b><br>Page 1</td>
  <td><img src="images/classic33_centered_text_p1_heatmap.png" width="760" alt="classic33_centered_text page 1 difference heatmap"></td>
  <td>changed: 5096 px (0.25%)<br>bbox: [115, 147, 596, 236]<br>mean abs RGB: 0.3974<br>RMSE RGB: 8.9374<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic34_explicit_column_widths</b><br>Page 1</td>
  <td><img src="images/classic34_explicit_column_widths_p1_heatmap.png" width="760" alt="classic34_explicit_column_widths page 1 difference heatmap"></td>
  <td>changed: 12298 px (0.60%)<br>bbox: [114, 147, 662, 272]<br>mean abs RGB: 0.9442<br>RMSE RGB: 13.7225<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic35_explicit_row_heights</b><br>Page 1</td>
  <td><img src="images/classic35_explicit_row_heights_p1_heatmap.png" width="760" alt="classic35_explicit_row_heights page 1 difference heatmap"></td>
  <td>changed: 4931 px (0.24%)<br>bbox: [113, 178, 318, 341]<br>mean abs RGB: 0.3759<br>RMSE RGB: 8.6062<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic36_merged_cells</b><br>Page 1</td>
  <td><img src="images/classic36_merged_cells_p1_heatmap.png" width="760" alt="classic36_merged_cells page 1 difference heatmap"></td>
  <td>changed: 11013 px (0.54%)<br>bbox: [114, 147, 428, 268]<br>mean abs RGB: 0.8463<br>RMSE RGB: 13.0193<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic37_freeze_panes</b><br>Page 1</td>
  <td><img src="images/classic37_freeze_panes_p1_heatmap.png" width="760" alt="classic37_freeze_panes page 1 difference heatmap"></td>
  <td>changed: 40768 px (1.99%)<br>bbox: [113, 147, 487, 799]<br>mean abs RGB: 3.0674<br>RMSE RGB: 24.6211<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic38_hyperlink_cell</b><br>Page 1</td>
  <td><img src="images/classic38_hyperlink_cell_p1_heatmap.png" width="760" alt="classic38_hyperlink_cell page 1 difference heatmap"></td>
  <td>changed: 7069 px (0.35%)<br>bbox: [114, 148, 478, 239]<br>mean abs RGB: 0.5177<br>RMSE RGB: 10.1594<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic39_financial_table</b><br>Page 1</td>
  <td><img src="images/classic39_financial_table_p1_heatmap.png" width="760" alt="classic39_financial_table page 1 difference heatmap"></td>
  <td>changed: 19936 px (0.97%)<br>bbox: [113, 147, 527, 361]<br>mean abs RGB: 1.4637<br>RMSE RGB: 17.0362<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic40_scientific_notation</b><br>Page 1</td>
  <td><img src="images/classic40_scientific_notation_p1_heatmap.png" width="760" alt="classic40_scientific_notation page 1 difference heatmap"></td>
  <td>changed: 12232 px (0.60%)<br>bbox: [113, 147, 318, 334]<br>mean abs RGB: 0.9248<br>RMSE RGB: 13.4963<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic41_integer_vs_float</b><br>Page 1</td>
  <td><img src="images/classic41_integer_vs_float_p1_heatmap.png" width="760" alt="classic41_integer_vs_float page 1 difference heatmap"></td>
  <td>changed: 11844 px (0.58%)<br>bbox: [113, 147, 318, 424]<br>mean abs RGB: 0.8915<br>RMSE RGB: 13.2352<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic42_boolean_values</b><br>Page 1</td>
  <td><img src="images/classic42_boolean_values_p1_heatmap.png" width="760" alt="classic42_boolean_values page 1 difference heatmap"></td>
  <td>changed: 11596 px (0.57%)<br>bbox: [113, 147, 298, 330]<br>mean abs RGB: 0.8786<br>RMSE RGB: 13.1767<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic43_inventory_report</b><br>Page 1</td>
  <td><img src="images/classic43_inventory_report_p1_heatmap.png" width="760" alt="classic43_inventory_report page 1 difference heatmap"></td>
  <td>changed: 40243 px (1.97%)<br>bbox: [113, 147, 748, 394]<br>mean abs RGB: 3.1265<br>RMSE RGB: 25.1004<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic44_employee_roster</b><br>Page 1</td>
  <td><img src="images/classic44_employee_roster_p1_heatmap.png" width="760" alt="classic44_employee_roster page 1 difference heatmap"></td>
  <td>changed: 51985 px (2.54%)<br>bbox: [115, 147, 839, 428]<br>mean abs RGB: 3.9407<br>RMSE RGB: 27.9218<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic45_sales_by_region</b><br>Page 1</td>
  <td><img src="images/classic45_sales_by_region_p1_heatmap.png" width="760" alt="classic45_sales_by_region page 1 difference heatmap"></td>
  <td>changed: 6824 px (0.33%)<br>bbox: [114, 147, 318, 300]<br>mean abs RGB: 0.5282<br>RMSE RGB: 10.3042<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic45_sales_by_region</b><br>Page 2</td>
  <td><img src="images/classic45_sales_by_region_p2_heatmap.png" width="760" alt="classic45_sales_by_region page 2 difference heatmap"></td>
  <td>changed: 6959 px (0.34%)<br>bbox: [114, 147, 318, 300]<br>mean abs RGB: 0.5395<br>RMSE RGB: 10.4112<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic45_sales_by_region</b><br>Page 3</td>
  <td><img src="images/classic45_sales_by_region_p3_heatmap.png" width="760" alt="classic45_sales_by_region page 3 difference heatmap"></td>
  <td>changed: 7036 px (0.34%)<br>bbox: [114, 147, 318, 300]<br>mean abs RGB: 0.5441<br>RMSE RGB: 10.45<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic45_sales_by_region</b><br>Page 4</td>
  <td><img src="images/classic45_sales_by_region_p4_heatmap.png" width="760" alt="classic45_sales_by_region page 4 difference heatmap"></td>
  <td>changed: 6899 px (0.34%)<br>bbox: [114, 147, 318, 300]<br>mean abs RGB: 0.5337<br>RMSE RGB: 10.3479<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic46_grade_book</b><br>Page 1</td>
  <td><img src="images/classic46_grade_book_p1_heatmap.png" width="760" alt="classic46_grade_book page 1 difference heatmap"></td>
  <td>changed: 25114 px (1.23%)<br>bbox: [113, 147, 801, 393]<br>mean abs RGB: 1.9296<br>RMSE RGB: 19.5978<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic47_time_series</b><br>Page 1</td>
  <td><img src="images/classic47_time_series_p1_heatmap.png" width="760" alt="classic47_time_series page 1 difference heatmap"></td>
  <td>changed: 68189 px (3.33%)<br>bbox: [115, 147, 527, 1147]<br>mean abs RGB: 5.1416<br>RMSE RGB: 31.8428<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic48_survey_results</b><br>Page 1</td>
  <td><img src="images/classic48_survey_results_p1_heatmap.png" width="760" alt="classic48_survey_results page 1 difference heatmap"></td>
  <td>changed: 19533 px (0.95%)<br>bbox: [114, 147, 782, 330]<br>mean abs RGB: 1.4897<br>RMSE RGB: 17.1884<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic49_contact_list</b><br>Page 1</td>
  <td><img src="images/classic49_contact_list_p1_heatmap.png" width="760" alt="classic49_contact_list page 1 difference heatmap"></td>
  <td>changed: 37728 px (1.84%)<br>bbox: [113, 147, 621, 397]<br>mean abs RGB: 2.8333<br>RMSE RGB: 23.5957<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals</b><br>Page 1</td>
  <td><img src="images/classic50_budget_vs_actuals_p1_heatmap.png" width="760" alt="classic50_budget_vs_actuals page 1 difference heatmap"></td>
  <td>changed: 32877 px (1.61%)<br>bbox: [114, 147, 736, 330]<br>mean abs RGB: 2.5486<br>RMSE RGB: 22.5845<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals</b><br>Page 2</td>
  <td><img src="images/classic50_budget_vs_actuals_p2_heatmap.png" width="760" alt="classic50_budget_vs_actuals page 2 difference heatmap"></td>
  <td>changed: 32466 px (1.59%)<br>bbox: [114, 147, 736, 330]<br>mean abs RGB: 2.5156<br>RMSE RGB: 22.4284<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals</b><br>Page 3</td>
  <td><img src="images/classic50_budget_vs_actuals_p3_heatmap.png" width="760" alt="classic50_budget_vs_actuals page 3 difference heatmap"></td>
  <td>changed: 26290 px (1.28%)<br>bbox: [114, 147, 736, 330]<br>mean abs RGB: 2.0359<br>RMSE RGB: 20.1981<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic51_product_catalog</b><br>Page 1</td>
  <td><img src="images/classic51_product_catalog_p1_heatmap.png" width="760" alt="classic51_product_catalog page 1 difference heatmap"></td>
  <td>changed: 44822 px (2.19%)<br>bbox: [115, 147, 631, 489]<br>mean abs RGB: 3.3761<br>RMSE RGB: 25.7543<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic52_pivot_summary</b><br>Page 1</td>
  <td><img src="images/classic52_pivot_summary_p1_heatmap.png" width="760" alt="classic52_pivot_summary page 1 difference heatmap"></td>
  <td>changed: 33028 px (1.61%)<br>bbox: [113, 147, 736, 330]<br>mean abs RGB: 2.647<br>RMSE RGB: 23.2615<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic53_invoice</b><br>Page 1</td>
  <td><img src="images/classic53_invoice_p1_heatmap.png" width="760" alt="classic53_invoice page 1 difference heatmap"></td>
  <td>changed: 35371 px (1.73%)<br>bbox: [113, 150, 527, 768]<br>mean abs RGB: 2.7872<br>RMSE RGB: 23.8089<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic54_multi_level_header</b><br>Page 1</td>
  <td><img src="images/classic54_multi_level_header_p1_heatmap.png" width="760" alt="classic54_multi_level_header page 1 difference heatmap"></td>
  <td>changed: 25840 px (1.26%)<br>bbox: [114, 148, 841, 299]<br>mean abs RGB: 2.1061<br>RMSE RGB: 20.8773<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic55_error_values</b><br>Page 1</td>
  <td><img src="images/classic55_error_values_p1_heatmap.png" width="760" alt="classic55_error_values page 1 difference heatmap"></td>
  <td>changed: 17235 px (0.84%)<br>bbox: [113, 147, 436, 365]<br>mean abs RGB: 1.3136<br>RMSE RGB: 16.1349<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic56_alternating_row_colors</b><br>Page 1</td>
  <td><img src="images/classic56_alternating_row_colors_p1_heatmap.png" width="760" alt="classic56_alternating_row_colors page 1 difference heatmap"></td>
  <td>changed: 73486 px (3.59%)<br>bbox: [109, 147, 428, 494]<br>mean abs RGB: 1.9385<br>RMSE RGB: 16.2173<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic57_cjk_only</b><br>Page 1</td>
  <td><img src="images/classic57_cjk_only_p1_heatmap.png" width="760" alt="classic57_cjk_only page 1 difference heatmap"></td>
  <td>changed: 16168 px (0.79%)<br>bbox: [113, 144, 527, 331]<br>mean abs RGB: 1.0679<br>RMSE RGB: 13.7038<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic58_mixed_numeric_formats</b><br>Page 1</td>
  <td><img src="images/classic58_mixed_numeric_formats_p1_heatmap.png" width="760" alt="classic58_mixed_numeric_formats page 1 difference heatmap"></td>
  <td>changed: 17898 px (0.87%)<br>bbox: [113, 147, 318, 455]<br>mean abs RGB: 1.352<br>RMSE RGB: 16.3261<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary</b><br>Page 1</td>
  <td><img src="images/classic59_multi_sheet_summary_p1_heatmap.png" width="760" alt="classic59_multi_sheet_summary page 1 difference heatmap"></td>
  <td>changed: 12604 px (0.62%)<br>bbox: [115, 147, 422, 330]<br>mean abs RGB: 0.9656<br>RMSE RGB: 13.854<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary</b><br>Page 2</td>
  <td><img src="images/classic59_multi_sheet_summary_p2_heatmap.png" width="760" alt="classic59_multi_sheet_summary page 2 difference heatmap"></td>
  <td>changed: 12604 px (0.62%)<br>bbox: [115, 147, 422, 330]<br>mean abs RGB: 0.9656<br>RMSE RGB: 13.854<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary</b><br>Page 3</td>
  <td><img src="images/classic59_multi_sheet_summary_p3_heatmap.png" width="760" alt="classic59_multi_sheet_summary page 3 difference heatmap"></td>
  <td>changed: 12604 px (0.62%)<br>bbox: [115, 147, 422, 330]<br>mean abs RGB: 0.9656<br>RMSE RGB: 13.854<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary</b><br>Page 4</td>
  <td><img src="images/classic59_multi_sheet_summary_p4_heatmap.png" width="760" alt="classic59_multi_sheet_summary page 4 difference heatmap"></td>
  <td>changed: 6549 px (0.32%)<br>bbox: [113, 147, 356, 268]<br>mean abs RGB: 0.5004<br>RMSE RGB: 9.9729<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic60_large_wide_table</b><br>Page 1</td>
  <td><img src="images/classic60_large_wide_table_p1_heatmap.png" width="760" alt="classic60_large_wide_table page 1 difference heatmap"></td>
  <td>changed: 432379 px (21.12%)<br>bbox: [114, 147, 1034, 1501]<br>mean abs RGB: 32.5707<br>RMSE RGB: 80.1797<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic60_large_wide_table</b><br>Page 2</td>
  <td><img src="images/classic60_large_wide_table_p2_heatmap.png" width="760" alt="classic60_large_wide_table page 2 difference heatmap"></td>
  <td>changed: 61901 px (3.02%)<br>bbox: [115, 148, 1034, 393]<br>mean abs RGB: 4.7805<br>RMSE RGB: 30.9071<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic60_large_wide_table</b><br>Page 3</td>
  <td><img src="images/classic60_large_wide_table_p3_heatmap.png" width="760" alt="classic60_large_wide_table page 3 difference heatmap"></td>
  <td>changed: 379614 px (18.54%)<br>bbox: [114, 147, 1025, 1501]<br>mean abs RGB: 28.728<br>RMSE RGB: 75.3647<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic60_large_wide_table</b><br>Page 4</td>
  <td><img src="images/classic60_large_wide_table_p4_heatmap.png" width="760" alt="classic60_large_wide_table page 4 difference heatmap"></td>
  <td>changed: 50821 px (2.48%)<br>bbox: [115, 148, 1025, 393]<br>mean abs RGB: 3.9441<br>RMSE RGB: 28.06<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic61_product_card_with_image</b><br>Page 1</td>
  <td><img src="images/classic61_product_card_with_image_p1_heatmap.png" width="760" alt="classic61_product_card_with_image page 1 difference heatmap"></td>
  <td>changed: 13215 px (0.65%)<br>bbox: [109, 141, 588, 441]<br>mean abs RGB: 0.9513<br>RMSE RGB: 13.3987<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic62_company_logo_header</b><br>Page 1</td>
  <td><img src="images/classic62_company_logo_header_p1_heatmap.png" width="760" alt="classic62_company_logo_header page 1 difference heatmap"></td>
  <td>changed: 21298 px (1.04%)<br>bbox: [109, 141, 632, 424]<br>mean abs RGB: 1.682<br>RMSE RGB: 18.3501<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic63_two_products_side_by_side</b><br>Page 1</td>
  <td><img src="images/classic63_two_products_side_by_side_p1_heatmap.png" width="760" alt="classic63_two_products_side_by_side page 1 difference heatmap"></td>
  <td>changed: 30541 px (1.49%)<br>bbox: [109, 141, 567, 378]<br>mean abs RGB: 2.3179<br>RMSE RGB: 21.2686<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic64_employee_directory_with_photo</b><br>Page 1</td>
  <td><img src="images/classic64_employee_directory_with_photo_p1_heatmap.png" width="760" alt="classic64_employee_directory_with_photo page 1 difference heatmap"></td>
  <td>changed: 36901 px (1.80%)<br>bbox: [109, 142, 727, 403]<br>mean abs RGB: 2.6884<br>RMSE RGB: 22.5284<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic65_inventory_with_product_photos</b><br>Page 1</td>
  <td><img src="images/classic65_inventory_with_product_photos_p1_heatmap.png" width="760" alt="classic65_inventory_with_product_photos page 1 difference heatmap"></td>
  <td>changed: 34600 px (1.69%)<br>bbox: [109, 148, 631, 552]<br>mean abs RGB: 2.4047<br>RMSE RGB: 21.1915<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic66_invoice_with_logo</b><br>Page 1</td>
  <td><img src="images/classic66_invoice_with_logo_p1_heatmap.png" width="760" alt="classic66_invoice_with_logo page 1 difference heatmap"></td>
  <td>changed: 24932 px (1.22%)<br>bbox: [109, 141, 660, 511]<br>mean abs RGB: 2.0695<br>RMSE RGB: 20.6134<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic67_real_estate_listing</b><br>Page 1</td>
  <td><img src="images/classic67_real_estate_listing_p1_heatmap.png" width="760" alt="classic67_real_estate_listing page 1 difference heatmap"></td>
  <td>changed: 21254 px (1.04%)<br>bbox: [109, 141, 640, 414]<br>mean abs RGB: 1.3203<br>RMSE RGB: 14.681<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic68_restaurant_menu</b><br>Page 1</td>
  <td><img src="images/classic68_restaurant_menu_p1_heatmap.png" width="760" alt="classic68_restaurant_menu page 1 difference heatmap"></td>
  <td>changed: 95839 px (4.68%)<br>bbox: [112, 149, 656, 878]<br>mean abs RGB: 4.6959<br>RMSE RGB: 26.5496<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic69_image_only_sheet</b><br>Page 1</td>
  <td><img src="images/classic69_image_only_sheet_p1_heatmap.png" width="760" alt="classic69_image_only_sheet page 1 difference heatmap"></td>
  <td>changed: 110575 px (5.40%)<br>bbox: [109, 141, 582, 463]<br>mean abs RGB: 7.9884<br>RMSE RGB: 36.9356<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic70_product_catalog_with_images</b><br>Page 1</td>
  <td><img src="images/classic70_product_catalog_with_images_p1_heatmap.png" width="760" alt="classic70_product_catalog_with_images page 1 difference heatmap"></td>
  <td>changed: 49579 px (2.42%)<br>bbox: [109, 153, 542, 859]<br>mean abs RGB: 3.6343<br>RMSE RGB: 25.197<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images</b><br>Page 1</td>
  <td><img src="images/classic71_multi_sheet_with_images_p1_heatmap.png" width="760" alt="classic71_multi_sheet_with_images page 1 difference heatmap"></td>
  <td>changed: 8982 px (0.44%)<br>bbox: [109, 141, 318, 316]<br>mean abs RGB: 0.6518<br>RMSE RGB: 11.0241<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images</b><br>Page 2</td>
  <td><img src="images/classic71_multi_sheet_with_images_p2_heatmap.png" width="760" alt="classic71_multi_sheet_with_images page 2 difference heatmap"></td>
  <td>changed: 8474 px (0.41%)<br>bbox: [109, 141, 318, 316]<br>mean abs RGB: 0.6152<br>RMSE RGB: 10.6159<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images</b><br>Page 3</td>
  <td><img src="images/classic71_multi_sheet_with_images_p3_heatmap.png" width="760" alt="classic71_multi_sheet_with_images page 3 difference heatmap"></td>
  <td>changed: 7992 px (0.39%)<br>bbox: [109, 141, 324, 316]<br>mean abs RGB: 0.5697<br>RMSE RGB: 10.002<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic72_bar_chart_image_with_data</b><br>Page 1</td>
  <td><img src="images/classic72_bar_chart_image_with_data_p1_heatmap.png" width="760" alt="classic72_bar_chart_image_with_data page 1 difference heatmap"></td>
  <td>changed: 18850 px (0.92%)<br>bbox: [113, 149, 423, 424]<br>mean abs RGB: 1.8882<br>RMSE RGB: 17.313<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic73_event_flyer_with_banner</b><br>Page 1</td>
  <td><img src="images/classic73_event_flyer_with_banner_p1_heatmap.png" width="760" alt="classic73_event_flyer_with_banner page 1 difference heatmap"></td>
  <td>changed: 60991 px (2.98%)<br>bbox: [109, 141, 582, 804]<br>mean abs RGB: 4.9639<br>RMSE RGB: 30.8317<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic74_dashboard_with_kpi_image</b><br>Page 1</td>
  <td><img src="images/classic74_dashboard_with_kpi_image_p1_heatmap.png" width="760" alt="classic74_dashboard_with_kpi_image page 1 difference heatmap"></td>
  <td>changed: 73793 px (3.60%)<br>bbox: [114, 149, 917, 369]<br>mean abs RGB: 1.8431<br>RMSE RGB: 18.3501<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic75_certificate_with_seal</b><br>Page 1</td>
  <td><img src="images/classic75_certificate_with_seal_p1_heatmap.png" width="760" alt="classic75_certificate_with_seal page 1 difference heatmap"></td>
  <td>changed: 40651 px (1.99%)<br>bbox: [198, 150, 776, 372]<br>mean abs RGB: 3.0063<br>RMSE RGB: 24.6441<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic76_product_image_grid</b><br>Page 1</td>
  <td><img src="images/classic76_product_image_grid_p1_heatmap.png" width="760" alt="classic76_product_image_grid page 1 difference heatmap"></td>
  <td>changed: 56006 px (2.74%)<br>bbox: [109, 149, 683, 525]<br>mean abs RGB: 3.5453<br>RMSE RGB: 24.9702<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic77_news_article_with_hero_image</b><br>Page 1</td>
  <td><img src="images/classic77_news_article_with_hero_image_p1_heatmap.png" width="760" alt="classic77_news_article_with_hero_image page 1 difference heatmap"></td>
  <td>changed: 87438 px (4.27%)<br>bbox: [109, 141, 850, 870]<br>mean abs RGB: 5.7471<br>RMSE RGB: 29.7786<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic78_small_icon_per_row</b><br>Page 1</td>
  <td><img src="images/classic78_small_icon_per_row_p1_heatmap.png" width="760" alt="classic78_small_icon_per_row page 1 difference heatmap"></td>
  <td>changed: 23409 px (1.14%)<br>bbox: [109, 147, 534, 387]<br>mean abs RGB: 1.7056<br>RMSE RGB: 18.2951<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic79_wide_panoramic_banner</b><br>Page 1</td>
  <td><img src="images/classic79_wide_panoramic_banner_p1_heatmap.png" width="760" alt="classic79_wide_panoramic_banner page 1 difference heatmap"></td>
  <td>changed: 73157 px (3.57%)<br>bbox: [109, 141, 863, 709]<br>mean abs RGB: 6.5543<br>RMSE RGB: 36.4668<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic80_portrait_tall_image</b><br>Page 1</td>
  <td><img src="images/classic80_portrait_tall_image_p1_heatmap.png" width="760" alt="classic80_portrait_tall_image page 1 difference heatmap"></td>
  <td>changed: 21961 px (1.07%)<br>bbox: [109, 141, 740, 432]<br>mean abs RGB: 1.3426<br>RMSE RGB: 15.7248<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic81_step_by_step_with_images</b><br>Page 1</td>
  <td><img src="images/classic81_step_by_step_with_images_p1_heatmap.png" width="760" alt="classic81_step_by_step_with_images page 1 difference heatmap"></td>
  <td>changed: 53662 px (2.62%)<br>bbox: [109, 149, 675, 993]<br>mean abs RGB: 2.0966<br>RMSE RGB: 19.2254<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic82_before_after_images</b><br>Page 1</td>
  <td><img src="images/classic82_before_after_images_p1_heatmap.png" width="760" alt="classic82_before_after_images page 1 difference heatmap"></td>
  <td>changed: 67011 px (3.27%)<br>bbox: [109, 147, 660, 601]<br>mean abs RGB: 3.8273<br>RMSE RGB: 23.0664<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic83_color_swatch_palette</b><br>Page 1</td>
  <td><img src="images/classic83_color_swatch_palette_p1_heatmap.png" width="760" alt="classic83_color_swatch_palette page 1 difference heatmap"></td>
  <td>changed: 47640 px (2.33%)<br>bbox: [109, 149, 611, 731]<br>mean abs RGB: 3.6454<br>RMSE RGB: 26.8317<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic84_travel_destination_cards</b><br>Page 1</td>
  <td><img src="images/classic84_travel_destination_cards_p1_heatmap.png" width="760" alt="classic84_travel_destination_cards page 1 difference heatmap"></td>
  <td>changed: 60135 px (2.94%)<br>bbox: [109, 149, 820, 911]<br>mean abs RGB: 3.3967<br>RMSE RGB: 22.6649<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic85_lab_results_with_image</b><br>Page 1</td>
  <td><img src="images/classic85_lab_results_with_image_p1_heatmap.png" width="760" alt="classic85_lab_results_with_image page 1 difference heatmap"></td>
  <td>changed: 58733 px (2.87%)<br>bbox: [113, 149, 718, 397]<br>mean abs RGB: 2.3494<br>RMSE RGB: 19.2209<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic86_software_screenshot_features</b><br>Page 1</td>
  <td><img src="images/classic86_software_screenshot_features_p1_heatmap.png" width="760" alt="classic86_software_screenshot_features page 1 difference heatmap"></td>
  <td>changed: 16755 px (0.82%)<br>bbox: [109, 141, 684, 397]<br>mean abs RGB: 0.4812<br>RMSE RGB: 9.1999<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic87_sports_results_with_logos</b><br>Page 1</td>
  <td><img src="images/classic87_sports_results_with_logos_p1_heatmap.png" width="760" alt="classic87_sports_results_with_logos page 1 difference heatmap"></td>
  <td>changed: 20981 px (1.02%)<br>bbox: [109, 149, 736, 457]<br>mean abs RGB: 1.6584<br>RMSE RGB: 18.2821<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic88_image_after_data</b><br>Page 1</td>
  <td><img src="images/classic88_image_after_data_p1_heatmap.png" width="760" alt="classic88_image_after_data page 1 difference heatmap"></td>
  <td>changed: 42925 px (2.10%)<br>bbox: [109, 147, 678, 494]<br>mean abs RGB: 1.9194<br>RMSE RGB: 18.9583<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic89_nutrition_label_with_image</b><br>Page 1</td>
  <td><img src="images/classic89_nutrition_label_with_image_p1_heatmap.png" width="760" alt="classic89_nutrition_label_with_image page 1 difference heatmap"></td>
  <td>changed: 23398 px (1.14%)<br>bbox: [109, 141, 627, 522]<br>mean abs RGB: 1.5403<br>RMSE RGB: 16.985<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic90_project_status_with_milestones</b><br>Page 1</td>
  <td><img src="images/classic90_project_status_with_milestones_p1_heatmap.png" width="760" alt="classic90_project_status_with_milestones page 1 difference heatmap"></td>
  <td>changed: 77771 px (3.80%)<br>bbox: [113, 149, 885, 427]<br>mean abs RGB: 3.5497<br>RMSE RGB: 23.5353<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic91_simple_bar_chart</b><br>Page 1</td>
  <td><img src="images/classic91_simple_bar_chart_p1_heatmap.png" width="760" alt="classic91_simple_bar_chart page 1 difference heatmap"></td>
  <td>changed: 99309 px (4.85%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 6.3385<br>RMSE RGB: 31.201<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic92_horizontal_bar_chart</b><br>Page 1</td>
  <td><img src="images/classic92_horizontal_bar_chart_p1_heatmap.png" width="760" alt="classic92_horizontal_bar_chart page 1 difference heatmap"></td>
  <td>changed: 91803 px (4.48%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 5.9898<br>RMSE RGB: 30.9247<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic93_line_chart</b><br>Page 1</td>
  <td><img src="images/classic93_line_chart_p1_heatmap.png" width="760" alt="classic93_line_chart page 1 difference heatmap"></td>
  <td>changed: 33855 px (1.65%)<br>bbox: [113, 147, 1055, 726]<br>mean abs RGB: 2.3242<br>RMSE RGB: 20.4884<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic94_pie_chart</b><br>Page 1</td>
  <td><img src="images/classic94_pie_chart_p1_heatmap.png" width="760" alt="classic94_pie_chart page 1 difference heatmap"></td>
  <td>changed: 234329 px (11.44%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 14.3384<br>RMSE RGB: 45.6342<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic95_area_chart</b><br>Page 1</td>
  <td><img src="images/classic95_area_chart_p1_heatmap.png" width="760" alt="classic95_area_chart page 1 difference heatmap"></td>
  <td>changed: 135508 px (6.62%)<br>bbox: [114, 148, 1055, 924]<br>mean abs RGB: 8.6656<br>RMSE RGB: 37.0341<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic96_scatter_chart</b><br>Page 1</td>
  <td><img src="images/classic96_scatter_chart_p1_heatmap.png" width="760" alt="classic96_scatter_chart page 1 difference heatmap"></td>
  <td>changed: 61520 px (3.00%)<br>bbox: [113, 146, 1055, 799]<br>mean abs RGB: 4.0703<br>RMSE RGB: 26.7301<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic97_doughnut_chart</b><br>Page 1</td>
  <td><img src="images/classic97_doughnut_chart_p1_heatmap.png" width="760" alt="classic97_doughnut_chart page 1 difference heatmap"></td>
  <td>changed: 233256 px (11.39%)<br>bbox: [114, 148, 1055, 726]<br>mean abs RGB: 14.2011<br>RMSE RGB: 45.1048<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic98_radar_chart</b><br>Page 1</td>
  <td><img src="images/classic98_radar_chart_p1_heatmap.png" width="760" alt="classic98_radar_chart page 1 difference heatmap"></td>
  <td>changed: 32017 px (1.56%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 2.1542<br>RMSE RGB: 19.6835<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic99_bubble_chart</b><br>Page 1</td>
  <td><img src="images/classic99_bubble_chart_p1_heatmap.png" width="760" alt="classic99_bubble_chart page 1 difference heatmap"></td>
  <td>changed: 65101 px (3.18%)<br>bbox: [114, 146, 1055, 726]<br>mean abs RGB: 4.369<br>RMSE RGB: 27.3159<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic100_stacked_bar_chart</b><br>Page 1</td>
  <td><img src="images/classic100_stacked_bar_chart_p1_heatmap.png" width="760" alt="classic100_stacked_bar_chart page 1 difference heatmap"></td>
  <td>changed: 104091 px (5.08%)<br>bbox: [112, 148, 999, 897]<br>mean abs RGB: 6.4499<br>RMSE RGB: 31.7845<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic101_percent_stacked_bar</b><br>Page 1</td>
  <td><img src="images/classic101_percent_stacked_bar_p1_heatmap.png" width="760" alt="classic101_percent_stacked_bar page 1 difference heatmap"></td>
  <td>changed: 125941 px (6.15%)<br>bbox: [112, 147, 999, 925]<br>mean abs RGB: 7.8832<br>RMSE RGB: 35.2373<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic102_line_chart_with_markers</b><br>Page 1</td>
  <td><img src="images/classic102_line_chart_with_markers_p1_heatmap.png" width="760" alt="classic102_line_chart_with_markers page 1 difference heatmap"></td>
  <td>changed: 31532 px (1.54%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 2.1312<br>RMSE RGB: 19.6933<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic103_pie_chart_with_labels</b><br>Page 1</td>
  <td><img src="images/classic103_pie_chart_with_labels_p1_heatmap.png" width="760" alt="classic103_pie_chart_with_labels page 1 difference heatmap"></td>
  <td>changed: 181010 px (8.84%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 11.2588<br>RMSE RGB: 40.9124<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic104_combo_bar_line_chart</b><br>Page 1</td>
  <td><img src="images/classic104_combo_bar_line_chart_p1_heatmap.png" width="760" alt="classic104_combo_bar_line_chart page 1 difference heatmap"></td>
  <td>changed: 89546 px (4.37%)<br>bbox: [113, 147, 1055, 726]<br>mean abs RGB: 5.5781<br>RMSE RGB: 29.2757<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic105_3d_bar_chart</b><br>Page 1</td>
  <td><img src="images/classic105_3d_bar_chart_p1_heatmap.png" width="760" alt="classic105_3d_bar_chart page 1 difference heatmap"></td>
  <td>changed: 130487 px (6.37%)<br>bbox: [113, 148, 1055, 726]<br>mean abs RGB: 8.6086<br>RMSE RGB: 37.0996<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic106_3d_pie_chart</b><br>Page 1</td>
  <td><img src="images/classic106_3d_pie_chart_p1_heatmap.png" width="760" alt="classic106_3d_pie_chart page 1 difference heatmap"></td>
  <td>changed: 144116 px (7.04%)<br>bbox: [113, 148, 1055, 726]<br>mean abs RGB: 11.0505<br>RMSE RGB: 43.7791<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic107_multi_series_line</b><br>Page 1</td>
  <td><img src="images/classic107_multi_series_line_p1_heatmap.png" width="760" alt="classic107_multi_series_line page 1 difference heatmap"></td>
  <td>changed: 83748 px (4.09%)<br>bbox: [115, 148, 1055, 803]<br>mean abs RGB: 6.0614<br>RMSE RGB: 34.0475<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic108_stacked_area_chart</b><br>Page 1</td>
  <td><img src="images/classic108_stacked_area_chart_p1_heatmap.png" width="760" alt="classic108_stacked_area_chart page 1 difference heatmap"></td>
  <td>changed: 377740 px (18.45%)<br>bbox: [112, 147, 1055, 954]<br>mean abs RGB: 22.8215<br>RMSE RGB: 56.991<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic109_scatter_with_trendline</b><br>Page 1</td>
  <td><img src="images/classic109_scatter_with_trendline_p1_heatmap.png" width="760" alt="classic109_scatter_with_trendline page 1 difference heatmap"></td>
  <td>changed: 53267 px (2.60%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 3.4776<br>RMSE RGB: 24.655<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic110_chart_with_legend</b><br>Page 1</td>
  <td><img src="images/classic110_chart_with_legend_p1_heatmap.png" width="760" alt="classic110_chart_with_legend page 1 difference heatmap"></td>
  <td>changed: 89553 px (4.37%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 5.8138<br>RMSE RGB: 30.5097<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic111_chart_with_axis_labels</b><br>Page 1</td>
  <td><img src="images/classic111_chart_with_axis_labels_p1_heatmap.png" width="760" alt="classic111_chart_with_axis_labels page 1 difference heatmap"></td>
  <td>changed: 72191 px (3.53%)<br>bbox: [113, 147, 1055, 726]<br>mean abs RGB: 4.8261<br>RMSE RGB: 28.2283<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic112_multiple_charts</b><br>Page 1</td>
  <td><img src="images/classic112_multiple_charts_p1_heatmap.png" width="760" alt="classic112_multiple_charts page 1 difference heatmap"></td>
  <td>changed: 85906 px (4.20%)<br>bbox: [113, 147, 1055, 1126]<br>mean abs RGB: 5.5396<br>RMSE RGB: 29.8878<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic113_chart_sheet</b><br>Page 1</td>
  <td><img src="images/classic113_chart_sheet_p1_heatmap.png" width="760" alt="classic113_chart_sheet page 1 difference heatmap"></td>
  <td>changed: 124355 px (6.07%)<br>bbox: [114, 148, 1055, 838]<br>mean abs RGB: 7.6881<br>RMSE RGB: 34.2139<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset</b><br>Page 1</td>
  <td><img src="images/classic114_chart_large_dataset_p1_heatmap.png" width="760" alt="classic114_chart_large_dataset page 1 difference heatmap"></td>
  <td>changed: 66537 px (3.25%)<br>bbox: [113, 147, 1055, 1501]<br>mean abs RGB: 4.7366<br>RMSE RGB: 29.9781<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset</b><br>Page 2</td>
  <td><img src="images/classic114_chart_large_dataset_p2_heatmap.png" width="760" alt="classic114_chart_large_dataset page 2 difference heatmap"></td>
  <td>changed: 43878 px (2.14%)<br>bbox: [113, 148, 318, 1501]<br>mean abs RGB: 3.308<br>RMSE RGB: 25.6324<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset</b><br>Page 3</td>
  <td><img src="images/classic114_chart_large_dataset_p3_heatmap.png" width="760" alt="classic114_chart_large_dataset page 3 difference heatmap"></td>
  <td>changed: 10595 px (0.52%)<br>bbox: [114, 148, 318, 611]<br>mean abs RGB: 0.8<br>RMSE RGB: 12.6233<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic115_chart_negative_values</b><br>Page 1</td>
  <td><img src="images/classic115_chart_negative_values_p1_heatmap.png" width="760" alt="classic115_chart_negative_values page 1 difference heatmap"></td>
  <td>changed: 60943 px (2.98%)<br>bbox: [113, 146, 1055, 726]<br>mean abs RGB: 3.9424<br>RMSE RGB: 25.4286<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic116_percent_stacked_area</b><br>Page 1</td>
  <td><img src="images/classic116_percent_stacked_area_p1_heatmap.png" width="760" alt="classic116_percent_stacked_area page 1 difference heatmap"></td>
  <td>changed: 485131 px (23.69%)<br>bbox: [112, 147, 1055, 954]<br>mean abs RGB: 30.0173<br>RMSE RGB: 65.6399<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic117_stock_ohlc_chart</b><br>Page 1</td>
  <td><img src="images/classic117_stock_ohlc_chart_p1_heatmap.png" width="760" alt="classic117_stock_ohlc_chart page 1 difference heatmap"></td>
  <td>changed: 104654 px (5.11%)<br>bbox: [115, 147, 1055, 726]<br>mean abs RGB: 6.9282<br>RMSE RGB: 33.9696<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic118_bar_chart_custom_colors</b><br>Page 1</td>
  <td><img src="images/classic118_bar_chart_custom_colors_p1_heatmap.png" width="760" alt="classic118_bar_chart_custom_colors page 1 difference heatmap"></td>
  <td>changed: 85972 px (4.20%)<br>bbox: [113, 148, 1055, 726]<br>mean abs RGB: 6.3216<br>RMSE RGB: 34.9523<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic119_dashboard_multi_charts</b><br>Page 1</td>
  <td><img src="images/classic119_dashboard_multi_charts_p1_heatmap.png" width="760" alt="classic119_dashboard_multi_charts page 1 difference heatmap"></td>
  <td>changed: 228342 px (11.15%)<br>bbox: [113, 149, 1055, 1021]<br>mean abs RGB: 14.4575<br>RMSE RGB: 46.9064<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic120_chart_with_date_axis</b><br>Page 1</td>
  <td><img src="images/classic120_chart_with_date_axis_p1_heatmap.png" width="760" alt="classic120_chart_with_date_axis page 1 difference heatmap"></td>
  <td>changed: 49234 px (2.40%)<br>bbox: [114, 147, 1055, 726]<br>mean abs RGB: 3.4312<br>RMSE RGB: 25.1869<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic121_thin_borders</b><br>Page 1</td>
  <td><img src="images/classic121_thin_borders_p1_heatmap.png" width="760" alt="classic121_thin_borders page 1 difference heatmap"></td>
  <td>changed: 24579 px (1.20%)<br>bbox: [112, 140, 533, 334]<br>mean abs RGB: 1.9073<br>RMSE RGB: 19.6056<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic122_thick_outer_thin_inner</b><br>Page 1</td>
  <td><img src="images/classic122_thick_outer_thin_inner_p1_heatmap.png" width="760" alt="classic122_thick_outer_thin_inner page 1 difference heatmap"></td>
  <td>changed: 29746 px (1.45%)<br>bbox: [110, 139, 535, 330]<br>mean abs RGB: 2.5368<br>RMSE RGB: 23.1421<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic123_dashed_borders</b><br>Page 1</td>
  <td><img src="images/classic123_dashed_borders_p1_heatmap.png" width="760" alt="classic123_dashed_borders page 1 difference heatmap"></td>
  <td>changed: 16563 px (0.81%)<br>bbox: [114, 147, 346, 330]<br>mean abs RGB: 1.2945<br>RMSE RGB: 16.1148<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic124_colored_borders</b><br>Page 1</td>
  <td><img src="images/classic124_colored_borders_p1_heatmap.png" width="760" alt="classic124_colored_borders page 1 difference heatmap"></td>
  <td>changed: 27823 px (1.36%)<br>bbox: [113, 147, 545, 364]<br>mean abs RGB: 2.0621<br>RMSE RGB: 20.2254<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic125_solid_fills</b><br>Page 1</td>
  <td><img src="images/classic125_solid_fills_p1_heatmap.png" width="760" alt="classic125_solid_fills page 1 difference heatmap"></td>
  <td>changed: 40793 px (1.99%)<br>bbox: [114, 147, 332, 432]<br>mean abs RGB: 1.8858<br>RMSE RGB: 18.1618<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic126_dark_header</b><br>Page 1</td>
  <td><img src="images/classic126_dark_header_p1_heatmap.png" width="760" alt="classic126_dark_header page 1 difference heatmap"></td>
  <td>changed: 33828 px (1.65%)<br>bbox: [109, 142, 539, 330]<br>mean abs RGB: 2.5211<br>RMSE RGB: 21.8357<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic127_font_styles</b><br>Page 1</td>
  <td><img src="images/classic127_font_styles_p1_heatmap.png" width="760" alt="classic127_font_styles page 1 difference heatmap"></td>
  <td>changed: 30313 px (1.48%)<br>bbox: [113, 147, 504, 428]<br>mean abs RGB: 2.3283<br>RMSE RGB: 21.8019<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic128_font_sizes</b><br>Page 1</td>
  <td><img src="images/classic128_font_sizes_p1_heatmap.png" width="760" alt="classic128_font_sizes page 1 difference heatmap"></td>
  <td>changed: 21264 px (1.04%)<br>bbox: [113, 147, 465, 535]<br>mean abs RGB: 1.7743<br>RMSE RGB: 19.338<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic129_alignment_combos</b><br>Page 1</td>
  <td><img src="images/classic129_alignment_combos_p1_heatmap.png" width="760" alt="classic129_alignment_combos page 1 difference heatmap"></td>
  <td>changed: 18911 px (0.92%)<br>bbox: [113, 147, 849, 428]<br>mean abs RGB: 1.5246<br>RMSE RGB: 17.6753<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic130_wrap_and_indent</b><br>Page 1</td>
  <td><img src="images/classic130_wrap_and_indent_p1_heatmap.png" width="760" alt="classic130_wrap_and_indent page 1 difference heatmap"></td>
  <td>changed: 21860 px (1.07%)<br>bbox: [113, 147, 660, 434]<br>mean abs RGB: 1.7069<br>RMSE RGB: 18.5512<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic131_number_formats</b><br>Page 1</td>
  <td><img src="images/classic131_number_formats_p1_heatmap.png" width="760" alt="classic131_number_formats page 1 difference heatmap"></td>
  <td>changed: 36463 px (1.78%)<br>bbox: [113, 147, 838, 486]<br>mean abs RGB: 2.8009<br>RMSE RGB: 23.6416<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic132_striped_table</b><br>Page 1</td>
  <td><img src="images/classic132_striped_table_p1_heatmap.png" width="760" alt="classic132_striped_table page 1 difference heatmap"></td>
  <td>changed: 103560 px (5.06%)<br>bbox: [109, 141, 533, 493]<br>mean abs RGB: 3.3997<br>RMSE RGB: 22.4478<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic133_gradient_rows</b><br>Page 1</td>
  <td><img src="images/classic133_gradient_rows_p1_heatmap.png" width="760" alt="classic133_gradient_rows page 1 difference heatmap"></td>
  <td>changed: 91123 px (4.45%)<br>bbox: [109, 147, 467, 494]<br>mean abs RGB: 4.1941<br>RMSE RGB: 30.0244<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic134_heatmap</b><br>Page 1</td>
  <td><img src="images/classic134_heatmap_p1_heatmap.png" width="760" alt="classic134_heatmap page 1 difference heatmap"></td>
  <td>changed: 142429 px (6.96%)<br>bbox: [114, 147, 846, 400]<br>mean abs RGB: 7.6566<br>RMSE RGB: 36.5664<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic135_bottom_border_only</b><br>Page 1</td>
  <td><img src="images/classic135_bottom_border_only_p1_heatmap.png" width="760" alt="classic135_bottom_border_only page 1 difference heatmap"></td>
  <td>changed: 16069 px (0.78%)<br>bbox: [113, 149, 558, 330]<br>mean abs RGB: 1.3436<br>RMSE RGB: 16.8275<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic136_financial_report_styled</b><br>Page 1</td>
  <td><img src="images/classic136_financial_report_styled_p1_heatmap.png" width="760" alt="classic136_financial_report_styled page 1 difference heatmap"></td>
  <td>changed: 74760 px (3.65%)<br>bbox: [109, 141, 761, 458]<br>mean abs RGB: 5.3806<br>RMSE RGB: 31.9916<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic137_checkerboard</b><br>Page 1</td>
  <td><img src="images/classic137_checkerboard_p1_heatmap.png" width="760" alt="classic137_checkerboard page 1 difference heatmap"></td>
  <td>changed: 121580 px (5.94%)<br>bbox: [109, 143, 584, 567]<br>mean abs RGB: 9.1401<br>RMSE RGB: 40.8038<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic138_color_grid</b><br>Page 1</td>
  <td><img src="images/classic138_color_grid_p1_heatmap.png" width="760" alt="classic138_color_grid page 1 difference heatmap"></td>
  <td>changed: 67511 px (3.30%)<br>bbox: [109, 143, 608, 400]<br>mean abs RGB: 2.4721<br>RMSE RGB: 17.7032<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic139_pattern_fills</b><br>Page 1</td>
  <td><img src="images/classic139_pattern_fills_p1_heatmap.png" width="760" alt="classic139_pattern_fills page 1 difference heatmap"></td>
  <td>changed: 74278 px (3.63%)<br>bbox: [114, 147, 584, 553]<br>mean abs RGB: 3.7935<br>RMSE RGB: 25.2677<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic140_rotated_text</b><br>Page 1</td>
  <td><img src="images/classic140_rotated_text_p1_heatmap.png" width="760" alt="classic140_rotated_text page 1 difference heatmap"></td>
  <td>changed: 18777 px (0.92%)<br>bbox: [113, 148, 421, 1091]<br>mean abs RGB: 1.4674<br>RMSE RGB: 17.2128<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic141_mixed_edge_borders</b><br>Page 1</td>
  <td><img src="images/classic141_mixed_edge_borders_p1_heatmap.png" width="760" alt="classic141_mixed_edge_borders page 1 difference heatmap"></td>
  <td>changed: 27751 px (1.36%)<br>bbox: [113, 147, 705, 489]<br>mean abs RGB: 2.0572<br>RMSE RGB: 20.6506<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic142_styled_invoice</b><br>Page 1</td>
  <td><img src="images/classic142_styled_invoice_p1_heatmap.png" width="760" alt="classic142_styled_invoice page 1 difference heatmap"></td>
  <td>changed: 101398 px (4.95%)<br>bbox: [109, 143, 914, 583]<br>mean abs RGB: 4.6166<br>RMSE RGB: 27.8335<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic143_colored_tabs</b><br>Page 1</td>
  <td><img src="images/classic143_colored_tabs_p1_heatmap.png" width="760" alt="classic143_colored_tabs page 1 difference heatmap"></td>
  <td>changed: 5228 px (0.26%)<br>bbox: [114, 147, 318, 236]<br>mean abs RGB: 0.4217<br>RMSE RGB: 9.3245<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic143_colored_tabs</b><br>Page 2</td>
  <td><img src="images/classic143_colored_tabs_p2_heatmap.png" width="760" alt="classic143_colored_tabs page 2 difference heatmap"></td>
  <td>changed: 5119 px (0.25%)<br>bbox: [114, 147, 318, 240]<br>mean abs RGB: 0.4099<br>RMSE RGB: 9.1721<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic143_colored_tabs</b><br>Page 3</td>
  <td><img src="images/classic143_colored_tabs_p3_heatmap.png" width="760" alt="classic143_colored_tabs page 3 difference heatmap"></td>
  <td>changed: 5405 px (0.26%)<br>bbox: [114, 147, 318, 236]<br>mean abs RGB: 0.4402<br>RMSE RGB: 9.55<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic143_colored_tabs</b><br>Page 4</td>
  <td><img src="images/classic143_colored_tabs_p4_heatmap.png" width="760" alt="classic143_colored_tabs page 4 difference heatmap"></td>
  <td>changed: 4847 px (0.24%)<br>bbox: [114, 147, 318, 239]<br>mean abs RGB: 0.3948<br>RMSE RGB: 9.0266<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic144_note_style_cells</b><br>Page 1</td>
  <td><img src="images/classic144_note_style_cells_p1_heatmap.png" width="760" alt="classic144_note_style_cells page 1 difference heatmap"></td>
  <td>changed: 50586 px (2.47%)<br>bbox: [113, 147, 761, 338]<br>mean abs RGB: 1.5868<br>RMSE RGB: 15.2961<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic145_status_badges</b><br>Page 1</td>
  <td><img src="images/classic145_status_badges_p1_heatmap.png" width="760" alt="classic145_status_badges page 1 difference heatmap"></td>
  <td>changed: 93673 px (4.57%)<br>bbox: [109, 141, 855, 400]<br>mean abs RGB: 4.624<br>RMSE RGB: 27.2155<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic146_double_border_table</b><br>Page 1</td>
  <td><img src="images/classic146_double_border_table_p1_heatmap.png" width="760" alt="classic146_double_border_table page 1 difference heatmap"></td>
  <td>changed: 39069 px (1.91%)<br>bbox: [109, 139, 681, 303]<br>mean abs RGB: 2.4838<br>RMSE RGB: 21.7676<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled</b><br>Page 1</td>
  <td><img src="images/classic147_multi_sheet_styled_p1_heatmap.png" width="760" alt="classic147_multi_sheet_styled page 1 difference heatmap"></td>
  <td>changed: 24322 px (1.19%)<br>bbox: [109, 141, 491, 302]<br>mean abs RGB: 1.5569<br>RMSE RGB: 16.1441<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled</b><br>Page 2</td>
  <td><img src="images/classic147_multi_sheet_styled_p2_heatmap.png" width="760" alt="classic147_multi_sheet_styled page 2 difference heatmap"></td>
  <td>changed: 44038 px (2.15%)<br>bbox: [109, 141, 867, 300]<br>mean abs RGB: 2.817<br>RMSE RGB: 21.5081<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled</b><br>Page 3</td>
  <td><img src="images/classic147_multi_sheet_styled_p3_heatmap.png" width="760" alt="classic147_multi_sheet_styled page 3 difference heatmap"></td>
  <td>changed: 31829 px (1.55%)<br>bbox: [109, 141, 679, 299]<br>mean abs RGB: 1.883<br>RMSE RGB: 17.7709<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic148_frozen_styled_grid</b><br>Page 1</td>
  <td><img src="images/classic148_frozen_styled_grid_p1_heatmap.png" width="760" alt="classic148_frozen_styled_grid page 1 difference heatmap"></td>
  <td>changed: 426308 px (20.82%)<br>bbox: [109, 141, 1102, 806]<br>mean abs RGB: 13.6026<br>RMSE RGB: 42.6047<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic149_merged_styled_sections</b><br>Page 1</td>
  <td><img src="images/classic149_merged_styled_sections_p1_heatmap.png" width="760" alt="classic149_merged_styled_sections page 1 difference heatmap"></td>
  <td>changed: 100778 px (4.92%)<br>bbox: [109, 142, 867, 552]<br>mean abs RGB: 6.6889<br>RMSE RGB: 35.235<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic150_kitchen_sink_styles</b><br>Page 1</td>
  <td><img src="images/classic150_kitchen_sink_styles_p1_heatmap.png" width="760" alt="classic150_kitchen_sink_styles page 1 difference heatmap"></td>
  <td>changed: 90799 px (4.43%)<br>bbox: [109, 142, 996, 615]<br>mean abs RGB: 6.0483<br>RMSE RGB: 33.3577<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic151_multilingual_greetings</b><br>Page 1</td>
  <td><img src="images/classic151_multilingual_greetings_p1_heatmap.png" width="760" alt="classic151_multilingual_greetings page 1 difference heatmap"></td>
  <td>changed: 33925 px (1.66%)<br>bbox: [113, 147, 979, 549]<br>mean abs RGB: 2.384<br>RMSE RGB: 21.0968<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic152_emoji_sampler</b><br>Page 1</td>
  <td><img src="images/classic152_emoji_sampler_p1_heatmap.png" width="760" alt="classic152_emoji_sampler page 1 difference heatmap"></td>
  <td>changed: 23491 px (1.15%)<br>bbox: [113, 148, 484, 424]<br>mean abs RGB: 1.7477<br>RMSE RGB: 18.456<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic153_currency_symbols</b><br>Page 1</td>
  <td><img src="images/classic153_currency_symbols_p1_heatmap.png" width="760" alt="classic153_currency_symbols page 1 difference heatmap"></td>
  <td>changed: 33959 px (1.66%)<br>bbox: [113, 147, 569, 549]<br>mean abs RGB: 2.47<br>RMSE RGB: 21.8018<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic154_math_symbols</b><br>Page 1</td>
  <td><img src="images/classic154_math_symbols_p1_heatmap.png" width="760" alt="classic154_math_symbols page 1 difference heatmap"></td>
  <td>changed: 23695 px (1.16%)<br>bbox: [113, 147, 624, 458]<br>mean abs RGB: 1.6546<br>RMSE RGB: 17.5261<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic155_diacritical_marks</b><br>Page 1</td>
  <td><img src="images/classic155_diacritical_marks_p1_heatmap.png" width="760" alt="classic155_diacritical_marks page 1 difference heatmap"></td>
  <td>changed: 18382 px (0.90%)<br>bbox: [113, 147, 477, 490]<br>mean abs RGB: 1.2776<br>RMSE RGB: 15.4039<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic156_rtl_bidi_text</b><br>Page 1</td>
  <td><img src="images/classic156_rtl_bidi_text_p1_heatmap.png" width="760" alt="classic156_rtl_bidi_text page 1 difference heatmap"></td>
  <td>changed: 8022 px (0.39%)<br>bbox: [113, 148, 803, 299]<br>mean abs RGB: 0.5642<br>RMSE RGB: 10.2988<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic157_cjk_extended</b><br>Page 1</td>
  <td><img src="images/classic157_cjk_extended_p1_heatmap.png" width="760" alt="classic157_cjk_extended page 1 difference heatmap"></td>
  <td>changed: 42665 px (2.08%)<br>bbox: [113, 148, 975, 393]<br>mean abs RGB: 2.971<br>RMSE RGB: 23.5113<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic158_emoji_skin_tones</b><br>Page 1</td>
  <td><img src="images/classic158_emoji_skin_tones_p1_heatmap.png" width="760" alt="classic158_emoji_skin_tones page 1 difference heatmap"></td>
  <td>changed: 18240 px (0.89%)<br>bbox: [113, 147, 535, 330]<br>mean abs RGB: 1.3241<br>RMSE RGB: 15.9312<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic159_zwj_emoji</b><br>Page 1</td>
  <td><img src="images/classic159_zwj_emoji_p1_heatmap.png" width="760" alt="classic159_zwj_emoji page 1 difference heatmap"></td>
  <td>changed: 21304 px (1.04%)<br>bbox: [113, 148, 435, 459]<br>mean abs RGB: 1.5902<br>RMSE RGB: 17.6005<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic160_punctuation_marks</b><br>Page 1</td>
  <td><img src="images/classic160_punctuation_marks_p1_heatmap.png" width="760" alt="classic160_punctuation_marks page 1 difference heatmap"></td>
  <td>changed: 14956 px (0.73%)<br>bbox: [113, 147, 844, 397]<br>mean abs RGB: 1.0657<br>RMSE RGB: 14.2187<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic161_box_drawing</b><br>Page 1</td>
  <td><img src="images/classic161_box_drawing_p1_heatmap.png" width="760" alt="classic161_box_drawing page 1 difference heatmap"></td>
  <td>changed: 28113 px (1.37%)<br>bbox: [113, 147, 727, 361]<br>mean abs RGB: 2.2515<br>RMSE RGB: 21.549<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic162_cjk_emoji_styled</b><br>Page 1</td>
  <td><img src="images/classic162_cjk_emoji_styled_p1_heatmap.png" width="760" alt="classic162_cjk_emoji_styled page 1 difference heatmap"></td>
  <td>changed: 26789 px (1.31%)<br>bbox: [109, 142, 678, 300]<br>mean abs RGB: 1.9358<br>RMSE RGB: 19.6519<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic163_cyrillic_alphabets</b><br>Page 1</td>
  <td><img src="images/classic163_cyrillic_alphabets_p1_heatmap.png" width="760" alt="classic163_cyrillic_alphabets page 1 difference heatmap"></td>
  <td>changed: 30788 px (1.50%)<br>bbox: [114, 147, 878, 335]<br>mean abs RGB: 2.1182<br>RMSE RGB: 19.7216<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic164_indic_scripts</b><br>Page 1</td>
  <td><img src="images/classic164_indic_scripts_p1_heatmap.png" width="760" alt="classic164_indic_scripts page 1 difference heatmap"></td>
  <td>changed: 11306 px (0.55%)<br>bbox: [113, 147, 427, 333]<br>mean abs RGB: 0.8315<br>RMSE RGB: 12.6956<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic165_southeast_asian</b><br>Page 1</td>
  <td><img src="images/classic165_southeast_asian_p1_heatmap.png" width="760" alt="classic165_southeast_asian page 1 difference heatmap"></td>
  <td>changed: 19723 px (0.96%)<br>bbox: [113, 147, 601, 330]<br>mean abs RGB: 1.3333<br>RMSE RGB: 15.5222<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic166_emoji_progress</b><br>Page 1</td>
  <td><img src="images/classic166_emoji_progress_p1_heatmap.png" width="760" alt="classic166_emoji_progress page 1 difference heatmap"></td>
  <td>changed: 39599 px (1.93%)<br>bbox: [113, 147, 818, 361]<br>mean abs RGB: 2.7<br>RMSE RGB: 22.1283<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic167_musical_symbols</b><br>Page 1</td>
  <td><img src="images/classic167_musical_symbols_p1_heatmap.png" width="760" alt="classic167_musical_symbols page 1 difference heatmap"></td>
  <td>changed: 16574 px (0.81%)<br>bbox: [114, 147, 752, 332]<br>mean abs RGB: 1.2141<br>RMSE RGB: 15.2794<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic168_mixed_ltr_rtl_styled</b><br>Page 1</td>
  <td><img src="images/classic168_mixed_ltr_rtl_styled_p1_heatmap.png" width="760" alt="classic168_mixed_ltr_rtl_styled page 1 difference heatmap"></td>
  <td>changed: 38014 px (1.86%)<br>bbox: [109, 141, 797, 299]<br>mean abs RGB: 2.1791<br>RMSE RGB: 18.4825<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic169_korean_invoice</b><br>Page 1</td>
  <td><img src="images/classic169_korean_invoice_p1_heatmap.png" width="760" alt="classic169_korean_invoice page 1 difference heatmap"></td>
  <td>changed: 32512 px (1.59%)<br>bbox: [113, 144, 868, 458]<br>mean abs RGB: 2.4069<br>RMSE RGB: 21.5748<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic170_emoji_dashboard</b><br>Page 1</td>
  <td><img src="images/classic170_emoji_dashboard_p1_heatmap.png" width="760" alt="classic170_emoji_dashboard page 1 difference heatmap"></td>
  <td>changed: 47041 px (2.30%)<br>bbox: [114, 147, 671, 369]<br>mean abs RGB: 2.8413<br>RMSE RGB: 22.2776<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic171_ipa_phonetic</b><br>Page 1</td>
  <td><img src="images/classic171_ipa_phonetic_p1_heatmap.png" width="760" alt="classic171_ipa_phonetic page 1 difference heatmap"></td>
  <td>changed: 22591 px (1.10%)<br>bbox: [113, 147, 721, 397]<br>mean abs RGB: 1.5753<br>RMSE RGB: 17.0863<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic172_emoji_timeline</b><br>Page 1</td>
  <td><img src="images/classic172_emoji_timeline_p1_heatmap.png" width="760" alt="classic172_emoji_timeline page 1 difference heatmap"></td>
  <td>changed: 36199 px (1.77%)<br>bbox: [114, 147, 704, 424]<br>mean abs RGB: 2.8224<br>RMSE RGB: 23.8492<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic173_african_languages</b><br>Page 1</td>
  <td><img src="images/classic173_african_languages_p1_heatmap.png" width="760" alt="classic173_african_languages page 1 difference heatmap"></td>
  <td>changed: 30562 px (1.49%)<br>bbox: [113, 148, 830, 397]<br>mean abs RGB: 2.2497<br>RMSE RGB: 20.8522<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic174_technical_symbols</b><br>Page 1</td>
  <td><img src="images/classic174_technical_symbols_p1_heatmap.png" width="760" alt="classic174_technical_symbols page 1 difference heatmap"></td>
  <td>changed: 33569 px (1.64%)<br>bbox: [113, 146, 804, 424]<br>mean abs RGB: 2.3561<br>RMSE RGB: 20.9713<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic175_multiscript_catalog</b><br>Page 1</td>
  <td><img src="images/classic175_multiscript_catalog_p1_heatmap.png" width="760" alt="classic175_multiscript_catalog page 1 difference heatmap"></td>
  <td>changed: 45751 px (2.23%)<br>bbox: [109, 142, 1007, 424]<br>mean abs RGB: 2.92<br>RMSE RGB: 22.7524<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic176_combining_characters</b><br>Page 1</td>
  <td><img src="images/classic176_combining_characters_p1_heatmap.png" width="760" alt="classic176_combining_characters page 1 difference heatmap"></td>
  <td>changed: 24815 px (1.21%)<br>bbox: [113, 147, 752, 365]<br>mean abs RGB: 1.7467<br>RMSE RGB: 18.0302<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic177_emoji_calendar</b><br>Page 1</td>
  <td><img src="images/classic177_emoji_calendar_p1_heatmap.png" width="760" alt="classic177_emoji_calendar page 1 difference heatmap"></td>
  <td>changed: 36117 px (1.76%)<br>bbox: [113, 147, 550, 549]<br>mean abs RGB: 2.7187<br>RMSE RGB: 23.1443<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic178_caucasus_ethiopic</b><br>Page 1</td>
  <td><img src="images/classic178_caucasus_ethiopic_p1_heatmap.png" width="760" alt="classic178_caucasus_ethiopic page 1 difference heatmap"></td>
  <td>changed: 24305 px (1.19%)<br>bbox: [113, 147, 718, 333]<br>mean abs RGB: 1.7258<br>RMSE RGB: 18.0831<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic179_emoji_inventory</b><br>Page 1</td>
  <td><img src="images/classic179_emoji_inventory_p1_heatmap.png" width="760" alt="classic179_emoji_inventory page 1 difference heatmap"></td>
  <td>changed: 49337 px (2.41%)<br>bbox: [109, 143, 843, 486]<br>mean abs RGB: 3.2538<br>RMSE RGB: 23.8164<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic180_polyglot_paragraph</b><br>Page 1</td>
  <td><img src="images/classic180_polyglot_paragraph_p1_heatmap.png" width="760" alt="classic180_polyglot_paragraph page 1 difference heatmap"></td>
  <td>changed: 23370 px (1.14%)<br>bbox: [113, 148, 667, 427]<br>mean abs RGB: 1.6467<br>RMSE RGB: 17.5609<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic181_feedback_tracker_with_images</b><br>Page 1</td>
  <td><img src="images/classic181_feedback_tracker_with_images_p1_heatmap.png" width="760" alt="classic181_feedback_tracker_with_images page 1 difference heatmap"></td>
  <td>changed: 322964 px (15.77%)<br>bbox: [109, 143, 1090, 1377]<br>mean abs RGB: 22.0614<br>RMSE RGB: 60.4456<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic182_dense_long_text_columns</b><br>Page 1</td>
  <td><img src="images/classic182_dense_long_text_columns_p1_heatmap.png" width="760" alt="classic182_dense_long_text_columns page 1 difference heatmap"></td>
  <td>changed: 82951 px (4.05%)<br>bbox: [114, 147, 1100, 428]<br>mean abs RGB: 6.3459<br>RMSE RGB: 35.5457<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic182_dense_long_text_columns</b><br>Page 2</td>
  <td><img src="images/classic182_dense_long_text_columns_p2_heatmap.png" width="760" alt="classic182_dense_long_text_columns page 2 difference heatmap"></td>
  <td>changed: 59893 px (2.93%)<br>bbox: [114, 147, 1000, 427]<br>mean abs RGB: 4.5371<br>RMSE RGB: 29.9726<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic183_mixed_content_grid</b><br>Page 1</td>
  <td><img src="images/classic183_mixed_content_grid_p1_heatmap.png" width="760" alt="classic183_mixed_content_grid page 1 difference heatmap"></td>
  <td>changed: 94636 px (4.62%)<br>bbox: [114, 147, 990, 628]<br>mean abs RGB: 6.3586<br>RMSE RGB: 33.0255<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic184_wide_narrow_columns</b><br>Page 1</td>
  <td><img src="images/classic184_wide_narrow_columns_p1_heatmap.png" width="760" alt="classic184_wide_narrow_columns page 1 difference heatmap"></td>
  <td>changed: 148709 px (7.26%)<br>bbox: [109, 143, 937, 799]<br>mean abs RGB: 11.1769<br>RMSE RGB: 46.5064<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic185_tall_rows_vertical_align</b><br>Page 1</td>
  <td><img src="images/classic185_tall_rows_vertical_align_p1_heatmap.png" width="760" alt="classic185_tall_rows_vertical_align page 1 difference heatmap"></td>
  <td>changed: 37555 px (1.83%)<br>bbox: [113, 149, 1012, 618]<br>mean abs RGB: 2.9694<br>RMSE RGB: 24.4804<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic186_multi_sheet_image_report</b><br>Page 1</td>
  <td><img src="images/classic186_multi_sheet_image_report_p1_heatmap.png" width="760" alt="classic186_multi_sheet_image_report page 1 difference heatmap"></td>
  <td>changed: 17218 px (0.84%)<br>bbox: [113, 148, 620, 330]<br>mean abs RGB: 1.349<br>RMSE RGB: 16.5216<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic186_multi_sheet_image_report</b><br>Page 2</td>
  <td><img src="images/classic186_multi_sheet_image_report_p2_heatmap.png" width="760" alt="classic186_multi_sheet_image_report page 2 difference heatmap"></td>
  <td>changed: 110420 px (5.39%)<br>bbox: [113, 147, 802, 778]<br>mean abs RGB: 7.0782<br>RMSE RGB: 35.353<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic187_bug_report_with_screenshots</b><br>Page 1</td>
  <td><img src="images/classic187_bug_report_with_screenshots_p1_heatmap.png" width="760" alt="classic187_bug_report_with_screenshots page 1 difference heatmap"></td>
  <td>changed: 189441 px (9.25%)<br>bbox: [109, 143, 1101, 744]<br>mean abs RGB: 13.0993<br>RMSE RGB: 48.7077<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic188_merged_header_with_images</b><br>Page 1</td>
  <td><img src="images/classic188_merged_header_with_images_p1_heatmap.png" width="760" alt="classic188_merged_header_with_images page 1 difference heatmap"></td>
  <td>changed: 76491 px (3.74%)<br>bbox: [113, 161, 891, 605]<br>mean abs RGB: 4.6778<br>RMSE RGB: 27.9272<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic189_alternating_image_text_rows</b><br>Page 1</td>
  <td><img src="images/classic189_alternating_image_text_rows_p1_heatmap.png" width="760" alt="classic189_alternating_image_text_rows page 1 difference heatmap"></td>
  <td>changed: 182983 px (8.94%)<br>bbox: [113, 147, 871, 1080]<br>mean abs RGB: 11.8403<br>RMSE RGB: 44.6943<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic190_dashboard_kpi_images</b><br>Page 1</td>
  <td><img src="images/classic190_dashboard_kpi_images_p1_heatmap.png" width="760" alt="classic190_dashboard_kpi_images page 1 difference heatmap"></td>
  <td>changed: 80684 px (3.94%)<br>bbox: [109, 178, 919, 636]<br>mean abs RGB: 6.1248<br>RMSE RGB: 34.661<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 1</td>
  <td><img src="images/classic191_payroll_calculator_p1_heatmap.png" width="760" alt="classic191_payroll_calculator page 1 difference heatmap"></td>
  <td>changed: 197134 px (9.63%)<br>bbox: [109, 142, 1036, 510]<br>mean abs RGB: 5.3645<br>RMSE RGB: 26.9143<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 2</td>
  <td><img src="images/classic191_payroll_calculator_p2_heatmap.png" width="760" alt="classic191_payroll_calculator page 2 difference heatmap"></td>
  <td>changed: 235065 px (11.48%)<br>bbox: [109, 142, 1079, 510]<br>mean abs RGB: 7.744<br>RMSE RGB: 32.9932<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 3</td>
  <td><img src="images/classic191_payroll_calculator_p3_heatmap.png" width="760" alt="classic191_payroll_calculator page 3 difference heatmap"></td>
  <td>changed: 208460 px (10.18%)<br>bbox: [109, 142, 996, 510]<br>mean abs RGB: 6.4974<br>RMSE RGB: 29.4648<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 4</td>
  <td><img src="images/classic191_payroll_calculator_p4_heatmap.png" width="760" alt="classic191_payroll_calculator page 4 difference heatmap"></td>
  <td>changed: 197107 px (9.63%)<br>bbox: [109, 143, 1047, 541]<br>mean abs RGB: 5.2853<br>RMSE RGB: 26.2707<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 5</td>
  <td><img src="images/classic191_payroll_calculator_p5_heatmap.png" width="760" alt="classic191_payroll_calculator page 5 difference heatmap"></td>
  <td>changed: 256831 px (12.54%)<br>bbox: [109, 143, 1102, 541]<br>mean abs RGB: 7.7306<br>RMSE RGB: 32.0829<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 6</td>
  <td><img src="images/classic191_payroll_calculator_p6_heatmap.png" width="760" alt="classic191_payroll_calculator page 6 difference heatmap"></td>
  <td>changed: 245847 px (12.01%)<br>bbox: [109, 143, 1102, 541]<br>mean abs RGB: 7.9491<br>RMSE RGB: 33.159<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 7</td>
  <td><img src="images/classic191_payroll_calculator_p7_heatmap.png" width="760" alt="classic191_payroll_calculator page 7 difference heatmap"></td>
  <td>changed: 86882 px (4.24%)<br>bbox: [109, 143, 444, 541]<br>mean abs RGB: 2.5229<br>RMSE RGB: 17.8939<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 8</td>
  <td><img src="images/classic191_payroll_calculator_p8_heatmap.png" width="760" alt="classic191_payroll_calculator page 8 difference heatmap"></td>
  <td>changed: 205186 px (10.02%)<br>bbox: [109, 241, 1126, 744]<br>mean abs RGB: 6.1124<br>RMSE RGB: 28.5462<br>threshold: 12, gain: 5.0</td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator</b><br>Page 9</td>
  <td><img src="images/classic191_payroll_calculator_p9_heatmap.png" width="760" alt="classic191_payroll_calculator page 9 difference heatmap"></td>
  <td>changed: 107348 px (5.24%)<br>bbox: [109, 149, 750, 744]<br>mean abs RGB: 3.5902<br>RMSE RGB: 22.9371<br>threshold: 12, gain: 5.0</td>
</tr>
</table>

## Visual Comparison

Scores compare java MiniPdf against Microsoft 365 Excel Reference. LibreOffice is an auxiliary rendering and does not affect scores.

<table>
<tr><th>java MiniPdf</th><th>Microsoft 365 Excel Reference</th><th>LibreOffice</th></tr>
<tr>
  <td><b>classic01_basic_table_with_headers<br><small>format: xlsx | case: classic01_basic_table_with_headers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic01_basic_table_with_headers <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic01_basic_table_with_headers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic01_basic_table_with_headers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic01_basic_table_with_headers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic02_multiple_worksheets<br><small>format: xlsx | case: classic02_multiple_worksheets | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic02_multiple_worksheets <span style="color:#3fb950">⬤</span> 98.4%</td>
</tr>
<tr>
  <td><img src="images/classic02_multiple_worksheets_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic02_multiple_worksheets_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic02_multiple_worksheets_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic02_multiple_worksheets_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic02_multiple_worksheets_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic02_multiple_worksheets_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic02_multiple_worksheets_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic02_multiple_worksheets_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic02_multiple_worksheets_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic03_empty_workbook<br><small>format: xlsx | case: classic03_empty_workbook | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic03_empty_workbook <span style="color:#3fb950">⬤</span> 100.0%</td>
</tr>
<tr>
  <td><img src="images/classic03_empty_workbook_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic03_empty_workbook_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic03_empty_workbook_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic04_single_cell<br><small>format: xlsx | case: classic04_single_cell | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic04_single_cell <span style="color:#3fb950">⬤</span> 100.0%</td>
</tr>
<tr>
  <td><img src="images/classic04_single_cell_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic04_single_cell_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic04_single_cell_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic05_wide_table<br><small>format: xlsx | case: classic05_wide_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic05_wide_table <span style="color:#d29922">⬤</span> 86.3%</td>
</tr>
<tr>
  <td><img src="images/classic05_wide_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic05_wide_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic05_wide_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic05_wide_table_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic05_wide_table_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic05_wide_table_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic05_wide_table_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic05_wide_table_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic05_wide_table_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic06_tall_table<br><small>format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic06_tall_table <span style="color:#d29922">⬤</span> 80.6%</td>
</tr>
<tr>
  <td><img src="images/classic06_tall_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic06_tall_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic06_tall_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic06_tall_table_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic06_tall_table_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic06_tall_table_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic06_tall_table_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic06_tall_table_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic06_tall_table_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic06_tall_table_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic06_tall_table_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic06_tall_table_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic06_tall_table_p5_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic06_tall_table_p5_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic06_tall_table_p5_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic07_numbers_only<br><small>format: xlsx | case: classic07_numbers_only | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic07_numbers_only <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic07_numbers_only_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic07_numbers_only_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic07_numbers_only_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic08_mixed_text_and_numbers<br><small>format: xlsx | case: classic08_mixed_text_and_numbers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic08_mixed_text_and_numbers <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic08_mixed_text_and_numbers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic08_mixed_text_and_numbers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic08_mixed_text_and_numbers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic09_long_text<br><small>format: xlsx | case: classic09_long_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic09_long_text <span style="color:#f85149">⬤</span> 18.9%</td>
</tr>
<tr>
  <td><img src="images/classic09_long_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic09_long_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p5_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p5_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p6_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p6_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p7_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p7_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p8_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p8_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p9_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p9_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p10_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p10_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p11_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p11_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic09_long_text_p12_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic09_long_text_p12_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic10_special_xml_characters<br><small>format: xlsx | case: classic10_special_xml_characters | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic10_special_xml_characters <span style="color:#d29922">⬤</span> 85.6%</td>
</tr>
<tr>
  <td><img src="images/classic10_special_xml_characters_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic10_special_xml_characters_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic10_special_xml_characters_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic11_sparse_rows<br><small>format: xlsx | case: classic11_sparse_rows | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic11_sparse_rows <span style="color:#3fb950">⬤</span> 94.3%</td>
</tr>
<tr>
  <td><img src="images/classic11_sparse_rows_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic11_sparse_rows_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic11_sparse_rows_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic11_sparse_rows_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic11_sparse_rows_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic11_sparse_rows_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic12_sparse_columns<br><small>format: xlsx | case: classic12_sparse_columns | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic12_sparse_columns <span style="color:#f85149">⬤</span> 66.8%</td>
</tr>
<tr>
  <td><img src="images/classic12_sparse_columns_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic12_sparse_columns_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic12_sparse_columns_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic12_sparse_columns_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic13_date_strings<br><small>format: xlsx | case: classic13_date_strings | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic13_date_strings <span style="color:#3fb950">⬤</span> 96.4%</td>
</tr>
<tr>
  <td><img src="images/classic13_date_strings_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic13_date_strings_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic13_date_strings_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic14_decimal_numbers<br><small>format: xlsx | case: classic14_decimal_numbers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic14_decimal_numbers <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic14_decimal_numbers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic14_decimal_numbers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic14_decimal_numbers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic15_negative_numbers<br><small>format: xlsx | case: classic15_negative_numbers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic15_negative_numbers <span style="color:#3fb950">⬤</span> 96.1%</td>
</tr>
<tr>
  <td><img src="images/classic15_negative_numbers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic15_negative_numbers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic15_negative_numbers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic16_percentage_strings<br><small>format: xlsx | case: classic16_percentage_strings | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic16_percentage_strings <span style="color:#3fb950">⬤</span> 98.5%</td>
</tr>
<tr>
  <td><img src="images/classic16_percentage_strings_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic16_percentage_strings_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic16_percentage_strings_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic17_currency_strings<br><small>format: xlsx | case: classic17_currency_strings | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic17_currency_strings <span style="color:#3fb950">⬤</span> 99.5%</td>
</tr>
<tr>
  <td><img src="images/classic17_currency_strings_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic17_currency_strings_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic17_currency_strings_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic18_large_dataset<br><small>format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic18_large_dataset <span style="color:#f85149">⬤</span> 65.8%</td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p5_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p5_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p5_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p6_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p6_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p6_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p7_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p7_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p7_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p8_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p8_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p8_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p9_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p9_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p9_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p10_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p10_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p10_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p11_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p11_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p11_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p12_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p12_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p12_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p13_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p13_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p13_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p14_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p14_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p14_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p15_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p15_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p15_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p16_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p16_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p16_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p17_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p17_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p17_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p18_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p18_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p18_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p19_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p19_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p19_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p20_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p20_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p20_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p21_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p21_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p21_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p22_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p22_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p22_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p23_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p23_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p23_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic18_large_dataset_p24_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic18_large_dataset_p24_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic18_large_dataset_p24_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p25_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p26_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p27_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p28_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p29_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p30_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p31_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p32_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p33_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p34_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p35_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p36_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p37_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p38_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p39_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p40_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p41_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic18_large_dataset_p42_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic19_single_column_list<br><small>format: xlsx | case: classic19_single_column_list | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic19_single_column_list <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic19_single_column_list_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic19_single_column_list_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic19_single_column_list_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic20_all_empty_cells<br><small>format: xlsx | case: classic20_all_empty_cells | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic20_all_empty_cells <span style="color:#3fb950">⬤</span> 100.0%</td>
</tr>
<tr>
  <td><img src="images/classic20_all_empty_cells_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic20_all_empty_cells_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic20_all_empty_cells_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic21_header_only<br><small>format: xlsx | case: classic21_header_only | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic21_header_only <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic21_header_only_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic21_header_only_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic21_header_only_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic22_long_sheet_name<br><small>format: xlsx | case: classic22_long_sheet_name | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic22_long_sheet_name <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic22_long_sheet_name_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic22_long_sheet_name_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic22_long_sheet_name_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic23_unicode_text<br><small>format: xlsx | case: classic23_unicode_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic23_unicode_text <span style="color:#3fb950">⬤</span> 91.0%</td>
</tr>
<tr>
  <td><img src="images/classic23_unicode_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic23_unicode_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic23_unicode_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic24_red_text<br><small>format: xlsx | case: classic24_red_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic24_red_text <span style="color:#3fb950">⬤</span> 91.2%</td>
</tr>
<tr>
  <td><img src="images/classic24_red_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic24_red_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic24_red_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic25_multiple_colors<br><small>format: xlsx | case: classic25_multiple_colors | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic25_multiple_colors <span style="color:#3fb950">⬤</span> 92.6%</td>
</tr>
<tr>
  <td><img src="images/classic25_multiple_colors_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic25_multiple_colors_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic25_multiple_colors_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic26_inline_strings<br><small>format: xlsx | case: classic26_inline_strings | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic26_inline_strings <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic26_inline_strings_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic26_inline_strings_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic26_inline_strings_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic27_single_row<br><small>format: xlsx | case: classic27_single_row | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic27_single_row <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic27_single_row_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic27_single_row_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic27_single_row_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic28_duplicate_values<br><small>format: xlsx | case: classic28_duplicate_values | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic28_duplicate_values <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic28_duplicate_values_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic28_duplicate_values_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic28_duplicate_values_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic29_formula_results<br><small>format: xlsx | case: classic29_formula_results | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic29_formula_results <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic29_formula_results_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic29_formula_results_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic29_formula_results_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic30_mixed_empty_and_filled_sheets<br><small>format: xlsx | case: classic30_mixed_empty_and_filled_sheets | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic30_mixed_empty_and_filled_sheets <span style="color:#f85149">⬤</span> 68.3%</td>
</tr>
<tr>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><i>missing</i></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><img src="images/classic30_mixed_empty_and_filled_sheets_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><i>missing</i></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic31_bold_header_row<br><small>format: xlsx | case: classic31_bold_header_row | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic31_bold_header_row <span style="color:#3fb950">⬤</span> 98.0%</td>
</tr>
<tr>
  <td><img src="images/classic31_bold_header_row_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic31_bold_header_row_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic31_bold_header_row_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic32_right_aligned_numbers<br><small>format: xlsx | case: classic32_right_aligned_numbers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic32_right_aligned_numbers <span style="color:#3fb950">⬤</span> 98.7%</td>
</tr>
<tr>
  <td><img src="images/classic32_right_aligned_numbers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic32_right_aligned_numbers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic32_right_aligned_numbers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic33_centered_text<br><small>format: xlsx | case: classic33_centered_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic33_centered_text <span style="color:#3fb950">⬤</span> 99.9%</td>
</tr>
<tr>
  <td><img src="images/classic33_centered_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic33_centered_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic33_centered_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic34_explicit_column_widths<br><small>format: xlsx | case: classic34_explicit_column_widths | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic34_explicit_column_widths <span style="color:#3fb950">⬤</span> 97.2%</td>
</tr>
<tr>
  <td><img src="images/classic34_explicit_column_widths_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic34_explicit_column_widths_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic34_explicit_column_widths_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic35_explicit_row_heights<br><small>format: xlsx | case: classic35_explicit_row_heights | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic35_explicit_row_heights <span style="color:#3fb950">⬤</span> 96.5%</td>
</tr>
<tr>
  <td><img src="images/classic35_explicit_row_heights_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic35_explicit_row_heights_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic35_explicit_row_heights_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic36_merged_cells<br><small>format: xlsx | case: classic36_merged_cells | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic36_merged_cells <span style="color:#3fb950">⬤</span> 98.4%</td>
</tr>
<tr>
  <td><img src="images/classic36_merged_cells_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic36_merged_cells_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic36_merged_cells_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic37_freeze_panes<br><small>format: xlsx | case: classic37_freeze_panes | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic37_freeze_panes <span style="color:#d29922">⬤</span> 83.1%</td>
</tr>
<tr>
  <td><img src="images/classic37_freeze_panes_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic37_freeze_panes_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic37_freeze_panes_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic38_hyperlink_cell<br><small>format: xlsx | case: classic38_hyperlink_cell | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic38_hyperlink_cell <span style="color:#d29922">⬤</span> 87.3%</td>
</tr>
<tr>
  <td><img src="images/classic38_hyperlink_cell_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic38_hyperlink_cell_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic38_hyperlink_cell_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic39_financial_table<br><small>format: xlsx | case: classic39_financial_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic39_financial_table <span style="color:#3fb950">⬤</span> 99.6%</td>
</tr>
<tr>
  <td><img src="images/classic39_financial_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic39_financial_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic39_financial_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic40_scientific_notation<br><small>format: xlsx | case: classic40_scientific_notation | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic40_scientific_notation <span style="color:#3fb950">⬤</span> 94.0%</td>
</tr>
<tr>
  <td><img src="images/classic40_scientific_notation_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic40_scientific_notation_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic40_scientific_notation_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic41_integer_vs_float<br><small>format: xlsx | case: classic41_integer_vs_float | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic41_integer_vs_float <span style="color:#3fb950">⬤</span> 99.6%</td>
</tr>
<tr>
  <td><img src="images/classic41_integer_vs_float_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic41_integer_vs_float_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic41_integer_vs_float_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic42_boolean_values<br><small>format: xlsx | case: classic42_boolean_values | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic42_boolean_values <span style="color:#3fb950">⬤</span> 95.3%</td>
</tr>
<tr>
  <td><img src="images/classic42_boolean_values_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic42_boolean_values_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic42_boolean_values_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic43_inventory_report<br><small>format: xlsx | case: classic43_inventory_report | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic43_inventory_report <span style="color:#3fb950">⬤</span> 98.8%</td>
</tr>
<tr>
  <td><img src="images/classic43_inventory_report_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic43_inventory_report_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic43_inventory_report_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic44_employee_roster<br><small>format: xlsx | case: classic44_employee_roster | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic44_employee_roster <span style="color:#3fb950">⬤</span> 90.5%</td>
</tr>
<tr>
  <td><img src="images/classic44_employee_roster_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic44_employee_roster_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic44_employee_roster_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic45_sales_by_region<br><small>format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic45_sales_by_region <span style="color:#3fb950">⬤</span> 99.8%</td>
</tr>
<tr>
  <td><img src="images/classic45_sales_by_region_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic45_sales_by_region_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic45_sales_by_region_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic45_sales_by_region_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic45_sales_by_region_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic45_sales_by_region_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic45_sales_by_region_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic45_sales_by_region_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic45_sales_by_region_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic45_sales_by_region_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic45_sales_by_region_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic45_sales_by_region_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic46_grade_book<br><small>format: xlsx | case: classic46_grade_book | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic46_grade_book <span style="color:#3fb950">⬤</span> 99.5%</td>
</tr>
<tr>
  <td><img src="images/classic46_grade_book_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic46_grade_book_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic46_grade_book_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic47_time_series<br><small>format: xlsx | case: classic47_time_series | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic47_time_series <span style="color:#3fb950">⬤</span> 98.9%</td>
</tr>
<tr>
  <td><img src="images/classic47_time_series_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic47_time_series_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic47_time_series_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic48_survey_results<br><small>format: xlsx | case: classic48_survey_results | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic48_survey_results <span style="color:#3fb950">⬤</span> 96.5%</td>
</tr>
<tr>
  <td><img src="images/classic48_survey_results_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic48_survey_results_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic48_survey_results_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic49_contact_list<br><small>format: xlsx | case: classic49_contact_list | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic49_contact_list <span style="color:#3fb950">⬤</span> 92.8%</td>
</tr>
<tr>
  <td><img src="images/classic49_contact_list_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic49_contact_list_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic49_contact_list_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic50_budget_vs_actuals<br><small>format: xlsx | case: classic50_budget_vs_actuals | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic50_budget_vs_actuals <span style="color:#3fb950">⬤</span> 98.2%</td>
</tr>
<tr>
  <td><img src="images/classic50_budget_vs_actuals_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic50_budget_vs_actuals_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic50_budget_vs_actuals_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic50_budget_vs_actuals_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic50_budget_vs_actuals_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic50_budget_vs_actuals_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic50_budget_vs_actuals_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic50_budget_vs_actuals_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic50_budget_vs_actuals_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic51_product_catalog<br><small>format: xlsx | case: classic51_product_catalog | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic51_product_catalog <span style="color:#3fb950">⬤</span> 95.6%</td>
</tr>
<tr>
  <td><img src="images/classic51_product_catalog_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic51_product_catalog_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic51_product_catalog_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic52_pivot_summary<br><small>format: xlsx | case: classic52_pivot_summary | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic52_pivot_summary <span style="color:#3fb950">⬤</span> 99.0%</td>
</tr>
<tr>
  <td><img src="images/classic52_pivot_summary_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic52_pivot_summary_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic52_pivot_summary_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic53_invoice<br><small>format: xlsx | case: classic53_invoice | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic53_invoice <span style="color:#3fb950">⬤</span> 93.3%</td>
</tr>
<tr>
  <td><img src="images/classic53_invoice_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic53_invoice_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic53_invoice_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic54_multi_level_header<br><small>format: xlsx | case: classic54_multi_level_header | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic54_multi_level_header <span style="color:#3fb950">⬤</span> 99.4%</td>
</tr>
<tr>
  <td><img src="images/classic54_multi_level_header_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic54_multi_level_header_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic54_multi_level_header_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic55_error_values<br><small>format: xlsx | case: classic55_error_values | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic55_error_values <span style="color:#3fb950">⬤</span> 98.5%</td>
</tr>
<tr>
  <td><img src="images/classic55_error_values_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic55_error_values_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic55_error_values_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic56_alternating_row_colors<br><small>format: xlsx | case: classic56_alternating_row_colors | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic56_alternating_row_colors <span style="color:#3fb950">⬤</span> 97.4%</td>
</tr>
<tr>
  <td><img src="images/classic56_alternating_row_colors_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic56_alternating_row_colors_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic56_alternating_row_colors_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic57_cjk_only<br><small>format: xlsx | case: classic57_cjk_only | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic57_cjk_only <span style="color:#3fb950">⬤</span> 98.0%</td>
</tr>
<tr>
  <td><img src="images/classic57_cjk_only_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic57_cjk_only_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic57_cjk_only_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic58_mixed_numeric_formats<br><small>format: xlsx | case: classic58_mixed_numeric_formats | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic58_mixed_numeric_formats <span style="color:#3fb950">⬤</span> 92.8%</td>
</tr>
<tr>
  <td><img src="images/classic58_mixed_numeric_formats_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic58_mixed_numeric_formats_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic58_mixed_numeric_formats_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic59_multi_sheet_summary<br><small>format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic59_multi_sheet_summary <span style="color:#3fb950">⬤</span> 99.5%</td>
</tr>
<tr>
  <td><img src="images/classic59_multi_sheet_summary_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic59_multi_sheet_summary_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic59_multi_sheet_summary_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic59_multi_sheet_summary_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic59_multi_sheet_summary_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic59_multi_sheet_summary_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic59_multi_sheet_summary_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic59_multi_sheet_summary_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic59_multi_sheet_summary_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic59_multi_sheet_summary_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic59_multi_sheet_summary_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic59_multi_sheet_summary_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic60_large_wide_table<br><small>format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic60_large_wide_table <span style="color:#f85149">⬤</span> 66.5%</td>
</tr>
<tr>
  <td><img src="images/classic60_large_wide_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic60_large_wide_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic60_large_wide_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic60_large_wide_table_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic60_large_wide_table_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic60_large_wide_table_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic60_large_wide_table_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic60_large_wide_table_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic60_large_wide_table_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic60_large_wide_table_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic60_large_wide_table_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic60_large_wide_table_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic60_large_wide_table_p5_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic60_large_wide_table_p6_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic61_product_card_with_image<br><small>format: xlsx | case: classic61_product_card_with_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic61_product_card_with_image <span style="color:#3fb950">⬤</span> 95.4%</td>
</tr>
<tr>
  <td><img src="images/classic61_product_card_with_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic61_product_card_with_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic61_product_card_with_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic62_company_logo_header<br><small>format: xlsx | case: classic62_company_logo_header | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic62_company_logo_header <span style="color:#3fb950">⬤</span> 94.0%</td>
</tr>
<tr>
  <td><img src="images/classic62_company_logo_header_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic62_company_logo_header_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic62_company_logo_header_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic63_two_products_side_by_side<br><small>format: xlsx | case: classic63_two_products_side_by_side | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic63_two_products_side_by_side <span style="color:#3fb950">⬤</span> 93.6%</td>
</tr>
<tr>
  <td><img src="images/classic63_two_products_side_by_side_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic63_two_products_side_by_side_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic63_two_products_side_by_side_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic64_employee_directory_with_photo<br><small>format: xlsx | case: classic64_employee_directory_with_photo | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic64_employee_directory_with_photo <span style="color:#3fb950">⬤</span> 94.3%</td>
</tr>
<tr>
  <td><img src="images/classic64_employee_directory_with_photo_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic64_employee_directory_with_photo_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic64_employee_directory_with_photo_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic65_inventory_with_product_photos<br><small>format: xlsx | case: classic65_inventory_with_product_photos | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic65_inventory_with_product_photos <span style="color:#3fb950">⬤</span> 98.1%</td>
</tr>
<tr>
  <td><img src="images/classic65_inventory_with_product_photos_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic65_inventory_with_product_photos_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic65_inventory_with_product_photos_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic66_invoice_with_logo<br><small>format: xlsx | case: classic66_invoice_with_logo | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic66_invoice_with_logo <span style="color:#3fb950">⬤</span> 92.8%</td>
</tr>
<tr>
  <td><img src="images/classic66_invoice_with_logo_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic66_invoice_with_logo_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic66_invoice_with_logo_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic67_real_estate_listing<br><small>format: xlsx | case: classic67_real_estate_listing | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic67_real_estate_listing <span style="color:#3fb950">⬤</span> 92.4%</td>
</tr>
<tr>
  <td><img src="images/classic67_real_estate_listing_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic67_real_estate_listing_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic67_real_estate_listing_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic68_restaurant_menu<br><small>format: xlsx | case: classic68_restaurant_menu | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic68_restaurant_menu <span style="color:#d29922">⬤</span> 81.0%</td>
</tr>
<tr>
  <td><img src="images/classic68_restaurant_menu_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic68_restaurant_menu_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic68_restaurant_menu_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic69_image_only_sheet<br><small>format: xlsx | case: classic69_image_only_sheet | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic69_image_only_sheet <span style="color:#d29922">⬤</span> 86.1%</td>
</tr>
<tr>
  <td><img src="images/classic69_image_only_sheet_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic69_image_only_sheet_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic69_image_only_sheet_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic70_product_catalog_with_images<br><small>format: xlsx | case: classic70_product_catalog_with_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic70_product_catalog_with_images <span style="color:#d29922">⬤</span> 86.9%</td>
</tr>
<tr>
  <td><img src="images/classic70_product_catalog_with_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic70_product_catalog_with_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic70_product_catalog_with_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic71_multi_sheet_with_images<br><small>format: xlsx | case: classic71_multi_sheet_with_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic71_multi_sheet_with_images <span style="color:#3fb950">⬤</span> 98.7%</td>
</tr>
<tr>
  <td><img src="images/classic71_multi_sheet_with_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic71_multi_sheet_with_images_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic71_multi_sheet_with_images_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic71_multi_sheet_with_images_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic72_bar_chart_image_with_data<br><small>format: xlsx | case: classic72_bar_chart_image_with_data | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic72_bar_chart_image_with_data <span style="color:#d29922">⬤</span> 89.5%</td>
</tr>
<tr>
  <td><img src="images/classic72_bar_chart_image_with_data_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic72_bar_chart_image_with_data_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic72_bar_chart_image_with_data_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic73_event_flyer_with_banner<br><small>format: xlsx | case: classic73_event_flyer_with_banner | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic73_event_flyer_with_banner <span style="color:#d29922">⬤</span> 84.8%</td>
</tr>
<tr>
  <td><img src="images/classic73_event_flyer_with_banner_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic73_event_flyer_with_banner_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic73_event_flyer_with_banner_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic74_dashboard_with_kpi_image<br><small>format: xlsx | case: classic74_dashboard_with_kpi_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic74_dashboard_with_kpi_image <span style="color:#d29922">⬤</span> 86.4%</td>
</tr>
<tr>
  <td><img src="images/classic74_dashboard_with_kpi_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic74_dashboard_with_kpi_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic74_dashboard_with_kpi_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic75_certificate_with_seal<br><small>format: xlsx | case: classic75_certificate_with_seal | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic75_certificate_with_seal <span style="color:#d29922">⬤</span> 72.4%</td>
</tr>
<tr>
  <td><img src="images/classic75_certificate_with_seal_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic75_certificate_with_seal_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic75_certificate_with_seal_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic76_product_image_grid<br><small>format: xlsx | case: classic76_product_image_grid | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic76_product_image_grid <span style="color:#3fb950">⬤</span> 91.8%</td>
</tr>
<tr>
  <td><img src="images/classic76_product_image_grid_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic76_product_image_grid_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic76_product_image_grid_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic77_news_article_with_hero_image<br><small>format: xlsx | case: classic77_news_article_with_hero_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic77_news_article_with_hero_image <span style="color:#f85149">⬤</span> 59.9%</td>
</tr>
<tr>
  <td><img src="images/classic77_news_article_with_hero_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic77_news_article_with_hero_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic77_news_article_with_hero_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic78_small_icon_per_row<br><small>format: xlsx | case: classic78_small_icon_per_row | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic78_small_icon_per_row <span style="color:#3fb950">⬤</span> 97.5%</td>
</tr>
<tr>
  <td><img src="images/classic78_small_icon_per_row_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic78_small_icon_per_row_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic78_small_icon_per_row_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic79_wide_panoramic_banner<br><small>format: xlsx | case: classic79_wide_panoramic_banner | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic79_wide_panoramic_banner <span style="color:#d29922">⬤</span> 83.0%</td>
</tr>
<tr>
  <td><img src="images/classic79_wide_panoramic_banner_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic79_wide_panoramic_banner_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic79_wide_panoramic_banner_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic80_portrait_tall_image<br><small>format: xlsx | case: classic80_portrait_tall_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic80_portrait_tall_image <span style="color:#d29922">⬤</span> 81.0%</td>
</tr>
<tr>
  <td><img src="images/classic80_portrait_tall_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic80_portrait_tall_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic80_portrait_tall_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic81_step_by_step_with_images<br><small>format: xlsx | case: classic81_step_by_step_with_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic81_step_by_step_with_images <span style="color:#d29922">⬤</span> 79.0%</td>
</tr>
<tr>
  <td><img src="images/classic81_step_by_step_with_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic81_step_by_step_with_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic81_step_by_step_with_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic82_before_after_images<br><small>format: xlsx | case: classic82_before_after_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic82_before_after_images <span style="color:#3fb950">⬤</span> 90.4%</td>
</tr>
<tr>
  <td><img src="images/classic82_before_after_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic82_before_after_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic82_before_after_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic83_color_swatch_palette<br><small>format: xlsx | case: classic83_color_swatch_palette | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic83_color_swatch_palette <span style="color:#d29922">⬤</span> 89.7%</td>
</tr>
<tr>
  <td><img src="images/classic83_color_swatch_palette_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic83_color_swatch_palette_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic83_color_swatch_palette_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic84_travel_destination_cards<br><small>format: xlsx | case: classic84_travel_destination_cards | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic84_travel_destination_cards <span style="color:#d29922">⬤</span> 77.9%</td>
</tr>
<tr>
  <td><img src="images/classic84_travel_destination_cards_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic84_travel_destination_cards_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic84_travel_destination_cards_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic85_lab_results_with_image<br><small>format: xlsx | case: classic85_lab_results_with_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic85_lab_results_with_image <span style="color:#3fb950">⬤</span> 93.7%</td>
</tr>
<tr>
  <td><img src="images/classic85_lab_results_with_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic85_lab_results_with_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic85_lab_results_with_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic86_software_screenshot_features<br><small>format: xlsx | case: classic86_software_screenshot_features | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic86_software_screenshot_features <span style="color:#3fb950">⬤</span> 93.5%</td>
</tr>
<tr>
  <td><img src="images/classic86_software_screenshot_features_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic86_software_screenshot_features_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic86_software_screenshot_features_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic87_sports_results_with_logos<br><small>format: xlsx | case: classic87_sports_results_with_logos | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic87_sports_results_with_logos <span style="color:#3fb950">⬤</span> 96.7%</td>
</tr>
<tr>
  <td><img src="images/classic87_sports_results_with_logos_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic87_sports_results_with_logos_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic87_sports_results_with_logos_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic88_image_after_data<br><small>format: xlsx | case: classic88_image_after_data | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic88_image_after_data <span style="color:#3fb950">⬤</span> 94.0%</td>
</tr>
<tr>
  <td><img src="images/classic88_image_after_data_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic88_image_after_data_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic88_image_after_data_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic89_nutrition_label_with_image<br><small>format: xlsx | case: classic89_nutrition_label_with_image | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic89_nutrition_label_with_image <span style="color:#3fb950">⬤</span> 93.8%</td>
</tr>
<tr>
  <td><img src="images/classic89_nutrition_label_with_image_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic89_nutrition_label_with_image_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic89_nutrition_label_with_image_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic90_project_status_with_milestones<br><small>format: xlsx | case: classic90_project_status_with_milestones | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic90_project_status_with_milestones <span style="color:#d29922">⬤</span> 87.8%</td>
</tr>
<tr>
  <td><img src="images/classic90_project_status_with_milestones_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic90_project_status_with_milestones_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic90_project_status_with_milestones_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic91_simple_bar_chart<br><small>format: xlsx | case: classic91_simple_bar_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic91_simple_bar_chart <span style="color:#f85149">⬤</span> 48.7%</td>
</tr>
<tr>
  <td><img src="images/classic91_simple_bar_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic91_simple_bar_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic91_simple_bar_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic91_simple_bar_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic91_simple_bar_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic92_horizontal_bar_chart<br><small>format: xlsx | case: classic92_horizontal_bar_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic92_horizontal_bar_chart <span style="color:#f85149">⬤</span> 46.0%</td>
</tr>
<tr>
  <td><img src="images/classic92_horizontal_bar_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic92_horizontal_bar_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic92_horizontal_bar_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic92_horizontal_bar_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic92_horizontal_bar_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic93_line_chart<br><small>format: xlsx | case: classic93_line_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic93_line_chart <span style="color:#f85149">⬤</span> 54.4%</td>
</tr>
<tr>
  <td><img src="images/classic93_line_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic93_line_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic93_line_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic93_line_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic93_line_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic94_pie_chart<br><small>format: xlsx | case: classic94_pie_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic94_pie_chart <span style="color:#f85149">⬤</span> 42.9%</td>
</tr>
<tr>
  <td><img src="images/classic94_pie_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic94_pie_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic94_pie_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic94_pie_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic94_pie_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic95_area_chart<br><small>format: xlsx | case: classic95_area_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic95_area_chart <span style="color:#f85149">⬤</span> 60.6%</td>
</tr>
<tr>
  <td><img src="images/classic95_area_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic95_area_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic95_area_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic95_area_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic95_area_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic96_scatter_chart<br><small>format: xlsx | case: classic96_scatter_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic96_scatter_chart <span style="color:#f85149">⬤</span> 53.1%</td>
</tr>
<tr>
  <td><img src="images/classic96_scatter_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic96_scatter_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic96_scatter_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic96_scatter_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic96_scatter_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic97_doughnut_chart<br><small>format: xlsx | case: classic97_doughnut_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic97_doughnut_chart <span style="color:#f85149">⬤</span> 46.6%</td>
</tr>
<tr>
  <td><img src="images/classic97_doughnut_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic97_doughnut_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic97_doughnut_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic97_doughnut_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic97_doughnut_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic98_radar_chart<br><small>format: xlsx | case: classic98_radar_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic98_radar_chart <span style="color:#f85149">⬤</span> 47.8%</td>
</tr>
<tr>
  <td><img src="images/classic98_radar_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic98_radar_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic98_radar_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic98_radar_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic98_radar_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic99_bubble_chart<br><small>format: xlsx | case: classic99_bubble_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic99_bubble_chart <span style="color:#f85149">⬤</span> 53.0%</td>
</tr>
<tr>
  <td><img src="images/classic99_bubble_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic99_bubble_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic99_bubble_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic99_bubble_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic99_bubble_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic100_stacked_bar_chart<br><small>format: xlsx | case: classic100_stacked_bar_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic100_stacked_bar_chart <span style="color:#d29922">⬤</span> 78.5%</td>
</tr>
<tr>
  <td><img src="images/classic100_stacked_bar_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic100_stacked_bar_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic100_stacked_bar_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic101_percent_stacked_bar<br><small>format: xlsx | case: classic101_percent_stacked_bar | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic101_percent_stacked_bar <span style="color:#d29922">⬤</span> 78.7%</td>
</tr>
<tr>
  <td><img src="images/classic101_percent_stacked_bar_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic101_percent_stacked_bar_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic101_percent_stacked_bar_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic102_line_chart_with_markers<br><small>format: xlsx | case: classic102_line_chart_with_markers | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic102_line_chart_with_markers <span style="color:#f85149">⬤</span> 57.8%</td>
</tr>
<tr>
  <td><img src="images/classic102_line_chart_with_markers_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic102_line_chart_with_markers_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic102_line_chart_with_markers_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic102_line_chart_with_markers_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic102_line_chart_with_markers_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic103_pie_chart_with_labels<br><small>format: xlsx | case: classic103_pie_chart_with_labels | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic103_pie_chart_with_labels <span style="color:#f85149">⬤</span> 32.2%</td>
</tr>
<tr>
  <td><img src="images/classic103_pie_chart_with_labels_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic103_pie_chart_with_labels_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic103_pie_chart_with_labels_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic103_pie_chart_with_labels_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic103_pie_chart_with_labels_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic104_combo_bar_line_chart<br><small>format: xlsx | case: classic104_combo_bar_line_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic104_combo_bar_line_chart <span style="color:#f85149">⬤</span> 56.9%</td>
</tr>
<tr>
  <td><img src="images/classic104_combo_bar_line_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic104_combo_bar_line_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic104_combo_bar_line_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic104_combo_bar_line_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic104_combo_bar_line_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic105_3d_bar_chart<br><small>format: xlsx | case: classic105_3d_bar_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic105_3d_bar_chart <span style="color:#f85149">⬤</span> 52.5%</td>
</tr>
<tr>
  <td><img src="images/classic105_3d_bar_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic105_3d_bar_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic105_3d_bar_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic105_3d_bar_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic105_3d_bar_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic106_3d_pie_chart<br><small>format: xlsx | case: classic106_3d_pie_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic106_3d_pie_chart <span style="color:#f85149">⬤</span> 46.2%</td>
</tr>
<tr>
  <td><img src="images/classic106_3d_pie_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic106_3d_pie_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic106_3d_pie_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic106_3d_pie_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic106_3d_pie_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic107_multi_series_line<br><small>format: xlsx | case: classic107_multi_series_line | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic107_multi_series_line <span style="color:#f85149">⬤</span> 66.9%</td>
</tr>
<tr>
  <td><img src="images/classic107_multi_series_line_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic107_multi_series_line_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic107_multi_series_line_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic107_multi_series_line_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic107_multi_series_line_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic108_stacked_area_chart<br><small>format: xlsx | case: classic108_stacked_area_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic108_stacked_area_chart <span style="color:#f85149">⬤</span> 54.2%</td>
</tr>
<tr>
  <td><img src="images/classic108_stacked_area_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic108_stacked_area_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic108_stacked_area_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic108_stacked_area_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic109_scatter_with_trendline<br><small>format: xlsx | case: classic109_scatter_with_trendline | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic109_scatter_with_trendline <span style="color:#f85149">⬤</span> 52.3%</td>
</tr>
<tr>
  <td><img src="images/classic109_scatter_with_trendline_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic109_scatter_with_trendline_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic109_scatter_with_trendline_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic109_scatter_with_trendline_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic109_scatter_with_trendline_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic110_chart_with_legend<br><small>format: xlsx | case: classic110_chart_with_legend | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic110_chart_with_legend <span style="color:#f85149">⬤</span> 52.0%</td>
</tr>
<tr>
  <td><img src="images/classic110_chart_with_legend_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic110_chart_with_legend_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic110_chart_with_legend_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic110_chart_with_legend_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic110_chart_with_legend_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic111_chart_with_axis_labels<br><small>format: xlsx | case: classic111_chart_with_axis_labels | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic111_chart_with_axis_labels <span style="color:#f85149">⬤</span> 47.9%</td>
</tr>
<tr>
  <td><img src="images/classic111_chart_with_axis_labels_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic111_chart_with_axis_labels_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic111_chart_with_axis_labels_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic111_chart_with_axis_labels_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic111_chart_with_axis_labels_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic112_multiple_charts<br><small>format: xlsx | case: classic112_multiple_charts | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic112_multiple_charts <span style="color:#f85149">⬤</span> 53.2%</td>
</tr>
<tr>
  <td><img src="images/classic112_multiple_charts_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic112_multiple_charts_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic112_multiple_charts_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic112_multiple_charts_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic112_multiple_charts_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic113_chart_sheet<br><small>format: xlsx | case: classic113_chart_sheet | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic113_chart_sheet <span style="color:#f85149">⬤</span> 51.5%</td>
</tr>
<tr>
  <td><img src="images/classic113_chart_sheet_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic113_chart_sheet_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic113_chart_sheet_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic113_chart_sheet_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic113_chart_sheet_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic114_chart_large_dataset<br><small>format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic114_chart_large_dataset <span style="color:#d29922">⬤</span> 77.1%</td>
</tr>
<tr>
  <td><img src="images/classic114_chart_large_dataset_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic114_chart_large_dataset_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic114_chart_large_dataset_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic114_chart_large_dataset_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic114_chart_large_dataset_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic114_chart_large_dataset_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic114_chart_large_dataset_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic114_chart_large_dataset_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic114_chart_large_dataset_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic114_chart_large_dataset_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic114_chart_large_dataset_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic115_chart_negative_values<br><small>format: xlsx | case: classic115_chart_negative_values | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic115_chart_negative_values <span style="color:#f85149">⬤</span> 49.6%</td>
</tr>
<tr>
  <td><img src="images/classic115_chart_negative_values_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic115_chart_negative_values_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic115_chart_negative_values_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic115_chart_negative_values_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic115_chart_negative_values_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic116_percent_stacked_area<br><small>format: xlsx | case: classic116_percent_stacked_area | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic116_percent_stacked_area <span style="color:#f85149">⬤</span> 52.6%</td>
</tr>
<tr>
  <td><img src="images/classic116_percent_stacked_area_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic116_percent_stacked_area_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic116_percent_stacked_area_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic116_percent_stacked_area_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><i>missing</i></td>
</tr>
<tr>
  <td><b>classic117_stock_ohlc_chart<br><small>format: xlsx | case: classic117_stock_ohlc_chart | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic117_stock_ohlc_chart <span style="color:#f85149">⬤</span> 63.1%</td>
</tr>
<tr>
  <td><img src="images/classic117_stock_ohlc_chart_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic117_stock_ohlc_chart_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic117_stock_ohlc_chart_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic117_stock_ohlc_chart_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic117_stock_ohlc_chart_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic118_bar_chart_custom_colors<br><small>format: xlsx | case: classic118_bar_chart_custom_colors | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic118_bar_chart_custom_colors <span style="color:#f85149">⬤</span> 46.6%</td>
</tr>
<tr>
  <td><img src="images/classic118_bar_chart_custom_colors_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic118_bar_chart_custom_colors_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic118_bar_chart_custom_colors_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic118_bar_chart_custom_colors_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic118_bar_chart_custom_colors_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic119_dashboard_multi_charts<br><small>format: xlsx | case: classic119_dashboard_multi_charts | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic119_dashboard_multi_charts <span style="color:#f85149">⬤</span> 46.0%</td>
</tr>
<tr>
  <td><img src="images/classic119_dashboard_multi_charts_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic119_dashboard_multi_charts_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic119_dashboard_multi_charts_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic119_dashboard_multi_charts_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic119_dashboard_multi_charts_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic120_chart_with_date_axis<br><small>format: xlsx | case: classic120_chart_with_date_axis | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic120_chart_with_date_axis <span style="color:#f85149">⬤</span> 39.9%</td>
</tr>
<tr>
  <td><img src="images/classic120_chart_with_date_axis_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic120_chart_with_date_axis_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic120_chart_with_date_axis_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic120_chart_with_date_axis_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic120_chart_with_date_axis_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic121_thin_borders<br><small>format: xlsx | case: classic121_thin_borders | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic121_thin_borders <span style="color:#3fb950">⬤</span> 94.5%</td>
</tr>
<tr>
  <td><img src="images/classic121_thin_borders_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic121_thin_borders_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic121_thin_borders_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic122_thick_outer_thin_inner<br><small>format: xlsx | case: classic122_thick_outer_thin_inner | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic122_thick_outer_thin_inner <span style="color:#3fb950">⬤</span> 94.2%</td>
</tr>
<tr>
  <td><img src="images/classic122_thick_outer_thin_inner_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic122_thick_outer_thin_inner_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic122_thick_outer_thin_inner_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic123_dashed_borders<br><small>format: xlsx | case: classic123_dashed_borders | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic123_dashed_borders <span style="color:#3fb950">⬤</span> 93.5%</td>
</tr>
<tr>
  <td><img src="images/classic123_dashed_borders_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic123_dashed_borders_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic123_dashed_borders_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic124_colored_borders<br><small>format: xlsx | case: classic124_colored_borders | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic124_colored_borders <span style="color:#d29922">⬤</span> 89.8%</td>
</tr>
<tr>
  <td><img src="images/classic124_colored_borders_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic124_colored_borders_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic124_colored_borders_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic125_solid_fills<br><small>format: xlsx | case: classic125_solid_fills | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic125_solid_fills <span style="color:#3fb950">⬤</span> 95.6%</td>
</tr>
<tr>
  <td><img src="images/classic125_solid_fills_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic125_solid_fills_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic125_solid_fills_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic126_dark_header<br><small>format: xlsx | case: classic126_dark_header | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic126_dark_header <span style="color:#3fb950">⬤</span> 92.5%</td>
</tr>
<tr>
  <td><img src="images/classic126_dark_header_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic126_dark_header_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic126_dark_header_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic127_font_styles<br><small>format: xlsx | case: classic127_font_styles | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic127_font_styles <span style="color:#d29922">⬤</span> 76.1%</td>
</tr>
<tr>
  <td><img src="images/classic127_font_styles_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic127_font_styles_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic127_font_styles_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic128_font_sizes<br><small>format: xlsx | case: classic128_font_sizes | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic128_font_sizes <span style="color:#3fb950">⬤</span> 93.5%</td>
</tr>
<tr>
  <td><img src="images/classic128_font_sizes_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic128_font_sizes_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic128_font_sizes_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic129_alignment_combos<br><small>format: xlsx | case: classic129_alignment_combos | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic129_alignment_combos <span style="color:#3fb950">⬤</span> 95.3%</td>
</tr>
<tr>
  <td><img src="images/classic129_alignment_combos_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic129_alignment_combos_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic129_alignment_combos_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic130_wrap_and_indent<br><small>format: xlsx | case: classic130_wrap_and_indent | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic130_wrap_and_indent <span style="color:#3fb950">⬤</span> 99.0%</td>
</tr>
<tr>
  <td><img src="images/classic130_wrap_and_indent_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic130_wrap_and_indent_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic130_wrap_and_indent_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic131_number_formats<br><small>format: xlsx | case: classic131_number_formats | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic131_number_formats <span style="color:#3fb950">⬤</span> 99.2%</td>
</tr>
<tr>
  <td><img src="images/classic131_number_formats_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic131_number_formats_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic131_number_formats_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic132_striped_table<br><small>format: xlsx | case: classic132_striped_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic132_striped_table <span style="color:#d29922">⬤</span> 86.2%</td>
</tr>
<tr>
  <td><img src="images/classic132_striped_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic132_striped_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic132_striped_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic133_gradient_rows<br><small>format: xlsx | case: classic133_gradient_rows | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic133_gradient_rows <span style="color:#d29922">⬤</span> 88.0%</td>
</tr>
<tr>
  <td><img src="images/classic133_gradient_rows_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic133_gradient_rows_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic133_gradient_rows_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic134_heatmap<br><small>format: xlsx | case: classic134_heatmap | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic134_heatmap <span style="color:#3fb950">⬤</span> 96.4%</td>
</tr>
<tr>
  <td><img src="images/classic134_heatmap_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic134_heatmap_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic134_heatmap_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic135_bottom_border_only<br><small>format: xlsx | case: classic135_bottom_border_only | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic135_bottom_border_only <span style="color:#3fb950">⬤</span> 91.8%</td>
</tr>
<tr>
  <td><img src="images/classic135_bottom_border_only_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic135_bottom_border_only_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic135_bottom_border_only_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic136_financial_report_styled<br><small>format: xlsx | case: classic136_financial_report_styled | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic136_financial_report_styled <span style="color:#3fb950">⬤</span> 96.8%</td>
</tr>
<tr>
  <td><img src="images/classic136_financial_report_styled_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic136_financial_report_styled_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic136_financial_report_styled_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic137_checkerboard<br><small>format: xlsx | case: classic137_checkerboard | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic137_checkerboard <span style="color:#3fb950">⬤</span> 97.7%</td>
</tr>
<tr>
  <td><img src="images/classic137_checkerboard_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic137_checkerboard_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic137_checkerboard_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic138_color_grid<br><small>format: xlsx | case: classic138_color_grid | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic138_color_grid <span style="color:#3fb950">⬤</span> 98.2%</td>
</tr>
<tr>
  <td><img src="images/classic138_color_grid_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic138_color_grid_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic138_color_grid_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic139_pattern_fills<br><small>format: xlsx | case: classic139_pattern_fills | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic139_pattern_fills <span style="color:#d29922">⬤</span> 87.4%</td>
</tr>
<tr>
  <td><img src="images/classic139_pattern_fills_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic139_pattern_fills_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic139_pattern_fills_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic140_rotated_text<br><small>format: xlsx | case: classic140_rotated_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic140_rotated_text <span style="color:#3fb950">⬤</span> 95.6%</td>
</tr>
<tr>
  <td><img src="images/classic140_rotated_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic140_rotated_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic140_rotated_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic141_mixed_edge_borders<br><small>format: xlsx | case: classic141_mixed_edge_borders | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic141_mixed_edge_borders <span style="color:#3fb950">⬤</span> 97.0%</td>
</tr>
<tr>
  <td><img src="images/classic141_mixed_edge_borders_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic141_mixed_edge_borders_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic141_mixed_edge_borders_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic142_styled_invoice<br><small>format: xlsx | case: classic142_styled_invoice | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic142_styled_invoice <span style="color:#3fb950">⬤</span> 96.3%</td>
</tr>
<tr>
  <td><img src="images/classic142_styled_invoice_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic142_styled_invoice_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic142_styled_invoice_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic143_colored_tabs<br><small>format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic143_colored_tabs <span style="color:#3fb950">⬤</span> 99.1%</td>
</tr>
<tr>
  <td><img src="images/classic143_colored_tabs_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic143_colored_tabs_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic143_colored_tabs_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic143_colored_tabs_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic143_colored_tabs_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic143_colored_tabs_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic143_colored_tabs_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic143_colored_tabs_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic143_colored_tabs_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic143_colored_tabs_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic143_colored_tabs_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic143_colored_tabs_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic144_note_style_cells<br><small>format: xlsx | case: classic144_note_style_cells | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic144_note_style_cells <span style="color:#3fb950">⬤</span> 98.3%</td>
</tr>
<tr>
  <td><img src="images/classic144_note_style_cells_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic144_note_style_cells_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic144_note_style_cells_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic145_status_badges<br><small>format: xlsx | case: classic145_status_badges | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic145_status_badges <span style="color:#3fb950">⬤</span> 96.5%</td>
</tr>
<tr>
  <td><img src="images/classic145_status_badges_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic145_status_badges_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic145_status_badges_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic146_double_border_table<br><small>format: xlsx | case: classic146_double_border_table | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic146_double_border_table <span style="color:#3fb950">⬤</span> 97.0%</td>
</tr>
<tr>
  <td><img src="images/classic146_double_border_table_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic146_double_border_table_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic146_double_border_table_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic147_multi_sheet_styled<br><small>format: xlsx | case: classic147_multi_sheet_styled | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic147_multi_sheet_styled <span style="color:#3fb950">⬤</span> 98.3%</td>
</tr>
<tr>
  <td><img src="images/classic147_multi_sheet_styled_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic147_multi_sheet_styled_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic147_multi_sheet_styled_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic147_multi_sheet_styled_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic147_multi_sheet_styled_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic147_multi_sheet_styled_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic147_multi_sheet_styled_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic147_multi_sheet_styled_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic147_multi_sheet_styled_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic148_frozen_styled_grid<br><small>format: xlsx | case: classic148_frozen_styled_grid | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic148_frozen_styled_grid <span style="color:#d29922">⬤</span> 85.7%</td>
</tr>
<tr>
  <td><img src="images/classic148_frozen_styled_grid_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic148_frozen_styled_grid_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic148_frozen_styled_grid_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic149_merged_styled_sections<br><small>format: xlsx | case: classic149_merged_styled_sections | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic149_merged_styled_sections <span style="color:#3fb950">⬤</span> 96.3%</td>
</tr>
<tr>
  <td><img src="images/classic149_merged_styled_sections_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic149_merged_styled_sections_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic149_merged_styled_sections_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic150_kitchen_sink_styles<br><small>format: xlsx | case: classic150_kitchen_sink_styles | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic150_kitchen_sink_styles <span style="color:#3fb950">⬤</span> 94.3%</td>
</tr>
<tr>
  <td><img src="images/classic150_kitchen_sink_styles_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic150_kitchen_sink_styles_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic150_kitchen_sink_styles_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic151_multilingual_greetings<br><small>format: xlsx | case: classic151_multilingual_greetings | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic151_multilingual_greetings <span style="color:#d29922">⬤</span> 89.8%</td>
</tr>
<tr>
  <td><img src="images/classic151_multilingual_greetings_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic151_multilingual_greetings_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic151_multilingual_greetings_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic152_emoji_sampler<br><small>format: xlsx | case: classic152_emoji_sampler | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic152_emoji_sampler <span style="color:#d29922">⬤</span> 83.4%</td>
</tr>
<tr>
  <td><img src="images/classic152_emoji_sampler_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic152_emoji_sampler_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic152_emoji_sampler_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic153_currency_symbols<br><small>format: xlsx | case: classic153_currency_symbols | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic153_currency_symbols <span style="color:#3fb950">⬤</span> 97.1%</td>
</tr>
<tr>
  <td><img src="images/classic153_currency_symbols_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic153_currency_symbols_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic153_currency_symbols_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic154_math_symbols<br><small>format: xlsx | case: classic154_math_symbols | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic154_math_symbols <span style="color:#3fb950">⬤</span> 95.6%</td>
</tr>
<tr>
  <td><img src="images/classic154_math_symbols_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic154_math_symbols_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic154_math_symbols_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic155_diacritical_marks<br><small>format: xlsx | case: classic155_diacritical_marks | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic155_diacritical_marks <span style="color:#3fb950">⬤</span> 92.6%</td>
</tr>
<tr>
  <td><img src="images/classic155_diacritical_marks_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic155_diacritical_marks_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic155_diacritical_marks_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic156_rtl_bidi_text<br><small>format: xlsx | case: classic156_rtl_bidi_text | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic156_rtl_bidi_text <span style="color:#d29922">⬤</span> 80.8%</td>
</tr>
<tr>
  <td><img src="images/classic156_rtl_bidi_text_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic156_rtl_bidi_text_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic156_rtl_bidi_text_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic157_cjk_extended<br><small>format: xlsx | case: classic157_cjk_extended | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic157_cjk_extended <span style="color:#3fb950">⬤</span> 96.5%</td>
</tr>
<tr>
  <td><img src="images/classic157_cjk_extended_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic157_cjk_extended_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic157_cjk_extended_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic158_emoji_skin_tones<br><small>format: xlsx | case: classic158_emoji_skin_tones | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic158_emoji_skin_tones <span style="color:#d29922">⬤</span> 86.0%</td>
</tr>
<tr>
  <td><img src="images/classic158_emoji_skin_tones_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic158_emoji_skin_tones_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic158_emoji_skin_tones_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic159_zwj_emoji<br><small>format: xlsx | case: classic159_zwj_emoji | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic159_zwj_emoji <span style="color:#d29922">⬤</span> 89.5%</td>
</tr>
<tr>
  <td><img src="images/classic159_zwj_emoji_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic159_zwj_emoji_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic159_zwj_emoji_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic160_punctuation_marks<br><small>format: xlsx | case: classic160_punctuation_marks | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic160_punctuation_marks <span style="color:#3fb950">⬤</span> 93.6%</td>
</tr>
<tr>
  <td><img src="images/classic160_punctuation_marks_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic160_punctuation_marks_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic160_punctuation_marks_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic161_box_drawing<br><small>format: xlsx | case: classic161_box_drawing | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic161_box_drawing <span style="color:#3fb950">⬤</span> 94.7%</td>
</tr>
<tr>
  <td><img src="images/classic161_box_drawing_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic161_box_drawing_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic161_box_drawing_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic162_cjk_emoji_styled<br><small>format: xlsx | case: classic162_cjk_emoji_styled | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic162_cjk_emoji_styled <span style="color:#3fb950">⬤</span> 96.6%</td>
</tr>
<tr>
  <td><img src="images/classic162_cjk_emoji_styled_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic162_cjk_emoji_styled_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic162_cjk_emoji_styled_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic163_cyrillic_alphabets<br><small>format: xlsx | case: classic163_cyrillic_alphabets | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic163_cyrillic_alphabets <span style="color:#3fb950">⬤</span> 96.4%</td>
</tr>
<tr>
  <td><img src="images/classic163_cyrillic_alphabets_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic163_cyrillic_alphabets_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic163_cyrillic_alphabets_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic164_indic_scripts<br><small>format: xlsx | case: classic164_indic_scripts | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic164_indic_scripts <span style="color:#d29922">⬤</span> 84.2%</td>
</tr>
<tr>
  <td><img src="images/classic164_indic_scripts_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic164_indic_scripts_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic164_indic_scripts_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic165_southeast_asian<br><small>format: xlsx | case: classic165_southeast_asian | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic165_southeast_asian <span style="color:#d29922">⬤</span> 80.1%</td>
</tr>
<tr>
  <td><img src="images/classic165_southeast_asian_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic165_southeast_asian_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic165_southeast_asian_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic166_emoji_progress<br><small>format: xlsx | case: classic166_emoji_progress | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic166_emoji_progress <span style="color:#d29922">⬤</span> 76.3%</td>
</tr>
<tr>
  <td><img src="images/classic166_emoji_progress_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic166_emoji_progress_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic166_emoji_progress_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic167_musical_symbols<br><small>format: xlsx | case: classic167_musical_symbols | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic167_musical_symbols <span style="color:#d29922">⬤</span> 88.5%</td>
</tr>
<tr>
  <td><img src="images/classic167_musical_symbols_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic167_musical_symbols_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic167_musical_symbols_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic168_mixed_ltr_rtl_styled<br><small>format: xlsx | case: classic168_mixed_ltr_rtl_styled | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic168_mixed_ltr_rtl_styled <span style="color:#3fb950">⬤</span> 92.3%</td>
</tr>
<tr>
  <td><img src="images/classic168_mixed_ltr_rtl_styled_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic168_mixed_ltr_rtl_styled_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic168_mixed_ltr_rtl_styled_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic169_korean_invoice<br><small>format: xlsx | case: classic169_korean_invoice | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic169_korean_invoice <span style="color:#d29922">⬤</span> 82.1%</td>
</tr>
<tr>
  <td><img src="images/classic169_korean_invoice_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic169_korean_invoice_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic169_korean_invoice_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic170_emoji_dashboard<br><small>format: xlsx | case: classic170_emoji_dashboard | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic170_emoji_dashboard <span style="color:#3fb950">⬤</span> 96.7%</td>
</tr>
<tr>
  <td><img src="images/classic170_emoji_dashboard_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic170_emoji_dashboard_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic170_emoji_dashboard_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic171_ipa_phonetic<br><small>format: xlsx | case: classic171_ipa_phonetic | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic171_ipa_phonetic <span style="color:#d29922">⬤</span> 84.6%</td>
</tr>
<tr>
  <td><img src="images/classic171_ipa_phonetic_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic171_ipa_phonetic_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic171_ipa_phonetic_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic172_emoji_timeline<br><small>format: xlsx | case: classic172_emoji_timeline | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic172_emoji_timeline <span style="color:#3fb950">⬤</span> 94.5%</td>
</tr>
<tr>
  <td><img src="images/classic172_emoji_timeline_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic172_emoji_timeline_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic172_emoji_timeline_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic173_african_languages<br><small>format: xlsx | case: classic173_african_languages | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic173_african_languages <span style="color:#3fb950">⬤</span> 94.5%</td>
</tr>
<tr>
  <td><img src="images/classic173_african_languages_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic173_african_languages_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic173_african_languages_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic174_technical_symbols<br><small>format: xlsx | case: classic174_technical_symbols | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic174_technical_symbols <span style="color:#3fb950">⬤</span> 97.1%</td>
</tr>
<tr>
  <td><img src="images/classic174_technical_symbols_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic174_technical_symbols_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic174_technical_symbols_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic175_multiscript_catalog<br><small>format: xlsx | case: classic175_multiscript_catalog | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic175_multiscript_catalog <span style="color:#3fb950">⬤</span> 92.3%</td>
</tr>
<tr>
  <td><img src="images/classic175_multiscript_catalog_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic175_multiscript_catalog_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic175_multiscript_catalog_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic176_combining_characters<br><small>format: xlsx | case: classic176_combining_characters | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic176_combining_characters <span style="color:#3fb950">⬤</span> 95.2%</td>
</tr>
<tr>
  <td><img src="images/classic176_combining_characters_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic176_combining_characters_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic176_combining_characters_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic177_emoji_calendar<br><small>format: xlsx | case: classic177_emoji_calendar | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic177_emoji_calendar <span style="color:#3fb950">⬤</span> 90.5%</td>
</tr>
<tr>
  <td><img src="images/classic177_emoji_calendar_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic177_emoji_calendar_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic177_emoji_calendar_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic178_caucasus_ethiopic<br><small>format: xlsx | case: classic178_caucasus_ethiopic | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic178_caucasus_ethiopic <span style="color:#d29922">⬤</span> 73.0%</td>
</tr>
<tr>
  <td><img src="images/classic178_caucasus_ethiopic_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic178_caucasus_ethiopic_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic178_caucasus_ethiopic_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic179_emoji_inventory<br><small>format: xlsx | case: classic179_emoji_inventory | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic179_emoji_inventory <span style="color:#3fb950">⬤</span> 92.3%</td>
</tr>
<tr>
  <td><img src="images/classic179_emoji_inventory_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic179_emoji_inventory_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic179_emoji_inventory_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic180_polyglot_paragraph<br><small>format: xlsx | case: classic180_polyglot_paragraph | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic180_polyglot_paragraph <span style="color:#d29922">⬤</span> 89.5%</td>
</tr>
<tr>
  <td><img src="images/classic180_polyglot_paragraph_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic180_polyglot_paragraph_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic180_polyglot_paragraph_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic181_feedback_tracker_with_images<br><small>format: xlsx | case: classic181_feedback_tracker_with_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic181_feedback_tracker_with_images <span style="color:#f85149">⬤</span> 63.8%</td>
</tr>
<tr>
  <td><img src="images/classic181_feedback_tracker_with_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic181_feedback_tracker_with_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic181_feedback_tracker_with_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><i>missing</i></td>
  <td><img src="images/classic181_feedback_tracker_with_images_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic181_feedback_tracker_with_images_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic182_dense_long_text_columns<br><small>format: xlsx | case: classic182_dense_long_text_columns | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic182_dense_long_text_columns <span style="color:#d29922">⬤</span> 87.1%</td>
</tr>
<tr>
  <td><img src="images/classic182_dense_long_text_columns_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic182_dense_long_text_columns_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic182_dense_long_text_columns_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic182_dense_long_text_columns_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic182_dense_long_text_columns_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic182_dense_long_text_columns_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic183_mixed_content_grid<br><small>format: xlsx | case: classic183_mixed_content_grid | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic183_mixed_content_grid <span style="color:#3fb950">⬤</span> 97.1%</td>
</tr>
<tr>
  <td><img src="images/classic183_mixed_content_grid_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic183_mixed_content_grid_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic183_mixed_content_grid_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic184_wide_narrow_columns<br><small>format: xlsx | case: classic184_wide_narrow_columns | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic184_wide_narrow_columns <span style="color:#3fb950">⬤</span> 97.3%</td>
</tr>
<tr>
  <td><img src="images/classic184_wide_narrow_columns_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic184_wide_narrow_columns_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic184_wide_narrow_columns_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic185_tall_rows_vertical_align<br><small>format: xlsx | case: classic185_tall_rows_vertical_align | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic185_tall_rows_vertical_align <span style="color:#3fb950">⬤</span> 95.6%</td>
</tr>
<tr>
  <td><img src="images/classic185_tall_rows_vertical_align_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic185_tall_rows_vertical_align_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic185_tall_rows_vertical_align_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic186_multi_sheet_image_report<br><small>format: xlsx | case: classic186_multi_sheet_image_report | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic186_multi_sheet_image_report <span style="color:#3fb950">⬤</span> 96.2%</td>
</tr>
<tr>
  <td><img src="images/classic186_multi_sheet_image_report_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic186_multi_sheet_image_report_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic186_multi_sheet_image_report_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic186_multi_sheet_image_report_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic186_multi_sheet_image_report_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic186_multi_sheet_image_report_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic187_bug_report_with_screenshots<br><small>format: xlsx | case: classic187_bug_report_with_screenshots | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic187_bug_report_with_screenshots <span style="color:#3fb950">⬤</span> 95.2%</td>
</tr>
<tr>
  <td><img src="images/classic187_bug_report_with_screenshots_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic187_bug_report_with_screenshots_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic187_bug_report_with_screenshots_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic188_merged_header_with_images<br><small>format: xlsx | case: classic188_merged_header_with_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic188_merged_header_with_images <span style="color:#3fb950">⬤</span> 98.5%</td>
</tr>
<tr>
  <td><img src="images/classic188_merged_header_with_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic188_merged_header_with_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic188_merged_header_with_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic189_alternating_image_text_rows<br><small>format: xlsx | case: classic189_alternating_image_text_rows | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic189_alternating_image_text_rows <span style="color:#3fb950">⬤</span> 94.5%</td>
</tr>
<tr>
  <td><img src="images/classic189_alternating_image_text_rows_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic189_alternating_image_text_rows_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic189_alternating_image_text_rows_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic190_dashboard_kpi_images<br><small>format: xlsx | case: classic190_dashboard_kpi_images | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic190_dashboard_kpi_images <span style="color:#3fb950">⬤</span> 98.5%</td>
</tr>
<tr>
  <td><img src="images/classic190_dashboard_kpi_images_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic190_dashboard_kpi_images_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic190_dashboard_kpi_images_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><b>classic191_payroll_calculator<br><small>format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx</small></b></td>
  <td colspan="2">classic191_payroll_calculator <span style="color:#d29922">⬤</span> 84.2%</td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p1_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p1_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p1_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p2_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p2_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p2_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p3_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p3_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p3_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p4_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p4_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p4_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p5_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p5_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p5_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p6_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p6_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p6_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p7_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p7_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p7_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p8_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p8_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p8_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
<tr>
  <td><img src="images/classic191_payroll_calculator_p9_minipdf.png" width="260" alt="java MiniPdf"></td>
  <td><img src="images/classic191_payroll_calculator_p9_reference.png" width="260" alt="Microsoft 365 Excel Reference"></td>
  <td><img src="images/classic191_payroll_calculator_p9_libreoffice.png" width="260" alt="LibreOffice"></td>
</tr>
</table>

## Detailed Results

### classic01_basic_table_with_headers

- **Case Metadata:** format: xlsx | case: classic01_basic_table_with_headers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic01_basic_table_with_headers.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9947
- **Overall Score:** 0.9979
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17457 bytes, Reference=51282 bytes

Text content: ✅ Identical

### classic02_multiple_worksheets

- **Case Metadata:** format: xlsx | case: classic02_multiple_worksheets | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic02_multiple_worksheets.xlsx
- **Text Similarity:** 0.9645
- **Visual Average:** 0.9962
- **Overall Score:** 0.9843
- **Pages:** MiniPdf=3, Reference=3
- **File Size:** MiniPdf=19489 bytes, Reference=56518 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic02_multiple_worksheets.pdf
+++ reference/classic02_multiple_worksheets.pdf
@@ -7,9 +7,9 @@
 Category Amount

 Rent 500

 Salary 3000

-U ƟliƟes 200

+Utilities 200

 ---PAGE---

 Metric Value

-Total Rev1130

-Total Cos3700

+Total Reve 1130

+Total Costs 3700

 Net -2570
```
</details>

### classic03_empty_workbook

- **Case Metadata:** format: xlsx | case: classic03_empty_workbook | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic03_empty_workbook.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 1.0
- **Overall Score:** 1.0
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=671 bytes, Reference=25793 bytes

Text content: ✅ Identical

### classic04_single_cell

- **Case Metadata:** format: xlsx | case: classic04_single_cell | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic04_single_cell.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9996
- **Overall Score:** 0.9998
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=9953 bytes, Reference=27469 bytes

Text content: ✅ Identical

### classic05_wide_table

- **Case Metadata:** format: xlsx | case: classic05_wide_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic05_wide_table.xlsx
- **Text Similarity:** 0.6667
- **Visual Average:** 0.9907
- **Overall Score:** 0.863
- **Pages:** MiniPdf=3, Reference=3
- **File Size:** MiniPdf=18638 bytes, Reference=60760 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic05_wide_table.pdf
+++ reference/classic05_wide_table.pdf
@@ -1,20 +1,20 @@
-A B C D E F G H I J K

-A1 B1 C1 D1 E1 F1 G1 H1 I1 J1 K1

-A2 B2 C2 D2 E2 F2 G2 H2 I2 J2 K2

-A3 B3 C3 D3 E3 F3 G3 H3 I3 J3 K3

-A4 B4 C4 D4 E4 F4 G4 H4 I4 J4 K4

-A5 B5 C5 D5 E5 F5 G5 H5 I5 J5 K5

+A B C D E F G H I

+A1 B1 C1 D1 E1 F1 G1 H1 I1

+A2 B2 C2 D2 E2 F2 G2 H2 I2

+A3 B3 C3 D3 E3 F3 G3 H3 I3

+A4 B4 C4 D4 E4 F4 G4 H4 I4

+A5 B5 C5 D5 E5 F5 G5 H5 I5

 ---PAGE---

-L M N O P Q R S T U V

-L1 M1 N1 O1 P1 Q1 R1 S1 T1 U1 V1

-L2 M2 N2 O2 P2 Q2 R2 S2 T2 U2 V2

-L3 M3 N3 O3 P3 Q3 R3 S3 T3 U3 V3

-L4 M4 N4 O4 P4 Q4 R4 S4 T4 U4 V4

-L5 M5 N5 O5 P5 Q5 R5 S5 T5 U5 V5

+J K L M N O P Q R

+J1 K1 L1 M1 N1 O1 P1 Q1 R1

+J2 K2 L2 M2 N2 O2 P2 Q2 R2

+J3 K3 L3 M3 N3 O3 P3 Q3 R3

+J4 K4 L4 M4 N4 O4 P4 Q4 R4

+J5 K5 L5 M5 N5 O5 P5 Q5 R5

 ---PAGE---

-W X Y Z

-W1 X1 Y1 Z1

-W2 X2 Y2 Z2

-W3 X3 Y3 Z3

-W4 X4 Y4 Z4

-W5 X5 Y5 Z5
+S T U V W X Y Z

+S1 T1 U1 V1 W1 X1 Y1 Z1

+S2 T2 U2 V2 W2 X2 Y2 Z2

+S3 T3 U3 V3 W3 X3 Y3 Z3

+S4 T4 U4 V4 W4 X4 Y4 Z4

+S5 T5 U5 V5 W5 X5 Y5 Z5
```
</details>

### classic06_tall_table

- **Case Metadata:** format: xlsx | case: classic06_tall_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic06_tall_table.xlsx
- **Text Similarity:** 0.6664
- **Visual Average:** 0.8479
- **Overall Score:** 0.8057
- **Pages:** MiniPdf=5, Reference=5
- **File Size:** MiniPdf=26367 bytes, Reference=116996 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic06_tall_table.pdf
+++ reference/classic06_tall_table.pdf
@@ -1,205 +1,205 @@
-Row# Value Descrip Ɵ

-Row1 Val1 This is the

-Row2 Val2 This is the

-Row3 Val3 This is the

-Row4 Val4 This is the

-Row5 Val5 This is the

-Row6 Val6 This is the

-Row7 Val7 This is the

-Row8 Val8 This is the

-Row9 Val9 This is the

-Row10 Val10 This is the

-Row11 Val11 This is the

-Row12 Val12 This is the

-Row13 Val13 This is the

-Row14 Val14 This is the

-Row15 Val15 This is the

-Row16 Val16 This is the

-Row17 Val17 This is the

-Row18 Val18 This is the

-Row19 Val19 This is the

-Row20 Val20 This is the

-Row21 Val21 This is the

-Row22 Val22 This is the

-Row23 Val23 This is the

-Row24 Val24 This is the

-Row25 Val25 This is the

-Row26 Val26 This is the

-Row27 Val27 This is the

-Row28 Val28 This is the

-Row29 Val29 This is the

-Row30 Val30 This is the

-Row31 Val31 This is the

-Row32 Val32 This is the

-Row33 Val33 This is the

-Row34 Val34 This is the

-Row35 Val35 This is the

-Row36 Val36 This is the

-Row37 Val37 This is the

-Row38 Val38 This is the

-Row39 Val39 This is the

-Row40 Val40 This is the

-Row41 Val41 This is the

-Row42 Val42 This is the

----PAGE---

-Row43 Val43 This is the

-Row44 Val44 This is the

-Row45 Val45 This is the

-Row46 Val46 This is the

-Row47 Val47 This is the

-Row48 Val48 This is the

-Row49 Val49 This is the

-Row50 Val50 This is the

-Row51 Val51 This is the

-Row52 Val52 This is the

-Row53 Val53 This is the

-Row54 Val54 This is the

-Row55 Val55 This is the

-Row56 Val56 This is the

-Row57 Val57 This is the

-Row58 Val58 This is the

-Row59 Val59 This is the

-Row60 Val60 This is the

-Row61 Val61 This is the

-Row62 Val62 This is the

-Row63 Val63 This is the

-Row64 Val64 This is the

-Row65 Val65 This is the

-Row66 Val66 This is the

-Row67 Val67 This is the

-Row68 Val68 This is the

-Row69 Val69 This is the

-Row70 Val70 This is the

-Row71 Val71 This is the

-Row72 Val72 This is the

-Row73 Val73 This is the

-Row74 Val74 This is the

-Row75 Val75 This is the

-Row76 Val76 This is the

-Row77 Val77 This is the

-Row78 Val78 This is the

-Row79 Val79 This is the

-Row80 Val80 This is the

-Row81 Val81 This is the

-Row82 Val82 This is the

-Row83 Val83 This is the

-Row84 Val84 This is the

-Row85 Val85 This is the

----PAGE---

-Row86 Val86 This is the

-Row87 Val87 This is the

-Row88 Val88 This is the

-Row89 Val89 This is the

-Row90 Val90 This is the

-Row91 Val91 This is the

-Row92 Val92 This is the

-Row93 Val93 This is the

-Row94 Val94 This is the

-Row95 Val95 This is the

-Row96 Val96 This is the

-Row97 Val97 This is the

-Row98 Val98 This is the

-Row99 Val99 This is the

-Row100 Val100 This is the

-Row101 Val101 This is the

-Row102 Val102 This is the

-Row103 Val103 This is the

-Row104 Val104 This is the

-Row105 Val105 This is the

-Row106 Val106 This is the

-Row107 Val107 This is the

-Row108 Val108 This is the

-Row109 Val109 This is the

-Row110 Val110 This
... (14105 more characters)

```
</details>

### classic07_numbers_only

- **Case Metadata:** format: xlsx | case: classic07_numbers_only | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic07_numbers_only.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9971
- **Overall Score:** 0.9988
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=12338 bytes, Reference=42110 bytes

Text content: ✅ Identical

### classic08_mixed_text_and_numbers

- **Case Metadata:** format: xlsx | case: classic08_mixed_text_and_numbers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic08_mixed_text_and_numbers.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9957
- **Overall Score:** 0.9983
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=14930 bytes, Reference=44923 bytes

Text content: ✅ Identical

### classic09_long_text

- **Case Metadata:** format: xlsx | case: classic09_long_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic09_long_text.xlsx
- **Text Similarity:** 0.1667
- **Visual Average:** 0.0557
- **Overall Score:** 0.189
- **Pages:** MiniPdf=1, Reference=12
- **File Size:** MiniPdf=13661 bytes, Reference=44367 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic09_long_text.pdf
+++ reference/classic09_long_text.pdf
@@ -1,5 +1,38 @@
-Long Text

-XXXXXXX

-AAAAAAA

+Long Text Column

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

 Short

-YYYYYYYY
+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+AAAAAAAAAAAAAAAAA BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

+BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

+---PAGE---

+YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```
</details>

### classic10_special_xml_characters

- **Case Metadata:** format: xlsx | case: classic10_special_xml_characters | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic10_special_xml_characters.xlsx
- **Text Similarity:** 0.646
- **Visual Average:** 0.9935
- **Overall Score:** 0.8558
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16171 bytes, Reference=43022 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic10_special_xml_characters.pdf
+++ reference/classic10_special_xml_characters.pdf
@@ -1,7 +1,7 @@
-Special C

+Special Characters

 A&B

 <tag>

 "quoted"

 it's

-Tom & Je

-He said "
+Tom & Jerry < Batman > Superman

+He said "hello" & she replied 'hi'
```
</details>

### classic11_sparse_rows

- **Case Metadata:** format: xlsx | case: classic11_sparse_rows | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic11_sparse_rows.xlsx
- **Text Similarity:** 0.8602
- **Visual Average:** 0.9984
- **Overall Score:** 0.9434
- **Pages:** MiniPdf=2, Reference=2
- **File Size:** MiniPdf=12668 bytes, Reference=34964 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic11_sparse_rows.pdf
+++ reference/classic11_sparse_rows.pdf
@@ -1,6 +1,6 @@
 First

-Fi Ōh

+Fifth

 Tenth

-Twen Ɵet

+Twentieth

 ---PAGE---

-Fi Ōieth
+Fiftieth
```
</details>

### classic12_sparse_columns

- **Case Metadata:** format: xlsx | case: classic12_sparse_columns | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic12_sparse_columns.xlsx
- **Text Similarity:** 0.9211
- **Visual Average:** 0.4983
- **Overall Score:** 0.6678
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=14153 bytes, Reference=41546 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic12_sparse_columns.pdf
+++ reference/classic12_sparse_columns.pdf
@@ -1,3 +1,5 @@
-Le Ō Right

+Left Right

 Data1 FarRight

-Row3 VeryFar
+Row3

+---PAGE---

+VeryFar
```
</details>

### classic13_date_strings

- **Case Metadata:** format: xlsx | case: classic13_date_strings | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic13_date_strings.xlsx
- **Text Similarity:** 0.9158
- **Visual Average:** 0.9932
- **Overall Score:** 0.9636
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16714 bytes, Reference=49430 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic13_date_strings.pdf
+++ reference/classic13_date_strings.pdf
@@ -1,6 +1,6 @@
 Date Event

-2025-01- Launch

-2025-06- Release

-2025-12- Holiday

-2026-01- New Yea

-2026-02- Today
+2025-01-15Launch

+2025-06-30Release

+2025-12-25Holiday

+2026-01-01New Year

+2026-02-23Today
```
</details>

### classic14_decimal_numbers

- **Case Metadata:** format: xlsx | case: classic14_decimal_numbers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic14_decimal_numbers.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9943
- **Overall Score:** 0.9977
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16642 bytes, Reference=52898 bytes

Text content: ✅ Identical

### classic15_negative_numbers

- **Case Metadata:** format: xlsx | case: classic15_negative_numbers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic15_negative_numbers.xlsx
- **Text Similarity:** 0.9068
- **Visual Average:** 0.9957
- **Overall Score:** 0.961
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15660 bytes, Reference=42915 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic15_negative_numbers.pdf
+++ reference/classic15_negative_numbers.pdf
@@ -1,7 +1,7 @@
 Label Value

 Loss -100

-Small Los-0.5

+Small Loss -0.5

 Zero 0

 Gain 50

-Big Loss -99999.9

+Big Loss -100000

 Tiny -0.001
```
</details>

### classic16_percentage_strings

- **Case Metadata:** format: xlsx | case: classic16_percentage_strings | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic16_percentage_strings.xlsx
- **Text Similarity:** 0.9689
- **Visual Average:** 0.994
- **Overall Score:** 0.9852
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17473 bytes, Reference=52564 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic16_percentage_strings.pdf
+++ reference/classic16_percentage_strings.pdf
@@ -1,6 +1,6 @@
 Metric Rate

-Conversio12.5%

+Conversion12.5%

 Bounce 45.3%

-Reten Ɵon 88.7%

+Retention 88.7%

 Churn 3.2%

 Growth 156.0%
```
</details>

### classic17_currency_strings

- **Case Metadata:** format: xlsx | case: classic17_currency_strings | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic17_currency_strings.xlsx
- **Text Similarity:** 0.9951
- **Visual Average:** 0.9932
- **Overall Score:** 0.9953
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18766 bytes, Reference=52509 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic17_currency_strings.pdf
+++ reference/classic17_currency_strings.pdf
@@ -1,7 +1,7 @@
 Item Price

 Widget $19.99

 Gadget $149.00

-Premium$1,299.99

+Premium $1,299.99

 Budget $4.50

 Euro Item €49.99

 Yen Item ¥5000
```
</details>

### classic18_large_dataset

- **Case Metadata:** format: xlsx | case: classic18_large_dataset | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic18_large_dataset.xlsx
- **Text Similarity:** 0.9001
- **Visual Average:** 0.4939
- **Overall Score:** 0.6576
- **Pages:** MiniPdf=24, Reference=42
- **File Size:** MiniPdf=102326 bytes, Reference=920992 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic18_large_dataset.pdf
+++ reference/classic18_large_dataset.pdf
@@ -1,1024 +1,2043 @@
-Col0 Col1 Col2 Col3 Col4 Col5 Col6 Col7 Col8 Col9

-R0C0 R0C1 R0C2 R0C3 R0C4 R0C5 R0C6 R0C7 R0C8 R0C9

-R1C0 R1C1 R1C2 R1C3 R1C4 R1C5 R1C6 R1C7 R1C8 R1C9

-R2C0 R2C1 R2C2 R2C3 R2C4 R2C5 R2C6 R2C7 R2C8 R2C9

-R3C0 R3C1 R3C2 R3C3 R3C4 R3C5 R3C6 R3C7 R3C8 R3C9

-R4C0 R4C1 R4C2 R4C3 R4C4 R4C5 R4C6 R4C7 R4C8 R4C9

-R5C0 R5C1 R5C2 R5C3 R5C4 R5C5 R5C6 R5C7 R5C8 R5C9

-R6C0 R6C1 R6C2 R6C3 R6C4 R6C5 R6C6 R6C7 R6C8 R6C9

-R7C0 R7C1 R7C2 R7C3 R7C4 R7C5 R7C6 R7C7 R7C8 R7C9

-R8C0 R8C1 R8C2 R8C3 R8C4 R8C5 R8C6 R8C7 R8C8 R8C9

-R9C0 R9C1 R9C2 R9C3 R9C4 R9C5 R9C6 R9C7 R9C8 R9C9

-R10C0 R10C1 R10C2 R10C3 R10C4 R10C5 R10C6 R10C7 R10C8 R10C9

-R11C0 R11C1 R11C2 R11C3 R11C4 R11C5 R11C6 R11C7 R11C8 R11C9

-R12C0 R12C1 R12C2 R12C3 R12C4 R12C5 R12C6 R12C7 R12C8 R12C9

-R13C0 R13C1 R13C2 R13C3 R13C4 R13C5 R13C6 R13C7 R13C8 R13C9

-R14C0 R14C1 R14C2 R14C3 R14C4 R14C5 R14C6 R14C7 R14C8 R14C9

-R15C0 R15C1 R15C2 R15C3 R15C4 R15C5 R15C6 R15C7 R15C8 R15C9

-R16C0 R16C1 R16C2 R16C3 R16C4 R16C5 R16C6 R16C7 R16C8 R16C9

-R17C0 R17C1 R17C2 R17C3 R17C4 R17C5 R17C6 R17C7 R17C8 R17C9

-R18C0 R18C1 R18C2 R18C3 R18C4 R18C5 R18C6 R18C7 R18C8 R18C9

-R19C0 R19C1 R19C2 R19C3 R19C4 R19C5 R19C6 R19C7 R19C8 R19C9

-R20C0 R20C1 R20C2 R20C3 R20C4 R20C5 R20C6 R20C7 R20C8 R20C9

-R21C0 R21C1 R21C2 R21C3 R21C4 R21C5 R21C6 R21C7 R21C8 R21C9

-R22C0 R22C1 R22C2 R22C3 R22C4 R22C5 R22C6 R22C7 R22C8 R22C9

-R23C0 R23C1 R23C2 R23C3 R23C4 R23C5 R23C6 R23C7 R23C8 R23C9

-R24C0 R24C1 R24C2 R24C3 R24C4 R24C5 R24C6 R24C7 R24C8 R24C9

-R25C0 R25C1 R25C2 R25C3 R25C4 R25C5 R25C6 R25C7 R25C8 R25C9

-R26C0 R26C1 R26C2 R26C3 R26C4 R26C5 R26C6 R26C7 R26C8 R26C9

-R27C0 R27C1 R27C2 R27C3 R27C4 R27C5 R27C6 R27C7 R27C8 R27C9

-R28C0 R28C1 R28C2 R28C3 R28C4 R28C5 R28C6 R28C7 R28C8 R28C9

-R29C0 R29C1 R29C2 R29C3 R29C4 R29C5 R29C6 R29C7 R29C8 R29C9

-R30C0 R30C1 R30C2 R30C3 R30C4 R30C5 R30C6 R30C7 R30C8 R30C9

-R31C0 R31C1 R31C2 R31C3 R31C4 R31C5 R31C6 R31C7 R31C8 R31C9

-R32C0 R32C1 R32C2 R32C3 R32C4 R32C5 R32C6 R32C7 R32C8 R32C9

-R33C0 R33C1 R33C2 R33C3 R33C4 R33C5 R33C6 R33C7 R33C8 R33C9

-R34C0 R34C1 R34C2 R34C3 R34C4 R34C5 R34C6 R34C7 R34C8 R34C9

-R35C0 R35C1 R35C2 R35C3 R35C4 R35C5 R35C6 R35C7 R35C8 R35C9

-R36C0 R36C1 R36C2 R36C3 R36C4 R36C5 R36C6 R36C7 R36C8 R36C9

-R37C0 R37C1 R37C2 R37C3 R37C4 R37C5 R37C6 R37C7 R37C8 R37C9

-R38C0 R38C1 R38C2 R38C3 R38C4 R38C5 R38C6 R38C7 R38C8 R38C9

-R39C0 R39C1 R39C2 R39C3 R39C4 R39C5 R39C6 R39C7 R39C8 R39C9

-R40C0 R40C1 R40C2 R40C3 R40C4 R40C5 R40C6 R40C7 R40C8 R40C9

-R41C0 R41C1 R41C2 R41C3 R41C4 R41C5 R41C6 R41C7 R41C8 R41C9

----PAGE---

-R42C0 R42C1 R42C2 R42C3 R42C4 R42C5 R42C6 R42C7 R42C8 R42C9

-R43C0 R43C1 R43C2 R43C3 R43C4 R43C5 R43C6 R43C7 R43C8 R43C9

-R44C0 R44C1 R44C2 R44C3 R44C4 R44C5 R44C6 R44C7 R44C8 R44C9

-R45C0 R45C1 R45C2 R45C3 R45C4 R45C5 R45C6 R45C7 R45C8 R45C9

-R46C0 R46C1 R46C2 R46C3 R46C4 R46C5 R46C6 R46C7 R46C8 R46C9

-R47C0 R47C1 R47C
... (141839 more characters)

```
</details>

### classic19_single_column_list

- **Case Metadata:** format: xlsx | case: classic19_single_column_list | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic19_single_column_list.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9944
- **Overall Score:** 0.9978
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=13813 bytes, Reference=47524 bytes

Text content: ✅ Identical

### classic20_all_empty_cells

- **Case Metadata:** format: xlsx | case: classic20_all_empty_cells | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic20_all_empty_cells.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 1.0
- **Overall Score:** 1.0
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=671 bytes, Reference=25793 bytes

Text content: ✅ Identical

### classic21_header_only

- **Case Metadata:** format: xlsx | case: classic21_header_only | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic21_header_only.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9986
- **Overall Score:** 0.9994
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=11345 bytes, Reference=35519 bytes

Text content: ✅ Identical

### classic22_long_sheet_name

- **Case Metadata:** format: xlsx | case: classic22_long_sheet_name | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic22_long_sheet_name.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.998
- **Overall Score:** 0.9992
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=12575 bytes, Reference=36175 bytes

Text content: ✅ Identical

### classic23_unicode_text

- **Case Metadata:** format: xlsx | case: classic23_unicode_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic23_unicode_text.xlsx
- **Text Similarity:** 0.7833
- **Visual Average:** 0.991
- **Overall Score:** 0.9097
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19740 bytes, Reference=121984 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic23_unicode_text.pdf
+++ reference/classic23_unicode_text.pdf
@@ -1,7 +1,7 @@
-LanguageGree Ɵng Extra

+Language Greeting Extra

 English Hello World

 Chinese 你好 世界

-Japanese こんにち世界

-Korean ????? ??

-Arabic ????? ??????

-Emoji ?? ??
+Japanese こんにちは世界

+Korean 안녕하세요세계

+Arabicمرحبا العالم

+Emoji 😀🎉 ✅❌
```
</details>

### classic24_red_text

- **Case Metadata:** format: xlsx | case: classic24_red_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic24_red_text.xlsx
- **Text Similarity:** 0.7922
- **Visual Average:** 0.9888
- **Overall Score:** 0.9124
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16228 bytes, Reference=41978 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic24_red_text.pdf
+++ reference/classic24_red_text.pdf
@@ -1,4 +1,4 @@
 Status Message

-Error Somethin

-OK All system

-Warning Check dis
+Error Something went wrong

+OK All systems operational

+Warning Check disk space
```
</details>

### classic25_multiple_colors

- **Case Metadata:** format: xlsx | case: classic25_multiple_colors | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic25_multiple_colors.xlsx
- **Text Similarity:** 0.8263
- **Visual Average:** 0.9881
- **Overall Score:** 0.9258
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17032 bytes, Reference=44930 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic25_multiple_colors.pdf
+++ reference/classic25_multiple_colors.pdf
@@ -1,9 +1,9 @@
-Color NamSample T

-Red This is red

-Green This is gre

-Blue This is blu

-Yellow This is ye

-Magenta This is ma

-Cyan This is cy

-Orange This is or

-Purple This is pu
+Color Nam Sample Text

+Red This is red text

+Green This is green text

+Blue This is blue text

+Yellow This is yellow text

+Magenta This is magenta text

+Cyan This is cyan text

+Orange This is orange text

+Purple This is purple text
```
</details>

### classic26_inline_strings

- **Case Metadata:** format: xlsx | case: classic26_inline_strings | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic26_inline_strings.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9968
- **Overall Score:** 0.9987
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=13444 bytes, Reference=39664 bytes

Text content: ✅ Identical

### classic27_single_row

- **Case Metadata:** format: xlsx | case: classic27_single_row | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic27_single_row.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9983
- **Overall Score:** 0.9993
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=12744 bytes, Reference=33233 bytes

Text content: ✅ Identical

### classic28_duplicate_values

- **Case Metadata:** format: xlsx | case: classic28_duplicate_values | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic28_duplicate_values.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9955
- **Overall Score:** 0.9982
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=10624 bytes, Reference=30315 bytes

Text content: ✅ Identical

### classic29_formula_results

- **Case Metadata:** format: xlsx | case: classic29_formula_results | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic29_formula_results.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9938
- **Overall Score:** 0.9975
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=13951 bytes, Reference=42240 bytes

Text content: ✅ Identical

### classic30_mixed_empty_and_filled_sheets

- **Case Metadata:** format: xlsx | case: classic30_mixed_empty_and_filled_sheets | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic30_mixed_empty_and_filled_sheets.xlsx
- **Text Similarity:** 0.96
- **Visual Average:** 0.4981
- **Overall Score:** 0.6832
- **Pages:** MiniPdf=4, Reference=2
- **File Size:** MiniPdf=15298 bytes, Reference=40960 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic30_mixed_empty_and_filled_sheets.pdf
+++ reference/classic30_mixed_empty_and_filled_sheets.pdf
@@ -1,9 +1,6 @@
----PAGE---

 Hello World

 Foo Bar

 Baz Qux

 ---PAGE---

-

----PAGE---

 Column1 Column2 Column3

 1 2 3
```
</details>

### classic31_bold_header_row

- **Case Metadata:** format: xlsx | case: classic31_bold_header_row | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic31_bold_header_row.xlsx
- **Text Similarity:** 0.9593
- **Visual Average:** 0.992
- **Overall Score:** 0.9805
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26647 bytes, Reference=77301 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic31_bold_header_row.pdf
+++ reference/classic31_bold_header_row.pdf
@@ -1,5 +1,5 @@
-Product CategoryPrice Stock

-Laptop Electroni 999.99 50

-Desk Furniture349 20

-Pen Sta Ɵoner 1.99 500

-Chair Furniture199 30
+Product Category Price Stock

+Laptop Electronics 999.99 50

+Desk Furniture 349 20

+Pen Stationery 1.99 500

+Chair Furniture 199 30
```
</details>

### classic32_right_aligned_numbers

- **Case Metadata:** format: xlsx | case: classic32_right_aligned_numbers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic32_right_aligned_numbers.xlsx
- **Text Similarity:** 0.9725
- **Visual Average:** 0.9958
- **Overall Score:** 0.9873
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16536 bytes, Reference=50644 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic32_right_aligned_numbers.pdf
+++ reference/classic32_right_aligned_numbers.pdf
@@ -1,4 +1,4 @@
 Label Amount

 Revenue 125000

 Expenses 87500

-Proﬁt 37500
+Profit 37500
```
</details>

### classic33_centered_text

- **Case Metadata:** format: xlsx | case: classic33_centered_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic33_centered_text.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9973
- **Overall Score:** 0.9989
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=13873 bytes, Reference=41368 bytes

Text content: ✅ Identical

### classic34_explicit_column_widths

- **Case Metadata:** format: xlsx | case: classic34_explicit_column_widths | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic34_explicit_column_widths.xlsx
- **Text Similarity:** 0.9372
- **Visual Average:** 0.9922
- **Overall Score:** 0.9718
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16700 bytes, Reference=47831 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic34_explicit_column_widths.pdf
+++ reference/classic34_explicit_column_widths.pdf
@@ -1,4 +1,4 @@
-ID Descrip Ɵon Value

+ID Description Value

 1 Short 10

-2 A much longer descrip Ɵon text her 200

-3 Medium length descrip Ɵon 55
+2 A much longer description text here 200

+3 Medium length description 55
```
</details>

### classic35_explicit_row_heights

- **Case Metadata:** format: xlsx | case: classic35_explicit_row_heights | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic35_explicit_row_heights.xlsx
- **Text Similarity:** 0.9157
- **Visual Average:** 0.9981
- **Overall Score:** 0.9655
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=14539 bytes, Reference=40677 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic35_explicit_row_heights.pdf
+++ reference/classic35_explicit_row_heights.pdf
@@ -1,3 +1,3 @@
-Tall HeadValue

-Extra Tall42

-Normal R10
+Tall Heade Value

+Extra Tall R 42

+Normal Ro 10
```
</details>

### classic36_merged_cells

- **Case Metadata:** format: xlsx | case: classic36_merged_cells | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic36_merged_cells.xlsx
- **Text Similarity:** 0.9682
- **Visual Average:** 0.9925
- **Overall Score:** 0.9843
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16180 bytes, Reference=43920 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic36_merged_cells.pdf
+++ reference/classic36_merged_cells.pdf
@@ -1,4 +1,4 @@
-Merged Header Spanning Th

+Merged Header Spanning Three C

 Col1 Col2 Col3

 Row2A Row2B Row2C

 Row3A Row3B Row3C
```
</details>

### classic37_freeze_panes

- **Case Metadata:** format: xlsx | case: classic37_freeze_panes | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic37_freeze_panes.xlsx
- **Text Similarity:** 0.5946
- **Visual Average:** 0.9832
- **Overall Score:** 0.8311
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17536 bytes, Reference=58159 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic37_freeze_panes.pdf
+++ reference/classic37_freeze_panes.pdf
@@ -1,21 +1,21 @@
 ID Name Score Grade

-1 Student05 D

-2 Student010 D

-3 Student015 D

-4 Student020 D

-5 Student025 D

-6 Student030 D

-7 Student035 D

-8 Student040 D

-9 Student045 D

-10 Student150 C

-11 Student155 C

-12 Student160 C

-13 Student165 C

-14 Student170 B

-15 Student175 B

-16 Student180 B

-17 Student185 B

-18 Student190 A

-19 Student195 A

-20 Student2100 A
+1 Student01 5 D

+2 Student02 10 D

+3 Student03 15 D

+4 Student04 20 D

+5 Student05 25 D

+6 Student06 30 D

+7 Student07 35 D

+8 Student08 40 D

+9 Student09 45 D

+10 Student10 50 C

+11 Student11 55 C

+12 Student12 60 C

+13 Student13 65 C

+14 Student14 70 B

+15 Student15 75 B

+16 Student16 80 B

+17 Student17 85 B

+18 Student18 90 A

+19 Student19 95 A

+20 Student20 100 A
```
</details>

### classic38_hyperlink_cell

- **Case Metadata:** format: xlsx | case: classic38_hyperlink_cell | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic38_hyperlink_cell.xlsx
- **Text Similarity:** 0.6903
- **Visual Average:** 0.9931
- **Overall Score:** 0.8734
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15154 bytes, Reference=41405 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic38_hyperlink_cell.pdf
+++ reference/classic38_hyperlink_cell.pdf
@@ -1,3 +1,3 @@
-ResourceURL

-GitHub h Ʃps://g

-Docs h Ʃps://d
+Resource URL

+GitHub https://github.com

+Docs https://docs.microsoft.com
```
</details>

### classic39_financial_table

- **Case Metadata:** format: xlsx | case: classic39_financial_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic39_financial_table.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9901
- **Overall Score:** 0.996
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17147 bytes, Reference=52570 bytes

Text content: ✅ Identical

### classic40_scientific_notation

- **Case Metadata:** format: xlsx | case: classic40_scientific_notation | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic40_scientific_notation.xlsx
- **Text Similarity:** 0.8557
- **Visual Average:** 0.9934
- **Overall Score:** 0.9396
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18946 bytes, Reference=60659 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic40_scientific_notation.pdf
+++ reference/classic40_scientific_notation.pdf
@@ -1,6 +1,6 @@
 Label Value

-Avogadro6.022E+2

-Planck 6.626E-34

-Speed of 29980000

-Electron 9.109E-3

-Pi approx3.141592
+Avogadro 6.02E+23

+Planck 6.63E-34

+Speed of Li 3E+08

+Electron m 9.11E-31

+Pi approx 3.141593
```
</details>

### classic41_integer_vs_float

- **Case Metadata:** format: xlsx | case: classic41_integer_vs_float | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic41_integer_vs_float.xlsx
- **Text Similarity:** 0.9951
- **Visual Average:** 0.9945
- **Overall Score:** 0.9958
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15716 bytes, Reference=46475 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic41_integer_vs_float.pdf
+++ reference/classic41_integer_vs_float.pdf
@@ -4,6 +4,6 @@
 NegInt -7

 NegFloat -7.5

 Zero 0

-ZeroFloat0

+ZeroFloat 0

 Large 1000000

 Small 0.000001
```
</details>

### classic42_boolean_values

- **Case Metadata:** format: xlsx | case: classic42_boolean_values | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic42_boolean_values.xlsx
- **Text Similarity:** 0.8901
- **Visual Average:** 0.9931
- **Overall Score:** 0.9533
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16606 bytes, Reference=44451 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic42_boolean_values.pdf
+++ reference/classic42_boolean_values.pdf
@@ -1,6 +1,6 @@
 Feature Enabled

-Dark ModTRUE

-No ƟﬁcaƟ FALSE

-Auto-sav TRUE

-Analy Ɵcs FALSE

-Beta FeatTRUE
+Dark Mode TRUE

+Notificatio FALSE

+Auto-save TRUE

+Analytics FALSE

+Beta Featu TRUE
```
</details>

### classic43_inventory_report

- **Case Metadata:** format: xlsx | case: classic43_inventory_report | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic43_inventory_report.xlsx
- **Text Similarity:** 0.9884
- **Visual Average:** 0.9813
- **Overall Score:** 0.9879
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29616 bytes, Reference=89289 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic43_inventory_report.pdf
+++ reference/classic43_inventory_report.pdf
@@ -1,7 +1,7 @@
-SKU Name CategoryQty Unit PriceTotal Val

-SKU001 Widget AWidgets 100 5.99 599

-SKU002 Widget BWidgets 250 3.49 872.5

-SKU003 Gadget XGadgets 50 29.99 1499.5

+SKU Name Category Qty Unit Price Total Value

+SKU001 Widget A Widgets 100 5.99 599

+SKU002 Widget B Widgets 250 3.49 872.5

+SKU003 Gadget X Gadgets 50 29.99 1499.5

 SKU004 Gadget Y Gadgets 75 19.99 1499.25

 SKU005 Tool Z Tools 30 49.99 1499.7

 SKU006 Part P Parts 500 0.99 495
```
</details>

### classic44_employee_roster

- **Case Metadata:** format: xlsx | case: classic44_employee_roster | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic44_employee_roster.xlsx
- **Text Similarity:** 0.7952
- **Visual Average:** 0.9672
- **Overall Score:** 0.905
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22557 bytes, Reference=69090 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic44_employee_roster.pdf
+++ reference/classic44_employee_roster.pdf
@@ -1,9 +1,9 @@
 EmpID First Last Dept Title Email

-1001 Alice Smith Engineer Senior Enalice@ex

-1002 Bob Jones Marke Ɵn Marke Ɵn bob@exa

-1003 Carol Williams HR HR Speciacarol@ex

-1004 David Brown Engineer Junior Endavid@e

-1005 Eve Davis Finance Financial eve@exa

-1006 Frank Miller Sales Sales Repfrank@ex

-1007 Grace Wilson Engineer Tech Leadgrace@e

-1008 Henry Moore Support Support Shenry@e
+1001 Alice Smith Engineerin Senior Eng alice@example.com

+1002 Bob Jones Marketing Marketing bob@example.com

+1003 Carol Williams HR HR Specialicarol@example.com

+1004 David Brown Engineerin Junior Engidavid@example.com

+1005 Eve Davis Finance Financial A eve@example.com

+1006 Frank Miller Sales Sales Reprefrank@example.com

+1007 Grace Wilson Engineerin Tech Lead grace@example.com

+1008 Henry Moore Support Support Sphenry@example.com
```
</details>

### classic45_sales_by_region

- **Case Metadata:** format: xlsx | case: classic45_sales_by_region | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic45_sales_by_region.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9955
- **Overall Score:** 0.9982
- **Pages:** MiniPdf=4, Reference=4
- **File Size:** MiniPdf=16505 bytes, Reference=52603 bytes

Text content: ✅ Identical

### classic46_grade_book

- **Case Metadata:** format: xlsx | case: classic46_grade_book | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic46_grade_book.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9875
- **Overall Score:** 0.995
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19412 bytes, Reference=60464 bytes

Text content: ✅ Identical

### classic47_time_series

- **Case Metadata:** format: xlsx | case: classic47_time_series | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic47_time_series.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9723
- **Overall Score:** 0.9889
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16816 bytes, Reference=60034 bytes

Text content: ✅ Identical

### classic48_survey_results

- **Case Metadata:** format: xlsx | case: classic48_survey_results | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic48_survey_results.xlsx
- **Text Similarity:** 0.9254
- **Visual Average:** 0.988
- **Overall Score:** 0.9654
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19030 bytes, Reference=57959 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic48_survey_results.pdf
+++ reference/classic48_survey_results.pdf
@@ -1,6 +1,6 @@
-Ques Ɵon StrongAgAgree Neutral Disagree StrongDis

-Easy to u 30 45 15 7 3

-Recomm 25 40 20 10 5

-Fair price20 35 25 15 5

-Good sup35 40 15 7 3

-Sa Ɵsﬁed 28 42 18 8 4
+Question StrongAgreAgree Neutral Disagree StrongDisagree

+Easy to use 30 45 15 7 3

+Recommen 25 40 20 10 5

+Fair price 20 35 25 15 5

+Good supp 35 40 15 7 3

+Satisfied 28 42 18 8 4
```
</details>

### classic49_contact_list

- **Case Metadata:** format: xlsx | case: classic49_contact_list | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic49_contact_list.xlsx
- **Text Similarity:** 0.8382
- **Visual Average:** 0.9818
- **Overall Score:** 0.928
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23540 bytes, Reference=72007 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic49_contact_list.pdf
+++ reference/classic49_contact_list.pdf
@@ -1,8 +1,8 @@
 Name Phone Email City Country

-Alice Smi+1-555-0 alice@exNew YorkUSA

-Bob Jone+44-20-7 bob@exaLondon UK

-Carol Wa+86-10-1 carol@exBeijing China

-David Mu+49-30-1 david@e Berlin Germany

-Eve Mar Ɵ +33-1-23 eve@exaParis France

-Frank Tan+81-3-12 frank@exTokyo Japan

-Grace Kim+82-2-12 grace@e Seoul Korea
+Alice Smith+1-555-010alice@examNew York USA

+Bob Jones +44-20-794bob@examLondon UK

+Carol Wang+86-10-123carol@exa Beijing China

+David Mull +49-30-123david@exaBerlin Germany

+Eve Martin+33-1-23-4eve@examParis France

+Frank Tana+81-3-1234frank@exaTokyo Japan

+Grace Kim +82-2-1234grace@exaSeoul Korea
```
</details>

### classic50_budget_vs_actuals

- **Case Metadata:** format: xlsx | case: classic50_budget_vs_actuals | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic50_budget_vs_actuals.xlsx
- **Text Similarity:** 0.9731
- **Visual Average:** 0.983
- **Overall Score:** 0.9824
- **Pages:** MiniPdf=3, Reference=3
- **File Size:** MiniPdf=20656 bytes, Reference=65935 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic50_budget_vs_actuals.pdf
+++ reference/classic50_budget_vs_actuals.pdf
@@ -1,20 +1,20 @@
-Departm Q1 Q2 Q3 Q4 Annual

-Engineer 200000 200000 210000 220000 830000

-Marke Ɵn 80000 90000 85000 95000 350000

+DepartmenQ1 Q2 Q3 Q4 Annual

+Engineerin 200000 200000 210000 220000 830000

+Marketing 80000 90000 85000 95000 350000

 Sales 120000 130000 140000 150000 540000

 HR 40000 40000 42000 43000 165000

 Finance 35000 35000 37000 38000 145000

 ---PAGE---

-Departm Q1 Q2 Q3 Q4 Annual

-Engineer 195000 205000 215000 225000 840000

-Marke Ɵn 82000 88000 91000 97000 358000

+DepartmenQ1 Q2 Q3 Q4 Annual

+Engineerin 195000 205000 215000 225000 840000

+Marketing 82000 88000 91000 97000 358000

 Sales 118000 135000 142000 148000 543000

 HR 39000 41000 41500 44000 165500

 Finance 34000 36000 37500 39000 146500

 ---PAGE---

-Departm Q1 Q2 Q3 Q4 Annual

-Engineer -5000 5000 5000 5000 10000

-Marke Ɵn 2000 -2000 6000 2000 8000

+DepartmenQ1 Q2 Q3 Q4 Annual

+Engineerin -5000 5000 5000 5000 10000

+Marketing 2000 -2000 6000 2000 8000

 Sales -2000 5000 2000 -2000 3000

 HR -1000 1000 -500 1000 500

 Finance -1000 1000 500 1000 1500
```
</details>

### classic51_product_catalog

- **Case Metadata:** format: xlsx | case: classic51_product_catalog | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic51_product_catalog.xlsx
- **Text Similarity:** 0.9122
- **Visual Average:** 0.9779
- **Overall Score:** 0.956
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23498 bytes, Reference=72763 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic51_product_catalog.pdf
+++ reference/classic51_product_catalog.pdf
@@ -1,11 +1,11 @@
-Part# Name Descrip Ɵ Weight(gPrice

-P-001 Basic WidStandard150 4.99

-P-002 Pro WidgEnhanced180 12.99

-P-003 Mini GadCompact 90 19.99

-P-004 Max Gad Full-size g450 89.99

-P-005 ConnectoType-A co80 7.49

-P-006 ConnectoType-B co110 9.99

-P-007 Adapter XUniversa 200 15.99

-P-008 Adapter YTravel po120 11.99

-P-009 Mount BrWall mou600 24.99

-P-010 Carry CasPadded c350 34.99
+Part# Name DescriptionWeight(g) Price

+P-001 Basic WidgStandard w 150 4.99

+P-002 Pro WidgetEnhanced w 180 12.99

+P-003 Mini GadgeCompact g 90 19.99

+P-004 Max GadgeFull-size ga 450 89.99

+P-005 Connector Type-A con 80 7.49

+P-006 Connector Type-B con 110 9.99

+P-007 Adapter X Universal p 200 15.99

+P-008 Adapter Y Travel pow 120 11.99

+P-009 Mount Bra Wall moun 600 24.99

+P-010 Carry Case Padded car 350 34.99
```
</details>

### classic52_pivot_summary

- **Case Metadata:** format: xlsx | case: classic52_pivot_summary | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic52_pivot_summary.xlsx
- **Text Similarity:** 0.9911
- **Visual Average:** 0.9827
- **Overall Score:** 0.9895
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=27703 bytes, Reference=88958 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic52_pivot_summary.pdf
+++ reference/classic52_pivot_summary.pdf
@@ -1,4 +1,4 @@
-Region Electroni FurnitureClothing Food Total

+Region ElectronicsFurniture Clothing Food Total

 North 45000 12000 8000 22000 87000

 South 38000 15000 11000 25000 89000

 East 52000 9000 14000 18000 93000
```
</details>

### classic53_invoice

- **Case Metadata:** format: xlsx | case: classic53_invoice | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic53_invoice.xlsx
- **Text Similarity:** 0.8485
- **Visual Average:** 0.9843
- **Overall Score:** 0.9331
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=35363 bytes, Reference=105898 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic53_invoice.pdf
+++ reference/classic53_invoice.pdf
@@ -1,16 +1,16 @@
-INVOI

-Invoice # INV-2025

-Date: 2025-03-

-Due Date2025-03-

+INVOICE

+Invoice #: INV-2025-0042

+Date: 2025-03-01

+Due Date: 2025-03-31

 Bill To:

-ACME Co

-123 Busin

-New York

-Item Qty Unit PriceTotal

-Consul Ɵn 10 150 1500

-So Ōware 5 99 495

-Hardware2 249.99 499.98

-Support P1 1200 1200

+ACME Corporation

+123 Business Rd, Suite 400

+New York, NY 10001

+Item Qty Unit Price Total

+Consulting 10 150 1500

+Software L 5 99 495

+Hardware 2 249.99 499.98

+Support Pla 1 1200 1200

 Subtotal 3694.98

 Tax (8%) 295.6

-Total Due3990.58
+Total Due 3990.58
```
</details>

### classic54_multi_level_header

- **Case Metadata:** format: xlsx | case: classic54_multi_level_header | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic54_multi_level_header.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9857
- **Overall Score:** 0.9943
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22535 bytes, Reference=73000 bytes

Text content: ✅ Identical

### classic55_error_values

- **Case Metadata:** format: xlsx | case: classic55_error_values | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic55_error_values.xlsx
- **Text Similarity:** 0.9718
- **Visual Average:** 0.9911
- **Overall Score:** 0.9852
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=20472 bytes, Reference=60359 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic55_error_values.pdf
+++ reference/classic55_error_values.pdf
@@ -1,7 +1,7 @@
 Metric Value Status

 Sales 12345 OK

 Revenue #N/A Missing

-Cost #REF! Broken re

-Proﬁt #DIV/0! Div by ze

-Units #VALUE! Wrong ty

+Cost #REF! Broken ref

+Profit #DIV/0! Div by zero

+Units #VALUE! Wrong type

 Target 15000 OK
```
</details>

### classic56_alternating_row_colors

- **Case Metadata:** format: xlsx | case: classic56_alternating_row_colors | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic56_alternating_row_colors.xlsx
- **Text Similarity:** 0.9662
- **Visual Average:** 0.9679
- **Overall Score:** 0.9736
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15126 bytes, Reference=50296 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic56_alternating_row_colors.pdf
+++ reference/classic56_alternating_row_colors.pdf
@@ -1,11 +1,11 @@
 # Product Price

-1 Product 110

-2 Product 220

-3 Product 330

-4 Product 440

-5 Product 550

-6 Product 660

-7 Product 770

-8 Product 880

-9 Product 990

-10 Product 1100
+1 Product 1 10

+2 Product 2 20

+3 Product 3 30

+4 Product 4 40

+5 Product 5 50

+6 Product 6 60

+7 Product 7 70

+8 Product 8 80

+9 Product 9 90

+10 Product 10 100
```
</details>

### classic57_cjk_only

- **Case Metadata:** format: xlsx | case: classic57_cjk_only | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic57_cjk_only.xlsx
- **Text Similarity:** 0.9609
- **Visual Average:** 0.9887
- **Overall Score:** 0.9798
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18232 bytes, Reference=54240 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic57_cjk_only.pdf
+++ reference/classic57_cjk_only.pdf
@@ -1,6 +1,6 @@
 序号 产品名称价格 库存

-1 笔记本电 5999 100

-2 智能⼿机 2999 250

+1 笔记本电脑 5999 100

+2 智能手机 2999 250

 3 平板电脑 1999 150

-4 蓝⽛⽿机 299 500

+4 蓝牙耳机 299 500

 5 充电器 99 1000
```
</details>

### classic58_mixed_numeric_formats

- **Case Metadata:** format: xlsx | case: classic58_mixed_numeric_formats | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic58_mixed_numeric_formats.xlsx
- **Text Similarity:** 0.8289
- **Visual Average:** 0.9914
- **Overall Score:** 0.9281
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18555 bytes, Reference=56245 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic58_mixed_numeric_formats.pdf
+++ reference/classic58_mixed_numeric_formats.pdf
@@ -1,10 +1,10 @@
 Type Value

 Integer 1000000

-Float 2dp3.14

-Float 5dp3.14159

-Nega Ɵve -42

-Nega Ɵve -3.14

-Very sma0.0001

-Very larg 9999999

+Float 2dp 3.14

+Float 5dp 3.14159

+Negative in -42

+Negative fl -3.14

+Very small 0.0001

+Very large 10000000

 Zero 0

-Scien Ɵﬁc 12300000
+Scientific a 1.23E+10
```
</details>

### classic59_multi_sheet_summary

- **Case Metadata:** format: xlsx | case: classic59_multi_sheet_summary | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic59_multi_sheet_summary.xlsx
- **Text Similarity:** 0.9949
- **Visual Average:** 0.9931
- **Overall Score:** 0.9952
- **Pages:** MiniPdf=4, Reference=4
- **File Size:** MiniPdf=19489 bytes, Reference=61161 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic59_multi_sheet_summary.pdf
+++ reference/classic59_multi_sheet_summary.pdf
@@ -19,7 +19,7 @@
 Prod4 41 1229.59

 Prod5 48 1679.52

 ---PAGE---

-Month Total Rev

+Month Total Revenue

 Jan 4598.3

 Feb 4598.3

 Mar 4598.3
```
</details>

### classic60_large_wide_table

- **Case Metadata:** format: xlsx | case: classic60_large_wide_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic60_large_wide_table.xlsx
- **Text Similarity:** 0.802
- **Visual Average:** 0.6118
- **Overall Score:** 0.6655
- **Pages:** MiniPdf=4, Reference=6
- **File Size:** MiniPdf=22747 bytes, Reference=130804 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic60_large_wide_table.pdf
+++ reference/classic60_large_wide_table.pdf
@@ -1,105 +1,158 @@
-Col01 Col02 Col03 Col04 Col05 Col06 Col07 Col08 Col09 Col10 Col11

-R01C01 R01C02 R01C03 R01C04 R01C05 R01C06 R01C07 R01C08 R01C09 R01C10 R01C11

-R02C01 R02C02 R02C03 R02C04 R02C05 R02C06 R02C07 R02C08 R02C09 R02C10 R02C11

-R03C01 R03C02 R03C03 R03C04 R03C05 R03C06 R03C07 R03C08 R03C09 R03C10 R03C11

-R04C01 R04C02 R04C03 R04C04 R04C05 R04C06 R04C07 R04C08 R04C09 R04C10 R04C11

-R05C01 R05C02 R05C03 R05C04 R05C05 R05C06 R05C07 R05C08 R05C09 R05C10 R05C11

-R06C01 R06C02 R06C03 R06C04 R06C05 R06C06 R06C07 R06C08 R06C09 R06C10 R06C11

-R07C01 R07C02 R07C03 R07C04 R07C05 R07C06 R07C07 R07C08 R07C09 R07C10 R07C11

-R08C01 R08C02 R08C03 R08C04 R08C05 R08C06 R08C07 R08C08 R08C09 R08C10 R08C11

-R09C01 R09C02 R09C03 R09C04 R09C05 R09C06 R09C07 R09C08 R09C09 R09C10 R09C11

-R10C01 R10C02 R10C03 R10C04 R10C05 R10C06 R10C07 R10C08 R10C09 R10C10 R10C11

-R11C01 R11C02 R11C03 R11C04 R11C05 R11C06 R11C07 R11C08 R11C09 R11C10 R11C11

-R12C01 R12C02 R12C03 R12C04 R12C05 R12C06 R12C07 R12C08 R12C09 R12C10 R12C11

-R13C01 R13C02 R13C03 R13C04 R13C05 R13C06 R13C07 R13C08 R13C09 R13C10 R13C11

-R14C01 R14C02 R14C03 R14C04 R14C05 R14C06 R14C07 R14C08 R14C09 R14C10 R14C11

-R15C01 R15C02 R15C03 R15C04 R15C05 R15C06 R15C07 R15C08 R15C09 R15C10 R15C11

-R16C01 R16C02 R16C03 R16C04 R16C05 R16C06 R16C07 R16C08 R16C09 R16C10 R16C11

-R17C01 R17C02 R17C03 R17C04 R17C05 R17C06 R17C07 R17C08 R17C09 R17C10 R17C11

-R18C01 R18C02 R18C03 R18C04 R18C05 R18C06 R18C07 R18C08 R18C09 R18C10 R18C11

-R19C01 R19C02 R19C03 R19C04 R19C05 R19C06 R19C07 R19C08 R19C09 R19C10 R19C11

-R20C01 R20C02 R20C03 R20C04 R20C05 R20C06 R20C07 R20C08 R20C09 R20C10 R20C11

-R21C01 R21C02 R21C03 R21C04 R21C05 R21C06 R21C07 R21C08 R21C09 R21C10 R21C11

-R22C01 R22C02 R22C03 R22C04 R22C05 R22C06 R22C07 R22C08 R22C09 R22C10 R22C11

-R23C01 R23C02 R23C03 R23C04 R23C05 R23C06 R23C07 R23C08 R23C09 R23C10 R23C11

-R24C01 R24C02 R24C03 R24C04 R24C05 R24C06 R24C07 R24C08 R24C09 R24C10 R24C11

-R25C01 R25C02 R25C03 R25C04 R25C05 R25C06 R25C07 R25C08 R25C09 R25C10 R25C11

-R26C01 R26C02 R26C03 R26C04 R26C05 R26C06 R26C07 R26C08 R26C09 R26C10 R26C11

-R27C01 R27C02 R27C03 R27C04 R27C05 R27C06 R27C07 R27C08 R27C09 R27C10 R27C11

-R28C01 R28C02 R28C03 R28C04 R28C05 R28C06 R28C07 R28C08 R28C09 R28C10 R28C11

-R29C01 R29C02 R29C03 R29C04 R29C05 R29C06 R29C07 R29C08 R29C09 R29C10 R29C11

-R30C01 R30C02 R30C03 R30C04 R30C05 R30C06 R30C07 R30C08 R30C09 R30C10 R30C11

-R31C01 R31C02 R31C03 R31C04 R31C05 R31C06 R31C07 R31C08 R31C09 R31C10 R31C11

-R32C01 R32C02 R32C03 R32C04 R32C05 R32C06 R32C07 R32C08 R32C09 R32C10 R32C11

-R33C01 R33C02 R33C03 R33C04 R33C05 R33C06 R33C07 R33C08 R33C09 R33C10 R33C11

-R34C01 R34C02 R34C03 R34C04 R34C05 R34C06 R34C07 R34C08 R34C09 R34C10 R34C11

-R35C01 R35C02 R35C03 R35C04 R35C05 R35C06 R35C07 R35C08 R35C09 R35C10 R35C11

-R36C01 R36C02 R36C03 R36C04 R36C05 R36C06 R36C07 R36C08 R3
... (11920 more characters)

```
</details>

### classic61_product_card_with_image

- **Case Metadata:** format: xlsx | case: classic61_product_card_with_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic61_product_card_with_image.xlsx
- **Text Similarity:** 0.898
- **Visual Average:** 0.9878
- **Overall Score:** 0.9543
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25379 bytes, Reference=71701 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic61_product_card_with_image.pdf
+++ reference/classic61_product_card_with_image.pdf
@@ -1,5 +1,5 @@
-Product N

-Widget P

+Product Name

+Widget Pro 3000

 Price

 $29.99

 In Stock
```
</details>

### classic62_company_logo_header

- **Case Metadata:** format: xlsx | case: classic62_company_logo_header | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic62_company_logo_header.xlsx
- **Text Similarity:** 0.8661
- **Visual Average:** 0.984
- **Overall Score:** 0.94
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=28367 bytes, Reference=79788 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic62_company_logo_header.pdf
+++ reference/classic62_company_logo_header.pdf
@@ -1,6 +1,6 @@
-ACME C

-Annual R

-Departm Q1 Q2 Q3 Q4

+ACME Corporation

+Annual Report 2025

+DepartmenQ1 Q2 Q3 Q4

 Sales 120 135 142 160

-Engineer 85 90 95 100

-Marke Ɵn 60 65 70 75
+Engineerin 85 90 95 100

+Marketing 60 65 70 75
```
</details>

### classic63_two_products_side_by_side

- **Case Metadata:** format: xlsx | case: classic63_two_products_side_by_side | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic63_two_products_side_by_side.xlsx
- **Text Similarity:** 0.8636
- **Visual Average:** 0.9769
- **Overall Score:** 0.9362
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17588 bytes, Reference=46024 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic63_two_products_side_by_side.pdf
+++ reference/classic63_two_products_side_by_side.pdf
@@ -1,3 +1,3 @@
 Product A Product B

-Price: $19 Price: $24

-Ra Ɵng: 4 Ra Ɵng: 4
+Price: $19.99 Price: $24.99

+Rating: 4.2 Rating: 4.7
```
</details>

### classic64_employee_directory_with_photo

- **Case Metadata:** format: xlsx | case: classic64_employee_directory_with_photo | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic64_employee_directory_with_photo.xlsx
- **Text Similarity:** 0.8791
- **Visual Average:** 0.9773
- **Overall Score:** 0.9426
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29295 bytes, Reference=71738 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic64_employee_directory_with_photo.pdf
+++ reference/classic64_employee_directory_with_photo.pdf
@@ -1,4 +1,4 @@
-Photo Name Title DepartmEmail

-Alice CheEngineer R&D alice@ex

-Bob Smit Manager Sales bob@exa

-Carol WaDesigner UX carol@ex
+Photo Name Title DepartmenEmail

+Alice Chen Engineer R&D alice@example.com

+Bob Smith Manager Sales bob@example.com

+Carol WangDesigner UX carol@example.com
```
</details>

### classic65_inventory_with_product_photos

- **Case Metadata:** format: xlsx | case: classic65_inventory_with_product_photos | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic65_inventory_with_product_photos.xlsx
- **Text Similarity:** 0.9677
- **Visual Average:** 0.9857
- **Overall Score:** 0.9814
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31955 bytes, Reference=81216 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic65_inventory_with_product_photos.pdf
+++ reference/classic65_inventory_with_product_photos.pdf
@@ -1,6 +1,6 @@
 Image SKU Name Qty Price

-SKU-001 Red Widg50 9.99

-SKU-002 Blue Gad 30 14.99

-SKU-003 Green To100 4.49

-SKU-004 Yellow De25 29.99

-SKU-005 Purple Ge75 7.99
+SKU-001 Red Widge 50 9.99

+SKU-002 Blue Gadge 30 14.99

+SKU-003 Green Too 100 4.49

+SKU-004 Yellow Dev 25 29.99

+SKU-005 Purple Gea 75 7.99
```
</details>

### classic66_invoice_with_logo

- **Case Metadata:** format: xlsx | case: classic66_invoice_with_logo | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic66_invoice_with_logo.xlsx
- **Text Similarity:** 0.8364
- **Visual Average:** 0.9837
- **Overall Score:** 0.928
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31117 bytes, Reference=87535 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic66_invoice_with_logo.pdf
+++ reference/classic66_invoice_with_logo.pdf
@@ -1,8 +1,8 @@
-INVO

-Invoice #

-Date: 202

-Descrip Ɵ Qty Unit PriceTotal

-Consul Ɵn 8 150 1200

-So Ōware 1 299 299

-Support P1 99 99

+INVOICE

+Invoice #: INV-20250301

+Date: 2025-03-01

+DescriptionQty Unit Price Total

+Consulting 8 150 1200

+Software L 1 299 299

+Support Pa 1 99 99

 Total 1598
```
</details>

### classic67_real_estate_listing

- **Case Metadata:** format: xlsx | case: classic67_real_estate_listing | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic67_real_estate_listing.xlsx
- **Text Similarity:** 0.8379
- **Visual Average:** 0.9731
- **Overall Score:** 0.9244
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31635 bytes, Reference=95016 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic67_real_estate_listing.pdf
+++ reference/classic67_real_estate_listing.pdf
@@ -1,9 +1,9 @@
-123 Ma

-Springﬁe

-List Price

+123 Maple Street

+Springfield, ST 12345

+List Price: $485,000

 Feature Detail

-Bedroom4

-Bathroom2.5

+Bedrooms 4

+Bathrooms 2.5

 Sq Ft 2100

-Lot Size 0.25 acre

-Year Built1998
+Lot Size 0.25 acres

+Year Built 1998
```
</details>

### classic68_restaurant_menu

- **Case Metadata:** format: xlsx | case: classic68_restaurant_menu | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic68_restaurant_menu.xlsx
- **Text Similarity:** 0.6769
- **Visual Average:** 0.8485
- **Overall Score:** 0.8102
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=33849 bytes, Reference=89964 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic68_restaurant_menu.pdf
+++ reference/classic68_restaurant_menu.pdf
@@ -1,9 +1,9 @@
-Today

-Grilled Sa $18.99

-Fresh Atl

-Caesar Sa $12.99

-Romaine

-Beef Burg $14.99

-8oz Angu

-Pasta Pri $13.99

-Seasonal
+Today's Menu

+Grilled Salm $18.99

+Fresh Atlantic salmon with herbs

+Caesar Sala $12.99

+Romaine lettuce, croutons, parmesan

+Beef Burge $14.99

+8oz Angus beef, brioche bun

+Pasta Prim $13.99

+Seasonal vegetables, olive oil
```
</details>

### classic69_image_only_sheet

- **Case Metadata:** format: xlsx | case: classic69_image_only_sheet | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic69_image_only_sheet.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.6516
- **Overall Score:** 0.8606
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=2543 bytes, Reference=6125 bytes

Text content: ✅ Identical

### classic70_product_catalog_with_images

- **Case Metadata:** format: xlsx | case: classic70_product_catalog_with_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic70_product_catalog_with_images.xlsx
- **Text Similarity:** 0.71
- **Visual Average:** 0.962
- **Overall Score:** 0.8688
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32003 bytes, Reference=85583 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic70_product_catalog_with_images.pdf
+++ reference/classic70_product_catalog_with_images.pdf
@@ -1,7 +1,7 @@
-Produc

-Classic Pe $3.99

-A reliable

-Leather N $12.99

-Premium

-Desk Org $24.99

-Bamboo
+Product Catalog - Spring 2025

+Classic Pen $3.99

+A reliable ballpoint pen

+Leather No $12.99

+Premium A5 notebook

+Desk Organ $24.99

+Bamboo desk tidy set
```
</details>

### classic71_multi_sheet_with_images

- **Case Metadata:** format: xlsx | case: classic71_multi_sheet_with_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic71_multi_sheet_with_images.xlsx
- **Text Similarity:** 0.9754
- **Visual Average:** 0.9924
- **Overall Score:** 0.9871
- **Pages:** MiniPdf=3, Reference=3
- **File Size:** MiniPdf=22212 bytes, Reference=56101 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic71_multi_sheet_with_images.pdf
+++ reference/classic71_multi_sheet_with_images.pdf
@@ -6,6 +6,6 @@
 Digital 50000

 Print 20000

 ---PAGE---

-Departm Headcou

-Engineer 45

+DepartmenHeadcount

+Engineerin 45

 Sales 30
```
</details>

### classic72_bar_chart_image_with_data

- **Case Metadata:** format: xlsx | case: classic72_bar_chart_image_with_data | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic72_bar_chart_image_with_data.xlsx
- **Text Similarity:** 0.9535
- **Visual Average:** 0.7836
- **Overall Score:** 0.8948
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26949 bytes, Reference=74026 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic72_bar_chart_image_with_data.pdf
+++ reference/classic72_bar_chart_image_with_data.pdf
@@ -1,4 +1,4 @@
-Monthl

+Monthly Sales Data

 Month Revenue Target

 Jan 42000 45000

 Feb 48000 47000
```
</details>

### classic73_event_flyer_with_banner

- **Case Metadata:** format: xlsx | case: classic73_event_flyer_with_banner | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic73_event_flyer_with_banner.xlsx
- **Text Similarity:** 0.7015
- **Visual Average:** 0.9183
- **Overall Score:** 0.8479
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30540 bytes, Reference=87466 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic73_event_flyer_with_banner.pdf
+++ reference/classic73_event_flyer_with_banner.pdf
@@ -1,9 +1,9 @@
-Tech S

-Date: Apr

-Venue: C

-Speakers

+Tech Summit 2025

+Date: April 15, 2025

+Venue: Convention Center Hall A

+Speakers: 20+ Industry Leaders

 Time Session Speaker

-09:00 Opening Dr. Jane K

-10:30 AI in PracProf. Mar

-13:00 Cloud ArcEng. Sara

-15:00 Panel DisAll Speak
+09:00 Opening KeDr. Jane Kim

+10:30 AI in Practi Prof. Mark Liu

+13:00 Cloud ArchEng. Sara Patel

+15:00 Panel DiscuAll Speakers
```
</details>

### classic74_dashboard_with_kpi_image

- **Case Metadata:** format: xlsx | case: classic74_dashboard_with_kpi_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic74_dashboard_with_kpi_image.xlsx
- **Text Similarity:** 0.9017
- **Visual Average:** 0.7587
- **Overall Score:** 0.8642
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=33998 bytes, Reference=99265 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic74_dashboard_with_kpi_image.pdf
+++ reference/classic74_dashboard_with_kpi_image.pdf
@@ -1,6 +1,6 @@
-Execu Ɵ

+Executive Dashboard Q1 2025

 KPI Target Actual Status

 Revenue 500000 523000 ✓ Above

-New Cust200 187 ? Below

-NPS Scor 70 74 ✓ Above

-Churn Ra< 3% 2.8% ✓ Above
+New Custo 200 187 ✗ Below

+NPS Score 70 74 ✓ Above

+Churn Rate< 3% 2.8% ✓ Above
```
</details>

### classic75_certificate_with_seal

- **Case Metadata:** format: xlsx | case: classic75_certificate_with_seal | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic75_certificate_with_seal.xlsx
- **Text Similarity:** 0.459
- **Visual Average:** 0.8508
- **Overall Score:** 0.7239
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=28249 bytes, Reference=77570 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic75_certificate_with_seal.pdf
+++ reference/classic75_certificate_with_seal.pdf
@@ -1,5 +1,5 @@
-Cer Ɵﬁ

-This cer Ɵ

-Alice J

-has succe

-Issued: M
+Certificate of Achievement

+This certifies that

+Alice Johnson

+has successfully completed the Advanced Python Training

+Issued: March 1, 2025
```
</details>

### classic76_product_image_grid

- **Case Metadata:** format: xlsx | case: classic76_product_image_grid | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic76_product_image_grid.xlsx
- **Text Similarity:** 0.8333
- **Visual Average:** 0.961
- **Overall Score:** 0.9177
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26213 bytes, Reference=67180 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic76_product_image_grid.pdf
+++ reference/classic76_product_image_grid.pdf
@@ -1,5 +1,5 @@
-Best Se

-Red Phon Blue Spe

+Best Sellers

+Red Phone Case Blue Speakers

 $9.99 $49.99

-Green Ba Yellow H

+Green Backpack Yellow Headset

 $34.99 $29.99
```
</details>

### classic77_news_article_with_hero_image

- **Case Metadata:** format: xlsx | case: classic77_news_article_with_hero_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic77_news_article_with_hero_image.xlsx
- **Text Similarity:** 0.2344
- **Visual Average:** 0.7635
- **Overall Score:** 0.5992
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31707 bytes, Reference=112553 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic77_news_article_with_hero_image.pdf
+++ reference/classic77_news_article_with_hero_image.pdf
@@ -1,6 +1,6 @@
-AI Tran

-By Jane R

-Ar Ɵﬁcial

-From aut

-Compani

-Experts p
+AI Transforms Modern Workplaces

+By Jane Reporter | March 1, 2025

+Artificial intelligence is reshaping how businesses operate globally.

+From automated workflows to intelligent decision support, the impact is clear.

+Companies adopting AI early report 30% productivity gains on average.

+Experts predict continued acceleration through 2030 and beyond.
```
</details>

### classic78_small_icon_per_row

- **Case Metadata:** format: xlsx | case: classic78_small_icon_per_row | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic78_small_icon_per_row.xlsx
- **Text Similarity:** 0.9507
- **Visual Average:** 0.9875
- **Overall Score:** 0.9753
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31508 bytes, Reference=76703 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic78_small_icon_per_row.pdf
+++ reference/classic78_small_icon_per_row.pdf
@@ -1,6 +1,6 @@
 Icon Task Assignee Status

-Fix login Alice Done

-Write un Bob In Progre

-Deploy toCarol Pending

-Code rev Alice Done

-Update dDave In Progre
+Fix login buAlice Done

+Write unit Bob In Progress

+Deploy to sCarol Pending

+Code revie Alice Done

+Update docDave In Progress
```
</details>

### classic79_wide_panoramic_banner

- **Case Metadata:** format: xlsx | case: classic79_wide_panoramic_banner | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic79_wide_panoramic_banner.xlsx
- **Text Similarity:** 0.7087
- **Visual Average:** 0.8663
- **Overall Score:** 0.83
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30303 bytes, Reference=87926 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic79_wide_panoramic_banner.pdf
+++ reference/classic79_wide_panoramic_banner.pdf
@@ -1,6 +1,6 @@
-Produ

-Introduci

-Available

+Product Launch 2025

+Introducing the next generation of innovation.

+Available starting April 1, 2025

 Model Storage RAM Price

 Pro 256GB 16GB $999

 Max 512GB 32GB $1499
```
</details>

### classic80_portrait_tall_image

- **Case Metadata:** format: xlsx | case: classic80_portrait_tall_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic80_portrait_tall_image.xlsx
- **Text Similarity:** 0.5447
- **Visual Average:** 0.9803
- **Overall Score:** 0.81
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=27759 bytes, Reference=71550 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic80_portrait_tall_image.pdf
+++ reference/classic80_portrait_tall_image.pdf
@@ -1,7 +1,7 @@
-Proﬁle

-Name: Dr

-Title: Chie

-Dept: Res

-Loca Ɵon:

-Email: em

-LinkedIn:
+Profile

+Name: Dr. Emily Zhao

+Title: Chief Scientist

+Dept: Research & Innovation

+Location: Singapore Office

+Email: emily.zhao@example.com

+LinkedIn: linkedin.com/in/ezhao
```
</details>

### classic81_step_by_step_with_images

- **Case Metadata:** format: xlsx | case: classic81_step_by_step_with_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic81_step_by_step_with_images.xlsx
- **Text Similarity:** 0.5068
- **Visual Average:** 0.9685
- **Overall Score:** 0.7901
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=34677 bytes, Reference=93150 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic81_step_by_step_with_images.pdf
+++ reference/classic81_step_by_step_with_images.pdf
@@ -1,9 +1,9 @@
-Quick S

-Step 1: U

-Remove t

-Step 2: C

-Connect

-Step 3: P

-Hold pow

-Step 4: C

-Follow on
+Quick Start Guide

+Step 1: Unbox

+Remove the product from packaging.

+Step 2: Charge

+Connect USB-C cable, charge 2 hours.

+Step 3: Power On

+Hold power button 3 seconds.

+Step 4: Configure

+Follow on-screen setup wizard.
```
</details>

### classic82_before_after_images

- **Case Metadata:** format: xlsx | case: classic82_before_after_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic82_before_after_images.xlsx
- **Text Similarity:** 0.8285
- **Visual Average:** 0.9325
- **Overall Score:** 0.9044
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31392 bytes, Reference=79534 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic82_before_after_images.pdf
+++ reference/classic82_before_after_images.pdf
@@ -1,5 +1,5 @@
-Before A Ōer

-Old desi New des

-Metric Before A Ōer Delta

-Load Ɵme 4.2s 1.1s -74%

-Conversio2.1% 4.8% +129%
+Before After

+Old design – legacy UI New design – modern UI

+Metric Before After Delta

+Load time 4.2s 1.1s -74%

+Conversion2.1% 4.8% +129%
```
</details>

### classic83_color_swatch_palette

- **Case Metadata:** format: xlsx | case: classic83_color_swatch_palette | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic83_color_swatch_palette.xlsx
- **Text Similarity:** 0.7651
- **Visual Average:** 0.9771
- **Overall Score:** 0.8969
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=33106 bytes, Reference=82749 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic83_color_swatch_palette.pdf
+++ reference/classic83_color_swatch_palette.pdf
@@ -1,7 +1,7 @@
-Brand C

-Primary BRGB(0, 82

-Primary RRGB(197,

-Accent G RGB(0, 16

-Neutral GRGB(128,

-Warm YeRGB(255,

-Dark NavRGB(10, 3
+Brand Color Palette

+Primary BluRGB(0, 82, 165)

+Primary ReRGB(197, 27, 50)

+Accent GreRGB(0, 163, 108)

+Neutral GreRGB(128, 128, 128)

+Warm YelloRGB(255, 193, 7)

+Dark Navy RGB(10, 30, 70)
```
</details>

### classic84_travel_destination_cards

- **Case Metadata:** format: xlsx | case: classic84_travel_destination_cards | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic84_travel_destination_cards.xlsx
- **Text Similarity:** 0.4904
- **Visual Average:** 0.9581
- **Overall Score:** 0.7794
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31449 bytes, Reference=83209 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic84_travel_destination_cards.pdf
+++ reference/classic84_travel_destination_cards.pdf
@@ -1,7 +1,7 @@
-Top Tra

-Kyoto, Ja

-Cherry bl

-Prague, C

-Medieval

-Cape Tow

-Mountain
+Top Travel Destinations 2025

+Kyoto, Japan

+Cherry blossoms and ancient temples

+Prague, Czech Republic

+Medieval architecture and vibrant culture

+Cape Town, South Africa

+Mountains, ocean, and wildlife
```
</details>

### classic85_lab_results_with_image

- **Case Metadata:** format: xlsx | case: classic85_lab_results_with_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic85_lab_results_with_image.xlsx
- **Text Similarity:** 0.8972
- **Visual Average:** 0.9445
- **Overall Score:** 0.9367
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32983 bytes, Reference=91041 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic85_lab_results_with_image.pdf
+++ reference/classic85_lab_results_with_image.pdf
@@ -1,7 +1,7 @@
-Sample

-ParameteValue Unit ReferencFlag

-pH 7.35 7.35 ‒ 7.4 Normal

-Glucose 5.2 mmol/L 3.9 ‒ 5.5 Normal

-Sodium 142 mEq/L 136 ‒ 145 Normal

-Potassium5 mEq/L 3.5 ‒ 5.0 Normal

-Crea Ɵnin 1.4 mg/dL 0.6 ‒ 1.2 High
+Sample Analysis Report

+Parameter Value Unit Reference Flag

+pH 7.35 7.35 – 7.45Normal

+Glucose 5.2 mmol/L 3.9 – 5.5 Normal

+Sodium 142 mEq/L 136 – 145 Normal

+Potassium 5 mEq/L 3.5 – 5.0 Normal

+Creatinine 1.4 mg/dL 0.6 – 1.2 High
```
</details>

### classic86_software_screenshot_features

- **Case Metadata:** format: xlsx | case: classic86_software_screenshot_features | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic86_software_screenshot_features.xlsx
- **Text Similarity:** 0.8593
- **Visual Average:** 0.9774
- **Overall Score:** 0.9347
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=28743 bytes, Reference=75924 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic86_software_screenshot_features.pdf
+++ reference/classic86_software_screenshot_features.pdf
@@ -1,9 +1,9 @@
-MiniAp

-The faste

+MiniApp v2.0

+The fastest lightweight app

 Feature Available

-Dark ModYes

-Auto Sav Yes

-Cloud SynYes

-Oﬄine MYes

-API AccesPro only

-Export toYes
+Dark ModeYes

+Auto Save Yes

+Cloud SyncYes

+Offline Mo Yes

+API Access Pro only

+Export to PYes
```
</details>

### classic87_sports_results_with_logos

- **Case Metadata:** format: xlsx | case: classic87_sports_results_with_logos | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic87_sports_results_with_logos.xlsx
- **Text Similarity:** 0.931
- **Visual Average:** 0.9856
- **Overall Score:** 0.9666
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30718 bytes, Reference=84228 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic87_sports_results_with_logos.pdf
+++ reference/classic87_sports_results_with_logos.pdf
@@ -1,4 +1,4 @@
-League

+League Standings - Season 2025

 Logo Team W L D Pts

 Eagles 18 4 2 56

 Tigers 15 7 2 47
```
</details>

### classic88_image_after_data

- **Case Metadata:** format: xlsx | case: classic88_image_after_data | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic88_image_after_data.xlsx
- **Text Similarity:** 0.8771
- **Visual Average:** 0.9729
- **Overall Score:** 0.94
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29112 bytes, Reference=84797 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic88_image_after_data.pdf
+++ reference/classic88_image_after_data.pdf
@@ -1,7 +1,7 @@
-Quarter Revenue ExpensesProﬁt

+Quarter Revenue Expenses Profit

 Q1 120000 80000 40000

 Q2 135000 88000 47000

 Q3 142000 91000 51000

 Q4 160000 95000 65000

-Prepared

-Conﬁden
+Prepared by Finance Team

+Confidential - Q4 2025
```
</details>

### classic89_nutrition_label_with_image

- **Case Metadata:** format: xlsx | case: classic89_nutrition_label_with_image | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic89_nutrition_label_with_image.xlsx
- **Text Similarity:** 0.8633
- **Visual Average:** 0.9813
- **Overall Score:** 0.9378
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32316 bytes, Reference=90810 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic89_nutrition_label_with_image.pdf
+++ reference/classic89_nutrition_label_with_image.pdf
@@ -1,11 +1,11 @@
-Nutri Ɵo

-Serving S

-Nutrient Amount % Daily V

+Nutrition Facts

+Serving Size: 30g (approx. 1 cup)

+Nutrient Amount pe% Daily Value

 Calories 120 kcal

 Total Fat 3g 4%

-Saturated0.5g 3%

+Saturated F0.5g 3%

 Sodium 160mg 7%

-Total Car 22g 8%

-Dietary F 3g 11%

+Total Carbo22g 8%

+Dietary Fib3g 11%

 Sugars 4g

 Protein 3g
```
</details>

### classic90_project_status_with_milestones

- **Case Metadata:** format: xlsx | case: classic90_project_status_with_milestones | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic90_project_status_with_milestones.xlsx
- **Text Similarity:** 0.7593
- **Visual Average:** 0.9349
- **Overall Score:** 0.8777
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=34737 bytes, Reference=88752 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic90_project_status_with_milestones.pdf
+++ reference/classic90_project_status_with_milestones.pdf
@@ -1,8 +1,8 @@
-Project

-Repor Ɵng

-MilestonDue DateOwner Status

-RequiremJan 15 PM TeamComplete

-ArchitectFeb 1 Tech LeadComplete

-Alpha Re Feb 28 Dev TeamIn Progre

-Beta Tes Ɵ Mar 31 QA TeamNot Start

-Produc Ɵo Apr 15 DevOps Not Start
+Project Orion – Status Report

+Reporting Period: Q1 2025

+Milestone Due Date Owner Status

+RequiremeJan 15 PM Team Complete

+ArchitecturFeb 1 Tech Lead Complete

+Alpha Rele Feb 28 Dev Team In Progress

+Beta TestinMar 31 QA Team Not Started

+ProductionApr 15 DevOps Not Started
```
</details>

### classic91_simple_bar_chart

- **Case Metadata:** format: xlsx | case: classic91_simple_bar_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic91_simple_bar_chart.xlsx
- **Text Similarity:** 0.6667
- **Visual Average:** 0.3
- **Overall Score:** 0.4867
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16260 bytes, Reference=76902 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic91_simple_bar_chart.pdf
+++ reference/classic91_simple_bar_chart.pdf
@@ -1,6 +1,15 @@
 Product Revenue

-Widget A12000

-Widget B18500

-Widget C9200

-Widget D22000

-Widget E 15600
+Widget A 12000

+Product Revenue

+Widget B 18500

+Widget C 9200

+Widget D 22000

+Widget E 15600

+Revenue ($)

+Product

+---PAGE---

+Widget A

+Widget B

+Widget C

+Widget D

+Widget E
```
</details>

### classic92_horizontal_bar_chart

- **Case Metadata:** format: xlsx | case: classic92_horizontal_bar_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic92_horizontal_bar_chart.xlsx
- **Text Similarity:** 0.6102
- **Visual Average:** 0.2902
- **Overall Score:** 0.4602
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17657 bytes, Reference=78581 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic92_horizontal_bar_chart.pdf
+++ reference/classic92_horizontal_bar_chart.pdf
@@ -1,7 +1,15 @@
-Departm Headcou

-Engineer 45

+DepartmenHeadcount

+Engineerin 45

+Headcount by Department

 Sales 30

-Marke Ɵn 18

+Marketing 18

 HR 12

 Finance 15

-Opera Ɵo 25
+Operations 25

+---PAGE---

+Engineering

+Sales

+Marketing

+HR

+Finance

+Operations
```
</details>

### classic93_line_chart

- **Case Metadata:** format: xlsx | case: classic93_line_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic93_line_chart.xlsx
- **Text Similarity:** 0.75
- **Visual Average:** 0.3607
- **Overall Score:** 0.5443
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=18210 bytes, Reference=85633 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic93_line_chart.pdf
+++ reference/classic93_line_chart.pdf
@@ -1,5 +1,6 @@
-Month Avg Temp

+Month Avg Temp (C)

 Jan 3

+Monthly Average Temperature

 Feb 5

 Mar 10

 Apr 15

@@ -10,4 +11,18 @@
 Sep 22

 Oct 15

 Nov 8

-Dec 4
+Dec 4

+Temperature (C)

+---PAGE---

+Jan

+Feb

+Mar

+Apr

+May

+Jun

+Jul

+Aug

+Sep

+Oct

+Nov

+Dec
```
</details>

### classic94_pie_chart

- **Case Metadata:** format: xlsx | case: classic94_pie_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic94_pie_chart.xlsx
- **Text Similarity:** 0.6027
- **Visual Average:** 0.2207
- **Overall Score:** 0.4294
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17962 bytes, Reference=78532 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic94_pie_chart.pdf
+++ reference/classic94_pie_chart.pdf
@@ -1,6 +1,17 @@
 Segment Share (%)

-Enterpris35

+Enterprise 35

+Market Share by Segment

 SMB 28

-Consume22

-Governm10

-Educa Ɵon 5
+Consumer 22

+Governme 10

+Education 5

+Enterp

+SMB

+Consu

+Gover

+Educa

+---PAGE---

+prise

+umer

+rnment

+ation
```
</details>

### classic95_area_chart

- **Case Metadata:** format: xlsx | case: classic95_area_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic95_area_chart.xlsx
- **Text Similarity:** 0.9434
- **Visual Average:** 0.3222
- **Overall Score:** 0.6062
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=14589 bytes, Reference=80677 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic95_area_chart.pdf
+++ reference/classic95_area_chart.pdf
@@ -1,5 +1,6 @@
 Hour Users

 00:00 214

+Website Traffic by Hour

 01:00 216

 02:00 218

 03:00 221

@@ -9,6 +10,7 @@
 07:00 240

 08:00 250

 09:00 265

+Users

 10:00 288

 11:00 329

 12:00 408

@@ -22,4 +24,6 @@
 20:00 250

 21:00 240

 22:00 233

-23:00 228
+23:00 228

+---PAGE---

+Users
```
</details>

### classic96_scatter_chart

- **Case Metadata:** format: xlsx | case: classic96_scatter_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic96_scatter_chart.xlsx
- **Text Similarity:** 0.7387
- **Visual Average:** 0.3389
- **Overall Score:** 0.531
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=15965 bytes, Reference=82367 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic96_scatter_chart.pdf
+++ reference/classic96_scatter_chart.pdf
@@ -1,5 +1,6 @@
-Ad SpendSales ($K

+Ad Spend ( Sales ($K)

 45 96

+Ad Spend vs Sales

 6 11

 20 43

 13 22

@@ -10,6 +11,7 @@
 18 38

 37 94

 6 20

+Sales ($K)

 17 49

 49 119

 31 68

@@ -17,5 +19,21 @@
 22 40

 15 37

 26 57

+Ad Spend ($K)

 14 28

-26 52
+26 52

+---PAGE---

+45

+6

+20

+13

+48

+10

+32

+6

+18

+37

+6

+17

+49

+31
```
</details>

### classic97_doughnut_chart

- **Case Metadata:** format: xlsx | case: classic97_doughnut_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic97_doughnut_chart.xlsx
- **Text Similarity:** 0.6916
- **Visual Average:** 0.2238
- **Overall Score:** 0.4662
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16908 bytes, Reference=76024 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic97_doughnut_chart.pdf
+++ reference/classic97_doughnut_chart.pdf
@@ -1,6 +1,18 @@
 Category Amount

 Salaries 50000

+Budget Allocation

 Rent 12000

-Marke Ɵn 8000

+Marketing 8000

 R&D 15000

-Other 5000
+Other 5000

+Sala

+Ren

+Ma

+R&D

+Oth

+---PAGE---

+aries

+nt

+rketing

+D

+her
```
</details>

### classic98_radar_chart

- **Case Metadata:** format: xlsx | case: classic98_radar_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic98_radar_chart.xlsx
- **Text Similarity:** 0.6019
- **Visual Average:** 0.3434
- **Overall Score:** 0.4781
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17354 bytes, Reference=75968 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic98_radar_chart.pdf
+++ reference/classic98_radar_chart.pdf
@@ -1,7 +1,17 @@
 Skill Score

 Python 9

+Developer Skill Radar

 SQL 8

-Commun7

-Leadersh6

+Communic 7

+Leadership 6

 Design 5

-DevOps 7
+DevOps 7

+Python

+SQL

+Commun

+Leadersh

+Design

+DevOps

+---PAGE---

+nication

+hip
```
</details>

### classic99_bubble_chart

- **Case Metadata:** format: xlsx | case: classic99_bubble_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic99_bubble_chart.xlsx
- **Text Similarity:** 0.7586
- **Visual Average:** 0.3162
- **Overall Score:** 0.5299
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17311 bytes, Reference=86738 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic99_bubble_chart.pdf
+++ reference/classic99_bubble_chart.pdf
@@ -1,7 +1,17 @@
-Price ($) Ra Ɵng Units Sold

+Price ($) Rating Units Sold

 10 4.2 500

+Product Comparison

 25 4.5 300

 50 3.8 150

 15 4 420

 35 4.7 200

-8 3.5 600
+8 3.5 600

+Rating

+Price ($)

+---PAGE---

+10

+25

+50

+15

+35

+8
```
</details>

### classic100_stacked_bar_chart

- **Case Metadata:** format: xlsx | case: classic100_stacked_bar_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic100_stacked_bar_chart.xlsx
- **Text Similarity:** 0.8621
- **Visual Average:** 0.6002
- **Overall Score:** 0.7849
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15702 bytes, Reference=75642 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic100_stacked_bar_chart.pdf
+++ reference/classic100_stacked_bar_chart.pdf
@@ -2,4 +2,9 @@
 North 30 40 35 50

 South 25 30 45 40

 East 40 35 30 45

-West 20 25 40 35
+West 20 25 40 35

+Quarterly Revenue by Region

+Q4

+Q3

+Q2

+Q1
```
</details>

### classic101_percent_stacked_bar

- **Case Metadata:** format: xlsx | case: classic101_percent_stacked_bar | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic101_percent_stacked_bar.xlsx
- **Text Similarity:** 0.8696
- **Visual Average:** 0.5989
- **Overall Score:** 0.7874
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15804 bytes, Reference=78650 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic101_percent_stacked_bar.pdf
+++ reference/classic101_percent_stacked_bar.pdf
@@ -3,4 +3,9 @@
 2022 38 30 18 14

 2023 35 32 20 13

 2024 33 35 18 14

-2025 30 38 17 15
+2025 30 38 17 15

+Traffic Source Mix by Year

+Direct

+Referral

+Paid

+Organic
```
</details>

### classic102_line_chart_with_markers

- **Case Metadata:** format: xlsx | case: classic102_line_chart_with_markers | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic102_line_chart_with_markers.xlsx
- **Text Similarity:** 0.8148
- **Visual Average:** 0.3795
- **Overall Score:** 0.5777
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=15324 bytes, Reference=78986 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic102_line_chart_with_markers.pdf
+++ reference/classic102_line_chart_with_markers.pdf
@@ -1,7 +1,13 @@
-Year Users (K) Revenue

+Year Users (K) Revenue (K)

 2020 10 50

+Company Grow

 2021 25 120

 2022 55 280

 2023 90 500

 2024 140 780

-2025 200 1100
+2025 200 1100

+Value (K)

+---PAGE---

+wth

+Users (K)

+Revenue (K)
```
</details>

### classic103_pie_chart_with_labels

- **Case Metadata:** format: xlsx | case: classic103_pie_chart_with_labels | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic103_pie_chart_with_labels.xlsx
- **Text Similarity:** 0.3151
- **Visual Average:** 0.241
- **Overall Score:** 0.3224
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16758 bytes, Reference=76626 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic103_pie_chart_with_labels.pdf
+++ reference/classic103_pie_chart_with_labels.pdf
@@ -1,6 +1,23 @@
 OS Share (%)

-Windows42

-macOS 28

-Linux 15

-ChromeO10

-Other 5
+Windows 42

+Share (%),

+Desktop OS Market Share

+macOS 28 Other, 5, 5%

+Share (%),

+Linux 15 ChromeOS, 10,

+10%

+ChromeOS 10

+Other 5

+Share (%),

+Share (%), Linux,

+Windows, 42,

+15, 15%

+42%

+Share (%),

+macOS, 28, 28%

+---PAGE---

+Windows

+macOS

+Linux

+ChromeOS

+Other
```
</details>

### classic104_combo_bar_line_chart

- **Case Metadata:** format: xlsx | case: classic104_combo_bar_line_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic104_combo_bar_line_chart.xlsx
- **Text Similarity:** 0.875
- **Visual Average:** 0.2982
- **Overall Score:** 0.5693
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16545 bytes, Reference=76509 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic104_combo_bar_line_chart.pdf
+++ reference/classic104_combo_bar_line_chart.pdf
@@ -1,7 +1,12 @@
 Month Sales Target

 Jan 42 45

+Sales vs Targe

 Feb 48 47

 Mar 51 50

 Apr 45 50

 May 56 54

-Jun 62 60
+Jun 62 60

+---PAGE---

+et

+Sales

+Target
```
</details>

### classic105_3d_bar_chart

- **Case Metadata:** format: xlsx | case: classic105_3d_bar_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic105_3d_bar_chart.xlsx
- **Text Similarity:** 0.7931
- **Visual Average:** 0.2699
- **Overall Score:** 0.5252
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=15829 bytes, Reference=103065 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic105_3d_bar_chart.pdf
+++ reference/classic105_3d_bar_chart.pdf
@@ -1,5 +1,10 @@
 Region 2024 2025

 APAC 120 145

+Revenue by Region (3

 EMEA 95 110

-Americas150 175

-LATAM 40 55
+Americas 150 175

+LATAM 40 55

+---PAGE---

+3D)

+2024

+2025
```
</details>

### classic106_3d_pie_chart

- **Case Metadata:** format: xlsx | case: classic106_3d_pie_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic106_3d_pie_chart.xlsx
- **Text Similarity:** 0.6367
- **Visual Average:** 0.2688
- **Overall Score:** 0.4622
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17589 bytes, Reference=113696 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic106_3d_pie_chart.pdf
+++ reference/classic106_3d_pie_chart.pdf
@@ -1,7 +1,21 @@
 Category Amount

 Food 800

+Monthly Expense Breakdown (3D)

 Housing 1500

-Transpor 400

-Entertain300

+Transport 400

+Entertainm 300

 Savings 700

-Other 200
+Other 200

+F

+H

+T

+E

+S

+O

+---PAGE---

+Food

+Housing

+Transport

+Entertainment

+Savings

+Other
```
</details>

### classic107_multi_series_line

- **Case Metadata:** format: xlsx | case: classic107_multi_series_line | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic107_multi_series_line.xlsx
- **Text Similarity:** 0.9498
- **Visual Average:** 0.4733
- **Overall Score:** 0.6692
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16137 bytes, Reference=91236 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic107_multi_series_line.pdf
+++ reference/classic107_multi_series_line.pdf
@@ -1,5 +1,6 @@
 Day AAPL GOOG MSFT

 Day 1 178.48 140.49 402.83

+S

 Day 2 179.43 140.38 401.69

 Day 3 177.25 143.38 403.21

 Day 4 175.75 143.94 404.47

@@ -10,6 +11,7 @@
 Day 9 173.1 137.59 403.53

 Day 10 172.64 139.72 401.94

 Day 11 173.32 139.12 400.69

+Price ($)

 Day 12 172.11 140.8 402.75

 Day 13 173.5 143.13 404.12

 Day 14 172.29 141.53 404.52

@@ -18,4 +20,9 @@
 Day 17 175.83 147.89 407.98

 Day 18 177.62 150.15 408.05

 Day 19 176.68 149.43 408.73

-Day 20 177.07 149.4 408.07
+Day 20 177.07 149.4 408.07

+---PAGE---

+Stock Price Trend (20 Days)

+AAPL

+GOOG

+MSFT
```
</details>

### classic108_stacked_area_chart

- **Case Metadata:** format: xlsx | case: classic108_stacked_area_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic108_stacked_area_chart.xlsx
- **Text Similarity:** 0.8861
- **Visual Average:** 0.2178
- **Overall Score:** 0.5416
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17277 bytes, Reference=86751 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic108_stacked_area_chart.pdf
+++ reference/classic108_stacked_area_chart.pdf
@@ -4,4 +4,10 @@
 Mar 125 110 230 115

 Apr 140 120 250 120

 May 150 130 240 125

-Jun 160 140 260 130
+Jun 160 140 260 130

+Traffic by Channel (Stacked)

+Direct

+Search

+Social

+Email

+---PAGE---
```
</details>

### classic109_scatter_with_trendline

- **Case Metadata:** format: xlsx | case: classic109_scatter_with_trendline | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic109_scatter_with_trendline.xlsx
- **Text Similarity:** 0.7294
- **Visual Average:** 0.3277
- **Overall Score:** 0.5228
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16220 bytes, Reference=86322 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic109_scatter_with_trendline.pdf
+++ reference/classic109_scatter_with_trendline.pdf
@@ -1,16 +1,25 @@
-Study HoExam Sco

+Study HourExam Score

 5 59

+Study Hours vs Exam Score

 8 90

 9 85

+y = 8.1272x + 20.8

 2 35

+R² = 0.9586

 9 99

 5 68

 2 35

 8 92

 5 65

 3 45

+Score

 9 100

 6 62

 9 89

 1 30

-10 98
+10 98

+Hours

+---PAGE---

+828

+Students

+Linear (Students)
```
</details>

### classic110_chart_with_legend

- **Case Metadata:** format: xlsx | case: classic110_chart_with_legend | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic110_chart_with_legend.xlsx
- **Text Similarity:** 0.7547
- **Visual Average:** 0.2944
- **Overall Score:** 0.5196
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=18063 bytes, Reference=88129 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic110_chart_with_legend.pdf
+++ reference/classic110_chart_with_legend.pdf
@@ -1,6 +1,12 @@
 Browser 2024 (%) 2025 (%)

 Chrome 65 62

+Browser Market Share Com

 Safari 18 20

 Firefox 8 7

 Edge 6 8

-Other 3 3
+Other 3 3

+Market Share (%)

+2024 (%) 2025 (

+---PAGE---

+mparison

+(%)
```
</details>

### classic111_chart_with_axis_labels

- **Case Metadata:** format: xlsx | case: classic111_chart_with_axis_labels | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic111_chart_with_axis_labels.xlsx
- **Text Similarity:** 0.6308
- **Visual Average:** 0.3177
- **Overall Score:** 0.4794
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16686 bytes, Reference=79609 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic111_chart_with_axis_labels.pdf
+++ reference/classic111_chart_with_axis_labels.pdf
@@ -1,7 +1,17 @@
 Country CO2 (Mt)

 China 10500

+CO2 Emissions by Country

 USA 5000

 India 2700

 Russia 1700

 Japan 1100

-Germany700
+Germany 700

+Country

+CO2 Emissions (Megatons)

+---PAGE---

+China

+USA

+India

+Russia

+Japan

+Germany
```
</details>

### classic112_multiple_charts

- **Case Metadata:** format: xlsx | case: classic112_multiple_charts | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic112_multiple_charts.xlsx
- **Text Similarity:** 0.7714
- **Visual Average:** 0.3087
- **Overall Score:** 0.532
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17343 bytes, Reference=86399 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic112_multiple_charts.pdf
+++ reference/classic112_multiple_charts.pdf
@@ -1,7 +1,20 @@
-Month Revenue Costs Proﬁt

+Month Revenue Costs Profit

 Jan 50 30 20

+Revenue

 Feb 55 32 23

 Mar 60 35 25

 Apr 52 28 24

 May 70 40 30

-Jun 75 42 33
+Jun 75 42 33

+Profit T

+---PAGE---

+& Costs

+Revenue

+Costs

+Trend

+Jan

+Feb

+Mar

+Apr

+May

+Jun
```
</details>

### classic113_chart_sheet

- **Case Metadata:** format: xlsx | case: classic113_chart_sheet | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic113_chart_sheet.xlsx
- **Text Similarity:** 0.7692
- **Visual Average:** 0.268
- **Overall Score:** 0.5149
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=13890 bytes, Reference=68612 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic113_chart_sheet.pdf
+++ reference/classic113_chart_sheet.pdf
@@ -1,5 +1,11 @@
 Quarter Revenue

 Q1 250

+Quarterly Revenue

 Q2 310

 Q3 285

-Q4 400
+Q4 400

+---PAGE---

+Q1

+Q2

+Q3

+Q4
```
</details>

### classic114_chart_large_dataset

- **Case Metadata:** format: xlsx | case: classic114_chart_large_dataset | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic114_chart_large_dataset.xlsx
- **Text Similarity:** 0.9596
- **Visual Average:** 0.717
- **Overall Score:** 0.7706
- **Pages:** MiniPdf=3, Reference=4
- **File Size:** MiniPdf=16893 bytes, Reference=97214 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic114_chart_large_dataset.pdf
+++ reference/classic114_chart_large_dataset.pdf
@@ -1,5 +1,6 @@
 Day Value

 1 97.7

+100-Day Value

 2 93.7

 3 96.1

 4 93.7

@@ -41,12 +42,12 @@
 40 131

 41 131.7

 42 137.3

----PAGE---

 43 137.6

 44 133.5

 45 130

 46 128.3

 47 127

+---PAGE---

 48 124.3

 49 120.2

 50 118.9

@@ -85,7 +86,6 @@
 83 111.2

 84 107

 85 112.6

----PAGE---

 86 114.8

 87 118

 88 118.9

@@ -96,8 +96,25 @@
 93 129.2

 94 126.2

 95 131.7

+---PAGE---

 96 133.1

 97 129.3

 98 133.6

 99 138

-100 142.1
+100 142.1

+---PAGE---

+Trend

+1

+2

+3

+4

+5

+6

+7

+8

+9

+10

+11

+12

+13

+14
```
</details>

### classic115_chart_negative_values

- **Case Metadata:** format: xlsx | case: classic115_chart_negative_values | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic115_chart_negative_values.xlsx
- **Text Similarity:** 0.68
- **Visual Average:** 0.3095
- **Overall Score:** 0.4958
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16720 bytes, Reference=85182 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic115_chart_negative_values.pdf
+++ reference/classic115_chart_negative_values.pdf
@@ -1,9 +1,20 @@
-Month Proﬁt/Lo

+Month Profit/Loss

 Jan 15

+Monthly Profit & Loss

 Feb -8

 Mar 22

 Apr -3

 May 30

 Jun -12

 Jul 18

-Aug 5
+Aug 5

+Amount ($K)

+---PAGE---

+Jan

+Feb

+Mar

+Apr

+May

+Jun

+Jul

+Aug
```
</details>

### classic116_percent_stacked_area

- **Case Metadata:** format: xlsx | case: classic116_percent_stacked_area | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic116_percent_stacked_area.xlsx
- **Text Similarity:** 0.8718
- **Visual Average:** 0.1935
- **Overall Score:** 0.5261
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16725 bytes, Reference=80966 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic116_percent_stacked_area.pdf
+++ reference/classic116_percent_stacked_area.pdf
@@ -1,7 +1,13 @@
-Year Coal Gas Nuclear Renewab

+Year Coal Gas Nuclear Renewable

 2015 40 25 20 15

 2017 35 27 20 18

 2019 30 28 19 23

 2021 25 28 18 29

 2023 20 26 17 37

-2025 15 24 16 45
+2025 15 24 16 45

+Energy Mix Transition

+Renewable

+Nuclear

+Gas

+Coal

+---PAGE---
```
</details>

### classic117_stock_ohlc_chart

- **Case Metadata:** format: xlsx | case: classic117_stock_ohlc_chart | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic117_stock_ohlc_chart.xlsx
- **Text Similarity:** 0.9342
- **Visual Average:** 0.3927
- **Overall Score:** 0.6308
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=17143 bytes, Reference=91947 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic117_stock_ohlc_chart.pdf
+++ reference/classic117_stock_ohlc_chart.pdf
@@ -8,4 +8,11 @@
 Day 7 151.08 155.51 150.22 150.81

 Day 8 152.42 155.53 152.31 152.99

 Day 9 152.32 154.36 151.02 152.05

-Day 10 152.27 156.85 148.76 156.35
+Day 10 152.27 156.85 148.76 156.35

+Price ($)

+---PAGE---

+Stock OHLC (10 Days)

+Open

+High

+Low

+Close
```
</details>

### classic118_bar_chart_custom_colors

- **Case Metadata:** format: xlsx | case: classic118_bar_chart_custom_colors | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic118_bar_chart_custom_colors.xlsx
- **Text Similarity:** 0.625
- **Visual Average:** 0.2887
- **Overall Score:** 0.4655
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=16739 bytes, Reference=78458 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic118_bar_chart_custom_colors.pdf
+++ reference/classic118_bar_chart_custom_colors.pdf
@@ -1,6 +1,13 @@
-Ra Ɵng Count

+Rating Count

 Excellent 45

+Customer Satisfaction Survey

 Good 30

 Average 15

 Poor 7

-Very Poo 3
+Very Poor 3

+---PAGE---

+Excellent

+Good

+Average

+Poor

+Very Poor
```
</details>

### classic119_dashboard_multi_charts

- **Case Metadata:** format: xlsx | case: classic119_dashboard_multi_charts | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic119_dashboard_multi_charts.xlsx
- **Text Similarity:** 0.6538
- **Visual Average:** 0.2458
- **Overall Score:** 0.4598
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=30216 bytes, Reference=94742 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic119_dashboard_multi_charts.pdf
+++ reference/classic119_dashboard_multi_charts.pdf
@@ -1,9 +1,19 @@
-KPI Das

+KPI Dashboard - Q4 2025

+Revenue vs Expenses

 Month Revenue Expenses

 Oct 85 60

 Nov 92 65

 Dec 110 70

 Segment Share

-Enterpris45

+Enterprise 45

 SMB 30

-Consume25
+Consumer 25

+Revenue by Segment

+Enter

+SMB

+Cons

+---PAGE---

+Revenue

+Expenses

+rprise

+sumer
```
</details>

### classic120_chart_with_date_axis

- **Case Metadata:** format: xlsx | case: classic120_chart_with_date_axis | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic120_chart_with_date_axis.xlsx
- **Text Similarity:** 0.3714
- **Visual Average:** 0.3763
- **Overall Score:** 0.3991
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=15284 bytes, Reference=82299 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic120_chart_with_date_axis.pdf
+++ reference/classic120_chart_with_date_axis.pdf
@@ -1,13 +1,30 @@
-Date Downloa

-2025-01- 581

-2025-01- 594

-2025-03- 592

-2025-04- 692

-2025-05- 760

-2025-05- 733

-2025-06- 763

-2025-07- 767

-2025-08- 774

-2025-09- 788

-2025-10- 820

-2025-11- 865
+Date Downloads

+2025-01-01 581

+Monthly Downloads (202

+2025-01-31 594

+2025-03-02 592

+2025-04-01 692

+2025-05-01 760

+2025-05-31 733

+2025-06-30 763

+2025-07-30 767

+2025-08-29 774

+2025-09-28 788

+2025-10-28 820

+Downloads

+2025-11-27 865

+Date

+---PAGE---

+25)

+2025-01-01

+2025-01-31

+2025-03-02

+2025-04-01

+2025-05-01

+2025-05-31

+2025-06-30

+2025-07-30

+2025-08-29

+2025-09-28

+2025-10-28

+2025-11-27
```
</details>

### classic121_thin_borders

- **Case Metadata:** format: xlsx | case: classic121_thin_borders | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic121_thin_borders.xlsx
- **Text Similarity:** 0.9825
- **Visual Average:** 0.8797
- **Overall Score:** 0.9449
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=24527 bytes, Reference=74465 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic121_thin_borders.pdf
+++ reference/classic121_thin_borders.pdf
@@ -1,6 +1,6 @@
 Item Qty Price Total

-Widget A10 5 50

-Widget B25 3.5 87.5

-Widget C8 12 96

-Widget D15 7.25 108.75

+Widget A 10 5 50

+Widget B 25 3.5 87.5

+Widget C 8 12 96

+Widget D 15 7.25 108.75

 Widget E 30 2 60
```
</details>

### classic122_thick_outer_thin_inner

- **Case Metadata:** format: xlsx | case: classic122_thick_outer_thin_inner | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic122_thick_outer_thin_inner.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.8539
- **Overall Score:** 0.9416
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25309 bytes, Reference=78822 bytes

Text content: ✅ Identical

### classic123_dashed_borders

- **Case Metadata:** format: xlsx | case: classic123_dashed_borders | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic123_dashed_borders.xlsx
- **Text Similarity:** 0.852
- **Visual Average:** 0.9865
- **Overall Score:** 0.9354
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22422 bytes, Reference=61720 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic123_dashed_borders.pdf
+++ reference/classic123_dashed_borders.pdf
@@ -1,6 +1,6 @@
-Border StSample

-dashed Bordered

-do Ʃed Bordered

-dashDot Bordered

-dashDotDBordered

-mediumDBordered
+Border Sty Sample

+dashed Bordered cell

+dotted Bordered cell

+dashDot Bordered cell

+dashDotDoBordered cell

+mediumDaBordered cell
```
</details>

### classic124_colored_borders

- **Case Metadata:** format: xlsx | case: classic124_colored_borders | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic124_colored_borders.xlsx
- **Text Similarity:** 0.7684
- **Visual Average:** 0.9757
- **Overall Score:** 0.8976
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=24075 bytes, Reference=63553 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic124_colored_borders.pdf
+++ reference/classic124_colored_borders.pdf
@@ -1,7 +1,7 @@
-Color Cell Descrip Ɵ

-Red Sample Medium

-Green Sample Medium

-Blue Sample Medium

-Orange Sample Medium

-Purple Sample Medium

-Teal Sample Medium
+Color Cell Description

+Red Sample Medium red border

+Green Sample Medium green border

+Blue Sample Medium blue border

+Orange Sample Medium orange border

+Purple Sample Medium purple border

+Teal Sample Medium teal border
```
</details>

### classic125_solid_fills

- **Case Metadata:** format: xlsx | case: classic125_solid_fills | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic125_solid_fills.xlsx
- **Text Similarity:** 0.9167
- **Visual Average:** 0.9737
- **Overall Score:** 0.9562
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25174 bytes, Reference=69321 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic125_solid_fills.pdf
+++ reference/classic125_solid_fills.pdf
@@ -1,9 +1,9 @@
-Fill NameFilled Cel

-Light BlueBackgrou

-Light GreBackgrou

-Light Yell Backgrou

-Light RedBackgrou

-Light Pur Backgrou

-Light OraBackgrou

-Gray 25%Backgrou

-Sky Blue Backgrou
+Fill Name Filled Cell

+Light Blue Background

+Light GreenBackground

+Light YellowBackground

+Light Red Background

+Light Purpl Background

+Light OrangBackground

+Gray 25% Background

+Sky Blue Background
```
</details>

### classic126_dark_header

- **Case Metadata:** format: xlsx | case: classic126_dark_header | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic126_dark_header.xlsx
- **Text Similarity:** 0.8366
- **Visual Average:** 0.9771
- **Overall Score:** 0.9255
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29061 bytes, Reference=83023 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic126_dark_header.pdf
+++ reference/classic126_dark_header.pdf
@@ -1,6 +1,6 @@
-Employe Departm Salary Start Dat

-Alice SmiEngineer 95000 2020-03-

-Bob JoneMarke Ɵn 72000 2019-07-

-Carol LeeFinance 88000 2021-01-

-David KimEngineer 102000 2018-11-

-Eva ChenHR 68000 2022-05-
+EmployeeDepartment Salary Start Date

+Alice SmithEngineerin 95000 2020-03-15

+Bob Jones Marketing 72000 2019-07-01

+Carol Lee Finance 88000 2021-01-10

+David Kim Engineerin 102000 2018-11-20

+Eva Chen HR 68000 2022-05-03
```
</details>

### classic127_font_styles

- **Case Metadata:** format: xlsx | case: classic127_font_styles | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic127_font_styles.xlsx
- **Text Similarity:** 0.4225
- **Visual Average:** 0.9794
- **Overall Score:** 0.7608
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25970 bytes, Reference=121281 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic127_font_styles.pdf
+++ reference/classic127_font_styles.pdf
@@ -1,9 +1,9 @@
 Style Example

-Bold Sample B

-Italic Sample It

-UnderlineSample U

-StrikethroSample S

-Bold Italic Sample B

-Bold Und Sample B

-Double USample D

-Bold + Re Sample B
+Bold Sample Bold text

+Italic Sample Italic text

+Underline Sample Underline text

+StrikethrouSample Strikethrough text

+Bold Italic Sample Bold Italic text

+Bold Under Sample Bold Underline text

+Double Un Sample Double Underline text

+Bold + Red Sample Bold + Red text
```
</details>

### classic128_font_sizes

- **Case Metadata:** format: xlsx | case: classic128_font_sizes | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic128_font_sizes.xlsx
- **Text Similarity:** 0.8475
- **Visual Average:** 0.9897
- **Overall Score:** 0.9349
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=21963 bytes, Reference=66894 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic128_font_sizes.pdf
+++ reference/classic128_font_sizes.pdf
@@ -1,14 +1,11 @@
 Size Sample

 8 Font size 8

 9 Font size 9

-10 Font size 1

-11 Font size

-12 Font size

-14 Font siz

-16 Font s

-Font s

-18

-Font

-20

-Font

-24
+10 Font size 10

+11 Font size 11

+12 Font size 12

+14 Font size 14

+16 Font size 16

+18 Font size 18

+20 Font size 20

+24 Font size 24
```
</details>

### classic129_alignment_combos

- **Case Metadata:** format: xlsx | case: classic129_alignment_combos | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic129_alignment_combos.xlsx
- **Text Similarity:** 0.8912
- **Visual Average:** 0.9915
- **Overall Score:** 0.9531
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22773 bytes, Reference=65763 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic129_alignment_combos.pdf
+++ reference/classic129_alignment_combos.pdf
@@ -1,6 +1,6 @@
-le Ō center right

-le Ō/top center/top right/top

+left center right

+left/top center/top right/top

 top

-le Ō/center center/center right/center

+left/center center/center right/center

 center

-bo Ʃom le Ō/boƩom center/bo Ʃom right/bo Ʃom
+bottom left/bottom center/bottom right/bottom
```
</details>

### classic130_wrap_and_indent

- **Case Metadata:** format: xlsx | case: classic130_wrap_and_indent | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic130_wrap_and_indent.xlsx
- **Text Similarity:** 0.9839
- **Visual Average:** 0.9906
- **Overall Score:** 0.9898
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=24951 bytes, Reference=70816 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic130_wrap_and_indent.pdf
+++ reference/classic130_wrap_and_indent.pdf
@@ -1,7 +1,7 @@
 Wrapped Text Indented Text

-This is a long text that should wra

-p within the cell when text wrappi

-ng is enabled.

+This is a long text that should wrap

+within the cell when text wrapping is

+enabled.

 Indent level 0

 Indent level 1

 Indent level 2
```
</details>

### classic131_number_formats

- **Case Metadata:** format: xlsx | case: classic131_number_formats | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic131_number_formats.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9808
- **Overall Score:** 0.9923
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25880 bytes, Reference=77127 bytes

Text content: ✅ Identical

### classic132_striped_table

- **Case Metadata:** format: xlsx | case: classic132_striped_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic132_striped_table.xlsx
- **Text Similarity:** 0.711
- **Visual Average:** 0.943
- **Overall Score:** 0.8616
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=28217 bytes, Reference=84504 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic132_striped_table.pdf
+++ reference/classic132_striped_table.pdf
@@ -1,11 +1,11 @@
-Product Category Price Ra Ɵng

-Product 1Food 82.11 1.2

-Product 2Books 449.56 2.2

-Product 3Sports 17.33 4.9

-Product 4Clothing 105.41 2.8

-Product 5Sports 486.22 2

-Product 6Food 416.34 4.5

-Product 7Sports 399.94 4.5

-Product 8Sports 281.79 2.5

-Product 9Sports 445.84 1.8

-Product 1Electroni 276.34 3.4
+Product Category Price Rating

+Product 1 Food 82.11 1.2

+Product 2 Books 449.56 2.2

+Product 3 Sports 17.33 4.9

+Product 4 Clothing 105.41 2.8

+Product 5 Sports 486.22 2

+Product 6 Food 416.34 4.5

+Product 7 Sports 399.94 4.5

+Product 8 Sports 281.79 2.5

+Product 9 Sports 445.84 1.8

+Product 10Electronics 276.34 3.4
```
</details>

### classic133_gradient_rows

- **Case Metadata:** format: xlsx | case: classic133_gradient_rows | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic133_gradient_rows.xlsx
- **Text Similarity:** 0.75
- **Visual Average:** 0.9495
- **Overall Score:** 0.8798
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=24733 bytes, Reference=75810 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic133_gradient_rows.pdf
+++ reference/classic133_gradient_rows.pdf
@@ -1,11 +1,11 @@
-Step Value Color Int

-1 10 Green 00

-2 20 Green 00

-3 30 Green 00

-4 40 Green 00

-5 50 Green 00

-6 60 Green 00

-7 70 Green 00

-8 80 Green 00

-9 90 Green 00

-10 100 Green 00
+Step Value Color Intensity

+1 10 Green 00FF00

+2 20 Green 00E600

+3 30 Green 00CD00

+4 40 Green 00B400

+5 50 Green 009B00

+6 60 Green 008200

+7 70 Green 006900

+8 80 Green 005000

+9 90 Green 003700

+10 100 Green 001E00
```
</details>

### classic134_heatmap

- **Case Metadata:** format: xlsx | case: classic134_heatmap | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic134_heatmap.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9109
- **Overall Score:** 0.9644
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23036 bytes, Reference=78105 bytes

Text content: ✅ Identical

### classic135_bottom_border_only

- **Case Metadata:** format: xlsx | case: classic135_bottom_border_only | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic135_bottom_border_only.xlsx
- **Text Similarity:** 0.8507
- **Visual Average:** 0.9439
- **Overall Score:** 0.9178
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22128 bytes, Reference=58955 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic135_bottom_border_only.pdf
+++ reference/classic135_bottom_border_only.pdf
@@ -1,5 +1,5 @@
-Sec Ɵon Header

-Thin bo Ʃom

-Medium bo Ʃom

-Thick bo Ʃom

-Double bo Ʃom
+Section Header

+Thin bottom

+Medium bottom

+Thick bottom

+Double bottom
```
</details>

### classic136_financial_report_styled

- **Case Metadata:** format: xlsx | case: classic136_financial_report_styled | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic136_financial_report_styled.xlsx
- **Text Similarity:** 0.9794
- **Visual Average:** 0.9416
- **Overall Score:** 0.9684
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32246 bytes, Reference=100226 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic136_financial_report_styled.pdf
+++ reference/classic136_financial_report_styled.pdf
@@ -1,8 +1,8 @@
 Category 2024 2025

 Revenue $450,000.00 $520,000.00

 Cost of Goods -$180,000.00 -$195,000.00

-Gross Proﬁt $270,000.00 $325,000.00

-Opera Ɵng Expenses -$120,000.00 -$135,000.00

+Gross Profit $270,000.00 $325,000.00

+Operating Expenses -$120,000.00 -$135,000.00

 R&D -$45,000.00 -$55,000.00

-Marke Ɵng -$30,000.00 -$38,000.00

+Marketing -$30,000.00 -$38,000.00

 Net Income $75,000.00 $97,000.00
```
</details>

### classic137_checkerboard

- **Case Metadata:** format: xlsx | case: classic137_checkerboard | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic137_checkerboard.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9419
- **Overall Score:** 0.9768
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=9777 bytes, Reference=31191 bytes

Text content: ✅ Identical

### classic138_color_grid

- **Case Metadata:** format: xlsx | case: classic138_color_grid | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic138_color_grid.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9538
- **Overall Score:** 0.9815
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=14040 bytes, Reference=45006 bytes

Text content: ✅ Identical

### classic139_pattern_fills

- **Case Metadata:** format: xlsx | case: classic139_pattern_fills | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic139_pattern_fills.xlsx
- **Text Similarity:** 0.8636
- **Visual Average:** 0.8214
- **Overall Score:** 0.874
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26936 bytes, Reference=80842 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic139_pattern_fills.pdf
+++ reference/classic139_pattern_fills.pdf
@@ -1,13 +1,13 @@
-Pa Ʃern Type Sample

-solid Pa Ʃern

-darkGray Pa Ʃern

-mediumGray Pa Ʃern

-lightGray Pa Ʃern

-gray125 Pa Ʃern

-gray0625 Pa Ʃern

-darkHorizontal Pa Ʃern

-darkVer Ɵcal Pa Ʃern

-darkDown Pa Ʃern

-darkUp Pa Ʃern

-lightHorizontal Pa Ʃern

-lightVer Ɵcal Pa Ʃern
+Pattern Type Sample

+solid Pattern

+darkGray Pattern

+mediumGray Pattern

+lightGray Pattern

+gray125 Pattern

+gray0625 Pattern

+darkHorizontal Pattern

+darkVertical Pattern

+darkDown Pattern

+darkUp Pattern

+lightHorizontal Pattern

+lightVertical Pattern
```
</details>

### classic140_rotated_text

- **Case Metadata:** format: xlsx | case: classic140_rotated_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic140_rotated_text.xlsx
- **Text Similarity:** 0.898
- **Visual Average:** 0.9912
- **Overall Score:** 0.9557
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22772 bytes, Reference=68994 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic140_rotated_text.pdf
+++ reference/classic140_rotated_text.pdf
@@ -1,12 +1,22 @@
-Rota Ɵon Text

+Rotation Text

 0 Rotated

-15 Rotated

-30 Rotated

-45 Rotated

-60 Rotated

-90 Rotated

-105 Rotated

-120 Rotated

-135 Rotated

-150 Rotated

-180 Rotated
+15

+Rotated

+30

+Rotated

+45

+Rotated

+60

+Rotated

+90

+Rotated

+Rotated

+105

+Rotated

+120

+Rotated

+135

+Rotated

+150

+Rotated

+180
```
</details>

### classic141_mixed_edge_borders

- **Case Metadata:** format: xlsx | case: classic141_mixed_edge_borders | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic141_mixed_edge_borders.xlsx
- **Text Similarity:** 0.9433
- **Visual Average:** 0.9816
- **Overall Score:** 0.97
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23910 bytes, Reference=66621 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic141_mixed_edge_borders.pdf
+++ reference/classic141_mixed_edge_borders.pdf
@@ -1,6 +1,6 @@
-Descrip Ɵon Cell

-thick le Ō, thin others Styled

-double bo Ʃom Styled

-medium top + bo Ʃom Styled

+Description Cell

+thick left, thin others Styled

+double bottom Styled

+medium top + bottom Styled

 dashed all sides Styled

 thick all, red Styled
```
</details>

### classic142_styled_invoice

- **Case Metadata:** format: xlsx | case: classic142_styled_invoice | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic142_styled_invoice.xlsx
- **Text Similarity:** 0.9873
- **Visual Average:** 0.9192
- **Overall Score:** 0.9626
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=35590 bytes, Reference=105680 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic142_styled_invoice.pdf
+++ reference/classic142_styled_invoice.pdf
@@ -1,10 +1,10 @@
 INVOICE

 Invoice #: INV-2025-0099

 Date: 2025-06-15

-Item Descrip Ɵon Qty Price Total

+Item Description Qty Price Total

 SVC-001 Web Development 40 $125.00 $5,000.00

 SVC-002 UI/UX Design 20 $100.00 $2,000.00

-SVC-003 Tes Ɵng & QA 15 $90.00 $1,350.00

+SVC-003 Testing & QA 15 $90.00 $1,350.00

 LIC-001 Annual License 1 $2,400.00 $2,400.00

 Subtotal: $10,750.00

 Tax (10%): $1,075.00
```
</details>

### classic143_colored_tabs

- **Case Metadata:** format: xlsx | case: classic143_colored_tabs | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic143_colored_tabs.xlsx
- **Text Similarity:** 0.9803
- **Visual Average:** 0.9976
- **Overall Score:** 0.9912
- **Pages:** MiniPdf=4, Reference=4
- **File Size:** MiniPdf=27101 bytes, Reference=74632 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic143_colored_tabs.pdf
+++ reference/classic143_colored_tabs.pdf
@@ -1,6 +1,6 @@
 Label Value

-Product A100

-Product B200

+Product A 100

+Product B 200

 ---PAGE---

 Label Value

 Widget 500

@@ -11,5 +11,5 @@
 Cost 30000

 ---PAGE---

 Label Value

-Employee50

-Open Rol5
+Employees 50

+Open Roles 5
```
</details>

### classic144_note_style_cells

- **Case Metadata:** format: xlsx | case: classic144_note_style_cells | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic144_note_style_cells.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9569
- **Overall Score:** 0.9828
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25061 bytes, Reference=94925 bytes

Text content: ✅ Identical

### classic145_status_badges

- **Case Metadata:** format: xlsx | case: classic145_status_badges | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic145_status_badges.xlsx
- **Text Similarity:** 0.9803
- **Visual Average:** 0.9332
- **Overall Score:** 0.9654
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32338 bytes, Reference=89140 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic145_status_badges.pdf
+++ reference/classic145_status_badges.pdf
@@ -1,8 +1,8 @@
 Task Owner Status Due Date

 Backend API Alice Completed 2025-02-01

 Frontend UI Bob In Progress 2025-03-15

-Database Migra Ɵon Carol Blocked 2025-02-20

-Documenta Ɵon David Not Started 2025-04-01

+Database Migration Carol Blocked 2025-02-20

+Documentation David Not Started 2025-04-01

 Code Review Eva In Review 2025-03-10

 Deployment Frank Not Started 2025-04-15

-Tes Ɵng Grace In Progress 2025-03-20
+Testing Grace In Progress 2025-03-20
```
</details>

### classic146_double_border_table

- **Case Metadata:** format: xlsx | case: classic146_double_border_table | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic146_double_border_table.xlsx
- **Text Similarity:** 0.9677
- **Visual Average:** 0.958
- **Overall Score:** 0.9703
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=27572 bytes, Reference=77024 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic146_double_border_table.pdf
+++ reference/classic146_double_border_table.pdf
@@ -1,5 +1,5 @@
-Name Role Years Ra Ɵng

+Name Role Years Rating

 Alice Engineer 5 Excellent

 Bob Designer 3 Good

 Carol Manager 8 Excellent

-David Analyst 2 Sa Ɵsfactory
+David Analyst 2 Satisfactory
```
</details>

### classic147_multi_sheet_styled

- **Case Metadata:** format: xlsx | case: classic147_multi_sheet_styled | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic147_multi_sheet_styled.xlsx
- **Text Similarity:** 0.9907
- **Visual Average:** 0.9668
- **Overall Score:** 0.983
- **Pages:** MiniPdf=3, Reference=3
- **File Size:** MiniPdf=33636 bytes, Reference=97561 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic147_multi_sheet_styled.pdf
+++ reference/classic147_multi_sheet_styled.pdf
@@ -1,10 +1,10 @@
 Metric Value

 Total Revenue $1,200,000

 Total Costs $780,000

-Net Proﬁt $420,000

+Net Profit $420,000

 Margin 35%

 ---PAGE---

-Quarter Revenue Costs Proﬁt

+Quarter Revenue Costs Profit

 Q1 280000 190000 90000

 Q2 310000 200000 110000

 Q3 290000 185000 105000
```
</details>

### classic148_frozen_styled_grid

- **Case Metadata:** format: xlsx | case: classic148_frozen_styled_grid | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic148_frozen_styled_grid.xlsx
- **Text Similarity:** 0.8104
- **Visual Average:** 0.8322
- **Overall Score:** 0.857
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29330 bytes, Reference=90882 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic148_frozen_styled_grid.pdf
+++ reference/classic148_frozen_styled_grid.pdf
@@ -1,21 +1,21 @@
 ID Name Category Value Status Date

-1 Item-001 Beta 705.18 Ac Ɵve 2025-11-13

-2 Item-002 Beta 290.98 Ac Ɵve 2025-04-16

-3 Item-003 Gamma 86.63 Inac Ɵve 2025-09-22

-4 Item-004 Gamma 702.78 Inac Ɵve 2025-06-14

-5 Item-005 Gamma 21.93 Inac Ɵve 2025-12-10

-6 Item-006 Alpha 266.67 Ac Ɵve 2025-06-19

+1 Item-001 Beta 705.18 Active 2025-11-13

+2 Item-002 Beta 290.98 Active 2025-04-16

+3 Item-003 Gamma 86.63 Inactive 2025-09-22

+4 Item-004 Gamma 702.78 Inactive 2025-06-14

+5 Item-005 Gamma 21.93 Inactive 2025-12-10

+6 Item-006 Alpha 266.67 Active 2025-06-19

 7 Item-007 Gamma 567.39 Pending 2025-02-09

-8 Item-008 Alpha 438.9 Inac Ɵve 2025-11-21

-9 Item-009 Beta 747.1 Inac Ɵve 2025-09-27

-10 Item-010 Beta 545.55 Inac Ɵve 2025-01-23

-11 Item-011 Beta 566.83 Ac Ɵve 2025-01-21

-12 Item-012 Gamma 689.49 Ac Ɵve 2025-08-09

-13 Item-013 Beta 784.99 Ac Ɵve 2025-07-09

+8 Item-008 Alpha 438.9 Inactive 2025-11-21

+9 Item-009 Beta 747.1 Inactive 2025-09-27

+10 Item-010 Beta 545.55 Inactive 2025-01-23

+11 Item-011 Beta 566.83 Active 2025-01-21

+12 Item-012 Gamma 689.49 Active 2025-08-09

+13 Item-013 Beta 784.99 Active 2025-07-09

 14 Item-014 Beta 434.17 Pending 2025-09-10

-15 Item-015 Beta 267.39 Ac Ɵve 2025-11-02

+15 Item-015 Beta 267.39 Active 2025-11-02

 16 Item-016 Beta 226.41 Pending 2025-11-25

-17 Item-017 Gamma 765.86 Inac Ɵve 2025-04-13

-18 Item-018 Beta 453.29 Inac Ɵve 2025-08-17

-19 Item-019 Alpha 38.51 Inac Ɵve 2025-01-26

-20 Item-020 Beta 775.45 Inac Ɵve 2025-09-27
+17 Item-017 Gamma 765.86 Inactive 2025-04-13

+18 Item-018 Beta 453.29 Inactive 2025-08-17

+19 Item-019 Alpha 38.51 Inactive 2025-01-26

+20 Item-020 Beta 775.45 Inactive 2025-09-27
```
</details>

### classic149_merged_styled_sections

- **Case Metadata:** format: xlsx | case: classic149_merged_styled_sections | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic149_merged_styled_sections.xlsx
- **Text Similarity:** 0.9862
- **Visual Average:** 0.9202
- **Overall Score:** 0.9626
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30693 bytes, Reference=93062 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic149_merged_styled_sections.pdf
+++ reference/classic149_merged_styled_sections.pdf
@@ -7,5 +7,5 @@
 Expense Summary

 Category Q1 Q2 Total

 Salaries 200,000 210,000 410,000

-Marke Ɵng 30,000 35,000 65,000

-Opera Ɵons 50,000 48,000 98,000
+Marketing 30,000 35,000 65,000

+Operations 50,000 48,000 98,000
```
</details>

### classic150_kitchen_sink_styles

- **Case Metadata:** format: xlsx | case: classic150_kitchen_sink_styles | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic150_kitchen_sink_styles.xlsx
- **Text Similarity:** 0.9412
- **Visual Average:** 0.9172
- **Overall Score:** 0.9434
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=35801 bytes, Reference=121318 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic150_kitchen_sink_styles.pdf
+++ reference/classic150_kitchen_sink_styles.pdf
@@ -4,11 +4,10 @@
 Double Underline Important Value Emphasis

 Strikethrough Deprecated Item Removed

 Dark Fill White on Dark Inverted

-Red Border A ƩenƟon! Alert style

-Currency Format $12,345.68 Forma Ʃed number

+Red Border Attention! Alert style

+Currency Format $12,345.68 Formatted number

 Percentage 87.56% Percent display

 This text wraps in the cell nicely

-Wrap + Center Mul Ɵ-line

-Pa Ʃern Fill Gray pa Ʃern Hatched

-BIG

-Large Font Size 24
+Wrap + Center Multi-line

+Pattern Fill Gray pattern Hatched

+Large Font BIG Size 24
```
</details>

### classic151_multilingual_greetings

- **Case Metadata:** format: xlsx | case: classic151_multilingual_greetings | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic151_multilingual_greetings.xlsx
- **Text Similarity:** 0.7634
- **Visual Average:** 0.9829
- **Overall Score:** 0.8985
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=24783 bytes, Reference=108265 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic151_multilingual_greetings.pdf
+++ reference/classic151_multilingual_greetings.pdf
@@ -2,12 +2,12 @@
 English Hello Thank you

 Chinese 你好 谢谢

 Japanese こんにちは ありがとう

-Korean ????? ?????

-Thai ?????? ??????

-Hindi ?????? ???????

-Arabic ????? ????

-Hebrew ???? ????

-Greek Γεια σου Ευχαριστ?

+Korean 안녕하세요 감사합니다

+Thai สวัสดี ขอบคุณ

+Hindi नमस्ते धन्यवाद

+Arabicمرحبا شكرا

+Hebrewשלום תודה

+Greek Γεια σου Ευχαριστώ

 Russian Привет Спасибо

 Vietnamese Xin chào Cảm ơn

-Turkish Merhaba Te?ekkürler
+Turkish Merhaba Teşekkürler
```
</details>

### classic152_emoji_sampler

- **Case Metadata:** format: xlsx | case: classic152_emoji_sampler | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic152_emoji_sampler.xlsx
- **Text Similarity:** 0.6583
- **Visual Average:** 0.9263
- **Overall Score:** 0.8338
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17988 bytes, Reference=105280 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic152_emoji_sampler.pdf
+++ reference/classic152_emoji_sampler.pdf
@@ -1,9 +1,9 @@
 Category Emoji

-Faces ?????

-Hearts ??????

-Animals ?????

-Food ?????

-Travel ??????

-Sports ⚽??⚾?

-Symbols ??⚠???

-Hands ??????
+Faces 😀😃😄😁😆

+Hearts ❤️🧡💛💚💙

+Animals 🐶🐱🐭🐹🐰

+Food 🍎🍐🍊🍋🍌

+Travel ✈️🚗🚌🚂🚀

+Sports ⚽🏀🏈⚾🎾

+Symbols ✅❌⚠️🔴🟢

+Hands 👍👎👏🤝✌️
```
</details>

### classic153_currency_symbols

- **Case Metadata:** format: xlsx | case: classic153_currency_symbols | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic153_currency_symbols.xlsx
- **Text Similarity:** 0.9441
- **Visual Average:** 0.9844
- **Overall Score:** 0.9714
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23877 bytes, Reference=66698 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic153_currency_symbols.pdf
+++ reference/classic153_currency_symbols.pdf
@@ -1,13 +1,13 @@
 Currency Symbol Example

 US Dollar $ $1,234.56

 Euro € €1.234,56

-Bri Ɵsh Pound £ £1,234.56

+British Pound £ £1,234.56

 Japanese Yen ¥ ¥123,456

 Chinese Yuan ¥ ¥1,234.56

 Korean Won ₩ ₩1,234,560

-Indian Rupee ? ?1,23,456

-Thai Baht ? ?1,234.56

-Russian Ruble ? ?1 234,56

-Turkish Lira ? ?1.234,56

-Bitcoin ? ?0.05

+Indian Rupee ₹ ₹1,23,456

+Thai Baht ฿ ฿1,234.56

+Russian Ruble ₽ ₽1 234,56

+Turkish Lira ₺ ₺1.234,56

+Bitcoin ₿ ₿0.05

 Swiss Franc CHF CHF 1'234.56
```
</details>

### classic154_math_symbols

- **Case Metadata:** format: xlsx | case: classic154_math_symbols | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic154_math_symbols.xlsx
- **Text Similarity:** 0.9014
- **Visual Average:** 0.9892
- **Overall Score:** 0.9562
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=23257 bytes, Reference=85712 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic154_math_symbols.pdf
+++ reference/classic154_math_symbols.pdf
@@ -1,10 +1,10 @@
 Category Symbols

 Operators ± × ÷ ≠ ≤ ≥ ≈ ∝ ∓

-Greek Le Ʃers α β γ δ ε ζ η θ ι κ λ μ

+Greek Letters α β γ δ ε ζ η θ ι κ λ μ

 Set Theory ∈ ∉ ⊂ ⊃ ∪ ∩ ∅ ℵ

-Logic ∀ ∃ ¬ ∧ ∨ ⊕ ? ?

+Logic ∀ ∃ ¬ ∧ ∨ ⊕ ⟹ ⟺

 Calculus ∫ ∬ ∮ ∂ ∇ ∑ ∏ √

 Arrows → ← ↑ ↓ ↔ ⇒ ⇐ ⇔

-Misc ∞ ℏ ? ? ? ? ?

-Superscripts x² y³ a? e?

-Subscripts H?O CO? x? a?
+Misc ∞ ℏ ℝ ℤ ℚ ℕ ℂ

+Superscripts x² y³ aⁿ eⁱ

+Subscripts H₂O CO₂ x ₙ aᵢ
```
</details>

### classic155_diacritical_marks

- **Case Metadata:** format: xlsx | case: classic155_diacritical_marks | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic155_diacritical_marks.xlsx
- **Text Similarity:** 0.8247
- **Visual Average:** 0.9911
- **Overall Score:** 0.9263
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=21357 bytes, Reference=63383 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic155_diacritical_marks.pdf
+++ reference/classic155_diacritical_marks.pdf
@@ -1,11 +1,11 @@
 Type Examples

-Acute á é í ó ú ý ? ? ? ń

+Acute á é í ó ú ý ś ź ć ń

 Grave à è ì ò ù ỳ

-Circumﬂex â ê î ô û ? ? ?

+Circumflex â ê î ô û ŵ ŷ ĉ

 Umlaut ä ë ï ö ü ÿ

 Tilde ã ñ õ ũ ĩ

-Cedilla ç ? ? ? ?

-Ring å ?

-Caron ? ? ? ? ň ě ? ?

-Stroke ø đ ? ? ?

-Ligatures æ œ ß ?
+Cedilla ç ş ţ ḑ ȩ

+Ring å ů

+Caron č š ž ř ň ě ď ť

+Stroke ø đ ħ ł ŧ

+Ligatures æ œ ß ĳ
```
</details>

### classic156_rtl_bidi_text

- **Case Metadata:** format: xlsx | case: classic156_rtl_bidi_text | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic156_rtl_bidi_text.xlsx
- **Text Similarity:** 0.525
- **Visual Average:** 0.9948
- **Overall Score:** 0.8079
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16061 bytes, Reference=47337 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic156_rtl_bidi_text.pdf
+++ reference/classic156_rtl_bidi_text.pdf
@@ -1,5 +1,5 @@
 Script Text

-Arabic ????? ???????

-Hebrew ???? ????

-Persian ???? ????

-Urdu ???? ????
+Arabicمرحبا بالعالم

+Hebrewשלום עולם

+Persianسالم دنیا

+Urduہیلو دنیا
```
</details>

### classic157_cjk_extended

- **Case Metadata:** format: xlsx | case: classic157_cjk_extended | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic157_cjk_extended.xlsx
- **Text Similarity:** 0.9378
- **Visual Average:** 0.976
- **Overall Score:** 0.9655
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=27467 bytes, Reference=118156 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic157_cjk_extended.pdf
+++ reference/classic157_cjk_extended.pdf
@@ -1,8 +1,8 @@
 Variant Text Notes

-Simpliﬁed CN 简体中⽂测试字符串 Mainland China

-Tradi Ɵonal CN 繁體中⽂測試字串 Taiwan / HK

+Simplified CN 简体中文测试字符串 Mainland China

+Traditional CN 繁體中文測試字串 Taiwan / HK

 Japanese mixed 漢字とひらがなとカタカナ Kanji + Hiragana + Katakana

-Korean mixed ??? 漢字 ?? ??? Hangul + Hanja

-Rare CJK ????? CJK Ext-B (SMP)

+Korean mixed 한글과 漢字 혼용 텍스트 Hangul + Hanja

+Rare CJK 𠀀𠀁𠀂𠀃𠀄 CJK Ext-B (SMP)

 Full-width ＡＢＣＤ１２３４ Full-width alphanumeric

 Half-width kana ｱｲｳｴｵ ｶｷｸｹｺ Half-width katakana
```
</details>

### classic158_emoji_skin_tones

- **Case Metadata:** format: xlsx | case: classic158_emoji_skin_tones | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic158_emoji_skin_tones.xlsx
- **Text Similarity:** 0.6667
- **Visual Average:** 0.9833
- **Overall Score:** 0.86
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18787 bytes, Reference=99585 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic158_emoji_skin_tones.pdf
+++ reference/classic158_emoji_skin_tones.pdf
@@ -1,6 +1,6 @@
 Gesture Skin Tones (light → dark)

-Thumbs up ??????????

-Waving ??????????

-Clapping ??????????

-Raised ﬁst ??????????

-Person ??????????
+Thumbs up 👍🏻👍🏼👍🏽👍🏾👍🏿

+Waving 👋🏻👋🏼👋🏽👋🏾👋🏿

+Clapping 👏🏻👏🏼👏🏽👏🏾👏🏿

+Raised fist ✊🏻✊🏼✊🏽✊🏾✊🏿

+Person 🧑🏻🧑🏼🧑🏽🧑🏾🧑🏿
```
</details>

### classic159_zwj_emoji

- **Case Metadata:** format: xlsx | case: classic159_zwj_emoji | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic159_zwj_emoji.xlsx
- **Text Similarity:** 0.7493
- **Visual Average:** 0.9874
- **Overall Score:** 0.8947
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19826 bytes, Reference=106035 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic159_zwj_emoji.pdf
+++ reference/classic159_zwj_emoji.pdf
@@ -1,10 +1,10 @@
-Descrip Ɵon Emoji

-Family ???????

-Couple with heart ??????

-Woman technologist ???

-Man cook ???

-Rainbow ﬂag ????

-Trans ﬂag ?????

-Fireﬁghter ???

-Health worker ????

-Service dog ???
+Description Emoji

+Family 👨‍👩‍👧‍👦

+Couple with heart 👩‍❤️‍👨

+Woman technologist 👩‍💻

+Man cook 👨‍🍳

+Rainbow flag 🏳️‍🌈

+Trans flag 🏳️‍⚧️

+Firefighter 🧑‍🚒

+Health worker 🧑‍⚕️

+Service dog 🐕‍🦺
```
</details>

### classic160_punctuation_marks

- **Case Metadata:** format: xlsx | case: classic160_punctuation_marks | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic160_punctuation_marks.xlsx
- **Text Similarity:** 0.8466
- **Visual Average:** 0.9934
- **Overall Score:** 0.936
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19489 bytes, Reference=110515 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic160_punctuation_marks.pdf
+++ reference/classic160_punctuation_marks.pdf
@@ -1,8 +1,8 @@
 Type Characters

-La Ɵn . , ; : ! ? … — ‒ ' '  « »

+Latin . , ; : ! ? … — – ' '  « »

 CJK 。、；：！？「」『』【】（）

-Arabic ? ? ? ? ?

-Devanagari ? ? ? ? ?

-Thai ? ? ? ? ?

-Misc brackets ?? ?? ?? ?? ‖

-Typographic † ‡ § ¶ © ® ™ ?
+Arabic ، ؛ ؟ ٪ ﷽

+Devanagari । ॥ ꣸ ꣹ ꣺

+Thai ฯ ๆ ๏ ๚ ๛

+Misc brackets ⟨⟩ ⟪⟫ ⌈⌉ ⌊⌋ ‖

+Typographic † ‡ § ¶ © ® ™ ℠
```
</details>

### classic161_box_drawing

- **Case Metadata:** format: xlsx | case: classic161_box_drawing | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic161_box_drawing.xlsx
- **Text Similarity:** 0.8843
- **Visual Average:** 0.9831
- **Overall Score:** 0.947
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=19401 bytes, Reference=94886 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic161_box_drawing.pdf
+++ reference/classic161_box_drawing.pdf
@@ -1,7 +1,7 @@
 Type Characters

-Light box ┌──┬──┐│  │  │├──┼──┤└─

-Heavy box ┏━━┳━━┓┃  ┃  ┃┣━━╋━━┫┗━

-Double box ╔══╦══╗║  ║  ║╠══╬══╣╚═

-Blocks ▀▁▂▃▄▅▆▇█ ░▒▓

-Geometric ■□▪▫▲△▼▽◆◇○●◎

-Braille ??????????
+Light box ┌──┬──┐│  │  │├──┼──┤└──┴──┘

+Heavy box ┏━━┳━━┓┃  ┃  ┃┣━━╋━━┫┗━━┻━━┛

+Double box ╔══╦══╗║  ║  ║╠══╬══╣╚══╩══╝

+Blocks ▀ ▁ ▂▃ ▄ ▅▆▇ █ ░▒▓

+Geometric ■□▪▫▲ △ ▼ ▽◆◇ ○● ◎

+Braille ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊
```
</details>

### classic162_cjk_emoji_styled

- **Case Metadata:** format: xlsx | case: classic162_cjk_emoji_styled | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic162_cjk_emoji_styled.xlsx
- **Text Similarity:** 0.9341
- **Visual Average:** 0.9814
- **Overall Score:** 0.9662
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=25709 bytes, Reference=133693 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic162_cjk_emoji_styled.pdf
+++ reference/classic162_cjk_emoji_styled.pdf
@@ -1,5 +1,5 @@
-Icon Dish Price Ra Ɵng

-? 寿司 ¥1,200 ★★★★★

-? ラーメン ¥850 ★★★★

-? 弁当 ¥1,500 ★★★★★

-? おにぎり ¥400 ★★★
+Icon Dish Price Rating

+🍣 寿司 ¥1,200 ★★★★★

+🍜 ラーメン ¥850 ★★★★

+🍱 弁当 ¥1,500 ★★★★★

+🍙 おにぎり ¥400 ★★★
```
</details>

### classic163_cyrillic_alphabets

- **Case Metadata:** format: xlsx | case: classic163_cyrillic_alphabets | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic163_cyrillic_alphabets.xlsx
- **Text Similarity:** 0.9273
- **Visual Average:** 0.9824
- **Overall Score:** 0.9639
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=20130 bytes, Reference=56100 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic163_cyrillic_alphabets.pdf
+++ reference/classic163_cyrillic_alphabets.pdf
@@ -1,6 +1,6 @@
 Language Sample Text

-Russian Съешь ещё этих мягких французских булок, да

-Ukrainian Жебракують ф?лософи при ?анку церкви в Гад

-Serbian ?ура? Бранкови? ?е био владар Срби?е.

+Russian Съешь ещё этих мягких французских булок, да выпей чаю.

+Ukrainian Жебракують філософи при ґанку церкви в Гадячі.

+Serbian Ђурађ Бранковић је био владар Србије.

 Bulgarian Щъркел яде бялата жаба.

 Mongolian Би монгол хэл дээр бичиж байна.
```
</details>

### classic164_indic_scripts

- **Case Metadata:** format: xlsx | case: classic164_indic_scripts | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic164_indic_scripts.xlsx
- **Text Similarity:** 0.6129
- **Visual Average:** 0.9913
- **Overall Score:** 0.8417
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16207 bytes, Reference=53352 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic164_indic_scripts.pdf
+++ reference/classic164_indic_scripts.pdf
@@ -1,6 +1,6 @@
 Script Sample

-Devanagari ??????

-Tamil ???????

-Bengali ???????

-Telugu ????????

-Gujara Ɵ ??????
+Devanagari नमस्ते

+Tamil வணக்கம்

+Bengali নমস্কার

+Telugu నమస్కారం

+Gujarati નમસ્તે
```
</details>

### classic165_southeast_asian

- **Case Metadata:** format: xlsx | case: classic165_southeast_asian | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic165_southeast_asian.xlsx
- **Text Similarity:** 0.5185
- **Visual Average:** 0.9846
- **Overall Score:** 0.8012
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15295 bytes, Reference=94767 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic165_southeast_asian.pdf
+++ reference/classic165_southeast_asian.pdf
@@ -1,6 +1,6 @@
 Script Sample

-Thai ?????????????????????????????

-Lao ????????????????????????

-Myanmar ????????????????? ??????

-Khmer ?????????????????????

-Tibetan ?????????????????????????????????
+Thai ภาษาไทยเป็นภาษาที่มีวรรณยุกต์

+Lao ພາສາລາວເປັນພາສາທ ີ່ສວຍງາມ

+Myanmar မြန်ြာဘာသာစကာားသည် လှပသည်

+Khmer ភាសាខ្មែរជាភាសាចំណាស់

+Tibetan བོད་ཀྱི་སྐད་ཡྱིག་ནྱི་གལ་ཆེན་པོ་ཡྱིན།
```
</details>

### classic166_emoji_progress

- **Case Metadata:** format: xlsx | case: classic166_emoji_progress | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic166_emoji_progress.xlsx
- **Text Similarity:** 0.5904
- **Visual Average:** 0.8169
- **Overall Score:** 0.7629
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=17564 bytes, Reference=101519 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic166_emoji_progress.pdf
+++ reference/classic166_emoji_progress.pdf
@@ -1,7 +1,7 @@
 Task Status Progress

-Design ? ?????????? 100%

-Frontend ? ?????????? 70%

-Backend ? ?????????? 50%

-Tes Ɵng ? ?????????? 20%

-Deploy ? ?????????? 0%

-Docs ? ?????????? 80%
+Design ✅ 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 100%

+Frontend 🔄 🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜ 70%

+Backend 🔄 🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜ 50%

+Testing ⏳ 🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜ 20%

+Deploy ❌ ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0%

+Docs 🔄 🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜ 80%
```
</details>

### classic167_musical_symbols

- **Case Metadata:** format: xlsx | case: classic167_musical_symbols | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic167_musical_symbols.xlsx
- **Text Similarity:** 0.7308
- **Visual Average:** 0.9813
- **Overall Score:** 0.8848
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=18525 bytes, Reference=107225 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic167_musical_symbols.pdf
+++ reference/classic167_musical_symbols.pdf
@@ -1,6 +1,6 @@
 Category Symbols

-Music ♩ ♪ ♫ ♬ ? ?

-Chess ??????

-Zodiac ????????????

-Dice ? ? ? ? ? ?

-Weather ☀ ☁ ☂ ☃ ? ?
+Music ♩ ♪ ♫ ♬ 🎵 🎶

+Chess ♔♕♖♗♘♙

+Zodiac ♈♉♊♋♌♍♎♏♐♑♒♓

+Dice ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

+Weather ☀ ☁ ☂ ☃ ❄ ☔
```
</details>

### classic168_mixed_ltr_rtl_styled

- **Case Metadata:** format: xlsx | case: classic168_mixed_ltr_rtl_styled | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic168_mixed_ltr_rtl_styled.xlsx
- **Text Similarity:** 0.8462
- **Visual Average:** 0.9623
- **Overall Score:** 0.9234
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=29035 bytes, Reference=83592 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic168_mixed_ltr_rtl_styled.pdf
+++ reference/classic168_mixed_ltr_rtl_styled.pdf
@@ -1,5 +1,5 @@
 Code Name Price

 EN-001 Programming Book $29.99

 FR-002 Livre de code €25.00

-AR-003 ???? ????? 50 SAR

-HE-004 ??? ??? ?120
+AR-003كتاب برمجة50 SAR

+HE-004ספר קוד₪120
```
</details>

### classic169_korean_invoice

- **Case Metadata:** format: xlsx | case: classic169_korean_invoice | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic169_korean_invoice.xlsx
- **Text Similarity:** 0.5783
- **Visual Average:** 0.9747
- **Overall Score:** 0.8212
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=15709 bytes, Reference=118888 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic169_korean_invoice.pdf
+++ reference/classic169_korean_invoice.pdf
@@ -1,8 +1,8 @@
-????? (Transaction Statement)

-?? ??? ?? ?? ??

-1 ??? ??? 2 ₩1,200,000 ₩2,400,000

-2 ?? ??? 5 ₩25,000 ₩125,000

-3 ??? 27?? 2 ₩350,000 ₩700,000

-4 ??? (???) 3 ₩89,000 ₩267,000

-5 USB ?? 10 ₩15,000 ₩150,000

-?? ₩3,642,000
+거래명세서 (Transaction Statement)

+번호 상품명 수량 단가 금액

+1 노트북 컴퓨터 2 ₩1,200,000 ₩2,400,000

+2 무선 마우스 5 ₩25,000 ₩125,000

+3 모니터 27 인치 2 ₩350,000 ₩700,000

+4 키보드 ( 기계식 ) 3 ₩89,000 ₩267,000

+5 USB 허브 10 ₩15,000 ₩150,000

+합계 ₩3,642,000
```
</details>

### classic170_emoji_dashboard

- **Case Metadata:** format: xlsx | case: classic170_emoji_dashboard | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic170_emoji_dashboard.xlsx
- **Text Similarity:** 0.9477
- **Visual Average:** 0.9691
- **Overall Score:** 0.9667
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30639 bytes, Reference=137376 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic170_emoji_dashboard.pdf
+++ reference/classic170_emoji_dashboard.pdf
@@ -1,7 +1,7 @@
 Metric Value Target

-? Revenue $1.2M $1.0M

-? Pipeline $800K $900K

-? Churn Rate 5.2% 3.0%

-? NPS Score 72 65

-? Response Time 2.1s 1.5s

-? Up Ɵme 99.95% 99.9%
+🟢 Revenue $1.2M $1.0M

+🟡 Pipeline $800K $900K

+🔴 Churn Rate 5.2% 3.0%

+🟢 NPS Score 72 65

+🟡 Response Time 2.1s 1.5s

+🟢 Uptime 99.95% 99.9%
```
</details>

### classic171_ipa_phonetic

- **Case Metadata:** format: xlsx | case: classic171_ipa_phonetic | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic171_ipa_phonetic.xlsx
- **Text Similarity:** 0.625
- **Visual Average:** 0.9889
- **Overall Score:** 0.8456
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=21506 bytes, Reference=76615 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic171_ipa_phonetic.pdf
+++ reference/classic171_ipa_phonetic.pdf
@@ -1,8 +1,8 @@
 Category IPA Symbols

-Plosives p b t d ? ? c ? k ɡ q ? ?

-Nasals m ? n ? ? ? ?

-Frica Ɵves ? β f v θ ð s z ? ? ? ? ç ? x ?

-Vowels i y ? ? ? u e ø ? ? ? o ? œ ? ? ? ? æ a ? ɑ ?

-Tones ? ? ? ? ? ?? ??

-Diacri Ɵcs ? ? ? ? ? ? ?

-Example word /??nt??næ??n?l/ (international)
+Plosives p b t d ʈ ɖ c ɟ k ɡ q ɢ ʔ

+Nasals m ɱ n ɳ ɲ ŋ ɴ

+Fricatives ɸ β f v θ ð s z ʃ ʒ ʂ ʐ ç ʝ x ɣ

+Vowels i y ɨ ʉ ɯ u e ø ɘ ɵ ɤ o ɛ œ ɜ ɞ ʌ ɔ æ a ɶ ɑ ɒ

+Tones ˥ ˦ ˧ ˨ ˩ ˥˩ ˩˥

+Diacritics ʰ ʷ ʲ ˠ ˤ ⁿ ˡ

+Example word /ˌɪntəˈnæʃənəl/ (international)
```
</details>

### classic172_emoji_timeline

- **Case Metadata:** format: xlsx | case: classic172_emoji_timeline | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic172_emoji_timeline.xlsx
- **Text Similarity:** 0.8852
- **Visual Average:** 0.9771
- **Overall Score:** 0.9449
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22478 bytes, Reference=117160 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic172_emoji_timeline.pdf
+++ reference/classic172_emoji_timeline.pdf
@@ -1,9 +1,9 @@
 Date Icon Milestone Status

-2025-01-15 ? Idea conceived ?

-2025-02-01 ? Requirements gathered ?

-2025-03-10 ? Design completed ?

-2025-04-20 ? Development started ?

-2025-06-15 ? Tes Ɵng phase ?

-2025-07-01 ? Bug ﬁxing ?

-2025-08-01 ? Launch day ?

-2025-09-01 ? Post-launch review ?
+2025-01-15 💡 Idea conceived ✅

+2025-02-01 📋 Requirements gathered ✅

+2025-03-10 🎨 Design completed ✅

+2025-04-20 🔨 Development started ✅

+2025-06-15 🧪 Testing phase 🔄

+2025-07-01 🐛 Bug fixing 🔄

+2025-08-01 🚀 Launch day ⏳

+2025-09-01 📊 Post-launch review ⏳
```
</details>

### classic173_african_languages

- **Case Metadata:** format: xlsx | case: classic173_african_languages | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic173_african_languages.xlsx
- **Text Similarity:** 0.8791
- **Visual Average:** 0.9835
- **Overall Score:** 0.945
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22551 bytes, Reference=64361 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic173_african_languages.pdf
+++ reference/classic173_african_languages.pdf
@@ -1,8 +1,8 @@
-Language Gree Ɵng Region

+Language Greeting Region

 Swahili Habari! Karibu sana. East Africa

-Amharic ???! ???? ??? ???. Ethiopia

+Amharic ሰላም ! እንኳን ደህና መጣህ . Ethiopia

 Yoruba Ẹ kú àárọ̀! Ẹ kú alẹ́! Nigeria

 Zulu Sawubona! Unjani? South Africa

 Hausa Sannu! Barka da zuwa. West Africa

 Igbo Nnọọ! Kedụ? Nigeria

-Tigrinya ???! ??? ???? Eritrea
+Tigrinya ሰላም ! ከመይ ኣለኻ ? Eritrea
```
</details>

### classic174_technical_symbols

- **Case Metadata:** format: xlsx | case: classic174_technical_symbols | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic174_technical_symbols.xlsx
- **Text Similarity:** 0.9441
- **Visual Average:** 0.9832
- **Overall Score:** 0.9709
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26399 bytes, Reference=81967 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic174_technical_symbols.pdf
+++ reference/classic174_technical_symbols.pdf
@@ -1,9 +1,9 @@
 Category Symbols / Examples

 SI Units kg · m · s · A · K · mol · cd

 Derived N · Pa · J · W · V · Ω · Hz

-Preﬁxes μ (micro) · m (milli) · k (kilo) · M (mega)

+Prefixes μ (micro) · m (milli) · k (kilo) · M (mega) · G (giga)

 Electrical Ω kΩ MΩ · μF nF pF · mH μH

 Temp 100°C = 212°F = 373.15 K

 Copyright © 2025 Company™ — All Rights Reserved®

-Frac Ɵons ½ ? ¼ ? ? ? ? ¾ ?

-Roman nums Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ
+Fractions ½ ⅓ ¼ ⅕ ⅙ ⅛ ⅔ ¾ ⅘

+Roman nums Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅺ
```
</details>

### classic175_multiscript_catalog

- **Case Metadata:** format: xlsx | case: classic175_multiscript_catalog | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic175_multiscript_catalog.xlsx
- **Text Similarity:** 0.8378
- **Visual Average:** 0.9707
- **Overall Score:** 0.9234
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32898 bytes, Reference=191190 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic175_multiscript_catalog.pdf
+++ reference/classic175_multiscript_catalog.pdf
@@ -1,9 +1,9 @@
 # Product (EN) Product (Local) Price Icon

-1 Green Tea 緑茶 ¥500 ?

-2 Kimchi ?? ₩3,000 ?

-3 Samosa ????? ?50 ?

-4 Croissant Croissant €2.50 ?

-5 Taco Taco $3.99 ?

-6 Borscht Борщ ?250 ?

-7 Falafel ????? ?15 ?

-8 Pad Thai ?????? ?80 ?
+1 Green Tea 緑茶 ¥500 🍵

+2 Kimchi 김치 ₩3,000 🥬

+3 Samosa समोसा ₹50 🥟

+4 Croissant Croissant €2.50 🥐

+5 Taco Taco $3.99 🌮

+6 Borscht Борщ ₽250 🍲

+7 Falafelفالفل₪15 🧆

+8 Pad Thai ผัดไทย ฿80 🍜
```
</details>

### classic176_combining_characters

- **Case Metadata:** format: xlsx | case: classic176_combining_characters | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic176_combining_characters.xlsx
- **Text Similarity:** 0.8916
- **Visual Average:** 0.9873
- **Overall Score:** 0.9516
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=21381 bytes, Reference=68236 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic176_combining_characters.pdf
+++ reference/classic176_combining_characters.pdf
@@ -1,7 +1,7 @@
 Type Examples

-Single combining é = e + ́   ñ = n + ?

-Double combining ệ = e + ? + ?

+Single combining é = e + ́   ñ = n + ̃

+Double combining ệ = e + ̣ + ̂

 Vietnamese ắ ằ ẵ ẳ ặ ố ồ ỗ ổ ộ ứ ừ ữ ử ự

-Zalgo-like H???e???l??l??o??

-Precomposed vs decomposed ü (precomposed) vs u? (decomposed)

-Hangul Jamo ㅎ ㅏ ㄴ ㄱ ㅡ ㄹ → ??
+Zalgo-like H ̵̖̘e ̣l ̶̤l ̴̥o ̸̮

+Precomposed vs decomposed ü (precomposed) vs ü (decomposed)

+Hangul Jamo ㅎ ㅏ ㄴ ㄱ ㅡ ㄹ → 한글
```
</details>

### classic177_emoji_calendar

- **Case Metadata:** format: xlsx | case: classic177_emoji_calendar | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic177_emoji_calendar.xlsx
- **Text Similarity:** 0.7797
- **Visual Average:** 0.9827
- **Overall Score:** 0.905
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=21368 bytes, Reference=107156 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic177_emoji_calendar.pdf
+++ reference/classic177_emoji_calendar.pdf
@@ -1,13 +1,13 @@
 Month Emoji Event

-January ? New Year

-February ? Valen Ɵne's Day

-March ? Spring Equinox

-April ? Easter

-May ? Mother's Day

-June ☀? Summer Sols Ɵce

-July ? Independence Day

-August ?? Vaca Ɵon Season

-September ? Back to School

-October ? Halloween

-November ? Thanksgiving

-December ? Christmas
+January 🎆 New Year

+February 💝 Valentine's Day

+March 🌸 Spring Equinox

+April 🐣 Easter

+May 👩 Mother's Day

+June ☀️ Summer Solstice

+July 🎆 Independence Day

+August 🏖️ Vacation Season

+September 📚 Back to School

+October 🎃 Halloween

+November 🦃 Thanksgiving

+December 🎄 Christmas
```
</details>

### classic178_caucasus_ethiopic

- **Case Metadata:** format: xlsx | case: classic178_caucasus_ethiopic | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic178_caucasus_ethiopic.xlsx
- **Text Similarity:** 0.3441
- **Visual Average:** 0.9799
- **Overall Score:** 0.7296
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=16780 bytes, Reference=58144 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic178_caucasus_ethiopic.pdf
+++ reference/classic178_caucasus_ethiopic.pdf
@@ -1,6 +1,6 @@
 Script Sample Text

-Georgian ?????????? ???? ????? ???????????.

-Armenian ????????? ??? ???????????????? ????.

-Ethiopic ????? ????? ???? ??? ???

-Georgian mkhed ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?

-Armenian alpha ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?
+Georgian საქართველო არის ძველი ცივილიზაცია.

+Armenian Հայաստանը հին քաղաքակրթություն ունի.

+Ethiopic ኢትዮጵያ የጥንታዊ ሥልጣኔ ምድር ናት።

+Georgian mkhedrა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ

+Armenian alphab Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ
```
</details>

### classic179_emoji_inventory

- **Case Metadata:** format: xlsx | case: classic179_emoji_inventory | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic179_emoji_inventory.xlsx
- **Text Similarity:** 0.8371
- **Visual Average:** 0.9698
- **Overall Score:** 0.9228
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=30970 bytes, Reference=138581 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic179_emoji_inventory.pdf
+++ reference/classic179_emoji_inventory.pdf
@@ -1,11 +1,11 @@
 Icon Item Stock Min Status

-? Smartphone 150 50 ? OK

-? Laptop 42 30 ? Low

-?? Printer 8 10 ? Reorder

-? Headphones 200 40 ? OK

-?? Keyboard 75 25 ? OK

-?? Mouse 18 20 ? Reorder

-? Camera 12 10 ? Low

-? Charger 300 100 ? OK

-? USB Drive 5 15 ? Reorder

-?? Monitor 35 20 ? OK
+📱 Smartphone 150 50 🟢 OK

+💻 Laptop 42 30 🟡 Low

+🖨️ Printer 8 10 🔴 Reorder

+🎧 Headphones 200 40 🟢 OK

+⌨️ Keyboard 75 25 🟢 OK

+🖱️ Mouse 18 20 🔴 Reorder

+📷 Camera 12 10 🟡 Low

+🔌 Charger 300 100 🟢 OK

+💾 USB Drive 5 15 🔴 Reorder

+🖥️ Monitor 35 20 🟢 OK
```
</details>

### classic180_polyglot_paragraph

- **Case Metadata:** format: xlsx | case: classic180_polyglot_paragraph | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic180_polyglot_paragraph.xlsx
- **Text Similarity:** 0.7506
- **Visual Average:** 0.9877
- **Overall Score:** 0.8953
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=22443 bytes, Reference=153951 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic180_polyglot_paragraph.pdf
+++ reference/classic180_polyglot_paragraph.pdf
@@ -1,9 +1,9 @@
-Language Gree Ɵng

+Language Greeting

 English The quick brown fox.

-Japanese 速い茶⾊の狐。

-Korean ?? ?? ??.

+Japanese 速い茶色の狐。

+Korean 빠른 갈색 여우 .

 Russian Быстрая бурая лиса.

-Greek Η γρ?γορη αλεπο?.

-Thai ????????????????????

-Hindi ???? ???? ??????

-Emoji ? ➡? ?
+Greek Η γρήγορη αλεπού.

+Thai สุนัขจิ้งจอกสีน ้ำตำล

+Hindi तेज़ भूरी लोमडी

+Emoji 🦊 ➡️ 🐕
```
</details>

### classic181_feedback_tracker_with_images

- **Case Metadata:** format: xlsx | case: classic181_feedback_tracker_with_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic181_feedback_tracker_with_images.xlsx
- **Text Similarity:** 0.9301
- **Visual Average:** 0.416
- **Overall Score:** 0.6384
- **Pages:** MiniPdf=1, Reference=2
- **File Size:** MiniPdf=39504 bytes, Reference=93919 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic181_feedback_tracker_with_images.pdf
+++ reference/classic181_feedback_tracker_with_images.pdf
@@ -1,9 +1,12 @@
-Date Reviewer Descrip Ɵon Screenshot

-2026-03-01 Alice Cover le Ʃer spacing is oﬀ

+Date Reviewer Description

+2026-03-01 Alice Cover letter spacing is off

 2026-03-01 Bob Place of Birth not pulling through

-2026-03-02 Carol Privacy policy text is cut oﬀ at the bo Ʃom

-2026-03-02 Dave Paragraph does not make sense in sec Ɵon 3

-2026-03-03 Eve Wrong checklist used for applica Ɵon

-2026-03-03 Frank Name and contact details missing on cover le Ʃ

+2026-03-02 Carol Privacy policy text is cut off at the bottom

+2026-03-02 Dave Paragraph does not make sense in section 3

+2026-03-03 Eve Wrong checklist used for application

+2026-03-03 Frank Name and contact details missing on cover letter

 2026-03-04 Grace Unable to scroll and read the privacy policy

-2026-03-04 Hank Applicant has three children, only one birth cer
+2026-03-04 Hank Applicant has three children, only one birth cert up

+---PAGE---

+Screenshot

+ploaded
```
</details>

### classic182_dense_long_text_columns

- **Case Metadata:** format: xlsx | case: classic182_dense_long_text_columns | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic182_dense_long_text_columns.xlsx
- **Text Similarity:** 0.7197
- **Visual Average:** 0.9567
- **Overall Score:** 0.8706
- **Pages:** MiniPdf=2, Reference=2
- **File Size:** MiniPdf=37967 bytes, Reference=105199 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic182_dense_long_text_columns.pdf
+++ reference/classic182_dense_long_text_columns.pdf
@@ -1,19 +1,19 @@
-ID First Name Last Name Department Posi Ɵon Title Email Address

-1001 Alexander PapadopoulosEngineering Senior So Ōware Engineer alexander.papadopoulos@exam

-1002 Magdalena Kowalczyk Human ResourceHR Business Partner Lead magdalena.kowalczyk@example

-1003 Christopher O'Sullivan Finance Chief Financial Analyst christopher.osullivan@example.c

-1004 Priyanka RamasubramaMarke Ɵng Digital Marke Ɵng Strategi priyanka.r@example.com

-1005 Jean-Pierre Beaumont Sales Regional Sales Director (E jean-pierre.beaumont@example

-1006 Anastasia Volkov Engineering Principal Data Scien Ɵst anastasia.volkov@example.com

-1007 Mohammed Al-Rashidi Opera Ɵons Supply Chain Op ƟmizaƟon mohammed.alrashidi@example.

-1008 Guadalupe Hernandez Legal Senior Corporate Counselguadalupe.hernandez@example

+ID First Name Last Name Department Position Title

+1001 Alexander Papadopoulos Engineering Senior Software Engineer

+1002 Magdalena Kowalczyk Human Resource HR Business Partner Lead

+1003 Christopher O'Sullivan Finance Chief Financial Analyst

+1004 Priyanka Ramasubrama Marketing Digital Marketing Strategist

+1005 Jean-Pierre Beaumont Sales Regional Sales Director (EM

+1006 Anastasia Volkov Engineering Principal Data Scientist

+1007 Mohammed Al-Rashidi Operations Supply Chain Optimization

+1008 Guadalupe Hernandez Legal Senior Corporate Counsel

 ---PAGE---

-Phone Notes

-+1-555-0101 Transferred from Athens oﬃce in Q

-+1-555-0102 Fluent in Polish, German, and Engli

-+1-555-0103 CPA cer Ɵﬁed, MBA from Wharton

-+1-555-0104 Led rebranding campaign for APAC

-+1-555-0105 15+ years experience in B2B SaaS

-+1-555-0106 PhD in Machine Learning, Stanford

-+1-555-0107 Six Sigma Black Belt cer Ɵﬁed

-+1-555-0108 Bar admi Ʃed in CA, NY, TX
+Email Address Phone Notes

+alexander.papadopoulos@example+1-555-0101 Transferred from Athens office in Q2

+magdalena.kowalczyk@example.co+1-555-0102 Fluent in Polish, German, and English

+christopher.osullivan@example.co +1-555-0103 CPA certified, MBA from Wharton

+priyanka.r@example.com +1-555-0104 Led rebranding campaign for APAC region

+jean-pierre.beaumont@example.co+1-555-0105 15+ years experience in B2B SaaS

+anastasia.volkov@example.com +1-555-0106 PhD in Machine Learning, Stanford

+mohammed.alrashidi@example.co+1-555-0107 Six Sigma Black Belt certified

+guadalupe.hernandez@example.co+1-555-0108 Bar admitted in CA, NY, TX
```
</details>

### classic183_mixed_content_grid

- **Case Metadata:** format: xlsx | case: classic183_mixed_content_grid | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic183_mixed_content_grid.xlsx
- **Text Similarity:** 0.977
- **Visual Average:** 0.9506
- **Overall Score:** 0.971
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32205 bytes, Reference=79725 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic183_mixed_content_grid.pdf
+++ reference/classic183_mixed_content_grid.pdf
@@ -1,5 +1,5 @@
-Product Descrip Ɵon Photo

+Product Description Photo

 Widget Alpha Stainless steel widget, rated for 500+ cycles.

-Widget Beta Compact plas Ɵc widget, IP67 waterproof.

-Widget Gamma Titanium alloy, aerospace-grade ﬁnish.

+Widget Beta Compact plastic widget, IP67 waterproof.

+Widget Gamma Titanium alloy, aerospace-grade finish.

 Widget Delta Biodegradable, plant-based polymer.
```
</details>

### classic184_wide_narrow_columns

- **Case Metadata:** format: xlsx | case: classic184_wide_narrow_columns | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic184_wide_narrow_columns.xlsx
- **Text Similarity:** 0.9912
- **Visual Average:** 0.9404
- **Overall Score:** 0.9726
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=31022 bytes, Reference=102871 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic184_wide_narrow_columns.pdf
+++ reference/classic184_wide_narrow_columns.pdf
@@ -1,21 +1,21 @@
 ID Date Src Dst Type Qty Price Tax Total Status

-1 2026-03-23W6 D6 Return 36 8.86 0.89 9.75 Return

-2 2026-03-28W8 D1 Sale 69 463.93 46.39 510.32 Return

-3 2026-03-12W4 D2 Transfer 36 170.83 17.08 187.91 Shipped

-4 2026-03-04W9 D2 Transfer 20 325.16 32.52 357.68 Shipped

-5 2026-03-26W7 D2 Transfer 2 486.72 48.67 535.39 Shipped

-6 2026-03-25W6 D9 Return 69 19.84 1.98 21.82 Return

-7 2026-03-22W6 D4 Transfer 13 346.48 34.65 381.13 Pending

-8 2026-03-05W2 D4 Return 15 393.73 39.37 433.1 Cancel

-9 2026-03-19W5 D4 Sale 39 489.68 48.97 538.65 Cancel

-10 2026-03-13W7 D7 Transfer 17 361.77 36.18 397.95 Cancel

-11 2026-03-11W6 D7 Sale 85 445.67 44.57 490.24 OK

-12 2026-03-11W9 D1 Transfer 57 132.95 13.29 146.24 Shipped

-13 2026-03-01W8 D8 Sale 32 13.27 1.33 14.6 OK

-14 2026-03-14W3 D1 Sale 21 236.06 23.61 259.67 Shipped

-15 2026-03-04W2 D5 Sale 85 398.54 39.85 438.39 Cancel

-16 2026-03-28W4 D6 Return 24 335.86 33.59 369.45 Cancel

-17 2026-03-15W9 D2 Transfer 41 209.21 20.92 230.13 OK

-18 2026-03-14W1 D5 Return 57 8.95 0.9 9.85 OK

-19 2026-03-12W8 D6 Transfer 51 404.15 40.41 444.56 Pending

-20 2026-03-03W8 D4 Return 79 320.74 32.07 352.81 OK
+1 2026-03-23 W6 D6 Return 36 8.86 0.89 9.75 Return

+2 2026-03-28 W8 D1 Sale 69 463.93 46.39 510.32 Return

+3 2026-03-12 W4 D2 Transfer 36 170.83 17.08 187.91 Shipped

+4 2026-03-04 W9 D2 Transfer 20 325.16 32.52 357.68 Shipped

+5 2026-03-26 W7 D2 Transfer 2 486.72 48.67 535.39 Shipped

+6 2026-03-25 W6 D9 Return 69 19.84 1.98 21.82 Return

+7 2026-03-22 W6 D4 Transfer 13 346.48 34.65 381.13 Pending

+8 2026-03-05 W2 D4 Return 15 393.73 39.37 433.1 Cancel

+9 2026-03-19 W5 D4 Sale 39 489.68 48.97 538.65 Cancel

+10 2026-03-13 W7 D7 Transfer 17 361.77 36.18 397.95 Cancel

+11 2026-03-11 W6 D7 Sale 85 445.67 44.57 490.24 OK

+12 2026-03-11 W9 D1 Transfer 57 132.95 13.29 146.24 Shipped

+13 2026-03-01 W8 D8 Sale 32 13.27 1.33 14.6 OK

+14 2026-03-14 W3 D1 Sale 21 236.06 23.61 259.67 Shipped

+15 2026-03-04 W2 D5 Sale 85 398.54 39.85 438.39 Cancel

+16 2026-03-28 W4 D6 Return 24 335.86 33.59 369.45 Cancel

+17 2026-03-15 W9 D2 Transfer 41 209.21 20.92 230.13 OK

+18 2026-03-14 W1 D5 Return 57 8.95 0.9 9.85 OK

+19 2026-03-12 W8 D6 Transfer 51 404.15 40.41 444.56 Pending

+20 2026-03-03 W8 D4 Return 79 320.74 32.07 352.81 OK
```
</details>

### classic185_tall_rows_vertical_align

- **Case Metadata:** format: xlsx | case: classic185_tall_rows_vertical_align | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic185_tall_rows_vertical_align.xlsx
- **Text Similarity:** 0.9054
- **Visual Average:** 0.9848
- **Overall Score:** 0.9561
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=26585 bytes, Reference=72408 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic185_tall_rows_vertical_align.pdf
+++ reference/classic185_tall_rows_vertical_align.pdf
@@ -1,6 +1,6 @@
-Alignment Short Text Longer Descrip Ɵon

-Top Hello World A longer descrip Ɵon for this row.

-Center Hello World A longer descrip Ɵon for this row.

-Bo Ʃom Hello World A longer descrip Ɵon for this row.

-Top + Wrap Hello World A longer descrip Ɵon for this row.

-Center + Wrap Hello World A longer descrip Ɵon for this row.
+Alignment Short Text Longer Description

+Top Hello World A longer description for this row.

+Center Hello World A longer description for this row.

+Bottom Hello World A longer description for this row.

+Top + Wrap Hello World A longer description for this row.

+Center + Wrap Hello World A longer description for this row.
```
</details>

### classic186_multi_sheet_image_report

- **Case Metadata:** format: xlsx | case: classic186_multi_sheet_image_report | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic186_multi_sheet_image_report.xlsx
- **Text Similarity:** 0.9408
- **Visual Average:** 0.9654
- **Overall Score:** 0.9625
- **Pages:** MiniPdf=2, Reference=2
- **File Size:** MiniPdf=35953 bytes, Reference=92322 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic186_multi_sheet_image_report.pdf
+++ reference/classic186_multi_sheet_image_report.pdf
@@ -1,12 +1,12 @@
 Category Count Status

-Cri Ɵcal Bugs 3 Open

+Critical Bugs 3 Open

 Major Bugs 7 In Progress

 Minor Bugs 12 Triaged

 Enhancements 5 Planned

-Documenta Ɵon 8 Done

+Documentation 8 Done

 ---PAGE---

-# Descrip Ɵon Screenshot

+# Description Screenshot

 1 Login page layout broken on mobile

 2 Dashboard chart not rendering

-3 Export bu Ʃon overlaps footer

-4 Search results pagina Ɵon error
+3 Export button overlaps footer

+4 Search results pagination error
```
</details>

### classic187_bug_report_with_screenshots

- **Case Metadata:** format: xlsx | case: classic187_bug_report_with_screenshots | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic187_bug_report_with_screenshots.xlsx
- **Text Similarity:** 0.9815
- **Visual Average:** 0.8976
- **Overall Score:** 0.9516
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=37408 bytes, Reference=94413 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic187_bug_report_with_screenshots.pdf
+++ reference/classic187_bug_report_with_screenshots.pdf
@@ -1,6 +1,6 @@
-Bug ID Priority Status Descrip Ɵon Evidence

+Bug ID Priority Status Description Evidence

 BUG-001 P1 Open App crashes on SSO token expired

 BUG-002 P2 Fixed Date picker shows wrong month

 BUG-003 P1 Open File upload fails for >25MB

-BUG-004 P3 Veriﬁed Tool Ɵp text truncated on narrow screen

+BUG-004 P3 Verified Tooltip text truncated on narrow screen

 BUG-005 P2 Deferred Chart legend overlaps data labels
```
</details>

### classic188_merged_header_with_images

- **Case Metadata:** format: xlsx | case: classic188_merged_header_with_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic188_merged_header_with_images.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9632
- **Overall Score:** 0.9853
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=32256 bytes, Reference=81139 bytes

Text content: ✅ Identical

### classic189_alternating_image_text_rows

- **Case Metadata:** format: xlsx | case: classic189_alternating_image_text_rows | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic189_alternating_image_text_rows.xlsx
- **Text Similarity:** 0.9435
- **Visual Average:** 0.9191
- **Overall Score:** 0.945
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=37855 bytes, Reference=93481 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic189_alternating_image_text_rows.pdf
+++ reference/classic189_alternating_image_text_rows.pdf
@@ -1,7 +1,7 @@
-Step Ac Ɵon Expected Result Evidence

-Step 1 Open login page Login form is displayed withSee below

-Step 2 Enter valid creden Ɵals Dashboard loads within 3 seSee below

-Step 3 Click export bu Ʃon CSV ﬁle downloads with all vSee below

-Step 4 Apply date ﬁlter Table updates to show only See below

-Step 5 Resize browser window Layout remains responsive aSee below

-Step 6 Toggle dark mode All components switch to daSee below
+Step Action Expected Result Evidence

+Step 1 Open login page Login form is displayed with e See below

+Step 2 Enter valid credentials Dashboard loads within 3 secoSee below

+Step 3 Click export button CSV file downloads with all visSee below

+Step 4 Apply date filter Table updates to show only mSee below

+Step 5 Resize browser window Layout remains responsive at See below

+Step 6 Toggle dark mode All components switch to darkSee below
```
</details>

### classic190_dashboard_kpi_images

- **Case Metadata:** format: xlsx | case: classic190_dashboard_kpi_images | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic190_dashboard_kpi_images.xlsx
- **Text Similarity:** 1.0
- **Visual Average:** 0.9624
- **Overall Score:** 0.985
- **Pages:** MiniPdf=1, Reference=1
- **File Size:** MiniPdf=35021 bytes, Reference=96601 bytes

Text content: ✅ Identical

### classic191_payroll_calculator

- **Case Metadata:** format: xlsx | case: classic191_payroll_calculator | scope: java-classic-xlsx
- **Source:** tests/MiniPdf.Scripts/output/classic191_payroll_calculator.xlsx
- **Text Similarity:** 0.7669
- **Visual Average:** 0.8369
- **Overall Score:** 0.8415
- **Pages:** MiniPdf=9, Reference=9
- **File Size:** MiniPdf=52132 bytes, Reference=189742 bytes

<details><summary>Text Diff</summary>

```diff
--- minipdf/classic191_payroll_calculator.pdf
+++ reference/classic191_payroll_calculator.pdf
@@ -1,74 +1,76 @@
 Employee Register

-Informa Ɵon contained in this employee register is highly conﬁdenƟal

-ID Employee's Name M/F Hire Date Occupa Ɵon

-1 Adam Jones M 2013-02-15 Senior Accountant

-2 Nichola Brown F 2011-09-28 CR Manager

-3 Benny Erwin M 2011-05-11 Applica Ɵons PM

-4 Rachel Kim F 2016-08-03 HR Specialist

-5 Carlos Ruiz M 2019-11-20 Sales Rep

+Information contained in this employee register is highly confidential

+ID Employee's Name M/F Hire Date

+1 Adam Jones M 2013-02-15

+2 Nichola Brown F 2011-09-28

+3 Benny Erwin M 2011-05-11

+4 Rachel Kim F 2016-08-03

+5 Carlos Ruiz M 2019-11-20

 ---PAGE---

-Regular Hourly Ra Over Ɵme Hourly Exempt from Ove

-Annual Salary ($) Pay Frequency W-4 Form

-te ($) Rate ($) r Ɵme

-42,000.00 20.19 30.29 Yes Monthly W-4 (2020+)

-54,481.00 26.19 39.29 Yes Monthly W-4 (2020+)

-48,785.00 23.45 35.18 No Monthly W-4 (pre-2020)

-39,500.00 19.00 28.50 Yes Bi-Weekly W-4 (2020+)

-51,200.00 24.62 36.92 No Monthly W-4 (2020+)

+Regular Hourly Overtime Hourly Exempt from

+Occupation Annual Salary ($)

+Rate ($) Rate ($) Overtime

+Senior Accountant 42,000.00 20.19 30.29 Yes

+CR Manager 54,481.00 26.19 39.29 Yes

+Applications PM 48,785.00 23.45 35.18 No

+HR Specialist 39,500.00 19.00 28.50 Yes

+Sales Rep 51,200.00 24.62 36.92 No

 ---PAGE---

-Federal Allowanc Addi Ɵonal Withh

-Filing Status

-e old ($)

-Exempt 2 50.00

-Married 4 0.00

-Married 4 0.00

-Single 1 25.00

-Single 0 0.00

+Additional

+Pay Frequency W-4 Form Filing Status Federal Allowance

+Withhold ($)

+Monthly W-4 (2020+) Exempt 2 50.00

+Monthly W-4 (2020+) Married 4 0.00

+Monthly W-4 (pre-2020) Married 4 0.00

+Bi-Weekly W-4 (2020+) Single 1 25.00

+Monthly W-4 (2020+) Single 0 0.00

 ---PAGE---

 Payroll Calculator

-Pay Period Hours

-ID Employee Name From To Regular Hours Holiday Hours

-1 Adam Jones 2020-12-01 2020-12-31 173.33 0.00

-2 Nichola Brown 2020-12-01 2020-12-31 173.33 0.00

-3 Benny Erwin 2020-12-01 2020-12-31 173.33 0.00

-4 Rachel Kim 2020-12-01 2020-12-31 80.00 8.00

-5 Carlos Ruiz 2020-12-01 2020-12-31 173.33 0.00

+Pay Period

+ID Employee Name From To Regular Hours

+1 Adam Jones 2020-12-01 2020-12-31 173.33

+2 Nichola Brown 2020-12-01 2020-12-31 173.33

+3 Benny Erwin 2020-12-01 2020-12-31 173.33

+4 Rachel Kim 2020-12-01 2020-12-31 80.00

+5 Carlos Ruiz 2020-12-01 2020-12-31 173.33

 ---PAGE---

-Taxable Compen Pre-Tax Deduc Ɵ Post-Tax Reimb

-Vaca Ɵon Hours Sick Hours Over Ɵme Hours

-sa Ɵon ons ursements

-0.00 0.00 0.00 500.00 0.00 500.00

+Hours

+Taxable Pre-Tax

+Holiday Hours Vacation Hours Sick Hours Overtime Hours

+Compensation Deductions

+0.00 0.00 0.00 0.00 500.00 0.00

 0.00 0.00 0.00 0.00 0.00 0.00

-0.00 0.00 8.00 0.00 0.00 0.00

-0.00 0.00 0.00 0.00 0.00 0.00

-16.00 0.00 4.00 200.00 0.00 200.00

+0.00 0.00 0.00 8.00 0.00 0.00

+8.00 0.00 0.00 0.00 0.00 0.00

+0.00 16.00 0.00 4.00 20
... (1281 more characters)

```
</details>

## Improvement Suggestions

### ⚠ Low-Score Test Cases (below 0.8)

1. **classic09_long_text** (score: 0.189)
1. **classic103_pie_chart_with_labels** (score: 0.3224)
1. **classic120_chart_with_date_axis** (score: 0.3991)
1. **classic94_pie_chart** (score: 0.4294)
1. **classic119_dashboard_multi_charts** (score: 0.4598)
1. **classic92_horizontal_bar_chart** (score: 0.4602)
1. **classic106_3d_pie_chart** (score: 0.4622)
1. **classic118_bar_chart_custom_colors** (score: 0.4655)
1. **classic97_doughnut_chart** (score: 0.4662)
1. **classic98_radar_chart** (score: 0.4781)
1. **classic111_chart_with_axis_labels** (score: 0.4794)
1. **classic91_simple_bar_chart** (score: 0.4867)
1. **classic115_chart_negative_values** (score: 0.4958)
1. **classic113_chart_sheet** (score: 0.5149)
1. **classic110_chart_with_legend** (score: 0.5196)
1. **classic109_scatter_with_trendline** (score: 0.5228)
1. **classic105_3d_bar_chart** (score: 0.5252)
1. **classic116_percent_stacked_area** (score: 0.5261)
1. **classic99_bubble_chart** (score: 0.5299)
1. **classic96_scatter_chart** (score: 0.531)
1. **classic112_multiple_charts** (score: 0.532)
1. **classic108_stacked_area_chart** (score: 0.5416)
1. **classic93_line_chart** (score: 0.5443)
1. **classic104_combo_bar_line_chart** (score: 0.5693)
1. **classic102_line_chart_with_markers** (score: 0.5777)
1. **classic77_news_article_with_hero_image** (score: 0.5992)
1. **classic95_area_chart** (score: 0.6062)
1. **classic117_stock_ohlc_chart** (score: 0.6308)
1. **classic181_feedback_tracker_with_images** (score: 0.6384)
1. **classic18_large_dataset** (score: 0.6576)
1. **classic60_large_wide_table** (score: 0.6655)
1. **classic12_sparse_columns** (score: 0.6678)
1. **classic107_multi_series_line** (score: 0.6692)
1. **classic30_mixed_empty_and_filled_sheets** (score: 0.6832)
1. **classic75_certificate_with_seal** (score: 0.7239)
1. **classic178_caucasus_ethiopic** (score: 0.7296)
1. **classic127_font_styles** (score: 0.7608)
1. **classic166_emoji_progress** (score: 0.7629)
1. **classic114_chart_large_dataset** (score: 0.7706)
1. **classic84_travel_destination_cards** (score: 0.7794)
1. **classic100_stacked_bar_chart** (score: 0.7849)
1. **classic101_percent_stacked_bar** (score: 0.7874)
1. **classic81_step_by_step_with_images** (score: 0.7901)

Review the text diffs and visual comparisons above to identify specific rendering issues.
