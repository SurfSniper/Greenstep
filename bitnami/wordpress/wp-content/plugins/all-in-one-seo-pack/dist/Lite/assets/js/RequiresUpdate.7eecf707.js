import{c as a}from"./links.4e9269a4.js";import{a as n}from"./addons.b699e1f7.js";import{R as c,a as m}from"./RequiresUpdate.f2810cb1.js";const p={methods:{getExcludedActivationTabs(r){if(!a().isUnlicensed&&n.isActive(r)&&!n.requiresUpgrade(r))return[];const t=[];return this.$router.options.routes.forEach(e=>{if(!e.meta||!e.meta.middleware)return;(Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware]).some(s=>s===c)&&t.push(e.name)}),t}}},f={methods:{getExcludedUpdateTabs(r){if(!a().isUnlicensed&&n.hasMinimumVersion(r)&&!n.requiresUpgrade(r))return[];const t=[];return this.$router.options.routes.forEach(e=>{if(!e.meta||!e.meta.middleware)return;(Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware]).some(s=>s===m)&&t.push(e.name)}),t}}};export{p as R,f as a};
