var k=Object.defineProperty,q=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var C=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))S.call(n,t)&&C(e,t,n[t]);if(u)for(var t of u(n))I.call(n,t)&&C(e,t,n[t]);return e},s=(e,n)=>q(e,F(n));var v=(e,n)=>{var t={};for(var a in e)S.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&u)for(var a of u(e))n.indexOf(a)<0&&I.call(e,a)&&(t[a]=e[a]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{R as f,r as h,j as l,B as Y,b as m,a as r,I as b,S as y,M as i,u as x,C as R,c as j}from"./vendor.ad6d6790.js";import{u as B}from"./use-date-select.20263592.js";let M=0;const $=f.forwardRef((e,n)=>{h.exports.useEffect(()=>{M++},[]);const t=`react-ymd-date-select-mui-${M.toString()}`;return l(Y,{children:[l(m,{children:[r(b,{id:`${t}-month`,children:"Year"}),l(y,{labelId:`${t}-year`,value:e.yearValue,onChange:h.exports.useCallback(a=>{e.onYearChange(a.target.value)},[e.onYearChange]),label:"Year",children:[r(i,{value:"",disabled:!0}),e.yearOptions.map(({value:a,label:o})=>r(i,{value:a,children:o},a))]})]}),l(m,{children:[r(b,{id:`${t}-month`,children:"Month"}),l(y,{labelId:`${t}-month`,value:e.monthValue,onChange:h.exports.useCallback(a=>{e.onMonthChange(a.target.value)},[e.onMonthChange]),label:"Month",ref:e.hideDay?n:void 0,children:[r(i,{value:"",disabled:!0}),e.monthOptions.map(({value:a,label:o})=>r(i,{value:a,children:o},a))]})]}),!e.hideDay&&l(m,{children:[r(b,{id:`${t}-day`,children:"Day"}),l(y,{labelId:`${t}-day`,value:e.dayValue,onChange:h.exports.useCallback(a=>{e.onDayChange(a.target.value)},[e.onDayChange]),label:"Day",ref:n,children:[r(i,{value:"",disabled:!0}),e.dayOptions.map(({value:a,label:o})=>r(i,{value:a,children:o},a))]})]})]})});$.displayName="DateDropdownGroup";const g=f.forwardRef((d,o)=>{var D=d,{value:e,onChange:n,hideDay:t}=D,a=v(D,["value","onChange","hideDay"]);const w=B(e,n,s(c({},a),{defaultDay:a.defaultDay?a.defaultDay:t?1:void 0}));return r($,s(c({},w),{hideDay:t,ref:o}))});g.displayName="DateSelect";function H(){const{control:e,handleSubmit:n,watch:t,formState:{errors:a}}=x(),o=d=>console.log(d);return console.log(t("date")),l("form",{onSubmit:n(o),children:[r(R,{name:"date",control:e,rules:{required:!0},render:({field:d})=>r(g,c({},d))}),a.date&&r("span",{children:"This field is required"}),r("input",{type:"submit"})]})}function V(){const{control:e,handleSubmit:n,watch:t,formState:{errors:a}}=x(),o=d=>console.log(d);return console.log(t("date")),l("form",{onSubmit:n(o),children:[r(R,{name:"date",control:e,rules:{required:!0},render:({field:d})=>r(g,s(c({},d),{hideDay:!0}))}),a.date&&r("span",{children:"This field is required"}),r("input",{type:"submit"})]})}function p(){return l("div",{children:[r(H,{}),r(V,{})]})}const E=document.getElementById("root"),G=j(E);G.render(r(f.StrictMode,{children:r(p,{})}));
