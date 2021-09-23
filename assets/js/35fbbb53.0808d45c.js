"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2588],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},f=Object.keys(e);for(t=0;t<f.length;t++)n=f[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(t=0;t<f.length;t++)n=f[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,f=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(i,".").concat(m)]||s[m]||p[m]||f;return n?t.createElement(d,a(a({ref:r},l),{},{components:n})):t.createElement(d,a({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var f=n.length,a=new Array(f);a[0]=s;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<f;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6733:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var t=n(7462),o=n(3366),f=(n(7294),n(3905)),a=["components"],c={tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898"]},i="\u526a\u7ef3\u5b50II",u={unversionedId:"\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II",id:"\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II",isDocsHomePage:!1,title:"\u526a\u7ef3\u5b50II",description:"\u9898\u89e3 1.py",source:"@site/docs/\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II.md",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II",permalink:"/docs/\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u5251\u6307offer/offer14_\u526a\u7ef3\u5b50II.md",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u6570\u5b66\u95ee\u9898",permalink:"/docs/tags/\u6570\u5b66\u95ee\u9898"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898"]},sidebar:"tutorialSidebar",previous:{title:"\u526a\u7ef3\u5b50",permalink:"/docs/\u5251\u6307offer/offer14_343_\u526a\u7ef3\u5b50"},next:{title:"\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570",permalink:"/docs/\u5251\u6307offer/offer15_191_\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570"}},l=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],p={toc:l};function s(e){var r=e.components,n=(0,o.Z)(e,a);return(0,f.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"\u526a\u7ef3\u5b50ii"},"\u526a\u7ef3\u5b50II"),(0,f.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-.py"},"# ##\u5251\u6307offer#\u6570\u5b66\u95ee\u9898##levelm\nclass Solution:\n    def cuttingRope(self, n: int) -> int:\n        maxx = 1\n        for nn in range(2, n):\n            ps = n//nn\n            left = n%nn\n            maxx = max(maxx, pow((ps+1), left) * pow(ps, (nn-left)))\n        return maxx % 1000000007\n")))}s.isMDXComponent=!0}}]);