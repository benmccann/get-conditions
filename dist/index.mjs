import{typeFlag as s}from"type-flag";import{parse as i}from"shell-quote";const d=()=>{const{NODE_OPTIONS:n}=process.env;return n?i(n).map(o=>{if(typeof o=="string")return o;if("op"in o&&o.op==="glob")return o.pattern}).filter(Boolean):[]},t={conditions:{type:[String],alias:"C"},noAddons:[Boolean]},{flags:e}=s(t,d()),{flags:r}=s(t,process.execArgv),a=()=>["node",...e.noAddons.length>0||r.noAddons.length>0?[]:["node-addons"],...e.conditions,...r.conditions];export{a as getConditions};