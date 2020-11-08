_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CxPS:function(e,t,s){"use strict";var n=s("zLVn"),r=s("wx14"),a=s("dI71"),i=s("mwIZ"),l=s.n(i),c=s("JZM8"),o=s.n(c),d=s("TP7S"),h=s.n(d),p=s("q1tI"),u=s("17x9"),m=s.n(u),f=s("TSYQ"),b=s.n(f),g=s("t9zn"),j=s("2rm+"),x=s("MRKn"),y=s("kFEl"),T=function(e){function t(t){var s;return(s=e.call(this,t)||this).handleSelect=function(e){e.persist();var t=s.props,n=t.onSelect,r=t.eventKey;n&&n(r,e),s.handleToggle()},s.handleToggle=function(){s.setState({expanded:!s.state.expanded})},s.addPrefix=function(e){return Object(j.a)(s.props.classPrefix)(e)},s.state={expanded:t.defaultExpanded},s}Object(a.a)(t,e);var s=t.prototype;return s.isExpanded=function(){return h()(this.props.expanded)?this.state.expanded:this.props.expanded},s.renderCollapsibleTitle=function(e,t){return p.createElement("span",{className:this.addPrefix("title"),role:"presentation"},this.renderAnchor(e,t))},s.renderCollapsibleBody=function(e){var t=this,s=this.props.id,a=Object(r.a)({},o()(this.props,Object.keys(g.a.propTypes)),{in:this.isExpanded()}),i={id:s?""+s:null,"aria-hidden":!this.isExpanded()};return e&&(i.role=e),p.createElement(g.a,a,(function(e,s){var a=e.className,l=Object(n.a)(e,["className"]);return p.createElement("div",Object(r.a)({},i,l,{className:b()(t.addPrefix("collapse"),a),ref:s}),t.renderBody())}))},s.renderBody=function(){var e,t=this.props,s=t.children,n=t.bodyFill,r=b()(this.addPrefix("body"),((e={})[this.addPrefix("body-fill")]=n,e));return p.createElement("div",{className:r},s)},s.renderHeading=function(e){var t=this.props.header;if(!t)return null;if(!p.isValidElement(t)||Array.isArray(t))t=this.props.collapsible?this.renderCollapsibleTitle(t,e):t;else{var s=b()(this.addPrefix("title"),l()(t,"props.className"));t=p.cloneElement(t,{className:s})}return p.createElement("div",{role:"rowheader",className:this.addPrefix("heading"),onClick:this.handleSelect,tabIndex:-1},t)},s.renderAnchor=function(e,t){var s=this.props,n=s.id,r=s.collapsible;return p.createElement("span",{"aria-controls":r?""+n:null,className:this.isExpanded()?null:"collapsed","aria-expanded":this.isExpanded(),"aria-selected":this.isExpanded(),role:t},e)},s.render=function(){var e,s=this.props,a=s.headerRole,i=s.panelRole,l=s.className,c=s.collapsible,o=s.bordered,d=s.shaded,h=s.classPrefix,u=s.id,m=Object(n.a)(s,["headerRole","panelRole","className","collapsible","bordered","shaded","classPrefix","id"]),f=b()(l,h,this.addPrefix("default"),((e={})[this.addPrefix("in")]=this.isExpanded(),e[this.addPrefix("collapsible")]=c,e[this.addPrefix("bordered")]=o,e[this.addPrefix("shaded")]=d,e)),g=Object(x.a)(t,m);return p.createElement("div",Object(r.a)({},g,{className:f,id:c?null:u}),this.renderHeading(a),c?this.renderCollapsibleBody(i):this.renderBody())},t}(p.Component);T.propTypes={collapsible:m.a.bool,bordered:m.a.bool,shaded:m.a.bool,bodyFill:m.a.bool,header:m.a.any,id:m.a.oneOf([m.a.number,m.a.string]),defaultExpanded:m.a.bool,expanded:m.a.bool,eventKey:m.a.any,headerRole:m.a.string,panelRole:m.a.string,classPrefix:m.a.string,children:m.a.node,onSelect:m.a.func,onEnter:m.a.func,onEntering:m.a.func,onEntered:m.a.func,onExit:m.a.func,onExiting:m.a.func,onExited:m.a.func,className:m.a.string};var O=Object(y.a)({classPrefix:"panel"})(T);t.a=O},cqan:function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),r=(s("q1tI"),s("8Kt/")),a=s.n(r),i=s("uwoR"),l=s("CxPS"),c=s("apO0"),o=["SMT (surface mount technology) stencils, some times called SMD (surface mount device) stencils or PCB (printed circuit board) stencils are used during PCBs assembly process.\n    SMT stencils are thin sheets of metal (usualy stainless steel) or some other material with openings which are called appertures.","The sole purpose of an SMT stencil is to apply accurate amount of solder paste to a bare circuit board.\n    Once the stencil is properly aligned on top of the board, solder paste is applied over the openings (making a single pass, using a metal squeegee blade).\n    When the SMT stencil is removed from the board, solder paste will remain, ready for placement of the SMD components.\n    This process, as opposed to hand soldering methods, ensures consistency, saves alot of time and allows mass production.","Sheet thickness and aperture opening size control the volume of solder paste deposited on the board.\n    Too much solder paste causes solder balling, bridging, and tomb-stoning.\n    A lack of solder paste creates insufficient solder joints.\n    All of which compromise the electrical functionality of the board.\n    This is why it is recomended to use SMT stencils during PCB assembly.","SMT stencils are made of robust materials and can be manufactured in three different ways:","There are two types of SMT stencils based on their usage - Framed SMT stencil and Frameless STM stencils."],d=["chemical etching","electroforming","laser cutting"],h=["As the name suggests the apertures are made through chemical etching.\n    Chemical etched SMT stencil cost less but are also with the lowest quality.","The only time you should opt for etched stencils is when a multi-level is required and even then the apertures are laser cut.\n    The etch process for apertures is restrictive in that the minimum size achievable is around 3/2 times the sheet thickness.\n    This is not a problem with a laser cut stencil."],p=["Framed stencils are used in large volume PCB production runs.\n    These type of SMT stencils are permanently fixed on a frame.\n    They receive the necessary tension from border mesh.\n    Because of the frame it's less likely to have misalignment because the sheet can not slide around.","If you have the right equipment you can use frameless SMT stencils and stretch them into a frame yourself,\n    but unless you're a board fab house its unlikely that this is cost effective."],u=["Frameless SMT stencils are for","carring in universal or reusable frames;","hand printing of PCBs."],m=["SMT Stencils","SMT stencils through Chemical Etching","SMT stencils through Electroforming","SMT stencils through Laser cutting","SMT stencils through Laser cutting","Frameless SMT stencils"];t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(a.a,{children:Object(n.jsx)("title",{children:"SMT-Stencils"})}),Object(n.jsx)(c.a,{children:Object(n.jsxs)("main",{style:{width:"60%",marginLeft:"auto",marginRight:"auto"},children:[Object(n.jsx)(i.a,{style:{marginTop:"4rem"}}),Object(n.jsxs)(l.a,{header:m[0],children:[Object(n.jsx)("img",{width:"800",height:"300",src:"https://www.pcbelec.com/wp-content/uploads/2020/07/Unframe-SMT-Stencil.png"}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:o[0]}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:o[1]}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:o[2]}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:o[3]}),Object(n.jsxs)("ul",{style:{marginTop:"1rem"},children:[Object(n.jsx)("li",{children:d[0]}),Object(n.jsx)("li",{children:d[1]}),Object(n.jsx)("li",{children:d[2]})]}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:o[4]})]}),Object(n.jsxs)(l.a,{header:m[1],style:{marginTop:"1rem"},children:[Object(n.jsx)("p",{children:h[0]}),Object(n.jsx)("p",{style:{marginTop:"2rem"},children:h[1]})]}),Object(n.jsx)(l.a,{header:m[2],style:{marginTop:"1rem"},children:Object(n.jsx)("p",{children:"Electroformed SMT stencils are usualy with the highest quality but their cost is also highest and take longer time to produce."})}),Object(n.jsx)(l.a,{header:m[3],style:{marginTop:"1rem"},children:Object(n.jsx)("p",{children:"Apertures are created using laser machine.\nLaser cutting produces accurate results and takes less time for manufacturing.\nThis is why laser cutting is the prefered technology for producing SMT stencils.\nIn fact over 90% of SMT stencils around the word are made through laser cutting."})}),Object(n.jsxs)(l.a,{header:m[4],style:{marginTop:"2rem"},children:[Object(n.jsx)("img",{width:"500",height:"300",src:"https://www.pcbelec.com/wp-content/uploads/2020/07/Framed-PCB-Stencil.png"}),Object(n.jsx)("p",{style:{marginTop:"1rem"},children:p[0]}),Object(n.jsx)("p",{style:{marginTop:12},children:p[1]})]}),Object(n.jsxs)(l.a,{header:m[5],style:{marginTop:"2rem"},children:[Object(n.jsx)("img",{width:"300",height:"300",style:{marginLeft:120},src:"https://www.pcbunlimited.com/spree/products/25/product/stainless_steel_smt_stencil.jpg?1526575336"}),Object(n.jsx)("p",{style:{marginTop:"1rem"},children:u[0]}),Object(n.jsxs)("ul",{style:{marginTop:"1rem"},children:[Object(n.jsx)("li",{children:u[1]}),Object(n.jsx)("li",{children:u[2]})]})]}),Object(n.jsx)(i.a,{style:{marginTop:"2rem"}})]})})]})}},hQMQ:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/smt-stencils/introduction",function(){return s("cqan")}])},uwoR:function(e,t,s){"use strict";var n=s("wx14"),r=s("zLVn"),a=s("dI71"),i=s("q1tI"),l=s("TSYQ"),c=s.n(l),o=s("17x9"),d=s.n(o),h=s("2rm+"),p=s("kFEl"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e,t=this.props,s=t.vertical,a=t.componentClass,l=t.className,o=t.children,d=t.classPrefix,p=Object(r.a)(t,["vertical","componentClass","className","children","classPrefix"]),u=Object(h.a)(d),m=c()(d,l,((e={})[u("vertical")]=s,e[u("horizontal")]=!s,e[u("with-text")]=!!o,e));return i.createElement(a,Object(n.a)({},p,{className:m}),o?i.createElement("span",{className:u("inner-text")},o):null)},t}(i.Component);u.propTypes={className:d.a.string,vertical:d.a.bool,classPrefix:d.a.string,children:d.a.node,componentClass:d.a.elementType};var m=Object(p.a)({componentClass:"div",classPrefix:"divider"})(u);t.a=m}},[["hQMQ",0,2,1,3]]]);