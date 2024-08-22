import{A as G,S as q,N as P,K as k,i as ce,a as ie}from"./assets/vendor-CZdjGj8m.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function le(e,t){e.forEach(s=>{if(s.isIntersecting){const o=s.target;o.dataset.src&&(o.src=o.dataset.src),o.classList.remove("lazy-bg"),t.unobserve(o)}})}const ae=document.querySelectorAll(".lazy-bg"),ue=new IntersectionObserver(le);ae.forEach(e=>ue.observe(e));const h=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const o=window.scrollY,r=s.getBoundingClientRect().top+o,n=performance.now(),i=l=>{const f=l-n,y=Math.min(f/t,1);window.scrollTo(0,o+(r-o)*_(y)),f<t&&requestAnimationFrame(i)},_=l=>l<.5?2*l*l:-1+(4-2*l)*l;requestAnimationFrame(i)},I=document.querySelector(".js-header-menu-btn"),p=document.querySelector(".js-header-menu"),R=document.querySelector(".js-header-order-link"),C=document.querySelector(".header-fixed");I&&p&&(I.addEventListener("click",()=>{p.classList.toggle("isopen")}),p.addEventListener("click",J));R&&R.addEventListener("click",J);function J(e){e.preventDefault();const t=e.target.closest("a");if(!t)return;const s=t.getAttribute("href").substring(1);h(s),p&&p.classList.contains("isopen")&&p.classList.remove("isopen")}window.addEventListener("scroll",()=>{window.scrollY>50?C.classList.add("onscroll"):C.classList.remove("onscroll")});const A=document.querySelector(".js-header-mobile-menu-btn"),Q=document.querySelector(".js-mobile-menu"),T=document.querySelector(".js-mobile-menu-close-btn"),D=document.querySelector(".js-mobile-menu-nav"),$=document.querySelector(".js-mobile-menu-order");A&&A.addEventListener("click",de);T&&T.addEventListener("click",X);D&&D.addEventListener("click",ee);$&&$.addEventListener("click",ee);function de(){Q.classList.add("is-open")}function X(){Q.classList.remove("is-open")}function ee(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s),X()}new G(".accordion-container",{duration:500,openOnInit:[0]});const u=new q(".about-skills-container",{modules:[P,k],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},speed:700,effect:"slide",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",te);u.on("slideChange",te);function te(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new G(".faq-acc-container");const V=document.querySelector(".js-project-order");V&&V.addEventListener("click",pe);function pe(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s)}function fe(e=[]){return e.reduce((t,{url1x:s,url2x:o})=>t+`
       <li class="projects-item swiper-slide">
        <div class="project-info-container">
          <ul class="project-lang-list">
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#react</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across Borders: Ideas, Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
          <picture>
            <source
              srcset="
                ${s} 1x,
                ${o} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img lazy"
              src="${s}"
              alt="Project 01 main page"
              loading="lazy"
            />
          </picture>
        </div>
      </li>
      `,"")}const me=async(e,t)=>{const s=fe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ve="/portfolio/assets/project13@1x-D5Ae1P1v.webp",be="/portfolio/assets/project13@2x-D8klBtoi.webp",ge="/portfolio/assets/project11@1x-ticSGbVE.webp",we="/portfolio/assets/project11@2x-BNlS8ZLJ.webp",xe="/portfolio/assets/project12@1x-DX7EZF19.webp",je="/portfolio/assets/project12@2x-D5j4c6uV.webp",he="/portfolio/assets/project01@1x-Ye2u9QvY.webp",Le="/portfolio/assets/project01@2x-CGnU-NZM.webp",ye="/portfolio/assets/project02@1x-dj219-w_.webp",Se="/portfolio/assets/project02@2x-R_GplPUq.webp",Ee="/portfolio/assets/project03@1x-CuhbSDYE.webp",qe="/portfolio/assets/project03@2x-DFdgcKJ5.webp",Pe="/portfolio/assets/project04@1x-Doff4Zlc.webp",ke="/portfolio/assets/project04@2x-D8suiMQa.webp",Me="/portfolio/assets/project05@1x-NId4RxqZ.webp",Be="/portfolio/assets/project05@2x-wvuiV8Po.webp",_e="/portfolio/assets/project06@1x-C_lFZmue.webp",Ie="/portfolio/assets/project06@2x-DCqSTG3_.webp",Re="/portfolio/assets/project07@1x-B3QnrJNm.webp",Ce="/portfolio/assets/project07@2x-C0-TBLLl.webp",Ae="/portfolio/assets/project08@1x-4Vi569Pq.webp",Te="/portfolio/assets/project08@2x-DDEYTNWW.webp",De="/portfolio/assets/project09@1x-BaB1ldRA.webp",$e="/portfolio/assets/project09@2x-uHr6DaSI.webp",Ve="/portfolio/assets/project10@1x-D4mJW1Ez.webp",Ne="/portfolio/assets/project10@2x-D6jge__s.webp",se=[{url1x:ve,url2x:be},{url1x:ge,url2x:we},{url1x:xe,url2x:je},{url1x:he,url2x:Le},{url1x:ye,url2x:Se},{url1x:Ee,url2x:qe},{url1x:Pe,url2x:ke},{url1x:Me,url2x:Be},{url1x:_e,url2x:Ie},{url1x:Re,url2x:Ce},{url1x:Ae,url2x:Te},{url1x:De,url2x:$e},{url1x:Ve,url2x:Ne}];let w;const re=document.querySelector(".projects-list");re&&Oe();async function Oe(){try{await me(se,re),w=new q(".projects-swiper-container",{modules:[P,k],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},speed:1e3,effect:"slide",on:{init:N,slideChange:N},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function N(){if(!w)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function ze(e=[]){const t=(i=0)=>[...e.slice(i),...e.slice(0,i)].reduce((l,{url1x:f,url2x:y})=>l+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${f} 1x,
                ${y} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${f}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),o=t(2),r=t(4),n=t(6);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${o}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${n}</ul>
    </div>
  `}const He=async(e,t)=>{const s=ze(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Fe=document.querySelector(".covers-marquee");He(se,Fe);const Ue=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-covers"):t.target.classList.remove("animate-covers")})},{threshold:.5}),O=document.querySelector(".covers-section");O&&Ue.observe(O);function Ze(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:o="Anonymous",avatar_url:r="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${r}"
          alt="${o} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${z(o)}</h3>
          <p class="reviews-list-text">
            ${z(n)}
          </p>
        </div>
      </li>
      `,"")}function z(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const We=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Ze(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Ye="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e";function S(e){ce.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ye}`,iconColor:"#fafafb"})}const oe=ie.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ke=document.querySelector(".reviews-list");let H=[];async function Ge(){var e;try{const t=await oe.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?H=t.data:S("Reviews not found"):S("Invalid response")}catch{S("Fetch Error!")}finally{We(H,Ke)}}let x;Ge().then(()=>{Qe&&(x=new q(".reviews-swiper-container",{modules:[P,k],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"slide",on:{init:F,slideChange:F},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function F(){if(!x)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");x.isBeginning?e.disabled=!0:e.disabled=!1,x.isEnd?t.disabled=!0:t.disabled=!1}function Je(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Qe(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),o=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!o||!r?(Je(),!1):!0}let U=50;const L="data-original";function Xe(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",tt),t.addEventListener("focus",st),t.addEventListener("blur",rt)})}function Z(e){let t="";return e&&(e.hasAttribute(L)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function W(e){e&&e.hasAttribute(L)&&(e.dataset.original="")}function et(e,t){return e.length>t?e.slice(0,t)+"...":e}function tt(e){const t=e.target,s=t.value.trim();t.hasAttribute(L)&&(t.dataset.original=s)}function st(e){const t=e.target;t.hasAttribute(L)&&(t.value=t.dataset.original)}function rt(e){const t=e.target,s=t.value;s.length>U&&(t.value=et(s,U))}const ot="/portfolio/assets/symbols-BFynSz_H.svg";function nt({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${ot}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const ct=async(e,t)=>{const s=nt(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},it=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),lt="Escape",at=e=>{e.innerHTML=""};let m=document.querySelector(".modal-backdrop");m&&m.addEventListener("click",dt);let E;function ut(){m.classList.add("is-open"),window.addEventListener("keydown",ne),E=document.querySelector(".modal-close-btn"),E&&E.addEventListener("click",M)}function ne(e){e.code===lt&&M()}function dt(e){e.currentTarget===e.target&&M()}function M(e){window.removeEventListener("keydown",ne),m.classList.remove("is-open"),at(m)}document.addEventListener("DOMContentLoaded",Xe);const v=document.querySelector(".footer-form"),c=v.querySelector(".footer-email"),a=v.querySelector(".footer-comment"),pt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),b=document.querySelector(".footer-comment-error"),Y=document.querySelector(".js-footer-scroll-up");Y&&Y.addEventListener("click",()=>{h("id-hero",3e3)});const j=document.querySelector(".footer-email-success");v&&v.addEventListener("submit",mt);const ft=[c,a];ft.forEach(e=>{e&&(e.addEventListener("input",vt),e.addEventListener("input",B),e.addEventListener("keydown",K),e.addEventListener("focus",K))});async function mt(e){e.preventDefault();const t=Z(c);if(!t){g(d,c);return}const s=Z(a);if(!s){g(b,a);return}if(!it(t)){g(d,c);return}const o={email:t,comment:s};try{const r=await oe.post("requests",o);r&&r.status>=200&&r.status<300&&(await ct(r.data,document.querySelector(".modal-backdrop")),ut(),W(c),W(a),j&&j.classList.add("visible"),c&&c.classList.add("success"),v.reset())}catch{g(d,c)}finally{B()}}function B(){pt.disabled=!c.value.trim()||!a.value.trim()}function vt(){d&&d.classList.remove("visible"),b&&b.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error")}function K(){d&&d.classList.remove("visible"),b&&b.classList.remove("visible"),j&&j.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error"),c&&c.classList.remove("success")}function g(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error")}B();
//# sourceMappingURL=commonHelpers.js.map
