(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{40536:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,67180)),Promise.resolve().then(n.bind(n,84923))},67180:function(e,t,n){"use strict";n.d(t,{ThemeToggle:function(){return u}});var r=n(57437),i=n(79512),o=n(2265),s=n(58387);function u(){let[e,t]=(0,o.useState)(!1),{theme:n,setTheme:u}=(0,i.F)();return((0,o.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsx)(s.p,{checked:"dark"==n,style:{margin:"0px",position:"absolute",right:"50px",top:"50px"},onChange:e=>{u(e?"dark":"light")},size:40,id:"theme-toggle"}):null}},84923:function(e,t,n){"use strict";n.d(t,{Time:function(){return o}});var r=n(57437),i=n(2265);function o(e){var[t,n]=(0,i.useState)(new Date);return(0,i.useEffect)(()=>{var e=setInterval(()=>n(new Date),1e3);return function(){clearInterval(e)}}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{className:"text-md font-medium text-light-sub-text-color dark:text-dark-sub-text-color",children:t.toLocaleTimeString("en-US",{timeZone:e.timeZone?e.timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone})})})}}},function(e){e.O(0,[717,971,23,744],function(){return e(e.s=40536)}),_N_E=e.O()}]);