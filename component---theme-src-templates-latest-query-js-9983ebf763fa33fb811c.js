"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[523],{19271:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(93580),a=l(38121),r=l(27378),o=l(29601),i=l(45962);var s=function(e){var t,l,n,s=e.location,d=e.sidebarItems,c=(t="sidebar",l=r.useRef(),n=r.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),r.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&l.current&&(l.current.scrollTop=e)}),[t]),{ref:l,onScroll:n});return Array.isArray(d)&&d.length>0?r.createElement(a.Z,{display:["none",null,null,"block"],position:"sticky",top:o.M,height:"calc(100vh - "+o.M+"px)",minWidth:260,maxWidth:360,color:"auto.gray.8",bg:"auto.gray.0"},r.createElement(a.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},c,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),r.createElement(a.Z,{display:"flex",flexDirection:"column"},r.createElement(i.Z,{location:s,items:d})))):null},d=l(35280),c=l(89042);var u=function(e){var t=e.children,l=e.location,n=e.pageContext,i=n.sidebarItems,u=n.tagsGroups,m=n.slug,p=(0,d.u)(i,u),g=(0,c.Z)();return r.createElement(a.Z,{display:"flex",flexDirection:"column",minHeight:"100vh",bg:"bg.primary",color:"text.primary"},r.createElement(o.Z,{currentSlug:m,location:l,sidebarItems:p,tagsGroups:u}),r.createElement(f,{display:"flex",flex:"1 1 auto",flexDirection:"row"},r.createElement(s,{location:l,sidebarItems:p}),r.createElement(a.Z,{as:"main",flex:"1",maxWidth:g.contentMaxWidth},t)))},f=(0,n.ZP)(a.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0})},49278:function(e,t,l){var n=l(27378),a=l(87606),r=l(38121),o=l(33054),i=l(89042);t.Z=function(e){var t=e.nodes,l=e.shouldShowInstantView,s=void 0!==l&&l,d=e.forceMobile,c=void 0!==d&&d,u=(0,i.Z)(),f=t,m=function(e){return n.createElement(a.Z.a,Object.assign({},e,{references:s?f:[]}))};return n.createElement(r.Z,null,n.createElement(a.Z.ul,null,f&&f.filter((function(e){return"/404/"!==e.fields.slug&&(!e.frontmatter||!0!==e.frontmatter.draft)})).map((function(e){return n.createElement("li",{key:e.fields.slug},n.createElement(m,{href:e.fields.slug},e.fields.title),u.shouldShowLastUpdated&&e.fields.lastUpdated&&!c&&n.createElement(o.Z,{display:["none",null,null,"inline-block"],color:"text.placeholder",fontSize:1},"  - ",u.lastUpdatedText," ",e.fields.lastUpdated),u.shouldShowLastUpdated&&e.fields.lastUpdated&&n.createElement(r.Z,{display:c?"block":["block",null,null,"none"],color:"text.placeholder",fontSize:1,mb:2,mt:1},u.lastUpdatedText," ",e.fields.lastUpdated))}))))}},14319:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=l(27378),a=l(19271),r=l(13357),o=l(38121),i=l(7177),s=l.n(i),d=l(87606),c=l(49278),u=function(e){var t=e.data,l=e.pageContext,i=e.location,u=t.site.pathPrefix||"",f=l.slug,m=s()(u||"/",f),p=t.site.siteMetadata.siteUrl,g=s()(p,m),h=t.allMdx.nodes.sort((function(e,t){var l=new Date(e.fields.lastUpdatedAt||0).getTime();return new Date(t.fields.lastUpdatedAt||0).getTime()-l})),x=null,b=null;h.length>0&&(h[h.length-1].fields.gitCreatedAt&&(x=new Date(h[h.length-1].fields.gitCreatedAt)),h[0].fields.lastUpdatedAt&&(b=new Date(h[0].fields.lastUpdatedAt)));var y="Latest Posts",Z=h.map((function(e){return e.fields.title})).join(", "),E="All latest posts, "+Z.slice(0,256),w={title:y,frontmatterTitle:"",description:E,rawBody:Z,excerpt:E,datePublished:x,dateModified:b,category:"Latest",imageUrl:null,imageAlt:"",url:g,slug:f,tags:["All Posts"]};return n.createElement(a.Z,{pageContext:l,location:i},n.createElement(r.Z,{post:w}),n.createElement(o.Z,{py:"2",px:[4,5,6,7]},n.createElement(d.Z.h2,null,y),n.createElement(c.Z,{nodes:t.allMdx.nodes,shouldShowInstantView:!1})))}},35280:function(e,t,l){l.d(t,{u:function(){return n}});var n=function(e,t){return e.length>0?e:t.length>0?[{title:"Tags",items:t}]:[]}}}]);
//# sourceMappingURL=component---theme-src-templates-latest-query-js-9983ebf763fa33fb811c.js.map