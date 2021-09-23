"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3047],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(a,".").concat(d)]||s[d]||l[d]||i;return t?n.createElement(m,f(f({ref:r},u),{},{components:t})):n.createElement(m,f({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,f=new Array(i);f[0]=s;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,f[1]=c;for(var p=2;p<i;p++)f[p]=t[p];return n.createElement.apply(null,f)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4820:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),f=["components"],c={tags:["\u5251\u6307offer"]},a="\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",p={unversionedId:"\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",id:"\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",isDocsHomePage:!1,title:"\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",description:"\u9898\u89e3 1.py",source:"@site/docs/\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635.md",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",permalink:"/leetcode/docs/\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u5251\u6307offer/offer29_54_\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635.md",tags:[{label:"\u5251\u6307offer",permalink:"/leetcode/docs/tags/\u5251\u6307offer"}],version:"current",frontMatter:{tags:["\u5251\u6307offer"]},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u79f0\u7684\u4e8c\u53c9\u6811",permalink:"/leetcode/docs/\u5251\u6307offer/offer28_101_\u5bf9\u79f0\u7684\u4e8c\u53c9\u6811"},next:{title:"\u5305\u542bmin\u51fd\u6570\u7684\u6808",permalink:"/leetcode/docs/\u5251\u6307offer/offer30_155_\u5305\u542bmin\u51fd\u6570\u7684\u6808"}},u=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],l={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,f);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635"},"\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635"),(0,i.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.py"},"# ##\u5251\u6307offer##levelm\nclass Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        curStep = 0 # 0\u53f3 1\u4e0b 2\u5de6 3\u4e0a\n        res = []\n        while len(matrix) and len(matrix[0]):\n            if curStep == 0:\n                res += matrix.pop(0)\n            elif curStep == 1:\n                for row in matrix:\n                    res.append(row.pop(-1))\n            elif curStep == 2:\n                res += matrix.pop(-1)[::-1]\n            elif curStep == 3:\n                for row in matrix[::-1]:\n                    res.append(row.pop(0))\n            \n            curStep = (curStep+1)%4\n        \n        return res\n\n")))}s.isMDXComponent=!0}}]);