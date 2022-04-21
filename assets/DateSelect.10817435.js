var b=Object.defineProperty,E=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&p(e,a,t[a]);if(Y)for(var a of Y(t))w.call(t,a)&&p(e,a,t[a]);return e},S=(e,t)=>E(e,M(t));import{r as i,b as x}from"./vendor.8c422dd9.js";function m(e,t){if(e>t)return m(t,e).reverse();const a=[];for(let r=e;r<=t;r++)a.push(r);return a}function y(e,t){return("0".repeat(t-1)+e.toString()).slice(-t)}function A(e,t,a){if(t<1||12<t||a<1||31<a)return null;const r=y(e,4)+"-"+y(t,2)+"-"+y(a,2),s=new Date(r);return s.getFullYear()!==e||s.getMonth()!==t-1||s.getDate()!==a?null:r}function v(e){const t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate();return isNaN(a)||isNaN(r)||isNaN(s)?{year:"",month:"",day:""}:{year:a.toString(),month:r.toString(),day:s.toString()}}const k=1960,F=new Date().getFullYear();function V(e){return parseInt(e)}function g(e){return e.toString()}function D(e){return{value:e,label:e}}const O=m(1,12).map(e=>D(g(e))),R=m(1,31).map(e=>D(g(e))),_=e=>{const[t,a]=i.exports.useState({yearValue:e.defaultYear?g(e.defaultYear):"",monthValue:e.defaultMonth?g(e.defaultMonth):"",dayValue:e.defaultDay?g(e.defaultDay):"",dateString:null,changeCount:0}),r=i.exports.useCallback(({year:n,month:u,day:l})=>{a(o=>{const c=n!=null?n:o.yearValue,f=u!=null?u:o.monthValue,d=l!=null?l:o.dayValue,C=A(V(c),V(f),V(d));return{yearValue:c,monthValue:f,dayValue:d,dateString:C,changeCount:o.changeCount+1}})},[]);i.exports.useEffect(()=>{e.onChange(t.dateString||"")},[t.changeCount,e.onChange]);const s=i.exports.useMemo(()=>{const n=e.minYear!=null?e.minYear:k,u=e.maxYear!=null?e.maxYear:F,l=m(n,u).map(o=>{const c=g(o);return{value:c,label:c}});return l.some(o=>o.value===t.yearValue)?l:l.concat(D(t.yearValue))},[e.minYear,e.maxYear,t.yearValue]);return{yearValue:t.yearValue,monthValue:t.monthValue,dayValue:t.dayValue,yearOptions:s,monthOptions:O,dayOptions:R,onYearChange:i.exports.useCallback(n=>{const u=typeof n=="string"?n:n.target.value;r({year:u})},[r]),onMonthChange:i.exports.useCallback(n=>{const u=typeof n=="string"?n:n.target.value;r({month:u})},[r]),onDayChange:i.exports.useCallback(n=>{const u=typeof n=="string"?n:n.target.value;r({day:u})},[r]),dateValue:t.dateString,onDateChange:i.exports.useCallback(n=>{const u=typeof n=="string"?n:n.target.value,{year:l,month:o,day:c}=v(u);r({year:l,month:o,day:c})},[r]),setDate:i.exports.useCallback(n=>{const{year:u,month:l,day:o}=v(n);a(c=>({yearValue:u,monthValue:l,dayValue:o,dateString:n,changeCount:c.changeCount}))},[])}},T=x.forwardRef((e,t)=>{const{onChange:a,value:r,maxYear:s,minYear:n,defaultYear:u,defaultMonth:l,defaultDay:o}=e,c=_({minYear:n,maxYear:s,onChange:a,defaultYear:u,defaultMonth:l,defaultDay:o}),{setDate:f,dateValue:d}=c;if(i.exports.useEffect(()=>{if(typeof r!="string")return;(d||"")!==r&&f(r)},[f,d,r]),e.component)return x.createElement(e.component,h({ref:t},c));if(e.render)return e.render(S(h({},c),{ref:t}));throw new Error("Either render or component must be provided.")});T.displayName="DateSelect";export{T as D};