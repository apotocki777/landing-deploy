(()=>{var e={172:()=>{const e=document.querySelector(".cookie-banner");document.querySelector(".close-cookie").addEventListener("click",(()=>{setTimeout((()=>{e.classList.toggle("hidden")}),500),e.style.opacity="0"}))},292:()=>{const e=document.querySelector(".select_list"),t=document.querySelector(".select_placeholder"),r=document.querySelector(".select_placeholder--text"),c=document.querySelectorAll(".select-value"),o=document.querySelector("#message"),l=document.querySelector(".text-counter"),n=()=>{e.classList.toggle("hidden"),t.classList.toggle("select-hidden")};c.forEach((e=>{e.addEventListener("click",(e=>{(e=>{selectedText=e.currentTarget.textContent,r.textContent=selectedText,r.style.color="var(--clr-black)",n()})(e),n()}))})),t.addEventListener("click",n),o.addEventListener("keyup",(()=>{let e=o.value.length;l.textContent=`${e}/500`}))},892:()=>{const e=document.querySelector(".loader");window.addEventListener("load",(()=>{e.classList.add("loader--hidden")})),e.addEventListener("transitionend",(()=>{document.body.removeChild(document.body.firstChild)}))},80:()=>{const e=document.querySelector(".mobile-nav"),t=document.querySelector("body"),r=document.querySelector(".close-mobile"),c=document.querySelector(".header__navigation--burger-icon"),o=document.querySelectorAll(".mobile-nav_menu--button"),l=()=>{e.classList.toggle("hidden"),console.log(e.classList);const r=Array.from(e.classList);console.log(r),r.includes("hidden")?t.style.overflow="visible":t.style.overflow="hidden"};r.addEventListener("click",l),c.addEventListener("click",l),o.forEach((e=>{e.addEventListener("click",l)}))}},t={};function r(c){var o=t[c];if(void 0!==o)return o.exports;var l=t[c]={exports:{}};return e[c](l,l.exports,r),l.exports}(()=>{"use strict";const e=document.querySelector(".featured-house_cards--window");window.innerWidth;let t=0,c=0;const o=document.querySelector(".dropdown-menu");let l=!1;const n=document.querySelector(".tour_img--container"),d=document.querySelector(".video"),i=document.querySelector("iframe");let s=i.getAttribute("src");const a=document.querySelectorAll(".testimonials_card"),u=Array.from(a),y=document.querySelector(".testimonials_window");let m=0,q=a[0];function S(e){let t=u.indexOf(e)-u.indexOf(q);m+=100*t,q=e,a.forEach((e=>{e.style.transform=`translateX(-${m}%)`}))}function h(e){document.querySelectorAll(".testimonials-scroll-button").forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}document.querySelector(".show-more");const f=document.querySelectorAll(".article.hidden"),v=(document.querySelectorAll(".article"),document.querySelector(".article_large")),g=e=>{const t=e.currentTarget.querySelector(".article--img").querySelector("img").src,r=e.currentTarget.querySelector(".article--content").querySelector(".customer-avatar"),c=r.querySelector("img").src,o=r.querySelector("p").textContent,l=e.currentTarget.querySelector(".article--content").querySelector(".subtitle").textContent,n=e.currentTarget.querySelector(".article--content").querySelector(".article--date-container").querySelector("p").textContent,d=v.querySelector(".article--img").querySelector("img"),i=v.querySelector(".article--content").querySelector(".customer-avatar"),s=i.querySelector("img"),a=i.querySelector("p"),u=v.querySelector(".article--content").querySelector("h3"),y=v.querySelector(".article--content").querySelector(".article--date-container").querySelector("p");d.src=t,s.src=c,a.textContent=o,u.textContent=l,y.textContent=n};r(292),r(172),r(80),r(892);const E=document.querySelectorAll(".categories"),L=document.querySelector(".featured-house_cards--wrapper"),p=document.querySelectorAll(".featured-house_cards--container");E.forEach((e=>{e.clicked=!1}));const k={clicked:!1,value:""},C=e=>{e.currentTarget.clicked?(e.currentTarget.clicked=!1,k.clicked=!1):(k.clicked=!0,E.forEach((e=>{e.clicked=!1})),e.currentTarget.clicked=!0,k.value=e.currentTarget.textContent.trim().toLowerCase()),function(){const e=document.querySelectorAll(".featured-house_cards--container");t=0,c=0,e.forEach((e=>{e.style.transform="translateX(0%)"}))}(),(()=>{const e=document.querySelectorAll(".featured-house_cards--container");if(k.clicked)e.forEach((e=>{e.dataset.type!==k.value&&L.removeChild(e)})),p.forEach((e=>{e.dataset.type===k.value&&L.appendChild(e)}));else{for(;L.firstChild;)L.removeChild(L.firstChild);p.forEach((e=>{L.appendChild(e)}))}})(),E.forEach((e=>{e.clicked?e.classList.add("clicked"):e.classList.remove("clicked")}))};E.forEach((e=>{e.addEventListener("click",C)}));const x=document.querySelector(".show-more"),w=document.querySelectorAll(".article"),A=document.querySelector(".arrow-left"),b=document.querySelector(".arrow-right"),_=document.querySelector(".dropdown"),T=document.querySelector(".tour_img--container"),W=document.querySelector(".close");(()=>{const e=document.querySelector(".scroll-buttons_container");a.forEach((t=>{const r=document.createElement("button");r.relatedCard=t,r.classList.add("testimonials-scroll-button"),e.appendChild(r),r.addEventListener("click",(e=>{S(e.target.relatedCard),h(e.target)}))})),e.children[0].classList.add("active")})(),window.addEventListener("resize",(()=>{y.scroll(0,0),S(a[0]),h(document.querySelector(".testimonials-scroll-button"))})),x.addEventListener("click",(e=>{"More Articles"===e.target.firstChild.textContent?(e=>{f.forEach((e=>{e.classList.remove("hidden")})),v.style.position="sticky",e.target.firstChild.textContent="Hide Articles"})(e):(e=>{f.forEach((e=>{e.classList.add("hidden")})),v.style.position="relative",e.target.firstChild.textContent="More Articles"})(e)})),w.forEach((e=>{e.addEventListener("click",g)})),b.addEventListener("click",(function(){const r=document.querySelectorAll(".featured-house_cards--container"),o=e.offsetWidth,l=r[0].offsetWidth;t!==r.length-Math.round(o/l)&&(c+=100,t+=1,r.forEach((e=>{e.style.transform=`translateX(-${c+14}%)`})))})),A.addEventListener("click",(function(){const e=document.querySelectorAll(".featured-house_cards--container");0!==t&&(c-=100,t-=1,e.forEach((e=>{e.style.transform=`translateX(-${c}%)`})))})),window.addEventListener("resize",(function(){window.innerWidth>=810&&e.scroll(0,0)})),_.addEventListener("click",(()=>{l?(l=!1,o.style.display="none"):(l=!0,o.style.display="flex")})),T.addEventListener("click",(()=>{n.style.opacity="0",setTimeout((()=>{i.setAttribute("src",s+="?autoplay=1"),n.style.display="none",d.style.display="flex",i.click()}),400)})),W.addEventListener("click",(()=>{n.style.display="grid",n.style.opacity="1",d.style.display="none"}))})()})();
//# sourceMappingURL=main.js.map