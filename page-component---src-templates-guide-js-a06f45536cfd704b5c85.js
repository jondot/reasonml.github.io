webpackJsonp([1,4],{"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<t.length;o++){var l=t[o];"number"==typeof l[0]&&n[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),e.push(l))}},e}},"./src/components/GuideSidebar.js":function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.constructTree=t.fixPath=t.sidebarFragment=void 0;var i,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=r("./node_modules/react/react.js"),p=n(h),m=r("./src/components/Link.js"),f=n(m),b=r("./src/utils/typography.js"),g=r("./src/utils/colors.js"),j=function(t){function r(){var e,t,n,o;s(this,r);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return t=n=l(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.state={closed:!0},o=t,l(n,o)}return a(r,t),d(r,[{key:"componentWillReceiveProps",value:function(e){e.current!==this.props.current&&this.setState({closed:!0})}},{key:"render",value:function(){var t=this;return e.createElement("div",{css:v.container},e.createElement("div",{css:v.navToggle,onClick:function(){return t.setState({closed:!t.state.closed})}},"Navigation"),e.createElement("div",{css:[v.contents,this.state.closed&&v.hiddenContents]},e.createElement(f.default,{to:this.props.search},"Search"),e.createElement(y,{current:this.props.current,item:this.props.root,root:!0,depth:0})))}}]),r}(p.default.Component);t.default=j;var y=function t(r){var n=r.current,o=r.root,s=r.item,l=s.title,a=s.relativePath,i=s.children,c=r.depth,u=[v.link,v["link"+c],a===n&&v.currentLink];return i.length?e.createElement("div",{css:[v.node,o&&v.rootNode]},o?null:e.createElement(f.default,{to:a,css:u},l),e.createElement("ul",{css:[v.children,o&&v.rootChildren]},i.map(function(r){return e.createElement("li",{style:v.li,key:r.relativePath},e.createElement(t,{current:n,item:r,depth:c+1}))}))):e.createElement(f.default,{css:[v.node,u],to:a},l)},x=(t.sidebarFragment="** extracted graphql fragment **","@media(max-width: 800px)"),v={container:(i={width:(0,b.rhythm)(8)},o(i,x,u({},(0,b.scale)(0),{width:"auto"})),o(i,"fontFamily",(0,b.headerFontFamily)()),i),contents:{padding:(0,b.rhythm)(1/3)+" "+(0,b.rhythm)(.5)},hiddenContents:o({},x,{display:"none"}),navToggle:o({backgroundColor:"#444",color:"white",padding:(0,b.rhythm)(1/3)+" "+(0,b.rhythm)(.5),alignSelf:"stretch",display:"none",cursor:"pointer"},x,{display:"flex"}),li:{margin:0,padding:0},link:(c={textDecoration:"none",color:"currentColor"},o(c,x,{padding:""+(0,b.rhythm)(.25)}),o(c,"display","block"),c),currentLink:{textDecoration:"underline",textDecorationColor:g.accent,color:g.accent},link1:u({fontWeight:"bold"},(0,b.scale)(0)),children:u({},(0,b.scale)(-.2),{listStyle:"none",margin:0,padding:0,paddingLeft:(0,b.rhythm)(.5),marginLeft:0,borderLeft:"1px solid #aaa"}),rootChildren:{borderLeft:"none",marginLeft:0,paddingLeft:0}},_=t.fixPath=function(e){return e.match(/\/index\.md$/)?"/"+e.slice(0,-"/index.md".length):"/"+e.slice(0,-".md".length)},k=function(e){return e.map(function(e){var t=e.relativePath,r=e.childMarkdownRemark.frontmatter,n=r.title,o=r.order;return{relativePath:_(t),title:n,order:o}})},w=function(e){return Object.keys(e).map(function(t){return e[t]})},E=function e(t){return u({},t,{children:w(t.children).sort(function(e,t){return e.order-t.order}).map(e)})};t.constructTree=function(e,t){var r={children:{}};return k(t).forEach(function(e){var t=e.relativePath,n=e.title,o=e.order,s=t.split(/\//g).slice(1),l=s.pop(),a=r;s.forEach(function(e){a.children[e]||(a.children[e]={children:{}}),a=a.children[e]}),a.children[l]=u({children:{}},a.children[l],{relativePath:t,title:n,order:o})}),E(r.children[e])}}).call(t,r("./node_modules/glamor-react/lib/index.js"))},"./src/pages/community/example-screenshots/hacker-news.png":function(e,t,r){e.exports=r.p+"static/hacker-news.df4de52a.png"},"./src/pages/community/example-screenshots/llama-snake.png":function(e,t,r){e.exports=r.p+"static/llama-snake.58b4c039.png"},"./src/pages/community/example-screenshots/mareo.png":function(e,t,r){e.exports=r.p+"static/mareo.926d7c31.png"},"./src/pages/community/example-screenshots/reason-maze.png":function(e,t,r){e.exports=r.p+"static/reason-maze.0fee349e.png"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js':function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r("./node_modules/react/react.js"),u=o(c),d=[{title:"Reason Maze",url:"https://github.com/jaredly/reason-maze",img:r("./src/pages/community/example-screenshots/reason-maze.png")},{title:"Mareo: Mario + Reason",url:"https://github.com/chenglou/Mareo",img:r("./src/pages/community/example-screenshots/mareo.png")},{title:"ReasonReact Hacker News",url:"https://github.com/jsdf/reason-react-hacker-news",img:r("./src/pages/community/example-screenshots/hacker-news.png")},{title:"Reason snake",url:"https://github.com/rdavison/llama-snake/tree/master/websnake",img:r("./src/pages/community/example-screenshots/llama-snake.png")}],h=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return n.createElement("div",{css:p.container},d.map(function(e,t){var r=e.title,o=e.url,s=e.img;return n.createElement("a",{key:t,href:o,css:p.link},n.createElement("img",{src:s,css:p.img}),n.createElement("span",{css:p.title},r))}))}}]),t}(u.default.Component);t.default=h;var p={container:{display:"flex",flexDirection:"row",flexWrap:"wrap"},link:{display:"flex",alignItems:"center",margin:10,flexDirection:"column",textDecoration:"none",color:"currentColor",":hover":{textDecoration:"underline"}},img:{width:250,height:250,marginBottom:.5},title:{}};e.exports=t.default}).call(t,r("./node_modules/glamor-react/lib/index.js"))},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Guide.js':function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r("./node_modules/react/react.js"),c=n(i),u=r("./node_modules/react-helmet/lib/Helmet.js"),d=n(u),h=r("./src/components/Section.js"),p=n(h),m=r("./src/components/GuideSidebar.js"),f=n(m),b=r("./src/utils/colors.js"),g=r("./src/components/Link.js"),j=n(g),y=r("./src/components/Header.js"),x=n(y);r("./syntax-highlighting/xcode.css"),r("./src/templates/guide.css");var v=function(e){return"https://github.com/reasonml/reasonml.github.io/edit/source/src/pages/"+e},_=function(t){function n(){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),a(n,[{key:"renderMain",value:function(){var t=this.props.data.file,n=t.relativePath,o=t.childMarkdownRemark,s=o.frontmatter.title,l=o.html,a=void 0,i=void 0;if("community/examples.md"===n){var c=r('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/jared/clone/experiments/reason-site/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js');i=e.createElement(c,null),a=v("community/examples.js")}else i=e.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),a=v(n);return e.createElement("div",{css:k.main},e.createElement("h2",{css:k.title},s,e.createElement(j.default,{css:k.editLink,to:a},"Suggest an edit")),i)}},{key:"render",value:function(){var t=this.props.pathContext,r=t.section,n=t.sectionTitle,o=this.props.data,s=o.allFile,l=o.file,a=l.relativePath,i=l.childMarkdownRemark,c=i.frontmatter.title;i.html;return e.createElement("div",null,e.createElement(d.default,{title:c}),e.createElement(p.default,{backgroundColor:b.accent,css:{color:"white"}},e.createElement(x.default,{inverted:!0}),e.createElement("div",{css:{alignItems:"center"}},e.createElement("h1",null,e.createElement(j.default,{css:k.topLink,to:"/"+r},n)))),e.createElement(p.default,{css:k.contentSection},e.createElement("div",{css:k.sidebar},e.createElement(f.default,{current:(0,m.fixPath)(a),search:"/"+r+"/search",root:(0,m.constructTree)(r,s.edges.map(function(e){return e.node}))})),this.renderMain()))}}]),n}(c.default.Component);t.default=_;var k={editLink:{fontSize:"14px",fontWeight:"normal",lineHeight:"25px"},title:{borderBottom:"1px solid #aaa",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},contentSection:{flexDirection:"row","@media(max-width: 800px)":{flexDirection:"column"}},sidebar:{},main:{position:"relative",flex:1,padding:"2em",minWidth:0}};t.pageQuery="** extracted graphql fragment **"}).call(t,r("./node_modules/glamor-react/lib/index.js"))},"./src/templates/guide.css":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".hljs{background:#fbfafa;border:1px solid #eee;display:block;padding:10px;-webkit-border-radius:1px;border-radius:1px;overflow:auto}td>pre{padding:5px 15px;margin:0}",""])},"./syntax-highlighting/xcode.css":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".hljs{display:block;overflow-x:auto;padding:.5em;background:#fff;color:#000;-webkit-text-size-adjust:none}.hljs-comment{color:#006a00}.hljs-keyword,.hljs-literal,.nginx .hljs-title{color:#aa1094}.hljs-list .hljs-title,.hljs-name,.hljs-request,.hljs-status,.hljs-tag .hljs-title,.hljs-winutils,.http .hljs-title,.method,.setting .hljs-value,.tex .hljs-command{color:#008}.hljs-envvar,.tex .hljs-special{color:#660}.hljs-string{color:#c41a16}.apache .hljs-cbracket,.hljs-attr_selector,.hljs-cdata,.hljs-date,.hljs-filter .hljs-argument,.hljs-regexp,.hljs-tag .hljs-value{color:#080}.coffeescript .hljs-attribute,.css .hljs-function,.hljs-decorator,.hljs-function .hljs-title,.hljs-hexcolor,.hljs-number,.hljs-pi,.hljs-prompt,.hljs-rule .hljs-value,.hljs-shebang,.hljs-sub .hljs-identifier,.hljs-symbol,.hljs-symbol .hljs-string,.hljs-tag,.hljs-tag .hljs-keyword,.ini .hljs-title{color:#1c00cf}.clojure .hljs-attribute,.hljs-built_in,.hljs-class .hljs-id,.hljs-class .hljs-title,.hljs-doctype,.hljs-tag .hljs-attribute,.hljs-type,.hljs-typename,.setting,.smalltalk .hljs-class{color:#5b2f8e}.hljs-params,.hljs-variable{color:#3f6e74}.css .hljs-tag,.hljs-pseudo,.hljs-rule .hljs-property,.hljs-subst{color:#000}.css .hljs-class,.css .hljs-id{color:#9b703f}.hljs-value .hljs-important{color:#f70;font-weight:700}.hljs-rule .hljs-keyword{color:#c5af75}.apache .hljs-sqbracket,.hljs-annotation,.nginx .hljs-built_in{color:#9b859d}.hljs-pragma,.hljs-preprocessor,.hljs-preprocessor *{color:#643820}.tex .hljs-formula{background-color:#eee;font-style:italic}.diff .hljs-header,.hljs-chunk{color:gray;font-weight:700}.diff .hljs-change{background-color:#bccff9}.hljs-addition{background-color:#baeeba}.hljs-deletion{background-color:#ffc8bd}.hljs-comment .hljs-doctag{font-weight:700}.method .hljs-id{color:#000}",""])}});
//# sourceMappingURL=page-component---src-templates-guide-js-a06f45536cfd704b5c85.js.map