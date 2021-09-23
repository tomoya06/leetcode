"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9535],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},f=Object.keys(e);for(n=0;n<f.length;n++)t=f[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(n=0;n<f.length;n++)t=f[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,f=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||f;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var f=t.length,i=new Array(f);i[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<f;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3045:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=t(7462),o=t(3366),f=(t(7294),t(3905)),i=["components"],a={tags:["\u5251\u6307offer"]},c="\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",l={unversionedId:"\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",id:"\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",isDocsHomePage:!1,title:"\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",description:"\u9898\u89e3 1.py",source:"@site/docs/\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868.md",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",permalink:"/docs/\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u5251\u6307offer/offer06_\u5012\u5e8f\u8f93\u51fa\u94fe\u8868.md",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"}],version:"current",frontMatter:{tags:["\u5251\u6307offer"]},sidebar:"tutorialSidebar",previous:{title:"\u66ff\u6362\u7a7a\u683c",permalink:"/docs/\u5251\u6307offer/offer05_\u66ff\u6362\u7a7a\u683c"},next:{title:"\u524d\u5e8f\u4e2d\u5e8f\u8fd8\u539f\u4e8c\u53c9\u6811",permalink:"/docs/\u5251\u6307offer/offer07_105_\u524d\u5e8f\u4e2d\u5e8f\u8fd8\u539f\u4e8c\u53c9\u6811"}},u=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],s={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,f.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"\u5012\u5e8f\u8f93\u51fa\u94fe\u8868"},"\u5012\u5e8f\u8f93\u51fa\u94fe\u8868"),(0,f.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-.py"},"# ##\u5251\u6307offer##levele\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def reversePrint(self, head: ListNode) -> List[int]:\n        res = []\n        while head:\n            res.insert(0, head.val)\n            head = head.next\n        return res\n\n")))}p.isMDXComponent=!0}}]);