"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[816],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var o=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),s=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=s(r),f=i,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||n;return r?o.createElement(y,a(a({ref:e},c),{},{components:r})):o.createElement(y,a({ref:e},c))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,a=new Array(n);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6950:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var o=r(7462),i=(r(7294),r(3905));const n={},a="Build Productivity Apps by using Microsoft Graph Toolkit",u={unversionedId:"Build productivity apps by using Microsoft Graph Toolkit/index",id:"Build productivity apps by using Microsoft Graph Toolkit/index",title:"Build Productivity Apps by using Microsoft Graph Toolkit",description:"Level: Beginner",source:"@site/docs/Build productivity apps by using Microsoft Graph Toolkit/index.md",sourceDirName:"Build productivity apps by using Microsoft Graph Toolkit",slug:"/Build productivity apps by using Microsoft Graph Toolkit/",permalink:"/MicrosoftCloud/tutorials/docs/Build productivity apps by using Microsoft Graph Toolkit/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. Create and Deploy the Function App to Azure",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Create and Deploy the Function App to Azure"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Technologies used in this tutorial include",id:"technologies-used-in-this-tutorial-include",level:3}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-productivity-apps-by-using-microsoft-graph-toolkit"},"Build Productivity Apps by using Microsoft Graph Toolkit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Level"),": Beginner"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The One Productivity Hub tutorial shows you how to build a tab for viewing your calendar events, to-do tasks and files by using Microsoft Graph Toolkit components and TeamsFx Provider."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"One Productivity Hub Tutorial",src:r(7416).Z,title:"One Productivity Hub Tutorial",width:"1600",height:"920"})),(0,i.kt)("h3",null,(0,i.kt)("a",{href:"https://learn.microsoft.com/en-us/graph/toolkit/get-started/building-one-productivity-hub",className:"external-link",target:"_blank"},"View the Tutorial")),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS"),", fully tested on NodeJS 14, 16"),(0,i.kt)("li",{parentName:"ul"},"A Microsoft 365 account. If you do not have Microsoft 365 account, apply one from ",(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/microsoft-365/dev-program"},"Microsoft 365 developer program")),(0,i.kt)("li",{parentName:"ul"},"Latest ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/teams-toolkit"},"Teams Toolkit Visual Studio Code Extension"))),(0,i.kt)("h3",{id:"technologies-used-in-this-tutorial-include"},"Technologies used in this tutorial include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Active Directory"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Graph Toolkit"),(0,i.kt)("li",{parentName:"ul"},"TeamsFx")))}p.isMDXComponent=!0},7416:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/oneproductivityhub-overview-7cca59cb7e40eb84d0a6ee66843700dc.gif"}}]);