(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"rightToc",(function(){return r})),n.d(e,"default",(function(){return p}));n(124),n(12),n(53),n(128),n(130),n(0);var a=n(121);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var o={id:"saml",title:"Set up SAML single sign-on in Okta",sidebar_label:"SAML in Okta"},r=[],l={rightToc:r},c="wrapper";function p(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["components"]);return Object(a.b)(c,i({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The first step in configuring an application to support SAML based Single Sign-On from Okta is to set up an application in Okta."),Object(a.b)("p",null,"In SAML terminology, what you will be doing here is configuring Okta (your SAML Identity Provider or \u201cSAML IdP\u201d), with the details of your application (the new SAML Service Provider or \u201cSAML SP\u201d)."),Object(a.b)("p",null,"Here is how to set up a SAML application in Okta:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Important"),": If you are using the Developer Console you will first need to switch to the Classic UI. If you see Developer Console in the top left, click it and select Classic UI to switch.")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log in to your Okta organization as a user with administrative privileges. If you don\u2019t have an Okta organization, you can ",Object(a.b)("a",i({parentName:"p"},{href:"https://developer.okta.com/signup/"}),"create a free Okta Developer Edition organization"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click on the Applications link in the upper navigation bar")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click on the green Create New App button")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the dialog that opens, select the \u201cSAML 2.0\u201d option, then click the green \u201cCreate\u201d button. If you do not see this option, make sure you are in the Classic UI (see Note above).\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_new.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In Step 1 \u201cGeneral Settings\u201d, enter \u201cFlexIt Analytics\u201d in the \u201cApp name\u201d field\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_generalsettings.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Upload the FlexIt app logo, then click the green Next button.\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/X.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In Step 2 \u201cConfigure SAML,\u201d section A \u201cSAML Settings\u201d, paste the URL below into the \u201cSingle sign on URL\u201d and \u201cAudience URI (SP Entity ID)\u201d fields. The FlexIt URL will be in the form of protocol://servername:port/auth/callback, for example: ",Object(a.b)("a",i({parentName:"p"},{href:"https://carbon1:3030/auth/callback"}),"https://carbon1:3030/auth/callback"),"\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_samlsettingsgeneral.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the \u201cAttribute Statements\u201d section, add three attribute statements. In the \u201cGroup Attribute Statements\u201d, add one statement:"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Attribute Statements",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u201cUser.FirstName\u201d set to \u201cuser.firstName\u201d"),Object(a.b)("li",{parentName:"ul"},"\u201cUser.LastName\u201d set to \u201cuser.lastName\u201d"),Object(a.b)("li",{parentName:"ul"},"\u201cUser.email\u201d set to \u201cuser.email\u201d"))),Object(a.b)("li",{parentName:"ol"},"Group Attribute Statements",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u201cGroups\u201d set to \u201cStarts with\u201d text of \u201cFlexIt\u201d"))),Object(a.b)("li",{parentName:"ol"},"Click Next to continue\n",Object(a.b)("img",i({parentName:"li"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_generalattributes.png",alt:null}))))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In Step 3 \u201cFeedback\u201d, select \u201cI\u2019m an Okta customer adding an internal app\u201d, and \u201cThis is an internal app that we have created,\u201d then click Finish.\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_finish.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The \u201cSign On\u201d section of your newly created \u201cFlexIt Analytics\u201d application appears. Click on \u201cView Setup Instructions\u201d\xa0\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i1.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_ipmetadata.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Keep this page open in a separate tab or browser window. You will return to this page later in this guide and copy the 3 settings into the FlexIt Configuration\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i0.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/okta_flexit_samlconfig.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log in to FlexIt as an Administrator, click on \u201cConfiguration\u201d under Administration, then click \u201cAuthentication\u201d\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/flexit_config_auth.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Select the \u201cSAML 2.0\u201d type from the drop-down and map the items from step 10 above into the FlexIt configuration\n",Object(a.b)("img",i({parentName:"p"},{src:"https://i2.wp.com/flexitanalytics.com/wp-content/uploads/2019/05/flexit_config_authmap.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the FlexIt configuration, the \u201cUser Attribute Statements\u201d and \u201cGroup Attribute Statements\u201d should match the names used in step 7 above. Note the following options:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u201cSync Provider Groups?\u201d defaults to \u201cnone\u201d. Set it to \u201cseed\u201d if you want FlexIt to automatically assign the user group ONLY on the first login. Set it to \u201csync\u201d if you always want FlexIt to use the Okta groups. If you use \u201cseed\u201d or \u201csync\u201d, FlexIt will automatically assign the Okta group \u201cFlexIt Admin\u201d to the \u201cAdmin\u201d role, \u201cFlexIt Author\u201d to the \u201cAuthor\u201d role, and \u201cFlexIt Consumer\u201d to the \u201cConsumer\u201d role. Note that the Okta group names must be assigned to the FlexIt Analytics application and exactly match\xa0FlexIt ","[Admin, Author, Consumer]","."),Object(a.b)("li",{parentName:"ul"},"\u201cDefault Group\u201d defaults to \u201cnone\u201d. If a user is assigned to the FlexIt Analytics application in Okta, but is not part of any Okta groups, you can automatically assign them either as a \u201cConsumer\u201d or \u201cAuthor\u201d in FlexIt."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click \u201cSave\u201d to finish the configuration in FlexIt. Okta SAML 2.0 authentication is now enabled."))))}p.isMDXComponent=!0},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(t){var e=i.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},l=function(t){var e=r(t.components);return i.a.createElement(o.Provider,{value:e},t.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},s=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&-1===e.indexOf(a)&&(n[a]=t[a]);return n}(t,["components","mdxType","originalType","parentName"]),s=r(n),u=a,b=s[l+"."+u]||s[u]||p[u]||o;return n?i.a.createElement(b,Object.assign({},{ref:e},c,{components:n})):i.a.createElement(b,Object.assign({},{ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},124:function(t,e,n){var a=n(51);a(a.S+a.F,"Object",{assign:n(125)})},125:function(t,e,n){"use strict";var a=n(13),i=n(34),o=n(126),r=n(127),l=n(52),c=n(54),p=Object.assign;t.exports=!p||n(33)((function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach((function(t){e[t]=t})),7!=p({},t)[n]||Object.keys(p({},e)).join("")!=a}))?function(t,e){for(var n=l(t),p=arguments.length,s=1,u=o.f,b=r.f;p>s;)for(var m,f=c(arguments[s++]),h=u?i(f).concat(u(f)):i(f),g=h.length,O=0;g>O;)m=h[O++],a&&!b.call(f,m)||(n[m]=f[m]);return n}:p},126:function(t,e){e.f=Object.getOwnPropertySymbols},127:function(t,e){e.f={}.propertyIsEnumerable},128:function(t,e,n){"use strict";var a=n(129),i={};i[n(11)("toStringTag")]="z",i+""!="[object z]"&&n(18)(Object.prototype,"toString",(function(){return"[object "+a(this)+"]"}),!0)},129:function(t,e,n){var a=n(55),i=n(11)("toStringTag"),o="Arguments"==a(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:o?a(e):"Object"==(r=a(e))&&"function"==typeof e.callee?"Arguments":r}},130:function(t,e,n){var a=n(52),i=n(34);n(131)("keys",(function(){return function(t){return i(a(t))}}))},131:function(t,e,n){var a=n(51),i=n(17),o=n(33);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],r={};r[t]=e(n),a(a.S+a.F*o((function(){n(1)})),"Object",r)}}}]);