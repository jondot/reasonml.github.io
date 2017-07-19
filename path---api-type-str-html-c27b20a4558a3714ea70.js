webpackJsonp([64],{"./node_modules/json-loader/index.js!./.cache/json/api-type-str-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Str.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;regexp\n&#xA0;&#xA0;val&#xA0;regexp&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Str.regexp\n&#xA0;&#xA0;val&#xA0;regexp_case_fold&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Str.regexp\n&#xA0;&#xA0;val&#xA0;quote&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;regexp_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Str.regexp\n&#xA0;&#xA0;val&#xA0;regexp_string_case_fold&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Str.regexp\n&#xA0;&#xA0;val&#xA0;string_match&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;search_forward&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;search_backward&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;string_partial_match&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;matched_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;match_beginning&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;match_end&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;matched_group&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;group_beginning&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;group_end&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;global_replace&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;replace_first&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;global_substitute&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Str.regexp&#xA0;-&gt;&#xA0;(string&#xA0;-&gt;&#xA0;string)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;substitute_first&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;(string&#xA0;-&gt;&#xA0;string)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;replace_matched&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;split&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string&#xA0;list\n&#xA0;&#xA0;val&#xA0;bounded_split&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string&#xA0;list\n&#xA0;&#xA0;val&#xA0;split_delim&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string&#xA0;list\n&#xA0;&#xA0;val&#xA0;bounded_split_delim&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string&#xA0;list\n&#xA0;&#xA0;type&#xA0;split_result&#xA0;=&#xA0;Text&#xA0;of&#xA0;string&#xA0;|&#xA0;Delim&#xA0;of&#xA0;string\n&#xA0;&#xA0;val&#xA0;full_split&#xA0;:&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;Str.split_result&#xA0;list\n&#xA0;&#xA0;val&#xA0;bounded_full_split&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Str.regexp&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Str.split_result&#xA0;list\n&#xA0;&#xA0;val&#xA0;string_before&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;string_after&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;first_chars&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;last_chars&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Str.html"}}}});
//# sourceMappingURL=path---api-type-str-html-c27b20a4558a3714ea70.js.map