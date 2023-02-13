(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{99055:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ue});var a=n(67294),i=n(1944),r=n(902);const s=a.createContext(null);function o(e){let{children:t,content:n}=e;const i=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:i},t)}function c(){const e=(0,a.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function l(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var p=n(86010),d=n(87524),_=n(87462),j=n(95999),u=n(32244);function m(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,j.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(u.Z,(0,_.Z)({},t,{subLabel:a.createElement(j.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(u.Z,(0,_.Z)({},n,{subLabel:a.createElement(j.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function S(){const{metadata:e}=c();return a.createElement(m,{previous:e.previous,next:e.next})}var E=n(52263),h=n(39960),g=n(94104),y=n(35281),x=n(60373),f=n(74477);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(j.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(j.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=v[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:i}=e;return a.createElement(j.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.default,{to:n,onClick:i},a.createElement(j.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,E.default)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,x.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,g.Jo)(r),l=o??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,p.default)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:c.label,to:l.path,onClick:()=>s(c.name)})))}function P(e){let{className:t}=e;const n=(0,f.E)();return n.banner?a.createElement(L,{className:t,versionMetadata:n}):null}function B(e){let{className:t}=e;const n=(0,f.E)();return n.badge?a.createElement("span",{className:(0,p.default)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(j.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(j.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function N(e){let{lastUpdatedBy:t}=e;return a.createElement(j.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:i}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(j.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:i?a.createElement(N,{lastUpdatedBy:i}):""}},"Last updated{atDate}{byUser}"),!1)}var T=n(86121),H=n.n(T),A=n(71526);const G="lastUpdated_vwxv";function O(e){return a.createElement("div",{className:(0,p.default)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(A.Z,e)))}function w(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,p.default)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(H(),{editUrl:t})),a.createElement("div",{className:(0,p.default)("col",G)},(n||i)&&a.createElement(M,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function U(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:r,tags:s}=e,o=s.length>0,l=!!(t||n||r);return o||l?a.createElement("footer",{className:(0,p.default)(y.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(O,{tags:s}),l&&a.createElement(w,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:i})):null}var I=n(86043),D=n(93743);const V="tocCollapsibleButton_TO0P",K="tocCollapsibleButtonExpanded_MG3E";function Z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,_.Z)({type:"button"},n,{className:(0,p.default)("clean-btn",V,!t&&K,n.className)}),a.createElement(j.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R="tocCollapsible_ETCw",W="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function F(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,I.u)({initialState:!0});return a.createElement("div",{className:(0,p.default)(R,!s&&z,n)},a.createElement(Z,{collapsed:s,onClick:o}),a.createElement(I.z,{lazy:!0,className:W,collapsed:s},a.createElement(D.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:r})))}const q="tocMobile_ITEo";function J(){const{toc:e,frontMatter:t}=c();return a.createElement(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,p.default)(y.k.docs.docTocMobile,q)})}var Y=n(39407);function $(){const{toc:e,frontMatter:t}=c();return a.createElement(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var X=n(92503),Q=n(51788),ee=n.n(Q);function te(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,p.default)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(X.Z,{as:"h1"},n)),a.createElement(ee(),null,t))}var ne=n(53438),ae=n(48596),ie=n(44996);function re(e){return a.createElement("svg",(0,_.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const se={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function oe(e){let{children:t,href:n,isLast:i}=e;const r="breadcrumbs__link";return i?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(h.default,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ce(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return a.createElement("li",(0,_.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,p.default)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(i+1)}))}function le(){const e=(0,ie.default)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.default,{"aria-label":(0,j.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,p.default)("breadcrumbs__link",se.breadcrumbsItemLink),href:e},a.createElement(re,{className:se.breadcrumbHomeIcon})))}function pe(){const e=(0,ne.s1)(),t=(0,ae.Ns)();return e?a.createElement("nav",{className:(0,p.default)(y.k.docs.docBreadcrumbs,se.breadcrumbsContainer),"aria-label":(0,j.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map(((t,n)=>{const i=n===e.length-1;return a.createElement(ce,{key:n,active:i,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:i},t.label))})))):null}const de="docItemContainer_Djhp",_e="docItemCol_VOVn";function je(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,d.i)(),i=e.hide_table_of_contents,r=!i&&t.length>0;return{hidden:i,mobile:r?a.createElement(J,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement($,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,p.default)("col",!n.hidden&&_e)},a.createElement(P,null),a.createElement("div",{className:de},a.createElement("article",null,a.createElement(pe,null),a.createElement(B,null),n.mobile,a.createElement(te,null,t),a.createElement(U,null)),a.createElement(S,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ue(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(o,{content:e.content},a.createElement(i.FG,{className:t},a.createElement(l,null),a.createElement(je,null,a.createElement(n,null))))}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),i=n(67294),r=n(86010),s=n(93743);const o="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return i.createElement("div",{className:(0,r.default)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),i=n(67294),r=n(86668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function p(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=p();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=l(o,{anchorTopOffset:n.current}),p=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===p)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function _(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(_,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const j=i.memo(_);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:_,...u}=e;const m=(0,r.L)(),S=p??m.tableOfContents.minHeadingLevel,E=_??m.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:S,maxHeadingLevel:E});return d((0,i.useMemo)((()=>{if(c&&l)return{linkClassName:c,linkActiveClassName:l,minHeadingLevel:S,maxHeadingLevel:E}}),[c,l,S,E])),i.createElement(j,(0,a.Z)({toc:h,className:n,linkClassName:c},u))}},74477:(e,t,n)=>{"use strict";n.d(t,{E:()=>o,q:()=>s});var a=n(67294),i=n(902);const r=a.createContext(null);function s(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new i.i6("DocsVersionProvider");return e}},62466:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(67294)),r=a(n(99055)),s=n(32471);t.default=function(e){return i.default.createElement(s.DocMetaProvider,{value:{frontMatter:e.content.frontMatter,metadata:e.content.metadata}},i.default.createElement(r.default,{...e}))}},7771:(e,t,n)=>{var a={"./Binary_Property/ASCII.js":46962,"./Binary_Property/ASCII_Hex_Digit.js":60270,"./Binary_Property/Alphabetic.js":26969,"./Binary_Property/Any.js":22499,"./Binary_Property/Assigned.js":9213,"./Binary_Property/Bidi_Control.js":38838,"./Binary_Property/Bidi_Mirrored.js":5720,"./Binary_Property/Case_Ignorable.js":49965,"./Binary_Property/Cased.js":32948,"./Binary_Property/Changes_When_Casefolded.js":65314,"./Binary_Property/Changes_When_Casemapped.js":78562,"./Binary_Property/Changes_When_Lowercased.js":12104,"./Binary_Property/Changes_When_NFKC_Casefolded.js":41347,"./Binary_Property/Changes_When_Titlecased.js":50589,"./Binary_Property/Changes_When_Uppercased.js":50046,"./Binary_Property/Dash.js":77336,"./Binary_Property/Default_Ignorable_Code_Point.js":32016,"./Binary_Property/Deprecated.js":42339,"./Binary_Property/Diacritic.js":97707,"./Binary_Property/Emoji.js":23694,"./Binary_Property/Emoji_Component.js":94007,"./Binary_Property/Emoji_Modifier.js":13916,"./Binary_Property/Emoji_Modifier_Base.js":98053,"./Binary_Property/Emoji_Presentation.js":10906,"./Binary_Property/Extended_Pictographic.js":66359,"./Binary_Property/Extender.js":17743,"./Binary_Property/Grapheme_Base.js":75530,"./Binary_Property/Grapheme_Extend.js":38693,"./Binary_Property/Hex_Digit.js":91556,"./Binary_Property/IDS_Binary_Operator.js":2103,"./Binary_Property/IDS_Trinary_Operator.js":18502,"./Binary_Property/ID_Continue.js":19494,"./Binary_Property/ID_Start.js":20567,"./Binary_Property/Ideographic.js":19586,"./Binary_Property/Join_Control.js":36983,"./Binary_Property/Logical_Order_Exception.js":72947,"./Binary_Property/Lowercase.js":49111,"./Binary_Property/Math.js":65667,"./Binary_Property/Noncharacter_Code_Point.js":20052,"./Binary_Property/Pattern_Syntax.js":60514,"./Binary_Property/Pattern_White_Space.js":78588,"./Binary_Property/Quotation_Mark.js":1053,"./Binary_Property/Radical.js":25361,"./Binary_Property/Regional_Indicator.js":94375,"./Binary_Property/Sentence_Terminal.js":89697,"./Binary_Property/Soft_Dotted.js":35514,"./Binary_Property/Terminal_Punctuation.js":21043,"./Binary_Property/Unified_Ideograph.js":75771,"./Binary_Property/Uppercase.js":28368,"./Binary_Property/Variation_Selector.js":27186,"./Binary_Property/White_Space.js":61846,"./Binary_Property/XID_Continue.js":74003,"./Binary_Property/XID_Start.js":3468,"./General_Category/Cased_Letter.js":13090,"./General_Category/Close_Punctuation.js":8526,"./General_Category/Connector_Punctuation.js":26100,"./General_Category/Control.js":80282,"./General_Category/Currency_Symbol.js":15352,"./General_Category/Dash_Punctuation.js":45647,"./General_Category/Decimal_Number.js":98349,"./General_Category/Enclosing_Mark.js":18220,"./General_Category/Final_Punctuation.js":88482,"./General_Category/Format.js":87586,"./General_Category/Initial_Punctuation.js":88147,"./General_Category/Letter.js":65964,"./General_Category/Letter_Number.js":66793,"./General_Category/Line_Separator.js":63061,"./General_Category/Lowercase_Letter.js":19340,"./General_Category/Mark.js":93748,"./General_Category/Math_Symbol.js":32895,"./General_Category/Modifier_Letter.js":66710,"./General_Category/Modifier_Symbol.js":43026,"./General_Category/Nonspacing_Mark.js":95580,"./General_Category/Number.js":90055,"./General_Category/Open_Punctuation.js":25622,"./General_Category/Other.js":76288,"./General_Category/Other_Letter.js":61453,"./General_Category/Other_Number.js":88795,"./General_Category/Other_Punctuation.js":47221,"./General_Category/Other_Symbol.js":66733,"./General_Category/Paragraph_Separator.js":12600,"./General_Category/Private_Use.js":61704,"./General_Category/Punctuation.js":36290,"./General_Category/Separator.js":64661,"./General_Category/Space_Separator.js":54343,"./General_Category/Spacing_Mark.js":11276,"./General_Category/Surrogate.js":93474,"./General_Category/Symbol.js":54581,"./General_Category/Titlecase_Letter.js":8550,"./General_Category/Unassigned.js":22525,"./General_Category/Uppercase_Letter.js":28829,"./Script/Adlam.js":56129,"./Script/Ahom.js":50147,"./Script/Anatolian_Hieroglyphs.js":50926,"./Script/Arabic.js":56820,"./Script/Armenian.js":14899,"./Script/Avestan.js":69929,"./Script/Balinese.js":30706,"./Script/Bamum.js":15533,"./Script/Bassa_Vah.js":89979,"./Script/Batak.js":83765,"./Script/Bengali.js":72693,"./Script/Bhaiksuki.js":10236,"./Script/Bopomofo.js":30468,"./Script/Brahmi.js":45770,"./Script/Braille.js":65529,"./Script/Buginese.js":74206,"./Script/Buhid.js":96208,"./Script/Canadian_Aboriginal.js":66700,"./Script/Carian.js":93961,"./Script/Caucasian_Albanian.js":74121,"./Script/Chakma.js":12128,"./Script/Cham.js":52189,"./Script/Cherokee.js":75033,"./Script/Chorasmian.js":73507,"./Script/Common.js":85998,"./Script/Coptic.js":56036,"./Script/Cuneiform.js":13563,"./Script/Cypriot.js":49182,"./Script/Cypro_Minoan.js":80084,"./Script/Cyrillic.js":84087,"./Script/Deseret.js":48844,"./Script/Devanagari.js":35690,"./Script/Dives_Akuru.js":57201,"./Script/Dogra.js":71932,"./Script/Duployan.js":95187,"./Script/Egyptian_Hieroglyphs.js":49778,"./Script/Elbasan.js":42781,"./Script/Elymaic.js":83103,"./Script/Ethiopic.js":26672,"./Script/Georgian.js":73661,"./Script/Glagolitic.js":85857,"./Script/Gothic.js":32096,"./Script/Grantha.js":71742,"./Script/Greek.js":62199,"./Script/Gujarati.js":11931,"./Script/Gunjala_Gondi.js":27600,"./Script/Gurmukhi.js":76482,"./Script/Han.js":26294,"./Script/Hangul.js":38858,"./Script/Hanifi_Rohingya.js":50043,"./Script/Hanunoo.js":95307,"./Script/Hatran.js":20280,"./Script/Hebrew.js":12674,"./Script/Hiragana.js":54058,"./Script/Imperial_Aramaic.js":70521,"./Script/Inherited.js":21448,"./Script/Inscriptional_Pahlavi.js":64086,"./Script/Inscriptional_Parthian.js":35772,"./Script/Javanese.js":98272,"./Script/Kaithi.js":52764,"./Script/Kannada.js":98276,"./Script/Katakana.js":98285,"./Script/Kayah_Li.js":10821,"./Script/Kharoshthi.js":67559,"./Script/Khitan_Small_Script.js":48304,"./Script/Khmer.js":39834,"./Script/Khojki.js":42593,"./Script/Khudawadi.js":64415,"./Script/Lao.js":37740,"./Script/Latin.js":46818,"./Script/Lepcha.js":7647,"./Script/Limbu.js":92627,"./Script/Linear_A.js":16193,"./Script/Linear_B.js":71901,"./Script/Lisu.js":25734,"./Script/Lycian.js":6450,"./Script/Lydian.js":28293,"./Script/Mahajani.js":48193,"./Script/Makasar.js":50865,"./Script/Malayalam.js":24789,"./Script/Mandaic.js":9535,"./Script/Manichaean.js":83061,"./Script/Marchen.js":76528,"./Script/Masaram_Gondi.js":9921,"./Script/Medefaidrin.js":93378,"./Script/Meetei_Mayek.js":6940,"./Script/Mende_Kikakui.js":3897,"./Script/Meroitic_Cursive.js":65999,"./Script/Meroitic_Hieroglyphs.js":59758,"./Script/Miao.js":65484,"./Script/Modi.js":34575,"./Script/Mongolian.js":75392,"./Script/Mro.js":36388,"./Script/Multani.js":60556,"./Script/Myanmar.js":15837,"./Script/Nabataean.js":6820,"./Script/Nandinagari.js":51892,"./Script/New_Tai_Lue.js":32003,"./Script/Newa.js":15297,"./Script/Nko.js":17594,"./Script/Nushu.js":7493,"./Script/Nyiakeng_Puachue_Hmong.js":14406,"./Script/Ogham.js":75847,"./Script/Ol_Chiki.js":88416,"./Script/Old_Hungarian.js":40115,"./Script/Old_Italic.js":29109,"./Script/Old_North_Arabian.js":96840,"./Script/Old_Permic.js":39291,"./Script/Old_Persian.js":24678,"./Script/Old_Sogdian.js":78647,"./Script/Old_South_Arabian.js":70744,"./Script/Old_Turkic.js":59527,"./Script/Old_Uyghur.js":11791,"./Script/Oriya.js":23761,"./Script/Osage.js":39384,"./Script/Osmanya.js":90237,"./Script/Pahawh_Hmong.js":62976,"./Script/Palmyrene.js":60351,"./Script/Pau_Cin_Hau.js":19767,"./Script/Phags_Pa.js":25712,"./Script/Phoenician.js":86458,"./Script/Psalter_Pahlavi.js":74874,"./Script/Rejang.js":27603,"./Script/Runic.js":84788,"./Script/Samaritan.js":45810,"./Script/Saurashtra.js":37632,"./Script/Sharada.js":15058,"./Script/Shavian.js":76250,"./Script/Siddham.js":39573,"./Script/SignWriting.js":54039,"./Script/Sinhala.js":1611,"./Script/Sogdian.js":34250,"./Script/Sora_Sompeng.js":43065,"./Script/Soyombo.js":18135,"./Script/Sundanese.js":95849,"./Script/Syloti_Nagri.js":46566,"./Script/Syriac.js":7810,"./Script/Tagalog.js":67833,"./Script/Tagbanwa.js":58009,"./Script/Tai_Le.js":1187,"./Script/Tai_Tham.js":40377,"./Script/Tai_Viet.js":99e3,"./Script/Takri.js":72294,"./Script/Tamil.js":98682,"./Script/Tangsa.js":77808,"./Script/Tangut.js":75540,"./Script/Telugu.js":65084,"./Script/Thaana.js":6867,"./Script/Thai.js":49907,"./Script/Tibetan.js":29341,"./Script/Tifinagh.js":81261,"./Script/Tirhuta.js":57954,"./Script/Toto.js":68196,"./Script/Ugaritic.js":29097,"./Script/Vai.js":5767,"./Script/Vithkuqi.js":45785,"./Script/Wancho.js":27172,"./Script/Warang_Citi.js":17315,"./Script/Yezidi.js":34961,"./Script/Yi.js":90923,"./Script/Zanabazar_Square.js":92108,"./Script_Extensions/Adlam.js":99614,"./Script_Extensions/Ahom.js":24915,"./Script_Extensions/Anatolian_Hieroglyphs.js":8983,"./Script_Extensions/Arabic.js":75627,"./Script_Extensions/Armenian.js":13585,"./Script_Extensions/Avestan.js":79384,"./Script_Extensions/Balinese.js":47072,"./Script_Extensions/Bamum.js":31856,"./Script_Extensions/Bassa_Vah.js":24945,"./Script_Extensions/Batak.js":92147,"./Script_Extensions/Bengali.js":61530,"./Script_Extensions/Bhaiksuki.js":64063,"./Script_Extensions/Bopomofo.js":29962,"./Script_Extensions/Brahmi.js":61752,"./Script_Extensions/Braille.js":28434,"./Script_Extensions/Buginese.js":15148,"./Script_Extensions/Buhid.js":78881,"./Script_Extensions/Canadian_Aboriginal.js":55254,"./Script_Extensions/Carian.js":79110,"./Script_Extensions/Caucasian_Albanian.js":76550,"./Script_Extensions/Chakma.js":88753,"./Script_Extensions/Cham.js":98451,"./Script_Extensions/Cherokee.js":80196,"./Script_Extensions/Chorasmian.js":23352,"./Script_Extensions/Common.js":46921,"./Script_Extensions/Coptic.js":44141,"./Script_Extensions/Cuneiform.js":30286,"./Script_Extensions/Cypriot.js":73326,"./Script_Extensions/Cypro_Minoan.js":82300,"./Script_Extensions/Cyrillic.js":77115,"./Script_Extensions/Deseret.js":59108,"./Script_Extensions/Devanagari.js":59426,"./Script_Extensions/Dives_Akuru.js":44660,"./Script_Extensions/Dogra.js":41422,"./Script_Extensions/Duployan.js":66667,"./Script_Extensions/Egyptian_Hieroglyphs.js":20449,"./Script_Extensions/Elbasan.js":25810,"./Script_Extensions/Elymaic.js":83509,"./Script_Extensions/Ethiopic.js":37837,"./Script_Extensions/Georgian.js":77680,"./Script_Extensions/Glagolitic.js":97772,"./Script_Extensions/Gothic.js":60674,"./Script_Extensions/Grantha.js":52336,"./Script_Extensions/Greek.js":86310,"./Script_Extensions/Gujarati.js":92436,"./Script_Extensions/Gunjala_Gondi.js":20642,"./Script_Extensions/Gurmukhi.js":33831,"./Script_Extensions/Han.js":16613,"./Script_Extensions/Hangul.js":87001,"./Script_Extensions/Hanifi_Rohingya.js":88583,"./Script_Extensions/Hanunoo.js":82758,"./Script_Extensions/Hatran.js":66416,"./Script_Extensions/Hebrew.js":85222,"./Script_Extensions/Hiragana.js":60191,"./Script_Extensions/Imperial_Aramaic.js":57632,"./Script_Extensions/Inherited.js":96988,"./Script_Extensions/Inscriptional_Pahlavi.js":52121,"./Script_Extensions/Inscriptional_Parthian.js":82809,"./Script_Extensions/Javanese.js":31899,"./Script_Extensions/Kaithi.js":57574,"./Script_Extensions/Kannada.js":81868,"./Script_Extensions/Katakana.js":10774,"./Script_Extensions/Kayah_Li.js":76701,"./Script_Extensions/Kharoshthi.js":81466,"./Script_Extensions/Khitan_Small_Script.js":21325,"./Script_Extensions/Khmer.js":6068,"./Script_Extensions/Khojki.js":77706,"./Script_Extensions/Khudawadi.js":54258,"./Script_Extensions/Lao.js":77149,"./Script_Extensions/Latin.js":38334,"./Script_Extensions/Lepcha.js":12299,"./Script_Extensions/Limbu.js":25476,"./Script_Extensions/Linear_A.js":54625,"./Script_Extensions/Linear_B.js":38810,"./Script_Extensions/Lisu.js":90845,"./Script_Extensions/Lycian.js":68978,"./Script_Extensions/Lydian.js":67905,"./Script_Extensions/Mahajani.js":89576,"./Script_Extensions/Makasar.js":3405,"./Script_Extensions/Malayalam.js":974,"./Script_Extensions/Mandaic.js":28940,"./Script_Extensions/Manichaean.js":6677,"./Script_Extensions/Marchen.js":14740,"./Script_Extensions/Masaram_Gondi.js":82278,"./Script_Extensions/Medefaidrin.js":55949,"./Script_Extensions/Meetei_Mayek.js":13329,"./Script_Extensions/Mende_Kikakui.js":97146,"./Script_Extensions/Meroitic_Cursive.js":23715,"./Script_Extensions/Meroitic_Hieroglyphs.js":43199,"./Script_Extensions/Miao.js":26499,"./Script_Extensions/Modi.js":36995,"./Script_Extensions/Mongolian.js":98606,"./Script_Extensions/Mro.js":11462,"./Script_Extensions/Multani.js":45402,"./Script_Extensions/Myanmar.js":76318,"./Script_Extensions/Nabataean.js":34924,"./Script_Extensions/Nandinagari.js":8236,"./Script_Extensions/New_Tai_Lue.js":14575,"./Script_Extensions/Newa.js":71314,"./Script_Extensions/Nko.js":40577,"./Script_Extensions/Nushu.js":44432,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":53612,"./Script_Extensions/Ogham.js":19298,"./Script_Extensions/Ol_Chiki.js":55285,"./Script_Extensions/Old_Hungarian.js":16737,"./Script_Extensions/Old_Italic.js":73023,"./Script_Extensions/Old_North_Arabian.js":35723,"./Script_Extensions/Old_Permic.js":56370,"./Script_Extensions/Old_Persian.js":1402,"./Script_Extensions/Old_Sogdian.js":14718,"./Script_Extensions/Old_South_Arabian.js":40316,"./Script_Extensions/Old_Turkic.js":5462,"./Script_Extensions/Old_Uyghur.js":2280,"./Script_Extensions/Oriya.js":29434,"./Script_Extensions/Osage.js":77045,"./Script_Extensions/Osmanya.js":82301,"./Script_Extensions/Pahawh_Hmong.js":84766,"./Script_Extensions/Palmyrene.js":72685,"./Script_Extensions/Pau_Cin_Hau.js":34107,"./Script_Extensions/Phags_Pa.js":66506,"./Script_Extensions/Phoenician.js":42186,"./Script_Extensions/Psalter_Pahlavi.js":55507,"./Script_Extensions/Rejang.js":35435,"./Script_Extensions/Runic.js":76355,"./Script_Extensions/Samaritan.js":1509,"./Script_Extensions/Saurashtra.js":23386,"./Script_Extensions/Sharada.js":86116,"./Script_Extensions/Shavian.js":51826,"./Script_Extensions/Siddham.js":22026,"./Script_Extensions/SignWriting.js":96007,"./Script_Extensions/Sinhala.js":51104,"./Script_Extensions/Sogdian.js":82401,"./Script_Extensions/Sora_Sompeng.js":44399,"./Script_Extensions/Soyombo.js":37415,"./Script_Extensions/Sundanese.js":3894,"./Script_Extensions/Syloti_Nagri.js":5419,"./Script_Extensions/Syriac.js":21038,"./Script_Extensions/Tagalog.js":1744,"./Script_Extensions/Tagbanwa.js":54217,"./Script_Extensions/Tai_Le.js":63153,"./Script_Extensions/Tai_Tham.js":4926,"./Script_Extensions/Tai_Viet.js":39311,"./Script_Extensions/Takri.js":55970,"./Script_Extensions/Tamil.js":80882,"./Script_Extensions/Tangsa.js":92138,"./Script_Extensions/Tangut.js":46776,"./Script_Extensions/Telugu.js":40444,"./Script_Extensions/Thaana.js":23431,"./Script_Extensions/Thai.js":94846,"./Script_Extensions/Tibetan.js":137,"./Script_Extensions/Tifinagh.js":67065,"./Script_Extensions/Tirhuta.js":98082,"./Script_Extensions/Toto.js":6715,"./Script_Extensions/Ugaritic.js":29213,"./Script_Extensions/Vai.js":85388,"./Script_Extensions/Vithkuqi.js":97706,"./Script_Extensions/Wancho.js":68659,"./Script_Extensions/Warang_Citi.js":27900,"./Script_Extensions/Yezidi.js":8051,"./Script_Extensions/Yi.js":99799,"./Script_Extensions/Zanabazar_Square.js":25904,"./index.js":94274,"./unicode-version.js":47993};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=7771}}]);