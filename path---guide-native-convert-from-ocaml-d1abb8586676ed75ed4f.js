webpackJsonp([15],{"./node_modules/json-loader/index.js!./.cache/json/guide-native-convert-from-ocaml.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{html:'<p>Since Reason\'s just another syntax for OCaml, convert an OCaml project over is straightforward and doesn\'t require semantic changes. However, there are a few build setup &#x26; miscellaneous changes.</p>\n<h4>OCamlBuild -> Rebuild</h4>\n<p>Reason comes with a drop in replacement for <code>ocamlbuild</code> called <code>rebuild</code>, that\nwill automatically build any reason file along with your OCaml files, with\nno additional configuration. This allows you to add Reason files to your existing\nOCaml project bit by bit. Wherever your script refers to <code>ocamlbuild</code>, just replace\nit with <code>rebuild</code>.</p>\n<h4>Makefile</h4>\n<p>If your build system executes explicit build commands, then the easiest way to\nuse Reason with <code>ocamlopt/ocamlc</code> is by adding the following flags to each\ncompilation step:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment"># intf-suffix tells the compiler where to look for corresponding interface files</span>\nocamlopt -pp refmt -intf-suffix rei -impl myFile.re\nocamlopt -pp refmt -intf myFile.rei</code></pre>\n      </div>\n<p>If you are using <code>ocamlbuild</code> without <code>rebuild</code>, add the following to your\n<code>_tags</code> file, but this likely won\'t be enough because <code>ocamlc</code>/<code>ocamlopt</code> will\nneed the <code>-intf/-impl/-intf-suffix</code> flags:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>&lt;**/*.{re,.rei}&gt;: package(reason), syntax(utf8)</code></pre>\n      </div>\n<h4>Constructor Syntax Fix</h4>\n<p>The converted Reason code may attach <code>[@implicit_arity]</code> to variant constructors, like so: <code>C 1 2 [@implicit_arity]</code>.\nThis is due to the fact that OCaml has the ambiguous syntax where a multi-arguments\nconstructor is expecting argument in a tuple form. So at parsing time we don\'t\nknow if <code>C (1, 2)</code> in OCaml should be translated to <code>C (1, 2)</code> or <code>C 1 2</code> in Reason.\nBy default, we will convert it to <code>C 1 2 [@implicit_arity]</code>, which tells the compiler\nthis can be either <code>C 1 2</code> or <code>C (1, 2)</code>.</p>\n<p>To prevent <code>[@implicit_arity]</code> from being generated, one can supply <code>--assume-explicit-arity</code>\nto <code>refmt</code>. This forces the formatter to generate <code>C 1 2</code> instead of <code>C 1 2 [@implicit_arity]</code>.</p>\n<p>However, since <code>C 1 2</code> requires multiple arguments, it may fail the compilation if it is actually\na constructor with a single tuple as an argument (e.g., <code>Some</code>).\nWe already have some internal exception rules to cover the common constructors who requires a single tuple\nas argument so that they will be converted correctly (e.g., <code>Some (1, 2)</code> will be converted\nto <code>Some (1, 2)</code> instead of <code>Some 1 2</code>, which doesn\'t compile).</p>\n<p>To provide your own exception list, create a line-separated file that contains all constructors (without module prefix)\nin your project that expects a single tuple as argument, and use <code>--heuristics-file &#x3C;filename></code>\nto tell <code>refmt</code> that all constructors\nlisted in the file will be treated as constructor with a single tuple as argument:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>&gt; cat heuristics.txt\n  TupleConstructor\n  And\n  Or</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>&gt; cat test.ml</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">type</span> tm =\n  <span class="hljs-type">TupleConstructor</span> <span class="hljs-keyword">of</span> (<span class="hljs-built_in">int</span> * <span class="hljs-built_in">int</span>)\n| <span class="hljs-type">MultiArgumentsConstructor</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span> * <span class="hljs-built_in">int</span>\n<span class="hljs-keyword">let</span> x = <span class="hljs-type">TupleConstructor</span>(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)\n<span class="hljs-keyword">let</span> y = <span class="hljs-type">MultiArgumentsConstructor</span>(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)\n<span class="hljs-keyword">module</span> <span class="hljs-type">Test</span> = <span class="hljs-keyword">struct</span>\n  <span class="hljs-keyword">type</span> a = | <span class="hljs-type">And</span> <span class="hljs-keyword">of</span> (<span class="hljs-built_in">int</span> * <span class="hljs-built_in">int</span>) | <span class="hljs-type">Or</span> <span class="hljs-keyword">of</span> (<span class="hljs-built_in">int</span> * <span class="hljs-built_in">int</span>)\n<span class="hljs-keyword">end</span>;;\n<span class="hljs-keyword">let</span> a = <span class="hljs-type">Test</span>.<span class="hljs-type">And</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)\n<span class="hljs-keyword">let</span> b = <span class="hljs-type">Test</span>.<span class="hljs-type">Or</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)\n<span class="hljs-keyword">let</span> c = <span class="hljs-type">Some</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)</code></pre>\n      </div>\n<p>Then only the constructor identifiers that were listed will be assumed to accept tuples instead of multiple arguments.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>&gt; refmt --heuristics-file \\\n    ./heuristics.txt --assume-explicit-arity \\\n    --parse ml --print re test.ml</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>  <span class="hljs-keyword">type</span> tm =\n    | <span class="hljs-type">TupleConstructor</span> <span class="hljs-keyword">of</span> (int, int)\n    | <span class="hljs-type">MultiArgumentsConstructor</span> <span class="hljs-keyword">of</span> int int;\n\n<span class="hljs-keyword">let</span> x = <span class="hljs-type">TupleConstructor</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);\n<span class="hljs-keyword">let</span> y = <span class="hljs-type">MultiArgumentsConstructor</span> <span class="hljs-number">1</span> <span class="hljs-number">2</span>;\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Test</span> = </span>{\n  <span class="hljs-keyword">type</span> a = | <span class="hljs-type">And</span> <span class="hljs-keyword">of</span> (int, int) | <span class="hljs-type">Or</span> <span class="hljs-keyword">of</span> (int, int);\n};\n<span class="hljs-keyword">let</span> a = <span class="hljs-type">Test</span>.<span class="hljs-type">And</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);\n<span class="hljs-keyword">let</span> b = <span class="hljs-type">Test</span>.<span class="hljs-type">Or</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);\n<span class="hljs-keyword">let</span> <span class="hljs-built_in">c</span> = <span class="hljs-type">Some</span> (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);</code></pre>\n      </div>',frontmatter:{title:"Converting from OCaml"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/native/convert-from-ocaml.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-native-convert-from-ocaml-d1abb8586676ed75ed4f.js.map