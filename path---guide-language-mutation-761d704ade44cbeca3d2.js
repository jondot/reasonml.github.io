webpackJsonp([19],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-mutation.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}}]},file:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{html:'<p>Reason/OCaml exposes mutable features through <a href="#built-in-data-types-array">array</a> and <a href="#built-in-data-types-record">mutable record fields</a>. They\'re sometimes great for performance and expressing certain familiar programming patterns.</p>\n<p>For a single mutable reference (e.g. assigning a value to <code>let</code>), the standard library comes with syntax sugar for a <a href="http://caml.inria.fr/pub/docs/manual-ocaml/libref/Pervasives.html#TYPEref">record type called <code>ref</code></a>. You\'d use it like so:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myValue = <span class="hljs-keyword">ref</span> <span class="hljs-number">10</span>;\n<span class="hljs-keyword">if</span> (...) {\n  myValue := <span class="hljs-number">20</span>;\n};\nprint_int !myValue;</code></pre>\n      </div>\n<p>In reality, this is just:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myValue = {contents: <span class="hljs-number">10</span>};\n<span class="hljs-keyword">if</span> (...) {\n  myValue.contents = <span class="hljs-number">20</span>;\n};\nprint_int myValue.contents;</code></pre>\n      </div>\n<p>There\'s nothing special about this record, beside the fact that it comes inside the standard library.</p>\n<p>You can also achieve lightweight, local "mutations" through overriding let bindings:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> foo = <span class="hljs-number">10</span>;\n<span class="hljs-keyword">let</span> foo = someCondition ? foo + <span class="hljs-number">5</span> : foo; <span class="hljs-comment">/* either 15 or 10 */</span>\n<span class="hljs-keyword">let</span> foo = <span class="hljs-string">"hello"</span>;\nprint_endline foo; <span class="hljs-comment">/* "hello" */</span></code></pre>\n      </div>\n<p>Notice we\'ve assigned a new type to <code>foo</code> in the before-last line. This is type-safe since, as documented <a href="#basics-let-binding">here</a>, the lines afterward can only see the last assignment of <code>foo</code>.</p>',frontmatter:{title:"Mutation"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/mutation.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-mutation-761d704ade44cbeca3d2.js.map