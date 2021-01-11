(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{110:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return p}));var i=t(0),r=t.n(i);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),c=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,p=d["".concat(o,".").concat(u)]||d[u]||h[u]||n;return t?r.a.createElement(p,s(s({ref:a},m),{},{components:t})):r.a.createElement(p,s({ref:a},m))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<n;m++)o[m]=t[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},111:function(e,a,t){"use strict";a.a={line:{label:"Line Chart",fact:{min:1},dim:{min:1,max:2},desc:"Line charts show data over a continuous time period or interval to analyze how the data has changed over time. Measures are shown on the y-axis and date/time on the x-axis. If a second dimension (i.e. category) is chosen for a series, then each category will have one line on the chart, allowing visual analysis of changes by category.",similar:["area"],examples:[{title:"",id:"line"}]},area:{label:"Area Chart",fact:{min:1},dim:{min:1,max:2},desc:"Area charts are similar to line and stacked column/bar charts with the area below the line filled in to show relative amounts. Like line charts, area charts show data over a continuous time period or interval to analyze how the data has changed over time. Measures are shown on the y-axis and date/time on the x-axis. If a second dimension (i.e. category) is chosen for a series, then each category will have one line on the chart, allowing visual analysis of changes by category. When stacked or 100% stacked, relative size/proportion will be shown for the second dimension.",similar:["line"],examples:[{title:"",id:"area"}]},bar:{label:"Bar Chart",fact:{min:1},dim:{min:1,max:2},desc:"Bar charts use horizontal bars to show how much is in each category. Categories are shown on the y-axis and amounts on the x-axis. If two categories (i.e. dimensions) are selected, then the second dimension will be shown for each category in the first dimension and will also appear in the legend. When stacked or 100% stacked, relative size/proportion will be shown for the second dimension.",similar:["column"],examples:[{title:"",id:"bar"}]},column:{label:"Column Chart",fact:{min:1},dim:{min:1,max:2},desc:"Column charts use vertical bars to show how much is in each category. Categories are shown on the x-axis and amounts on the y-axis. If two categories (i.e. dimensions) are selected, then the second dimension will be shown for each category in the first dimension and will also appear in the legend. When stacked or 100% stacked, relative size/proportion will be shown for the second dimension.",similar:["bar"],examples:[{title:"",id:"column"}]},map:{label:"Map",fact:{min:1,max:1},dim:{min:1,max:1},desc:"<p>Maps show geographic data and often come in two popular formats.</p><ol><li>Choropleth - geographic regions are colored/shaded based on amount. It often makes sense to use rates (e.g. number per 100,000) rather than totals.</li><li>Dot/Bubble - points (often latitude/longitude) on the map are sized by amount</li></ol>",similar:[],examples:[{title:"Choropleth",id:"map-choropleth"},{title:"Dot/Bubble",id:"map"}]},pie:{label:"Pie Chart",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Pie charts show the percentage proportion of each category where the entire circle is 100%. They are good for a quick view of general proportion and are best used with a few values.",similar:["donut","sunburst","funnel"],examples:[{title:"",id:"pie"}]},donut:{label:"Donut Chart",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Donut charts are similar to pie charts with the center area cut out. They show the percentage proportion of each category where the entire circle is 100%.",similar:["pie","sunburst","funnel"],examples:[{title:"",id:"donut"}]},scatter:{label:"Scatterplot",fact:{min:2},dim:{min:1,max:1},desc:"Scatterplots show the relationship between two continuous values (i.e. measures) for individual categories (i.e. dimensions). A <i>regression line</i> can be added that shows the linear relationship between values using the <i>least squares methodology</i>.",similar:["bubble"],examples:[{title:"",id:"scatter"}]},heatmap:{label:"Heatmap",desc:"Heatmaps show data by color variations based on the chosen measure. Traditionally, dark red (i.e. hot) signifies the highest values while lighter (i.e. cool) signifies the lowest values. Heatmaps offer a way to quickly visualize patterns and correlations between the two categories (i.e. dimensions).",fact:{min:1,max:1},dim:{min:2,max:2},similar:["treemap","packed_bubble"],examples:[{title:"",id:"heatmap"}]},treemap:{label:"Treemap",desc:"Treemaps show hierarchical data with category (i.e. dimension) rectangle size based on the chosen meausure. If multiple dimensions are chosen, then the first dimension (i.e. category) will have the second dimension (i.e. subcategory) nested inside of it.",fact:{min:1,max:1},dim:{min:1,max:2},similar:["heatmap","packed_bubble"],examples:[{title:"",id:"treemap"}]},bubble:{label:"Bubble Chart",fact:{min:1},dim:{min:1,max:2},desc:"Similar to scatterplots, bubble charts show the relationship between two continuous values (i.e. measures) for individual categories (i.e. dimensions). Bubble charts differ from scatterplots in that they have a third discrete value (i.e. measure) that determines the size of the point/bubble.",similar:["scatter"],examples:[{title:"",id:"bubble"}]},packed_bubble:{label:"Packed Bubble",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Packed Bubble charts show a bubble for each category (dimension) with the size based on one measure. They are good for showing large variations, but not smaller ones.",similar:["heatmap","treemap"],examples:[{title:"",id:"packed_bubble"}]},big_number:{label:"KPI (Rich Text)",fact:{min:1,max:1},dim:{min:0,max:1},desc:"KPI (Key Performance Indicator) cards, also called Big Number, allow you to use rich text/HTML to explain your data. You can design the card and insert measure/dimension parameters, as well as static text, anywhere on the card. KPI cards are best used on dashboards.",similar:[],examples:[{title:"",id:"big_number"}]},funnel:{label:"Funnel Chart",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Funnel charts show bars for each category (dimension) with the proportional size based on the measure value. The categories are shown in decreasing order with the largest values on top and smallest on bottom, making it look like a funnel.",similar:["pie","donut","sunburst"],examples:[{title:"",id:"funnel"}]},sankey:{label:"Sankey Diagram",fact:{min:1,max:1},dim:{min:1,max:2},desc:"Sankey Diagrams show flow between dimensions with proportional sized lines connecting them. They are often used to show the flow of energy, money, goods, or materials through a process.",similar:[],examples:[{title:"",id:"sankey"}]},sunburst:{label:"Sunburst",fact:{min:1,max:1},dim:{min:1,max:2},desc:"Sunburst charts are similar to donut/pie charts that show proportions, but also show hierarchy when multiple dimensions (categories) are selected. Sunburst charts allow drilling down the hierarchy by clicking on the innermost parent groups to focus on the children of that group.",similar:["pie","donut","funnel"],examples:[{title:"",id:"sunburst"}]},word_cloud:{label:"Word Cloud",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Word Clouds display text with the size of each word proportional to the value. The text words are based on the selected dimension and the size is dependent upon the selected measure. Word clouds are often used to display frequency of words, but can be used to display any proportional difference between categories.",similar:["packed_bubble"],examples:[{title:"",id:"word_cloud"}]},radar:{label:"Radar",fact:{min:1,max:1},dim:{min:1,max:2},desc:"<p>Also known as <i>Spider or Polar Charts</i></p><p>Radar charts compare multiple measures (typically 3 or more) to determine similarities or outliers. They are good for seeing patterns, comparisons, and relationships between variables.</p>",similar:["parallel"],examples:[{title:"",id:"radar"}]},gauge:{label:"Gauge Chart",fact:{min:1,max:1},dim:{min:0,max:1},desc:'Gauge charts resemble car dashboard items like the speedometer and use the dial to display where metrics are on the guages scale. The gauge can have multiple categories with different colors, often to describe things such as "good", "neutral", "poor".',similar:["bullet"],examples:[{title:"",id:"gauge"}]},calendar:{label:"Calendar Heatmap",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Calendar Heatmaps appear as a calendar with individual dates showing color variation based on the measure value. They are an effective way to quickly visualize variations, patterns, and outliers based on date.",similar:["heatmap"],examples:[]},boxplot:{label:"Boxplot",fact:{min:1,max:1},dim:{min:1,max:2},desc:"<p>Also known as <i>Box & Whisker Plot</i></p><p>Box Plots show data distribution through quartiles. Boxplots may have lines extending from the boxes (i.e. whiskers) that show variability outside the lower and upper quartiles. Outliers may also be shown as dots outside the boxplot.</p>",similar:[],examples:[{title:"",id:"boxplot"}]},bullet:{label:"Bullet Chart",fact:{min:1,max:1},dim:{min:1,max:1},desc:"Bullet Charts are similar to Bar Charts, but display additional information such as targets and performance (i.e. good, neutral, poor). The main measure is called the <strong>feature</strong> and appears as a thin bar through the middle. There is often a <strong>target</strong> measure, which appears as a thin line, allowing you to see if the feature measure falls above or below. A thicker bar can display ranges that denote performance, allowing you to see how the feature measure performs. Bullet Charts are a good alternative to Gauge Charts because they display more information and take up less space.",similar:["gauge"],examples:[{title:"",id:"bullet"}]},parallel:{label:"Parallel Coordinate",fact:{min:1},dim:{min:1,max:1},desc:"Parallel Coordinates show multiple measures together with a line for each category that displays the relationships between them. The measures are displayed horizontally with the selected dimension categories shown at the end with a line connecting the category to each metric.",similar:["radar"],examples:[{title:"",id:"parallel"}]},tree:{label:"Tree Diagram",fact:{min:0},dim:{min:1},desc:"Tree diagrams show hieararchy relationships between dimension categories. The first/top node is called the <strong>root node</strong> and child nodes are called <strong>leaf nodes</strong> with the lines connecting them called <strong>branches</strong>. One of the most common tree diagrams is the <i>Organizational Chart</i>, which shows levels of people in an oranization that report to each-other.",similar:["sunburst"],examples:[{title:"",id:"tree"}]}}},112:function(e,a,t){"use strict";var i=t(0),r=t.n(i),n=t(49),o=t.n(n),s=t(111),l=function(e){var a=e.vizId,t=e.vizProps;return r.a.createElement("a",{href:"/docs/viz/"+a},r.a.createElement("div",{className:o.a.vizItem},r.a.createElement("img",{src:"/img/viz/"+a+".png"}),r.a.createElement("div",{className:o.a.vizText},t.label)))};a.a=function(e){var a=e.items;return r.a.createElement(r.a.Fragment,null,Object.entries(s.a).map((function(e){return a&&-1===a.indexOf(e[0])?"":r.a.createElement(l,{key:e[0],vizId:e[0],vizProps:e[1]})})))}},113:function(e,a,t){"use strict";var i=t(0),r=t.n(i),n=t(49),o=t.n(n),s=t(111),l=t(112),m="https://cloud.flexitanalytics.com",c=function(e){var a=e.children,t=e.type;return r.a.createElement("span",{style:{backgroundColor:"dimension"===t?"#0094d9":"orange",borderRadius:"6px",color:"#fff",padding:"2px 4px",marginLeft:"4px"}},a)},d=function(e){var a=e.src;return r.a.createElement("iframe",{src:a,className:o.a.vizFrame})},h=function(e){var a=e.arr;return a.length?a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,e.title),r.a.createElement(d,{src:m+"/#analysis/"+e.id+"/embed"}),r.a.createElement("i",{className:"fa fa-external-link"})," ",r.a.createElement("a",{target:"_blank",href:m+"/#analysis/"+e.id},"Open in New Window"))})):"None"};a.a=function(e){var a=e.type,t=function(e,a){var t=e.min===e.max;return r.a.createElement(r.a.Fragment,null,r.a.createElement("em",null,t&&e.min+" "||!e.max&&e.min+" or more "||e.min+" to "+e.max+" "),r.a.createElement(c,{type:a},a,t&&1===e.min?"":"s"))},i=s.a[a];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,i.label," ",r.a.createElement("em",null,r.a.createElement("img",{src:"/img/viz/"+a+".png",className:o.a.vizImage}))),r.a.createElement("h2",null,"Description"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.desc}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("blockquote",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Minimum Requirements"),r.a.createElement("br",null),t(i.dim,"dimension"),r.a.createElement("br",null),t(i.fact,"measure"))),r.a.createElement("h2",null,"Interactive Examples"),r.a.createElement(h,{arr:i.examples}),r.a.createElement("h2",null,"Similar Charts"),r.a.createElement("p",null,i.label," is similar to:"),r.a.createElement(l.a,{items:i.similar}))}},89:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return m})),t.d(a,"default",(function(){return d}));var i=t(2),r=t(7),n=(t(0),t(110)),o=t(113),s={id:"sankey",title:"Sankey Diagram",hide_title:!0},l={unversionedId:"viz/sankey",id:"viz/sankey",isDocsHomePage:!1,title:"Sankey Diagram",source:"@site/docs\\viz\\sankey.mdx",slug:"/viz/sankey",permalink:"/docs/viz/sankey",editUrl:"https://github.com/ataft/flexit-docs/edit/master/docs/viz/sankey.mdx",version:"current",sidebar:"docs",previous:{title:"Radar Chart",permalink:"/docs/viz/radar"},next:{title:"Scatterplot",permalink:"/docs/viz/scatter"}},m=[],c={rightToc:m};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(o.a,{type:"sankey",mdxType:"VizPage"}))}d.isMDXComponent=!0}}]);