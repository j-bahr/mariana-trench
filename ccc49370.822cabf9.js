(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(107),c=t(111),i=t(103);var m=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(108),o=t(116),u=t(115);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,i=a.metadata,d=i.title,v=i.description,E=i.nextItem,g=i.prevItem,b=i.editUrl,p=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:v,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,b&&r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u.a,null),"Edit this page")),(E||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:E,prevItem:g}))),!p&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{toc:a.toc})))))}},108:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(101),c=t(103),i=t(61),m=t.n(i);function s(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(m.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},111:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(101),c=t(105),i=t(24),m=t(103),s=t(113),o=t.n(s),u=t(104),d=t(62),v=t.n(d),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,s,d,g=e.children,b=e.frontMatter,p=e.metadata,f=e.truncated,N=e.isBlogPostPage,h=void 0!==N&&N,_=p.date,k=p.permalink,w=p.tags,I=p.readingTime,y=b.author,O=b.title,L=b.image,x=b.keywords,C=b.author_url||b.authorURL,j=b.author_title||b.authorTitle,M=b.author_image_url||b.authorImageURL,B=Object(u.a)(L,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,x&&x.length&&r.a.createElement("meta",{name:"keywords",content:x.join(",")}),L&&r.a.createElement("meta",{property:"og:image",content:B}),L&&r.a.createElement("meta",{name:"twitter:image",content:B}),L&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O})),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=_.substring(0,10).split("-"),n=t[0],s=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",v.a.blogPostTitle)},h?O:r.a.createElement(m.a,{to:k},O)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:_,className:v.a.blogPostDate},s," ",d,", ",n," ",I&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(I)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},M&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:M,alt:y})),r.a.createElement("div",{className:"avatar__intro"},y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},y)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},g)),(w.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:p.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,"Read More"))))))}},115:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),i=t(101),m=t(64),s=t.n(m);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(s.a.iconEdit,a)},t),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},116:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(101);var c=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,i=!1,m=document.getElementsByClassName(e);r<m.length&&!i;){var s=m[r],o=s.href,u=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(a),s.classList.add(a),c(s),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=t(63),m=t.n(i),s="table-of-contents__link";function o(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(m.a.tableOfContents,"thin-scrollbar")},r.a.createElement(o,{toc:a}))}}}]);