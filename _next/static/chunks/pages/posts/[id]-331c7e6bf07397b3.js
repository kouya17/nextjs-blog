(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{5733:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(8420),r=n(5313),s=n(5893);function a(e){var t=e.dateString,n=(0,i.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"LLLL d, yyyy")})}},4055:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},y:function(){return c}});var i=n(9008),r=n(1664),s=(n(7294),n(5893)),a=function(e){var t=e.title;e.menu;return(0,s.jsx)("nav",{className:"sticky top-0 py-5 bg-gray-700 text-white opacity-80 z-50",children:(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)("a",{href:"/",className:"px-5 absolute left-0",children:(0,s.jsx)("div",{className:"self-center text-lg font-semibold whitespace-nowrap",children:t})})})})},c="Cooking Timelaps Vlog";function l(e){var t=e.children,n=e.home;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"\u4e3b\u306b\u6599\u7406\u306e\u30bf\u30a4\u30e0\u30e9\u30d7\u30b9\u52d5\u753b\u3092\u8f09\u305b\u3066\u3044\u308b\u30d6\u30ed\u30b0\u3067\u3059\u3002"}),(0,s.jsx)("meta",{name:"og:title",content:c}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"})]}),(0,s.jsx)(a,{title:c,menu:[{name:"aaa",path:"/"},{name:"bbb",path:"/"}]}),(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsx)("main",{children:t}),!n&&(0,s.jsx)("div",{className:"py-3",children:(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{children:"\u2190 Back to home"})})})]})]})}},165:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5988),r=n.n(i),s=n(7294),a=n(7631),c=n.n(a),l=n(5893);function o(e){var t=e.src,n=e.isHoverPlay,i=void 0!==n&&n,a=(0,s.useRef)(null);(0,s.useEffect)((function(){var e=a.current;if(e)if(e.controls=!0,e.canPlayType("application/vnd.apple.mpegurl"))e.src=t;else if(c().isSupported()){var n=new(c());n.loadSource(t),n.attachMedia(e)}else console.error("This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API")}),[t,a]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("video",{ref:a,onMouseOver:i?function(){a.current.play()}:function(){},onMouseOut:i?function(){a.current.pause()}:function(){},className:"jsx-879486383"}),(0,l.jsx)(r(),{id:"879486383",children:["video.jsx-879486383{max-width:100%;}"]})]})}},3752:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return m}});var i=n(4055),r=n(9008),s=n(7294),a=n(5733),c=n(8325),l=n.n(c),o=(n(5433),n(9980),n(5663),n(8759),n(6764),n(165)),u=n(5893),d=function(e){var t=e.postData;return(0,s.useEffect)((function(){l().highlightAll()})),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{className:"text-3xl font-bold mt-5 mb-3",children:t.fileData.matter.title}),(0,u.jsx)("div",{className:"my-2",children:(0,u.jsx)(a.Z,{dateString:t.fileData.matter.date})}),(0,u.jsx)("div",{className:"m-1",children:(0,u.jsx)(o.Z,{src:t.fileData.matter.m3u8})}),(0,u.jsx)("div",{className:"prose line-numbers",children:(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:t.fileData.contentHtml}})})]})},f=!0;function m(e){var t=e.postData;return(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.default,{children:(0,u.jsx)("title",{children:t.fileData.matter.title})}),(0,u.jsx)("article",{children:(0,u.jsx)(d,{postData:t})})]})}},4550:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(3752)}])}},function(e){e.O(0,[27,293,903,774,888,179],(function(){return t=4550,e(e.s=t);var t}));var t=e.O();_N_E=t}]);