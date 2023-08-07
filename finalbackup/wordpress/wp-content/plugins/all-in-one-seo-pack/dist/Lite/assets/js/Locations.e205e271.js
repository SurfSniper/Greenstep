import{C}from"./Blur.7ed1854b.js";import{C as I}from"./SettingsRow.2432af31.js";import{S as L}from"./Plus.bd65010b.js";import{r as e,o as l,c as g,d as t,w as i,a as o,t as n,g as m,b as d,f as h}from"./vue.runtime.esm-bundler.1bf81f69.js";import{_ as f}from"./_plugin-vue_export-helper.4292a25a.js";import{R as B}from"./RequiredPlans.b62db276.js";import{C as w}from"./Card.37225977.js";import{C as k}from"./ProBadge.5f8b58d0.js";import{C as U}from"./Index.632f6288.js";import{C as P}from"./Cta.c7a19d9a.js";import{A}from"./AddonConditions.9547b419.js";import"./default-i18n.41786823.js";import"./constants.a78fc4cb.js";import"./links.4e9269a4.js";/* empty css                                              */import"./Row.1358a527.js";/* empty css                                            */import"./addons.b699e1f7.js";import"./upperFirst.65f07810.js";import"./_stringToArray.4de3b1f3.js";import"./toString.16b91dfe.js";import"./isArrayLikeObject.76f0d098.js";import"./license.1ec1762f.js";import"./index.cd7fac8b.js";import"./Caret.0b57d359.js";import"./Tooltip.fc81232d.js";import"./Slide.c4e68d01.js";/* empty css                                              */const z={components:{CoreBlur:C,CoreSettingsRow:I,SvgCirclePlus:L},data(){return{strings:{description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),name:this.$t.__("name",this.$td),nameDesc:this.$t.__("Your name or company name.",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),image:this.$t.__("Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),websiteDesc:this.$t.__("Website URL:",this.$td),aboutDesc:this.$t.__("About Page URL:",this.$td),contactDesc:this.$t.__("Contact Page URL:",this.$td)},businessTypes:[{label:this.$t.__("default",this.$td),value:"LocalBusiness"},{label:this.$t.__("Animal Shelter",this.$td),value:"Animal Shelter"}]}}},D={class:"aioseo-locations-blur"},R={class:"aioseo-settings-row"},T={class:"aioseo-col col-xs-12 text-xs-left"},O={class:"field-description"},E={class:"image-upload"},G={class:"aioseo-description"},V={class:"aioseo-col col-xs-12 text-xs-left"},N={class:"aioseo-col col-xs-12 text-xs-left"},Y={class:"field-description"},q={class:"aioseo-col col-xs-12 text-xs-left"},M={class:"field-description mt-8"},W={class:"aioseo-col col-xs-12 text-xs-left"},H={class:"field-description mt-8"};function j(r,b,$,y,s,x){const a=e("base-input"),c=e("core-settings-row"),u=e("svg-circle-plus"),_=e("base-button"),p=e("base-select"),S=e("core-blur");return l(),g("div",D,[t(S,null,{default:i(()=>[o("div",R,n(s.strings.description),1),t(c,{name:s.strings.name,class:"info-name-row",align:""},{content:i(()=>[o("div",T,[t(a,{type:"text",size:"medium"}),o("span",O,n(s.strings.nameDesc),1)])]),_:1},8,["name"]),t(c,{class:"info-business-image",name:s.strings.image},{content:i(()=>[o("div",E,[t(a,{size:"medium",placeholder:s.strings.pasteYourImageUrl},null,8,["placeholder"]),t(_,{class:"insert-image",size:"medium",type:"black"},{default:i(()=>[t(u),m(" "+n(s.strings.uploadOrSelectImage),1)]),_:1}),t(_,{class:"remove-image",size:"medium",type:"gray"},{default:i(()=>[m(n(s.strings.remove),1)]),_:1})]),o("div",G,n(s.strings.minimumSize),1)]),_:1},8,["name"]),t(c,{name:s.strings.businessType,class:"info-business-type",align:""},{content:i(()=>[t(p,{size:"large",options:s.businessTypes,modelValue:"default"},null,8,["options"])]),_:1},8,["name"]),t(c,{name:s.strings.urls,class:"info-urls-row",align:""},{content:i(()=>[o("div",V,[o("div",N,[o("span",Y,n(s.strings.websiteDesc),1),t(a,{type:"text",size:"medium"})]),o("div",q,[o("span",M,n(s.strings.aboutDesc),1),t(a,{type:"text",size:"medium"})]),o("div",W,[o("span",H,n(s.strings.contactDesc),1),t(a,{type:"text",size:"medium"})])])]),_:1},8,["name"])]),_:1})])}const F=f(z,[["render",j]]);const J={components:{Blur:F,RequiredPlans:B,CoreCard:w,CoreProBadge:k,Cta:U},data(){return{features:[this.$t.__("Local Business Schema",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Business Info and Location blocks, widgets and shortcodes",this.$td),this.$t.__("Detailed Address, Contact and Payment Info",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},K={class:"aioseo-locations-lite"};function Q(r,b,$,y,s,x){const a=e("core-pro-badge"),c=e("blur"),u=e("required-plans"),_=e("cta"),p=e("core-card");return l(),g("div",K,[t(p,{slug:"localBusinessInfo",class:"aioseo-locations-card",noSlide:!0},{header:i(()=>[o("span",null,n(s.strings.businessInfo),1),t(a)]),default:i(()=>[t(c),t(_,{"cta-link":r.$links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":s.strings.ctaButtonText,"learn-more-link":r.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},{"header-text":i(()=>[m(n(s.strings.ctaHeader),1)]),description:i(()=>[t(u,{addon:"aioseo-local-business"}),m(" "+n(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const v=f(J,[["render",Q]]),X={mixins:[A],components:{Locations:v,Cta:P,Lite:v},data(){return{addonSlug:"aioseo-local-business",strings:{businessInfo:this.$t.__("Business Info",this.$td)}}}},Z={class:"aioseo-locations"};function ss(r,b,$,y,s,x){const a=e("locations",!0),c=e("cta"),u=e("lite");return l(),g("div",Z,[r.shouldShowMain?(l(),d(a,{key:0})):h("",!0),r.shouldShowUpdate||r.shouldShowActivate?(l(),d(c,{key:1,"card-slug":"localBusinessInfo","header-text":s.strings.businessInfo,"align-top":""},null,8,["header-text"])):h("",!0),r.shouldShowLite?(l(),d(u,{key:2})):h("",!0)])}const ks=f(X,[["render",ss]]);export{ks as default};
