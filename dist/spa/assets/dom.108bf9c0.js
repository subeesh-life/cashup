import{y as c,d as s,h as a,z as f,A as d}from"./index.7a7392f7.js";const h=n=>c(s(n)),m=n=>c(n);function p(n,t){return n!==void 0&&n()||t}function y(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function l(n,t){return n!==void 0?t.concat(n()):t}function g(n,t,e,r,o,u){t.key=r+o;const i=a(n,t,e);return o===!0?f(i,u()):i}function S(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function D(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=d(n);if(t)return t.$el||t}export{l as a,S as b,h as c,y as d,m as e,g as f,D as g,p as h};