import{r as u,j as o,a as s,R as t,F as A,c as V}from"./jsx-runtime.2f4bb9f3.js";import{e as z,C as R}from"./index.esm.029893e1.js";import{n as l,h as I,E as Z,c as N}from"./emotion-styled.browser.esm.e0d2f2cb.js";import"./DateSelect.4aeb2ff8.js";import{g as O,u as Y}from"./use-date-select.aeab0953.js";import{F as B,S as g,a as P,L as H,c as a}from"./DateSelect.0639770c.js";import{C as p,E as U}from"./index.54870ccb.js";import"./index.esm.d3e0aa34.js";import"./DateSelect.640ea876.js";function T(r=!1){const[e,i]=u.exports.useState(r),c=u.exports.useMemo(()=>({on:()=>i(!0),off:()=>i(!1),toggle:()=>i(h=>!h)}),[]);return[e,c]}const j=l.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function b(r){const e=u.exports.useRef(null),i=u.exports.useCallback(c=>{var C,f;if(c.detail!==2)return;const h=e.current;if(h==null)return;const m=new Range;m.setStart(h,0),m.setEnd(h,1),(C=document.getSelection())==null||C.removeAllRanges(),(f=document.getSelection())==null||f.addRange(m)},[]);return o(j,{ref:e,onClick:i,children:r.children})}const L="#be5f6f",v="#fcdfff",W=l.div`
  display: flex;

  & > div {
    margin: 0 4px;

    & > select {
      border-color: rgba(80, 80, 80, 0.4);

      &[aria-invalid="true"] {
        border-color: ${v};
        box-shadow: 0 0 0 1px ${v};
      }
    }
  }
`,$=O(new Date);function q(){const[r,e]=u.exports.useState($||"2022-01-01"),i=Y(r,e,{monthFormat:"MMM"});return s(B,{isInvalid:r==="",children:[s(W,{children:[o(g,{value:i.yearValue,onChange:i.onYearChange,bg:"whiteAlpha.900",color:L,children:i.yearOptions.map(c=>o("option",{value:c.value,children:c.label},c.value))}),o(g,{value:i.monthValue,onChange:i.onMonthChange,bg:"whiteAlpha.900",color:L,children:i.monthOptions.map(c=>o("option",{value:c.value,children:c.label},c.value))}),o(g,{value:i.dayValue,onChange:i.onDayChange,bg:"whiteAlpha.900",color:L,children:i.dayOptions.map(c=>o("option",{value:c.value,children:c.label},c.value))})]}),o(P,{color:v,children:"Invalid date"})]})}const G=l.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #a733d8; /* fallback color */
  background: linear-gradient(150deg, #f9b600 0%, #a432d5 100%);
  height: 360px;
  width: 100%;

  @media (max-width: 640px) {
    height: 240px;
  }
`,K=l.div`
  text-align: center;
`,J=l.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,Q=l.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,X=l.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,_=l.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,w=l.p`
  margin-bottom: 4px;
`,ee=l.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`,te=l.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,ne=l(H)`
  display: inline-flex;
  margin-top: 8px;
  color: #eee;
  align-items: center;
`,ae=l.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  mask: url(https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg)
    no-repeat center;
  background: #eee;
  margin-right: 8px;
`,oe=l.span`
  padding-top: 2px;

  @media (max-width: 640px) {
    display: none;
  }
`,re=l.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function le(){return s(G,{children:[o(ee,{children:o(te,{children:s(ne,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:[o(ae,{}),o(oe,{children:"See on GitHub"})]})})}),s(K,{children:[o(J,{children:"react-ymd-date-select"}),o(Q,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),s(X,{children:[s(_,{children:[o(w,{children:o(b,{children:"npm install react-ymd-date-select"})}),o(w,{children:o(b,{children:"yarn add react-ymd-date-select"})})]}),o(re,{children:o(q,{})})]})]})}const ie=l.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function ce(r){const e=r.children;if(!t.isValidElement(e))return o("pre",{...r});const{className:i}=e.props,c=i==null?void 0:i.replace(/language-/,""),h=e.props.children.trim();return c==="jsx"||c==="tsx"?o(p,{initialCode:h,language:c}):o("pre",{children:o("code",{children:e})})}const de=l.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,se=l.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,me=l.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,S=l.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,pe=l.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;a({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"});a({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"});a({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"});a({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"});a({displayName:"SunIcon",path:t.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor"},t.createElement("circle",{cx:"12",cy:"12",r:"5"}),t.createElement("path",{d:"M12 1v2"}),t.createElement("path",{d:"M12 21v2"}),t.createElement("path",{d:"M4.22 4.22l1.42 1.42"}),t.createElement("path",{d:"M18.36 18.36l1.42 1.42"}),t.createElement("path",{d:"M1 12h2"}),t.createElement("path",{d:"M21 12h2"}),t.createElement("path",{d:"M4.22 19.78l1.42-1.42"}),t.createElement("path",{d:"M18.36 5.64l1.42-1.42"}))});a({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});a({displayName:"SmallAddIcon",viewBox:"0 0 20 20",path:t.createElement("path",{fill:"currentColor",d:"M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z",fillRule:"evenodd"})});a({viewBox:"0 0 14 14",d:"M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z",displayName:"SettingsIcon"});a({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"});a({d:"M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",displayName:"LockIcon"});a({d:"M19.5,9.5h-.75V6.75A6.751,6.751,0,0,0,5.533,4.811a1.25,1.25,0,1,0,2.395.717A4.251,4.251,0,0,1,16.25,6.75V9a.5.5,0,0,1-.5.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5Z",displayName:"UnlockIcon"});a({displayName:"ViewIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),t.createElement("circle",{cx:"12",cy:"12",r:"2"}))});a({displayName:"ViewOffIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),t.createElement("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"}))});a({d:"M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z",displayName:"DownloadIcon",viewBox:"0 0 14 14"});a({displayName:"DeleteIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"}))});a({displayName:"RepeatIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"}),t.createElement("path",{d:"M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"}))});a({displayName:"RepeatClockIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M12.965,6a1,1,0,0,0-1,1v5.5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2h-3.75a.25.25,0,0,1-.25-.25V7A1,1,0,0,0,12.965,6Z"}),t.createElement("path",{d:"M12.567,1.258A10.822,10.822,0,0,0,2.818,8.4a.25.25,0,0,1-.271.163L.858,8.309a.514.514,0,0,0-.485.213.5.5,0,0,0-.021.53l2.679,4.7a.5.5,0,0,0,.786.107l3.77-3.746a.5.5,0,0,0-.279-.85L5.593,9.007a.25.25,0,0,1-.192-.35,8.259,8.259,0,1,1,7.866,11.59,1.25,1.25,0,0,0,.045,2.5h.047a10.751,10.751,0,1,0-.792-21.487Z"}))});a({displayName:"EditIcon",path:t.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},t.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))});a({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"});a({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"});a({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"});a({d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",displayName:"ChevronUpIcon"});a({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"});a({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"});a({d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",displayName:"ArrowUpIcon"});a({viewBox:"0 0 16 16",d:"M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z",displayName:"ArrowUpDownIcon"});a({d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",displayName:"ArrowDownIcon"});var he=a({displayName:"ExternalLinkIcon",path:t.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},t.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),t.createElement("path",{d:"M15 3h6v6"}),t.createElement("path",{d:"M10 14L21 3"}))});a({displayName:"LinkIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),t.createElement("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"}))});a({displayName:"PlusSquareIcon",path:t.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},t.createElement("rect",{height:"18",width:"18",rx:"2",ry:"2",x:"3",y:"3"}),t.createElement("path",{d:"M12 8v8"}),t.createElement("path",{d:"M8 12h8"}))});a({displayName:"CalendarIcon",viewBox:"0 0 14 14",d:"M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"});a({d:"M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",displayName:"ChatIcon",viewBox:"0 0 14 14"});a({displayName:"TimeIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"}),t.createElement("path",{d:"M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"}))});a({displayName:"ArrowRightIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),t.createElement("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"}))});a({displayName:"ArrowLeftIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),t.createElement("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"}))});a({displayName:"AtSignIcon",d:"M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"});a({displayName:"AttachmentIcon",d:"M21.843,3.455a6.961,6.961,0,0,0-9.846,0L1.619,13.832a5.128,5.128,0,0,0,7.252,7.252L17.3,12.653A3.293,3.293,0,1,0,12.646,8L7.457,13.184A1,1,0,1,0,8.871,14.6L14.06,9.409a1.294,1.294,0,0,1,1.829,1.83L7.457,19.67a3.128,3.128,0,0,1-4.424-4.424L13.411,4.869a4.962,4.962,0,1,1,7.018,7.018L12.646,19.67a1,1,0,1,0,1.414,1.414L21.843,13.3a6.96,6.96,0,0,0,0-9.846Z"});a({displayName:"UpDownIcon",viewBox:"-1 -1 9 11",d:"M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"});a({d:"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",displayName:"StarIcon"});a({displayName:"EmailIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),t.createElement("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"}))});a({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"});a({viewBox:"0 0 10 10",d:"M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z",displayName:"DragHandleIcon"});a({displayName:"SpinnerIcon",path:t.createElement(t.Fragment,null,t.createElement("defs",null,t.createElement("linearGradient",{x1:"28.154%",y1:"63.74%",x2:"74.629%",y2:"17.783%",id:"a"},t.createElement("stop",{stopColor:"currentColor",offset:"0%"}),t.createElement("stop",{stopColor:"#fff",stopOpacity:"0",offset:"100%"}))),t.createElement("g",{transform:"translate(2)",fill:"none"},t.createElement("circle",{stroke:"url(#a)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),t.createElement("path",{d:"M10 2C4.477 2 0 6.477 0 12",stroke:"currentColor",strokeWidth:"4"}),t.createElement("rect",{fill:"currentColor",x:"8",width:"4",height:"4",rx:"8"})))});a({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"});a({displayName:"SmallCloseIcon",viewBox:"0 0 16 16",path:t.createElement("path",{d:"M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",fillRule:"evenodd",fill:"currentColor"})});a({d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",displayName:"NotAllowedIcon"});a({d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",displayName:"TriangleDownIcon"});a({d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",displayName:"TriangleUpIcon"});a({displayName:"InfoOutlineIcon",path:t.createElement("g",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"square",strokeWidth:"2"},t.createElement("circle",{cx:"12",cy:"12",fill:"none",r:"11",stroke:"currentColor"}),t.createElement("line",{fill:"none",x1:"11.959",x2:"11.959",y1:"11",y2:"17"}),t.createElement("circle",{cx:"11.959",cy:"7",r:"1",stroke:"none"}))});a({displayName:"BellIcon",d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"});a({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"});a({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z",displayName:"QuestionIcon"});a({displayName:"QuestionOutlineIcon",path:t.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},t.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),t.createElement("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),t.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"}))});a({d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",displayName:"WarningIcon"});a({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});a({viewBox:"0 0 14 14",path:t.createElement("g",{fill:"currentColor"},t.createElement("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"}))});a({displayName:"MinusIcon",path:t.createElement("g",{fill:"currentColor"},t.createElement("rect",{height:"4",width:"20",x:"2",y:"10"}))});a({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"});function ue(r){if(r==null)return!1;try{return new URL(r).origin!==window.location.origin}catch{return!1}}function fe(r){const e=ue(r.href);return s(H,{href:r.href,isExternal:e,children:[r.children,e&&o(he,{mx:"2px"})]})}const Ce={pre:ce,code:r=>o(de,{...r}),h1:r=>o(se,{...r}),h2:r=>o(me,{...r}),h3:r=>o(S,{...r}),h4:r=>o(pe,{...r}),a:fe};var ye=A;function n(r,e,i){return I.call(e,"css")?o(Z,N(r,e),i):o(r,e,i)}function d(r,e,i){return I.call(e,"css")?s(Z,N(r,e),i):s(r,e,i)}const ge=l.iframe`
  display: block;
  width: 100%;
`;function M(r){const[e,i]=u.exports.useState(),c=u.exports.useRef(null),h=u.exports.useCallback(m=>{c.current=m,m!=null&&(m.onload=()=>{var C,f,y;i((y=(f=(C=m.contentWindow)==null?void 0:C.document)==null?void 0:f.documentElement)==null?void 0:y.scrollHeight)})},[]);return u.exports.useEffect(()=>{const m=setInterval(()=>{var f,y,x;if(c.current==null)return;const C=c.current;i((x=(y=(f=C.contentWindow)==null?void 0:f.document)==null?void 0:y.documentElement)==null?void 0:x.scrollHeight)},200);return()=>{clearInterval(m)}},[]),o(ge,{ref:h,src:r.src,frameBorder:"0",height:e})}var Le=`import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { DateSelect } from "react-ymd-date-select/presets/chakra-ui";

function Sample() {
  const [date, setDate] = useState("");

  return (
    <ChakraProvider>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </ChakraProvider>
  );
}

export default Sample;
`,ve=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/mui";

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`;const Se=l.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,Me=l.div`
  overflow: auto;
  max-height: 300px;
`,xe=l(U)`
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  white-space: pre;
  caret-color: #fff;
  min-width: 100%;
  max-height: 100%;
  float: left;

  & > textarea,
  & > pre {
    outline: none;
    white-space: pre !important;
  }
`,be=l.div`
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: 180px;
`;l.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;l.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;const k=l.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function D({code:r,language:e,children:i}){const[c,{on:h,off:m}]=T();return s(Se,{children:[o(be,{children:i}),!c&&o(k,{onClick:h,children:"Show code"}),c&&o(Me,{children:o(xe,{value:r,language:e,readOnly:!0,insertSpaces:!0,ignoreTabKey:!1,padding:0,tabSize:2})}),c&&o(k,{onClick:m,children:"Hide code"})]})}const we=l.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,F=l.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function ke(){return o(M,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function De(){return s(we,{children:[s(F,{children:[o(S,{children:"Chakra UI"}),o(D,{code:Le,language:"tsx",children:o(M,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),s(F,{children:[o(S,{children:"Material UI"}),o(D,{code:ve,language:"tsx",children:o(M,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var Fe=`import { useState } from "react";
import { useDateSelect } from "react-ymd-date-select";

interface CustomDateSelectProps {
  onChange: (value: string) => void;
  value: string;
}
function CustomDateSelect(props: CustomDateSelectProps) {
  const dateSelect = useDateSelect(props.value, props.onChange);

  return (
    <>
      <input
        type="date"
        value={dateSelect.dateValue || ""}
        onChange={dateSelect.onDateChange}
      />
      <label>
        Year
        <select value={dateSelect.yearValue} onChange={dateSelect.onYearChange}>
          <option value="" disabled></option>
          {dateSelect.yearOptions.map((yearOption) => (
            <option key={yearOption.value} value={yearOption.value}>
              {yearOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Month
        <select
          value={dateSelect.monthValue}
          onChange={dateSelect.onMonthChange}
        >
          <option value="" disabled></option>
          {dateSelect.monthOptions.map((monthOption) => (
            <option key={monthOption.value} value={monthOption.value}>
              {monthOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Day
        <select value={dateSelect.dayValue} onChange={dateSelect.onDayChange}>
          <option value="" disabled></option>
          {dateSelect.dayOptions.map((dayOption) => (
            <option key={dayOption.value} value={dayOption.value}>
              {dayOption.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <CustomDateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Ee=`import { useForm, Controller } from "react-hook-form";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

type FormData = {
  date: string;
};

function Sample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <DateSelect {...field} />}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Sample;
`,Ae=`import { Formik, Form, Field, FieldProps } from "formik";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

interface Values {
  date: string;
}

function Sample() {
  return (
    <Formik
      initialValues={{ date: "" }}
      onSubmit={(values: Values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="date">
          {({ field, form }: FieldProps) => {
            return (
              <DateSelect
                value={field.value}
                onChange={(value) => {
                  form.setFieldValue("date", value);
                }}
              />
            );
          }}
        </Field>
        <input type="submit" />
      </Form>
    </Formik>
  );
}

export default Sample;
`,Ie=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

const yearFormats = ["y", "yo", "yy", "yyy", "yyyy", "yyyyy"] as const;
const monthFormats = [
  "M",
  "Mo",
  "MM",
  "MMM",
  "MMMM",
  "MMMMM",
  "L",
  "Lo",
  "LL",
  "LLL",
  "LLLL",
  "LLLLL",
] as const;
const dayFormats = ["d", "do", "dd"] as const;

type YearFormat = typeof yearFormats[number];
type MonthFormat = typeof monthFormats[number];
type DayFormat = typeof dayFormats[number];

function Sample() {
  const [yearFormat, setYearFormat] = useState<YearFormat>("yy");
  const [monthFormat, setMonthFormat] = useState<MonthFormat>("MMMM");
  const [dayFormat, setDayFormat] = useState<DayFormat>("do");

  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect
        value={date}
        onChange={setDate}
        yearFormat={yearFormat}
        monthFormat={monthFormat}
        dayFormat={dayFormat}
        defaultYear="now"
        defaultMonth="now"
        defaultDay="now"
      />
      <p>Selected date is: {date}</p>

      <div>
        <label>
          Year format:
          <select
            value={yearFormat}
            onChange={(e) => setYearFormat(e.target.value as YearFormat)}
          >
            {yearFormats.map((yearFormat) => (
              <option key={yearFormat} value={yearFormat}>
                {yearFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Month format:
          <select
            value={monthFormat}
            onChange={(e) => setMonthFormat(e.target.value as MonthFormat)}
          >
            {monthFormats.map((monthFormat) => (
              <option key={monthFormat} value={monthFormat}>
                {monthFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Day format:
          <select
            value={dayFormat}
            onChange={(e) => setDayFormat(e.target.value as DayFormat)}
          >
            {dayFormats.map((dayFormat) => (
              <option key={dayFormat} value={dayFormat}>
                {dayFormat}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default Sample;
`,Ze=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";
import jaLocale from "date-fns/locale/ja";

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  de: deLocale,
  ja: jaLocale,
};

type LocaleKey = keyof typeof localeMap;

function Sample() {
  const [locale, setLocale] = useState<LocaleKey>("en");
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <div>
        <label>
          Locale:
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as LocaleKey)}
          >
            {Object.keys(localeMap).map((localeItem) => (
              <option key={localeItem} value={localeItem}>
                {localeItem}
              </option>
            ))}
          </select>
        </label>
      </div>

      <DateSelect
        value={date}
        onChange={setDate}
        locale={localeMap[locale]}
        monthFormat="MMM"
        defaultMonth="now"
      />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Ne=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("2022-01-02");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,He=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} defaultYear={2000} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Ve=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} defaultYear="now" />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,ze=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect
        value={date}
        onChange={setDate}
        firstYear={2045}
        lastYear={2000}
      />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Re=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} hideDay />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Oe=`import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DateSelect, ChildComponentProps } from "react-ymd-date-select";
import { DateDropdownGroup } from "react-ymd-date-select/presets/vanilla";

// Creating a new component wrapped with \`React.forwardRef\` is necessary to use \`ref\` inside it.
const CustomDateSelect = React.forwardRef<
  HTMLInputElement,
  ChildComponentProps
>((props, ref) => {
  return (
    <>
      <input
        type="date"
        value={props.dateValue || ""}
        onChange={props.onDateChange}
        ref={ref}
      />
      <DateDropdownGroup {...props} />
    </>
  );
});
CustomDateSelect.displayName = "CustomDateSelect";

type FormData = {
  date: string;
};

function Sample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateSelect
            {...field}
            render={(props) => <CustomDateSelect {...props} />}
          />
        )}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Sample;
`;function E(r){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},r.components);return d(ye,{children:[n(e.h2,{children:"Presets"}),`
`,d(e.p,{children:["It provides ready-to-use ",n(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",n(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,d(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,n(ke,{}),`
`,d(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",n(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",n(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,n(De,{}),`
`,n(e.h2,{children:"Hook for custom components"}),`
`,d(e.p,{children:["This library also provides ",n(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,n(p,{initialCode:Fe,language:"tsx"}),`
`,n(e.h2,{children:"With form libraries"}),`
`,n(e.h3,{children:"React Hook Form"}),`
`,`
`,n(p,{initialCode:Ee,language:"tsx"}),`
`,d(e.p,{children:[`For the details about the usage with React Hook Form,
see `,n(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,n(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,n(e.h3,{children:"Formik"}),`
`,`
`,n(p,{initialCode:Ae,language:"tsx"}),`
`,d(e.p,{children:["Note that you have to use ",n(e.code,{children:"setFieldValue()"})," in the ",n(e.code,{children:"onChange"})," prop of ",n(e.code,{children:"<DateSelect />"})," instead of directly passing the ",n(e.code,{children:"field.onChange"}),` prop.
It is because `,n(e.code,{children:"<DateSelect />"}),"'s ",n(e.code,{children:"onChange"})," is called with a ",n(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",n(e.code,{children:"onChange"}),"."]}),`
`,n(e.h2,{children:"The date string format"}),`
`,d(e.p,{children:["The ",n(e.code,{children:"value"})," prop and the argument of ",n(e.code,{children:"onChange()"})," are string formatted in ",n(e.code,{children:"yyyy-MM-DD"}),`,
which is ISO8601 format, and the same as `,d(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#value",children:["the value of the native ",n(e.code,{children:'<input type="date" />'})]}),`.
It's also `,n(e.a,{href:"https://tc39.es/ecma262/#sec-date-time-string-format",children:"the JavaScript standard date string format"}),"."]}),`
`,n(e.h2,{children:"Samples"}),`
`,n(e.h3,{children:"Format"}),`
`,`
`,n(p,{initialCode:Ie,language:"tsx"}),`
`,d(e.p,{children:["You can control the format through ",n(e.code,{children:"yearFormat"}),", ",n(e.code,{children:"monthFormat"}),", and ",n(e.code,{children:"dayFormat"})," props."]}),`
`,d(e.p,{children:["As ",n(e.code,{children:"date-fns/format"}),` is internally used to format the date string, so you can set its formatting options.
See `,d(e.a,{href:"https://date-fns.org/v2.28.0/docs/format",children:["the document of ",n(e.code,{children:"date-fns/format"})]})," about the available options."]}),`
`,n(e.h3,{children:"Localization"}),`
`,`
`,n(p,{initialCode:Ze,language:"tsx"}),`
`,d(e.p,{children:["You can use the ",n(e.code,{children:"locale"})," prop to control the locale used at formatting."]}),`
`,d(e.p,{children:["As ",n(e.code,{children:"date-fns/format"})," is internally used to format the date string, its locale object can be passed."]}),`
`,n(e.h3,{children:"Setting default value to the state"}),`
`,`
`,n(p,{initialCode:Ne,language:"tsx"}),`
`,n(e.h3,{children:"Default values for year, month, and day"}),`
`,`
`,n(p,{initialCode:He,language:"tsx"}),`
`,d(e.p,{children:["You can set ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,d(e.p,{children:["Note that these props only set the default selection of the dropdown UI, but does not affects the state as ",n(e.code,{children:"onChange"})," is not called."]}),`
`,n(e.h3,{children:"Set the current date as the default values"}),`
`,`
`,n(p,{initialCode:Ve,language:"tsx"}),`
`,d(e.p,{children:["You can set ",n(e.code,{children:'"now"'})," to ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,n(e.h3,{children:"Year range"}),`
`,`
`,n(p,{initialCode:ze,language:"tsx"}),`
`,d(e.p,{children:["Use ",n(e.code,{children:"firstYear"})," and ",n(e.code,{children:"lastYear"})," props to set the year range."]}),`
`,n(e.h3,{children:"Hide day"}),`
`,`
`,n(p,{initialCode:Re,language:"tsx"}),`
`,d(e.p,{children:["Set ",n(e.code,{children:"hideDay"})," prop as true to hide the day selector."]}),`
`,d(e.p,{children:['This is a "component-level" prop provided with the preset components, but not with the ',n(e.code,{children:"useDateSelect()"}),` hook.
If you create a custom component using the hook and want to hide the day selector, just remove it from your component and set `,n(e.code,{children:"defaultDay"})," option on the hook as the value you want."]}),`
`,n(e.h3,{children:"A custom component wrapping the preset component"}),`
`,`
`,n(p,{initialCode:Oe,language:"tsx"}),`
`,d(e.p,{children:["This example shows how to pass the ",n(e.code,{children:"ref"})," to the preset component and how to integrate it with React Hook Form, which uses the ",n(e.code,{children:"ref"}),"."]})]})}function Ye(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(E,r)})):E(r)}function Be(){return s(A,{children:[o(le,{}),o(ie,{children:o(Ye,{components:Ce})})]})}const Pe=z({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Ue=document.getElementById("root"),Te=V(Ue);Te.render(o(t.StrictMode,{children:o(R,{resetCSS:!1,theme:Pe,children:o(Be,{})})}));
