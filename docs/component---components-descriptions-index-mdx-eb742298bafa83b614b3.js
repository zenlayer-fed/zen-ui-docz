(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FhPS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("lAjr");var l=n("gMlf"),a=(n("yhOr"),n("znpr")),r=n("/FXl"),i=n("TjRS"),b=n("ZFoC");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/descriptions/index.mdx"}});var m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=(m("Item"),m("Group"),{_frontmatter:c}),d=i.a;function s(e){var t,n,m,s,u=e.components,O=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(d,o({},p,O,{components:u,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"descriptions-描述列表"},"Descriptions 描述列表"),Object(r.b)("p",null,"成组展示多个只读字段。\n常见于详情页的信息展示。"),Object(r.b)("p",null,"使用Css Grid实现，请注意兼容问题。",Object(r.b)("a",o({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"}),"阮一峰的网络日志/Grid")),Object(r.b)("h2",{id:"基本用法"},"基本用法"),Object(r.b)(b.c,{__position:0,__code:'() => {\n  const { Group, Item } = Descriptions\n  return (\n    <Descriptions title="Order Info">\n      <Item label="Sales Quotation Type">Standard</Item>\n      <Item label="SOF">2 months</Item>\n      <Item label="Renewal Policy">According to SO term renewal</Item>\n      <Item label="SOF">2 months</Item>\n      <Item label="Renewal Policy">According to SO term renewal</Item>\n    </Descriptions>\n  )\n}',__scope:(t={props:O,DefaultLayout:i.a,Playground:b.c,Props:b.d,Descriptions:a.default,Divider:l.a},t.DefaultLayout=i.a,t._frontmatter=c,t),mdxType:"Playground"},(function(){a.default.Group;var e=a.default.Item;return Object(r.b)(a.default,{title:"Order Info",mdxType:"Descriptions"},Object(r.b)(e,{label:"Sales Quotation Type",mdxType:"Item"},"Standard"),Object(r.b)(e,{label:"SOF",mdxType:"Item"},"2 months"),Object(r.b)(e,{label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"),Object(r.b)(e,{label:"SOF",mdxType:"Item"},"2 months"),Object(r.b)(e,{label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"))})),Object(r.b)("h2",{id:"内容和描述横向"},"内容和描述横向"),Object(r.b)(b.c,{__position:1,__code:'() => {\n  const { Group, Item } = Descriptions\n  return (\n    <Descriptions title="Order Info">\n      <Item direction="horizontal" label="Sales Quotation Type">\n        Standard\n      </Item>\n      <Item direction="horizontal" label="SOF">\n        2 months\n      </Item>\n      <Item direction="horizontal" label="Renewal Policy">\n        According to SO term renewal\n      </Item>\n      <Item direction="horizontal" label="Renewal Policy">\n        According to SO term renewal\n      </Item>\n      <Item direction="horizontal" label="Sales Quotation Type">\n        Standard\n      </Item>\n      <Item direction="horizontal" label="SOF">\n        2 months\n      </Item>\n    </Descriptions>\n  )\n}',__scope:(n={props:O,DefaultLayout:i.a,Playground:b.c,Props:b.d,Descriptions:a.default,Divider:l.a},n.DefaultLayout=i.a,n._frontmatter=c,n),mdxType:"Playground"},(function(){a.default.Group;var e=a.default.Item;return Object(r.b)(a.default,{title:"Order Info",mdxType:"Descriptions"},Object(r.b)(e,{direction:"horizontal",label:"Sales Quotation Type",mdxType:"Item"},"Standard"),Object(r.b)(e,{direction:"horizontal",label:"SOF",mdxType:"Item"},"2 months"),Object(r.b)(e,{direction:"horizontal",label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"),Object(r.b)(e,{direction:"horizontal",label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"),Object(r.b)(e,{direction:"horizontal",label:"Sales Quotation Type",mdxType:"Item"},"Standard"),Object(r.b)(e,{direction:"horizontal",label:"SOF",mdxType:"Item"},"2 months"))})),Object(r.b)("h2",{id:"成片出现"},"成片出现"),Object(r.b)(b.c,{__position:2,__code:'() => {\n  const { Group, Item } = Descriptions\n  return (\n    <Group>\n      <Descriptions title="Order Info" column={4}>\n        <Item label="Sales Quotation Type">Standard</Item>\n        <Item label="SOF">2 months</Item>\n        <Item label="Renewal Policy">According to SO term renewal</Item>\n        <Item label="Tax Ratio">0.0.0</Item>\n      </Descriptions>\n      <Descriptions title="Billing Info" column={4}>\n        <Item label="Billing Method" columnSpan={2}>\n          Post-bill。。。。。。。。。。。。。。。。。。。。。\n        </Item>\n        <Item label="Billing Cycle">Monthly</Item>\n        <Item label="Delivery Date">1 first day of every month</Item>\n        <Item label="Renewal Policy">According to SO term renewal</Item>\n        <Item label="Tax Ratio">0.0.0</Item>\n      </Descriptions>\n      <Descriptions title="Cancellation" column={4}>\n        <Item>No early cancellation during SO term</Item>\n      </Descriptions>\n    </Group>\n  )\n}',__scope:(m={props:O,DefaultLayout:i.a,Playground:b.c,Props:b.d,Descriptions:a.default,Divider:l.a},m.DefaultLayout=i.a,m._frontmatter=c,m),mdxType:"Playground"},(function(){var e=a.default.Group,t=a.default.Item;return Object(r.b)(e,{mdxType:"Group"},Object(r.b)(a.default,{title:"Order Info",column:4,mdxType:"Descriptions"},Object(r.b)(t,{label:"Sales Quotation Type",mdxType:"Item"},"Standard"),Object(r.b)(t,{label:"SOF",mdxType:"Item"},"2 months"),Object(r.b)(t,{label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"),Object(r.b)(t,{label:"Tax Ratio",mdxType:"Item"},"0.0.0")),Object(r.b)(a.default,{title:"Billing Info",column:4,mdxType:"Descriptions"},Object(r.b)(t,{label:"Billing Method",columnSpan:2,mdxType:"Item"},"Post-bill。。。。。。。。。。。。。。。。。。。。。"),Object(r.b)(t,{label:"Billing Cycle",mdxType:"Item"},"Monthly"),Object(r.b)(t,{label:"Delivery Date",mdxType:"Item"},"1 first day of every month"),Object(r.b)(t,{label:"Renewal Policy",mdxType:"Item"},"According to SO term renewal"),Object(r.b)(t,{label:"Tax Ratio",mdxType:"Item"},"0.0.0")),Object(r.b)(a.default,{title:"Cancellation",column:4,mdxType:"Descriptions"},Object(r.b)(t,{mdxType:"Item"},"No early cancellation during SO term")))})),Object(r.b)("h2",{id:"一坨屎的成片出现"},"一坨屎的成片出现"),Object(r.b)(b.c,{__position:3,__code:'() => {\n  const { Group, Item } = Descriptions\n  return (\n    <Group>\n      <div style={{ display: \'flex\', alignItems: \'flex-end\' }}>\n        <Descriptions title="Basic Info" column={2} style={{ flex: 1 }}>\n          <Item label="Customer">Company A Inc.</Item>\n          <Item label="Main contact">Mark Zhao (example@hotmail.com)</Item>\n          <Item columnSpan={2} label="Address">\n            13939 South San Antonio Dr, Norwalk, CA 90650, USA\n          </Item>\n        </Descriptions>\n        <Divider type="vertical" style={{ height: \'125px\' }} />\n        <Descriptions column={2} style={{ flex: 1 }}>\n          <Item label="Signature Entity" style={{ marginLeft: \'56px\' }}>\n            Zenlayer Inc.\n          </Item>\n          <Item label="Sales">YangGang (example@hotmail.com)</Item>\n          <Item\n            columnSpan={2}\n            label="Created time"\n            style={{ marginLeft: \'56px\' }}\n          >\n            2020–05-12 19:23:15\n          </Item>\n        </Descriptions>\n      </div>\n      <Descriptions title="Order Info" column={4}>\n        <Item label="Sales Quotation Type">Standard</Item>\n        <Item label="SOF">2 months</Item>\n        <Item label="Renewal Policy" style={{ marginLeft: \'64px\' }}>\n          According to SO term renewal\n        </Item>\n      </Descriptions>\n      <Descriptions title="Billing Info" column={4}>\n        <Item label="Billing Method">Post-bill</Item>\n        <Item label="Billing Cycle">Monthly</Item>\n        <Item label="Delivery Date" style={{ marginLeft: \'64px\' }}>\n          1 first day of every month\n        </Item>\n        <Item label="Tax Ratio">0.0.0</Item>\n      </Descriptions>\n      <Descriptions title="Cancellation" column={4}>\n        <Item>No early cancellation during SO term</Item>\n      </Descriptions>\n    </Group>\n  )\n}',__scope:(s={props:O,DefaultLayout:i.a,Playground:b.c,Props:b.d,Descriptions:a.default,Divider:l.a},s.DefaultLayout=i.a,s._frontmatter=c,s),mdxType:"Playground"},(function(){var e=a.default.Group,t=a.default.Item;return Object(r.b)(e,{mdxType:"Group"},Object(r.b)("div",{style:{display:"flex",alignItems:"flex-end"}},Object(r.b)(a.default,{title:"Basic Info",column:2,style:{flex:1},mdxType:"Descriptions"},Object(r.b)(t,{label:"Customer",mdxType:"Item"},"Company A Inc."),Object(r.b)(t,{label:"Main contact",mdxType:"Item"},"Mark Zhao (example@hotmail.com)"),Object(r.b)(t,{columnSpan:2,label:"Address",mdxType:"Item"},"13939 South San Antonio Dr, Norwalk, CA 90650, USA")),Object(r.b)(l.a,{type:"vertical",style:{height:"125px"},mdxType:"Divider"}),Object(r.b)(a.default,{column:2,style:{flex:1},mdxType:"Descriptions"},Object(r.b)(t,{label:"Signature Entity",style:{marginLeft:"56px"},mdxType:"Item"},"Zenlayer Inc."),Object(r.b)(t,{label:"Sales",mdxType:"Item"},"YangGang (example@hotmail.com)"),Object(r.b)(t,{columnSpan:2,label:"Created time",style:{marginLeft:"56px"},mdxType:"Item"},"2020–05-12 19:23:15"))),Object(r.b)(a.default,{title:"Order Info",column:4,mdxType:"Descriptions"},Object(r.b)(t,{label:"Sales Quotation Type",mdxType:"Item"},"Standard"),Object(r.b)(t,{label:"SOF",mdxType:"Item"},"2 months"),Object(r.b)(t,{label:"Renewal Policy",style:{marginLeft:"64px"},mdxType:"Item"},"According to SO term renewal")),Object(r.b)(a.default,{title:"Billing Info",column:4,mdxType:"Descriptions"},Object(r.b)(t,{label:"Billing Method",mdxType:"Item"},"Post-bill"),Object(r.b)(t,{label:"Billing Cycle",mdxType:"Item"},"Monthly"),Object(r.b)(t,{label:"Delivery Date",style:{marginLeft:"64px"},mdxType:"Item"},"1 first day of every month"),Object(r.b)(t,{label:"Tax Ratio",mdxType:"Item"},"0.0.0")),Object(r.b)(a.default,{title:"Cancellation",column:4,mdxType:"Descriptions"},Object(r.b)(t,{mdxType:"Item"},"No early cancellation during SO term")))})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"descriptions"},"Descriptions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"属性"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"说明"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"类型"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"描述列表的标题，显示在最顶部"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"ReactNode"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"column"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"一行的 Items 数量，就是将内容区域分成几列"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"justifyItems"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Item内容在分块内的对齐方式"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'start' ","|"," 'end' ","|"," 'center' ","|"," 'stretch'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'stretch'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions容器宽度"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'string' ","|"," 'number'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions容器高度"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'string' ","|"," 'number'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions组件最外层className"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"style"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions组件最外层样式"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"CSSProperties"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"descriptionsitem"},"Descriptions.Item"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"属性"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"说明"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"类型"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"内容的描述"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"ReactNode"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"columnSpan"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Item横跨几列"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"rowSpan"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Item横跨几行"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"justifySelf"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Item内容在分块内的对齐方式"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'start' ","|"," 'end' ","|"," 'center' ","|"," 'stretch'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'stretch'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"direction"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"描述和内容的排列方式"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'horizontal' ","|"," 'vertical'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),'"vertical"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions.Item容器宽度"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'string' ","|"," 'number'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions.Item容器高度"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"'string' ","|"," 'number'"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions.Item组件最外层className"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"style"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Descriptions.Item组件最外层样式"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"CSSProperties"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"-")))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/descriptions/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-descriptions-index-mdx-eb742298bafa83b614b3.js.map