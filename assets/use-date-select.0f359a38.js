import{r as s}from"./vendor.0891725a.js";function V(e,r){if(e>r)return V(r,e).reverse();const a=[];for(let n=e;n<=r;n++)a.push(n);return a}function d(e,r){return("0".repeat(r-1)+e.toString()).slice(-r)}function C(e,r,a){if(r<1||12<r||a<1||31<a)return null;const n=d(e,4)+"-"+d(r,2)+"-"+d(a,2),c=new Date(n);return c.getFullYear()!==e||c.getMonth()!==r-1||c.getDate()!==a?null:n}function D(e){const r=new Date(e),a=r.getFullYear(),n=r.getMonth()+1,c=r.getDate();return isNaN(a)||isNaN(n)||isNaN(c)?{year:"",month:"",day:""}:{year:a.toString(),month:n.toString(),day:c.toString()}}const b=1960,v=new Date().getFullYear();function m(e){return parseInt(e)}function f(e){return e.toString()}function p(e){return{value:e,label:e}}const M=V(1,12).map(e=>p(f(e))),A=V(1,31).map(e=>p(f(e))),k=(e,r,a={})=>{const[n,c]=s.exports.useState({yearValue:a.defaultYear?f(a.defaultYear):"",monthValue:a.defaultMonth?f(a.defaultMonth):"",dayValue:a.defaultDay?f(a.defaultDay):"",dateString:null,changeCount:0}),g=s.exports.useCallback(({year:t,month:u,day:l})=>{c(o=>{const i=t!=null?t:o.yearValue,h=u!=null?u:o.monthValue,S=l!=null?l:o.dayValue,x=C(m(i),m(h),m(S));return{yearValue:i,monthValue:h,dayValue:S,dateString:x,changeCount:o.changeCount+1}})},[]);s.exports.useEffect(()=>{r(n.dateString||"")},[n.changeCount,r]);const Y=s.exports.useMemo(()=>{const t=a.minYear!=null?a.minYear:b,u=a.maxYear!=null?a.maxYear:v,l=V(t,u).map(o=>{const i=f(o);return{value:i,label:i}});return l.some(o=>o.value===n.yearValue)?l:l.concat(p(n.yearValue))},[a.minYear,a.maxYear,n.yearValue]),y=s.exports.useCallback(t=>{const{year:u,month:l,day:o}=D(t);c(i=>({yearValue:u,monthValue:l,dayValue:o,dateString:t,changeCount:i.changeCount}))},[]);return s.exports.useEffect(()=>{if(typeof e!="string")return;(n.dateString||"")!==e&&y(e)},[y,n.dateString,e]),{yearValue:n.yearValue,monthValue:n.monthValue,dayValue:n.dayValue,yearOptions:Y,monthOptions:M,dayOptions:A,onYearChange:s.exports.useCallback(t=>{const u=typeof t=="string"?t:t.target.value;g({year:u})},[g]),onMonthChange:s.exports.useCallback(t=>{const u=typeof t=="string"?t:t.target.value;g({month:u})},[g]),onDayChange:s.exports.useCallback(t=>{const u=typeof t=="string"?t:t.target.value;g({day:u})},[g]),dateValue:n.dateString,onDateChange:s.exports.useCallback(t=>{const u=typeof t=="string"?t:t.target.value,{year:l,month:o,day:i}=D(u);g({year:l,month:o,day:i})},[g]),setDate:y}};export{k as u};