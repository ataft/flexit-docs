(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));a(0);var n=a(125);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const r={id:"tableauconnector",title:"Tableau Web Data Connector",hide_title:!0,sidebar_label:"Tableau Connector"},l=[{value:"Overview",id:"overview",children:[]},{value:"Instructions",id:"instructions",children:[]}],i={rightToc:l},c="wrapper";function p({components:e,...t}){return Object(n.b)(c,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"tableau-web-data-connector"},"Tableau Web Data Connector"),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The FlexIt connector for Tableau allows you to use Tableau to access any data through the FlexIt platform. This means that your organization can re-use FlexIt\u2019s security, metadata, and other enterprise features with Tableau, rather than re-creating this in Tableau. Rather than downloading data to Excel/CSV, users can directly plug into FlexIt from Tableau, saving them time as well as making administration much easier. Follow the instructions below to get started."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You\u2019ll need to have Tableau Desktop or Tableau Public installed on your computer, as well as FlexIt Analytics installed either on your computer or on a server")),Object(n.b)("h2",{id:"instructions"},"Instructions"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open Tableau Desktop or Tableau Public (free) on your computer. If you don\u2019t have Tableau, you can easily download and install it from their website.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click \u201cWeb Data Connector\u201d on the left, as shown below:\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-1.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter the FlexIt URL for the Tableau Web Data Connector (e.g. ",Object(n.b)("a",o({parentName:"p"},{href:"http://localhost:3030"}),"http://localhost:3030"),"), as shown below:\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-2.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Sign in to FlexIt using your FlexIt Authentication details (note: this is different from your Tableau login, if you have one)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Now you can use existing FlexIt content or create a New Analysis for preparing data to load into Tableau. The screenshot below shows an existing report:\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-3.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once you run the report, you\u2019ll see a \u201cLoad Data\u201d button at the top, as shown here:\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-4.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After you click \u201cLoad Data\u201d, this window will close and you will now be able to use that data in Tableau.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on \u201cSheet 1\u201d to start working with the data, as shown here:\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-5.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Then, simply add fields to your Tableau worksheet and create visualizations\n",Object(n.b)("img",o({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2018/10/Tableau-WDC-6.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"At any point, if you want to modify the data or columns that you\u2019re loading into Tableau, you can click on \u201cData Source\u201d in the lower left. Then, under \u201cConnections,\u201d select your Web Data drop-down and choose \u201cEdit Connection\u2026\u201d"))))}p.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(0),o=a.n(n),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),s=n,b=u[i+"."+s]||u[s]||p[s]||r;return a?o.a.createElement(b,Object.assign({},{ref:t},c,{components:a})):o.a.createElement(b,Object.assign({},{ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);