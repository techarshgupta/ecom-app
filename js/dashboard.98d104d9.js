(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{7204:function(e,t,c){"use strict";c.r(t);var a=c("7a23");function n(e,t,c,n,i,o){var r=Object(a["E"])("navbar"),s=Object(a["E"])("dashboard");return Object(a["w"])(),Object(a["g"])("main",{class:Object(a["p"])(e.classObj)},["mobile"===e.device&&e.sidebar.opened?(Object(a["w"])(),Object(a["g"])("div",{key:0,class:"fixed inset-0 bg-black opacity-25 h-full w-full z-50",onClick:t[0]||(t[0]=function(){return e.handleClickOutside&&e.handleClickOutside.apply(e,arguments)})})):Object(a["f"])("",!0),Object(a["h"])("div",{class:Object(a["p"])(["wrapper",e.navExpand?"click-collapse":"hover-collapse"])},[Object(a["h"])("div",{class:Object(a["p"])(["header fixed z-40 w-full",e.navExpand?"click-collapse":"hover-collapse"])},[Object(a["j"])(r)],2),Object(a["h"])("div",{class:Object(a["p"])(["body pt-16 px-4","mobile"===e.device&&e.sidebar.opened?"fixed overflow-hidden":""])},[Object(a["j"])(s)],2)],2)],2)}function i(e,t,c,n,i,o){var r=Object(a["E"])("router-view");return Object(a["w"])(),Object(a["e"])(r,null,{default:Object(a["L"])((function(e){var t=e.Component;return[Object(a["j"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["L"])((function(){return[(Object(a["w"])(),Object(a["e"])(Object(a["F"])(t)))]})),_:2},1024)]})),_:1})}var o=Object(a["k"])({name:"Dashboard"}),r=c("d959"),s=c.n(r);const l=s()(o,[["render",i]]);var u=l,d=c("cf81"),b=c.n(d),p=c("f072"),h=c.n(p),O={class:"flex justify-between select-none bg-white shadow-md h-16"},j=Object(a["h"])("div",{class:"overflow-hidden p-2 w-16"},[Object(a["h"])("img",{class:"w-full h-full",src:b.a})],-1),f=Object(a["h"])("div",{class:"text-2xl font-bold"},"My App",-1),v=[j,f],g={class:"flex justify-around items-center mx-4"},m=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"22",height:"22",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16"},[Object(a["h"])("g",{fill:"#222"},[Object(a["h"])("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}),Object(a["h"])("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"})])],-1),w={class:"absolute -top-3 -right-3 rounded-full bg-indigo-700 text-white h-6 w-6"},k=Object(a["h"])("img",{class:"ml-8 h-8 cursor-pointer",src:h.a},null,-1),x={class:"flex cursor-pointer items-center relative"},y={key:3,class:"absolute mt-10 w-32 text-gray-700 flex items-center text-sm px-3 ring-1 ring-black ring-opacity-5 right-0 top-0 py-2 rounded-md shadow-lg bg-white hover:bg-gray-100"};function L(e,t,c,n,i,o){return Object(a["w"])(),Object(a["g"])("div",O,[Object(a["h"])("div",{class:"flex items-center cursor-pointer",onClick:t[0]||(t[0]=function(t){return e.$router.push({name:"Home"})})},v),Object(a["h"])("div",g,[Object(a["h"])("div",{class:"cursor-pointer relative",onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"Cart"})})},[m,Object(a["h"])("div",w,Object(a["H"])(e.cartItems),1)]),k,Object(a["h"])("div",x,[e.showLogOut?(Object(a["w"])(),Object(a["g"])("div",{key:0,onClick:t[2]||(t[2]=function(t){return e.showLogOut=!1}),class:"fixed inset-0 bg-black opacity-25 h-full w-full cursor-default"})):Object(a["f"])("",!0),e.user?(Object(a["w"])(),Object(a["g"])("span",{key:1,class:"relative z-10 flex justify-center font-semibold items-center bg-black text-white w-9 h-9 ml-8 rounded-full",onClick:t[3]||(t[3]=function(t){return e.showLogOut=!e.showLogOut})},Object(a["H"])(e.user.firstName.charAt(0))+Object(a["H"])(e.user.lastName.charAt(0)),1)):(Object(a["w"])(),Object(a["g"])("span",{key:2,class:"ml-2 text-gray-dark",onClick:t[4]||(t[4]=function(){return e.logout&&e.logout.apply(e,arguments)})},"Logout")),e.showLogOut?(Object(a["w"])(),Object(a["g"])("button",y," Logout ")):Object(a["f"])("",!0)])])])}var A=c("0613"),B=Object(a["k"])({name:"TheNavbar",setup:function(){var e=Object(a["B"])(!1),t=Object(A["b"])(),c=Object(a["c"])((function(){return t.state.app.sidebar})),n=Object(a["c"])((function(){var e;return null===(e=t.state.app.cart)||void 0===e?void 0:e.length})),i=Object(a["c"])((function(){return"mobile"===t.state.app.device})),o=Object(a["B"])({firstName:"Harsh",lastName:"Gupta"}),r=function(t){"Esc"!==t.key&&"Escape"!==t.key||(e.value=!1)};document.addEventListener("keydown",r),Object(a["v"])((function(){document.removeEventListener("keydown",r)}));var s=function(){t.dispatch("app/toggleSideBar")};return{showLogOut:e,sidebar:c,isMobile:i,user:o,toggleSideBar:s,cartItems:n}}});const C=s()(B,[["render",L]]);var E=C,z=Object(a["k"])({name:"TheLayout",components:{Dashboard:u,Navbar:E},setup:function(){var e=Object(A["b"])(),t=document,c=t.body,n=992,i=Object(a["B"])(!1),o=function(){var e=c.getBoundingClientRect();return e.width-1<n},r=function(){if(!document.hidden){var t=o();e.dispatch("app/toggleDevice",t?"mobile":"desktop"),t&&e.dispatch("app/closeSideBar",{withoutAnimation:!0})}};Object(a["r"])((function(){window.addEventListener("resize",r)})),Object(a["u"])((function(){var t=o();t&&(e.dispatch("app/toggleDevice","mobile"),e.dispatch("app/closeSideBar",{withoutAnimation:!0}))})),Object(a["s"])((function(){window.removeEventListener("resize",r)}));var s=Object(a["c"])((function(){return e.state.app.sidebar})),l=Object(a["c"])((function(){return e.state.app.device})),u=Object(a["c"])((function(){return{"hide-sidebar":!s.value.opened,openSidebar:s.value.opened,withoutAnimation:s.value.withoutAnimation,mobile:"mobile"===l.value}}));"mobile"===l.value&&s.value.opened&&e.dispatch("app/closeSideBar",{withoutAnimation:!1});var d=function(){e.dispatch("app/toggleSideBar")},b=function(){e.dispatch("app/closeSideBar",{withoutAnimation:!1})};return{classObj:u,navExpand:i,toggleSidebar:d,sidebar:s,device:l,handleClickOutside:b}}});const H=s()(z,[["render",n]]);t["default"]=H},cf81:function(e,t,c){e.exports=c.p+"img/hg.c208c46a.png"},f072:function(e,t,c){e.exports=c.p+"img/notification.2a8c2af5.svg"}}]);
//# sourceMappingURL=dashboard.98d104d9.js.map