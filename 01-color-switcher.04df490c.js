//! REFERENSES
const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body"),colorChangeId:null};function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.addEventListener("click",(
//! FUNCTIONS
function(n){n.preventDefault(),t.colorChangeId=setInterval(e,1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(e){e.preventDefault(),clearInterval(t.colorChangeId),t.btnStop.disabled=!0,t.btnStart.disabled=!1})),t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.04df490c.js.map
