import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as d}from"./assets/vendor-B07T6_gy.js";const y=(e,s)=>{try{localStorage.setItem(e,JSON.stringify(s))}catch(l){console.log(l)}},c=e=>{try{const s=localStorage.getItem(e);return s===null?void 0:JSON.parse(s)}catch(s){console.log(s)}};document.body.style.fontFamily="'Montserrat', sans-serif";const n=document.querySelector("form"),m=document.querySelectorAll("label"),o=document.querySelector("input"),r=document.querySelector("textarea"),t=document.querySelector("button"),a={email:"",message:""},p=()=>{const e=c("feedback-form-state");if(e===void 0)return;Object.keys(e).forEach(l=>{n.elements[l].value=e[l],a[l]=e[l]}),console.log(a)};p();const f=e=>{const{target:s}=e,l=s.name,i=s.value;a[l]=i,y("feedback-form-state",a)},u=e=>{if(e.preventDefault(),Object.values(a).some(l=>l==="")){d.error({message:"Fill please all fields",position:"topRight"});return}console.log(a),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")};n.addEventListener("input",f);n.addEventListener("submit",u);n.style.display="inline-flex";n.style.padding="24px";n.style.flexDirection="column";n.style.gap="8px";n.style.borderRadius="8px";n.style.background="#fff";m.forEach(e=>{e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px",e.style.color="#2e2f42",e.style.fontFamily="'Montserrat', sans-serif",e.style.fontSize="16px",e.style.fontStyle="normal",e.style.fontWeight="400",e.style.lineHeight="24px",e.style.letterSpacing="0.64px"});o.style.outline="none";o.style.width="360px";o.style.height="40px";o.style.borderRadius="4px";o.style.border="1px solid #808080";o.style.padding="8px 16px";o.style.fontFamily="'Montserrat', sans-serif";r.style.outline="none";r.style.width="360px";r.style.height="80px";r.style.borderRadius="4px";r.style.border="1px solid #808080";r.style.padding="8px 16px";r.style.fontFamily="'Montserrat', sans-serif";o.addEventListener("mouseenter",()=>{o.style.border="1px solid #000"});o.addEventListener("mouseleave",()=>{o.style.border="1px solid #808080"});r.addEventListener("mouseenter",()=>{r.style.border="1px solid #000"});r.addEventListener("mouseleave",()=>{r.style.border="1px solid #808080"});t.style.outline="none";t.style.marginTop="8px";t.style.width="86px";t.style.height="40px";t.style.display="flex";t.style.justifyContent="center";t.style.alignItems="center";t.style.padding="8px 16px";t.style.borderRadius="8px";t.style.border="none";t.style.background="#4E75FF";t.style.color="#FFF";t.style.fontFamily="'Montserrat', sans-serif";t.style.fontSize="16px";t.style.fontStyle="normal";t.style.fontWeight="500";t.style.lineHeight="24px";t.style.letterSpacing="0.64px";t.addEventListener("mouseenter",()=>{t.style.background="#6C8CFF"});t.addEventListener("mouseleave",()=>{t.style.background="#4E75FF"});
//# sourceMappingURL=2-form.js.map
