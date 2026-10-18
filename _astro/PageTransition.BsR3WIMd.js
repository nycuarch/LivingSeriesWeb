import{r as e,t}from"./react.OrosJ8bI.js";import{Q as n,R as r,Y as i,ct as a,lt as o,n as s,u as c,vt as l}from"./three.module.Cq3ouKbt.js";import{r as u,t as d}from"./transition.B0KVN_bs.js";import{t as f}from"./jsx-runtime.D7zcSYNz.js";import{t as p}from"./animate.DuL69Ej9.js";var m=e(t(),1),h=f(),g=520,_=640,v=.55,y=150,b=360,x=10,S=()=>document.querySelector(`.site-main`),C=()=>!!document.querySelector(`.site-main--home`),w=()=>C(),T=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,E=`
  uniform vec2 uResolution;
  uniform float uFeather;
  uniform float uProgress;   // 0 → 1
  uniform float uReveal;     // 0 = 蓋上，1 = 揭開
  uniform vec3 uInk;
  uniform vec3 uAccent;

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;

    /*
      身影不是一條直線：肩膀的位置比腳快一點，
      所以邊緣隨高度前後錯開，看起來才像人而不是一塊板子。
    */
    float lean =
      0.07 * sin(uv.y * 3.3 + 0.6) +
      0.03 * sin(uv.y * 9.0 + 2.0);

    /* 邊緣目前走到哪裡（從畫面左邊外面走到右邊外面） */
    float span = 1.0 + uFeather + 0.2;

    float edge = -0.1 + uProgress * span;

    float position = uv.x + lean;

    /* 蓋上：邊緣左邊是實心。揭開：邊緣右邊是實心。 */
    float cover = 1.0 - smoothstep(edge - uFeather, edge, position);

    float reveal = smoothstep(edge - uFeather, edge, position);

    float alpha = mix(cover, reveal, uReveal);

    /* 還很淡的地方偏橘，夠濃之後才是墨色 */
    vec3 color = mix(uAccent, uInk, smoothstep(0.0, 0.42, alpha));

    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function D(e,t){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()||t}function O(e,t){return new c(D(e,t)).convertLinearToSRGB()}function k(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return null;let t=e.target.closest?.(`a[href]`);if(!t||t.target===`_blank`||t.hasAttribute(`download`)||t.hasAttribute(`data-no-transition`))return null;let n=new URL(t.href,window.location.href);return n.origin!==window.location.origin||n.pathname===window.location.pathname&&n.search===window.location.search?null:n.href}function A(){let e=(0,m.useRef)(null);return(0,m.useEffect)(()=>{let t=e.current,c=document.documentElement,f=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,m=null;try{m=window.sessionStorage.getItem(d),window.sessionStorage.removeItem(d)}catch{m=null}let h=()=>c.classList.remove(`is-arriving`,`is-arriving-soft`),D=null,A=()=>{D?.stop(),D=null;let e=S();e?.style.removeProperty(`opacity`),e?.style.removeProperty(`transform`)},j=null,M=null,N=null,P=null,F=null;if(!f)try{j=new s({canvas:t,alpha:!0,antialias:!1,premultipliedAlpha:!0}),j.setClearColor(0,0),M=new o({vertexShader:T,fragmentShader:E,transparent:!0,blending:0,depthTest:!1,depthWrite:!1,uniforms:{uResolution:{value:new l(1,1)},uFeather:{value:v},uProgress:{value:0},uReveal:{value:0},uInk:{value:O(`--transition-ink`,`#0c0103`)},uAccent:{value:O(`--transition-accent`,`#e84a1a`)}}}),F=new n(2,2),N=new a,N.add(new r(F,M)),P=new i(-1,1,1,-1,0,1)}catch{j=null}let I=()=>{if(!j)return;let e=Math.min(window.devicePixelRatio||1,2);j.setPixelRatio(e),j.setSize(window.innerWidth,window.innerHeight,!1),M.uniforms.uResolution.value.set(window.innerWidth*e,window.innerHeight*e)},L=(e,t)=>{M.uniforms.uProgress.value=e,M.uniforms.uReveal.value=+!!t,j.render(N,P)},R=null,z=(e,t)=>new Promise(n=>{let r=!1,i=()=>{r||(r=!0,R?.stop(),L(1,t),n())};R=p(0,1,{duration:e/1e3,ease:t?[.16,1,.3,1]:[.5,0,.75,.3],onUpdate:e=>{r||L(e,t)},onComplete:i}),setTimeout(i,e+120)});if(m===`soft`){let e=S();if(e&&!f){let t=C()?{opacity:[0,1]}:{opacity:[0,1],y:[x,0]};D=p(e,t,{duration:b/1e3,ease:[.16,1,.3,1],onComplete:A}),setTimeout(A,560)}h()}else m&&j?(I(),t.style.display=`block`,L(1,!1),h(),z(_,!0).then(()=>{t.style.display=`none`})):h();let B=!1,V=e=>{if(B)return;let n=()=>{window.location.href=e},r=w();if(f||r&&!j){n();return}B=!0;try{window.sessionStorage.setItem(d,r?`sweep`:`soft`)}catch{}if(!r){let e=S();e&&(D=p(e,{opacity:0},{duration:y/1e3,ease:`easeIn`})),setTimeout(n,e?y:0);return}I(),t.style.display=`block`,z(g,!1).then(n)},H=e=>{let t=k(e);t&&(e.preventDefault(),V(t))},U=e=>{if(e.persisted){B=!1,t.style.display=`none`,A(),h();try{window.sessionStorage.removeItem(d)}catch{}}};document.addEventListener(`click`,H),window.addEventListener(`pageshow`,U),window.addEventListener(`resize`,I);let W=u(V);return()=>{R?.stop(),document.removeEventListener(`click`,H),window.removeEventListener(`pageshow`,U),window.removeEventListener(`resize`,I),W(),F?.dispose(),M?.dispose(),j?.dispose()}},[]),(0,h.jsx)(`canvas`,{ref:e,className:`page-transition`,"aria-hidden":`true`})}export{A as default};