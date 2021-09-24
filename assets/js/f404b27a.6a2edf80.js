"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1811],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},a=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),u=d(r),h=o,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||c;return r?n.createElement(m,s(s({ref:t},a),{},{components:r})):n.createElement(m,s({ref:t},a))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<c;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4517:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return a},default:function(){return u}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),s=["components"],l={date:new Date("2019-01-08T20:24:22.000Z"),id:"nodejs-process",tags:["\u524d\u7aef","Node"],title:"Node child_process"},i=void 0,d={unversionedId:"note/nodejs-process",id:"note/nodejs-process",isDocsHomePage:!1,title:"Node child_process",description:"Nodejs\u8fdb\u7a0b\u76f8\u5173",source:"@site/docs/note/2019-01-08-nodejs-process.mdx",sourceDirName:"note",slug:"/note/nodejs-process",permalink:"/docs/note/nodejs-process",tags:[{label:"\u524d\u7aef",permalink:"/docs/tags/\u524d\u7aef"},{label:"Node",permalink:"/docs/tags/node"}],version:"current",frontMatter:{date:"2019-01-08T20:24:22.000Z",id:"nodejs-process",tags:["\u524d\u7aef","Node"],title:"Node child_process"},sidebar:"note",previous:{title:"\u5e38\u89c1POST\u63d0\u4ea4\u6570\u636e\u65b9\u5f0f",permalink:"/docs/note/web-post-form"},next:{title:"\u65af\u5766\u798f \u7f16\u8bd1\u539f\u7406 - COOL\u8bed\u6cd5\u8981\u70b9",permalink:"/docs/note/compilers-COOL"}},a=[{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[]},{value:"\u521b\u5efa\u65b9\u6cd5",id:"\u521b\u5efa\u65b9\u6cd5",children:[{value:"child_process.exec(command, options)",id:"child_processexeccommand-options",children:[]},{value:"child_process.execFile(file, args, callback)",id:"child_processexecfilefile-args-callback",children:[]},{value:"child_process.fork(modulePath, args)",id:"child_processforkmodulepath-args",children:[]},{value:"child_process.spawn(command, args)",id:"child_processspawncommand-args",children:[]}]},{value:"\u901a\u4fe1\u65b9\u5f0f",id:"\u901a\u4fe1\u65b9\u5f0f",children:[{value:"\u901a\u8fc7stdin/stdout\u4f20\u9012json",id:"\u901a\u8fc7stdinstdout\u4f20\u9012json",children:[]},{value:"\u539f\u751fIPC\u652f\u6301",id:"\u539f\u751fipc\u652f\u6301",children:[]},{value:"sockets\u901a\u4fe1",id:"sockets\u901a\u4fe1",children:[]},{value:"message queue",id:"message-queue",children:[]},{value:"Redis",id:"redis",children:[]}]}],p={toc:a};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Nodejs\u8fdb\u7a0b\u76f8\u5173")),(0,c.kt)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,c.kt)("p",null,"child_process.exec() \u548c child_process.execFile() \u4e4b\u95f4\u7684\u533a\u522b\u4f1a\u56e0\u5e73\u53f0\u800c\u4e0d\u540c\u3002 \u5728\u7c7b Unix \u64cd\u4f5c\u7cfb\u7edf\uff08Unix\u3001 Linux\u3001 macOS\uff09\u4e0a\uff0cchild_process.execFile() \u6548\u7387\u66f4\u9ad8\uff0c\u56e0\u4e3a\u5b83\u4e0d\u9700\u8981\u884d\u751f shell\u3002 \u4f46\u5728 Windows \u4e0a\uff0c.bat \u548c .cmd \u6587\u4ef6\u5728\u6ca1\u6709\u7ec8\u7aef\u7684\u60c5\u51b5\u4e0b\u662f\u4e0d\u53ef\u6267\u884c\u7684\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 child_process.execFile() \u542f\u52a8\u3002 \u53ef\u4ee5\u4f7f\u7528\u8bbe\u7f6e\u4e86 shell \u9009\u9879\u7684 child_process.spawn()\u3001\u6216\u4f7f\u7528 child_process.exec()\u3001\u6216\u884d\u751f cmd.exe \u5e76\u5c06 .bat \u6216 .cmd \u6587\u4ef6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff08\u4e5f\u5c31\u662f shell \u9009\u9879\u548c child_process.exec() \u6240\u505a\u7684\u5de5\u4f5c\uff09\u3002 \u5982\u679c\u811a\u672c\u6587\u4ef6\u540d\u5305\u542b\u7a7a\u683c\uff0c\u5219\u9700\u8981\u52a0\u4e0a\u5f15\u53f7\u3002"),(0,c.kt)("h2",{id:"\u521b\u5efa\u65b9\u6cd5"},"\u521b\u5efa\u65b9\u6cd5"),(0,c.kt)("p",null,"child_process\u5e93\u4e2d\u521b\u5efa\u8fdb\u7a0b\u7684\u65b9\u6cd5\u6709"),(0,c.kt)("h3",{id:"child_processexeccommand-options"},"child_process.exec(command","[, options][, callback]",")"),(0,c.kt)("p",null,"\u884d\u751f\u4e00\u4e2a shell \u5e76\u5728 shell \u4e2d\u6267\u884c command\uff0c\u5e76\u7f13\u51b2\u4ea7\u751f\u7684\u8f93\u51fa\u3002 command \u4f1a\u88ab shell \u76f4\u63a5\u6267\u884c\uff0c\u6240\u4ee5 command \u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\uff08\u56e0shell\u800c\u5f02\uff09\u9700\u8981\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,c.kt)("h3",{id:"child_processexecfilefile-args-callback"},"child_process.execFile(file","[, args][, options]","[, callback]",")"),(0,c.kt)("p",null,"\u4e0e child_process.exec() \u7c7b\u4f3c\uff0c\u9664\u4e86\u9ed8\u8ba4\u4e0d\u884d\u751f shell\u3002 \u53ef\u6267\u884c\u7684 file \u4f1a\u88ab\u76f4\u63a5\u884d\u751f\u4e3a\u4e00\u4e2a\u65b0\u8fdb\u7a0b\uff0c\u8fd9\u4f7f\u5f97\u5b83\u6bd4 child_process.exec() \u66f4\u9ad8\u6548\u3002"),(0,c.kt)("p",null,"\u56e0\u4e3a\u6ca1\u6709\u884d\u751f shell\uff0c\u6240\u4ee5\u4e0d\u652f\u6301 I/O \u91cd\u5b9a\u5411\u6216\u6587\u4ef6\u67e5\u627e\u7b49\u529f\u80fd\u3002"),(0,c.kt)("h3",{id:"child_processforkmodulepath-args"},"child_process.fork(modulePath","[, args][, options]",")"),(0,c.kt)("p",null,"child_process.fork() \u662f child_process.spawn() \u7684\u4e00\u4e2a\u7279\u6b8a\u60c5\u51b5\uff0c\u7528\u4e8e\u4e13\u95e8\u884d\u751f\u65b0\u7684 Node.js \u8fdb\u7a0b\u3002 \u8fd4\u56de\u7684 ChildProcess \u6709\u4e00\u4e2a\u989d\u5916\u7684\u5185\u7f6e\u901a\u4fe1\u901a\u9053\uff0c\u5141\u8bb8\u6d88\u606f\u5728\u7236\u8fdb\u7a0b\u548c\u5b50\u8fdb\u7a0b\u4e4b\u95f4\u6765\u56de\u4f20\u9012\u3002"),(0,c.kt)("p",null,"\u884d\u751f\u7684 Node.js \u5b50\u8fdb\u7a0b\u4e0e\u4e24\u8005\u4e4b\u95f4\u5efa\u7acb\u7684 IPC \u901a\u4fe1\u4fe1\u9053\u7684\u5f02\u5e38\u662f\u72ec\u7acb\u4e8e\u7236\u8fdb\u7a0b\u7684\u3002 \u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u6709\u81ea\u5df1\u7684\u5185\u5b58\uff0c\u4f7f\u7528\u81ea\u5df1\u7684 V8 \u5b9e\u4f8b\u3002 \u7531\u4e8e\u9700\u8981\u989d\u5916\u7684\u8d44\u6e90\u5206\u914d\uff0c\u56e0\u6b64\u4e0d\u5efa\u8bae\u884d\u751f\u5927\u91cf\u7684 Node.js \u8fdb\u7a0b\u3002"),(0,c.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cchild_process.fork() \u4f1a\u4f7f\u7528\u7236\u8fdb\u7a0b\u4e2d\u7684 process.execPath \u884d\u751f\u65b0\u7684 Node.js \u5b9e\u4f8b\u3002 options \u7684 execPath \u53ef\u4ee5\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,c.kt)("h3",{id:"child_processspawncommand-args"},"child_process.spawn(command","[, args][, options]",")"),(0,c.kt)("p",null,"\u4f7f\u7528 command \u548c args \u884d\u751f\u8fdb\u7a0b\u3002"),(0,c.kt)("h2",{id:"\u901a\u4fe1\u65b9\u5f0f"},"\u901a\u4fe1\u65b9\u5f0f"),(0,c.kt)("p",null,"\u8be6\u89c1",(0,c.kt)("a",{parentName:"p",href:"http://www.ayqy.net/blog/nodejs%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1/"},"\u6b64\u535a\u5ba2")),(0,c.kt)("h3",{id:"\u901a\u8fc7stdinstdout\u4f20\u9012json"},"\u901a\u8fc7stdin/stdout\u4f20\u9012json"),(0,c.kt)("p",null,"\u8fdb\u7a0b\u4e0d\u80fd\u5b8c\u5168\u72ec\u7acb\uff0c\u8981\u80fd\u8fbe\u5230\u5bf9\u65b9\u8fdb\u7a0b\u7684ChildProcess\u5b9e\u4f8b\u3002"),(0,c.kt)("h3",{id:"\u539f\u751fipc\u652f\u6301"},"\u539f\u751fIPC\u652f\u6301"),(0,c.kt)("p",null,"\u5982spawn()\u53cafork()\u7684\u4f8b\u5b50\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u53ef\u4ee5\u501f\u52a9\u5185\u7f6e\u7684IPC\u673a\u5236\u901a\u4fe1\u3002"),(0,c.kt)("h3",{id:"sockets\u901a\u4fe1"},"sockets\u901a\u4fe1"),(0,c.kt)("h3",{id:"message-queue"},"message queue"),(0,c.kt)("h3",{id:"redis"},"Redis"))}u.isMDXComponent=!0}}]);