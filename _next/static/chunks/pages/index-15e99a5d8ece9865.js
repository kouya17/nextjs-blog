(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9638)}])},1770:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(5893),r=a(8420),s=a(5313);function i(e){var t=e.dateString,a=(0,r.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,s.Z)(a,"LLLL d, yyyy")})}},9067:function(e,t,a){"use strict";a.d(t,{Z:function(){return c},y:function(){return l}});var n=a(5893),r=a(9008),s=a(1664),i=(a(7294),function(e){var t=e.title;e.menu;return(0,n.jsx)("nav",{className:"sticky top-0 py-5 bg-gray-700 text-white opacity-80 z-50",children:(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)("a",{href:"#",className:"px-5 absolute left-0",children:(0,n.jsx)("div",{className:"self-center text-lg font-semibold whitespace-nowrap",children:t})})})})}),l="Blog";function c(e){var t=e.children,a=e.home;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,n.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(l),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,n.jsx)("meta",{name:"og:title",content:l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,n.jsx)(i,{title:l,menu:[{name:"aaa",path:"/"},{name:"bbb",path:"/"}]}),(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)("main",{children:t}),!a&&(0,n.jsx)("div",{children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:"\u2190 Back to home"})})})]})]})}},9638:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return j},default:function(){return b}});var n=a(5893),r=a(9008),s=a(9067),i=a(7294),l=a(7166),c=a.n(l),o=function(e){var t=e.tag,a=e.onClick,r=(e.size,(0,i.useState)(!1)),s=r[0],l=r[1],o=c().bind({unPushedButttonClass:"bg-gray-50 hover:bg-gray-100 text-black",pushedButtonClass:"bg-blue-500 hover:bg-blue-600 text-white"});return(0,n.jsx)("button",{className:o("py-1 px-3 border rounded-full",{unPushedButttonClass:!s,pushedButtonClass:s}),onClick:function(){var e=!s;l(e),a&&a(t,e)},children:t})},u=function(e){var t=e.tags,a=e.onClick,r=void 0===a?function(){}:a;return(0,n.jsx)("div",{children:t.map((function(e){return(0,n.jsx)("span",{className:"m-2",children:(0,n.jsx)(o,{tag:e,onClick:r})},e)}))})},d=a(1664),f=a(1770),m=function(e){var t=e.postData,a=e.url;return(0,n.jsx)(d.default,{href:a,children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:"flex p-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 break-all h-full relative",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h2",{className:"font-bold text-lg m-1 line-clamp-2",children:t.fileData.matter.title}),(0,n.jsx)("div",{className:"m-1",children:(0,n.jsx)(u,{tags:t.fileData.matter.tags})}),(0,n.jsx)("p",{className:"m-1 line-clamp-3",children:t.fileData.matter.abstract}),(0,n.jsx)("small",{className:"m-1 invisible",children:(0,n.jsx)(f.Z,{dateString:t.fileData.matter.date})}),(0,n.jsx)("small",{className:"m-1 absolute bottom-3",children:(0,n.jsx)(f.Z,{dateString:t.fileData.matter.date})})]})})})})},h=a(2660),x=function(e){var t=e.postsData,a=e.path;return(0,n.jsx)("div",{className:"grid m-3 md:grid-cols-1 lg:grid-cols-3",children:t.map((function(e){return(0,n.jsx)(h.E.li,{animate:{opacity:1,y:0},initial:{opacity:0,y:10},transition:{duration:.3},className:"m-4",children:(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(m,{postData:e,url:"".concat(a,"/").concat(e.fileData.id)})})},e.fileData.id)}))})},g=function(e){var t=e.onChange,a=(0,i.useState)(""),r=a[0],s=a[1];return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,n.jsx)("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),(0,n.jsx)("input",{type:"text",id:"email-adress-icon",className:"block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",value:r,onChange:function(e){s(e.target.value),t&&t(e.target.value)}})]})};function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j=!0;function b(e){var t=e.allPostsData,a=e.tags,l=e.tagToPostIds,c=e.idToPost,o=e.allPostIds,d=(0,i.useState)([]),f=d[0],m=d[1],h=(0,i.useState)(""),j=h[0],b=h[1],v=(0,i.useState)(t),y=v[0],w=v[1],N=function(e,t){e.includes(t)&&(t=""),w(function(e,t,a,n,r){return function(e,t,a,n,r){var s=e.reduce((function(e,t){return a[t]?e.filter((function(e){return a[t].includes(e)})):e}),n);return""===t?s:function(e,t){return t.reduce((function(t,a){return(a.fileData.matter.title.toLowerCase().includes(e.toLowerCase())||a.fileData.matter.abstract.toLowerCase().includes(e.toLowerCase())||a.fileData.matter.tags.includes(e))&&t.push(a.fileData.id),t}),[])}(t,s.map((function(e){return r[e]})))}(e,t,a,r,n).reduce((function(e,t){return n[t]&&e.push(n[t]),e}),[])}(e,t,l,c,o))};return(0,n.jsxs)(s.Z,{home:!0,children:[(0,n.jsx)(r.default,{children:(0,n.jsx)("title",{children:s.y})}),(0,n.jsx)("h1",{className:"my-4 font-bold text-2xl",children:"\u8a18\u4e8b\u4e00\u89a7"}),(0,n.jsx)("h2",{className:"mt-4 mb-2 text-lg",children:"\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u7d5e\u308a\u8fbc\u3080"}),(0,n.jsx)(u,{tags:a,onClick:function(e,t){var a=[];a=t?Array.from(new Set(p(f).concat([e]))):f.filter((function(t){return t!==e})),m(a),console.log("selectedTags: ".concat(a)),N(a,j)}}),(0,n.jsx)("h2",{className:"mt-4 mb-2 text-lg",children:"\u4efb\u610f\u306e\u5358\u8a9e\u3067\u7d5e\u308a\u8fbc\u3080"}),(0,n.jsx)(g,{onChange:function(e){console.log("seatchText: ".concat(e)),b(e),N(f,e)}}),(0,n.jsx)("section",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(x,{postsData:y,path:"/posts"})})})]})}}},function(e){e.O(0,[395,840,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);