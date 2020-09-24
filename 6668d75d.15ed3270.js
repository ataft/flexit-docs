(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(0);var a=n(133);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const r={id:"deploy",title:"Deploy FlexIt",hide_title:!0,sidebar_label:"Deploy FlexIt"},l=[{value:"Cloud Deployment",id:"cloud-deployment",children:[]},{value:"On Premises",id:"on-premises",children:[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Install FlexIt",id:"install-flexit",children:[]},{value:"Customized Setup",id:"customized-setup",children:[]},{value:"Managing FlexIt (Post Installation)",id:"managing-flexit-post-installation",children:[]},{value:"Upgrade Installation",id:"upgrade-installation",children:[]}]}],i={rightToc:l},s="wrapper";function c({components:e,...t}){return Object(a.b)(s,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"deploy-flexit"},"Deploy FlexIt"),Object(a.b)("p",null,'FlexIt can be deployed to the cloud or downloaded and installed on your local servers on premises (a.k.a "on prem"). Click ',Object(a.b)("em",{parentName:"p"},"Get FlexIt")," below to get started with a cloud or on-prem deployment."),Object(a.b)("h2",{id:"cloud-deployment"},"Cloud Deployment"),Object(a.b)("p",null,"Spin up a 100% free cloud deployment on Heroku for small deployments or proof-of-concepts. When you're ready to scale up, ",Object(a.b)("a",o({parentName:"p"},{href:"https://flexitanalytics.com/sales/"}),"contact us")," to help with your Amazon Web Services deployment."),Object(a.b)("a",{class:"button button--outline button--primary button--lg",href:"https://flexitanalytics.com/download"},"Get FlexIt"),Object(a.b)("h2",{id:"on-premises"},"On Premises"),Object(a.b)("h3",{id:"before-you-begin"},"Before you begin"),Object(a.b)("h4",{id:"download-flexit"},"Download FlexIt"),Object(a.b)("p",null,"You need to have the FlexIt installer for the applicable operating system. If you have not already downloaded the FlexIt installer, please download now:"),Object(a.b)("a",{class:"button button--outline button--primary button--lg",href:"https://flexitanalytics.com/download"},"Get FlexIt"),Object(a.b)("h4",{id:"system-requirements"},"System Requirements"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Operating System")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Windows (Server or Personal)"),Object(a.b)("li",{parentName:"ul"},"Linux"),Object(a.b)("li",{parentName:"ul"},"Mac OS X is not currently supported")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Database Server")),Object(a.b)("p",null,"The FlexIt server needs a database to store content. By default, it comes with an enterprise-level PostgreSQL database, but you can change this to any of the following supported databases."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"MySQL"),Object(a.b)("li",{parentName:"ul"},"Microsoft SQL Server"),Object(a.b)("li",{parentName:"ul"},"Oracle"),Object(a.b)("li",{parentName:"ul"},"PostgreSQL")),Object(a.b)("h3",{id:"install-flexit"},"Install FlexIt"),Object(a.b)("p",null,"Installing FlexIt is quick and easy."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Download the installer if you have not already done so:\xa0",Object(a.b)("a",o({parentName:"p"},{href:"https://flexitanalytics.com/download/"}),"Download Now"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Locate the downloaded FlexIt installer executable, often in your \u201cDownloads\u201d folder")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the executable as \u201cadministrator\u201d privileges"),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Linux Only")," \u2013 in some instances, you may need to mark the .run file as executable and run as root with the sudo command:"),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",o({parentName:"pre"},{}),"chmod +x flexit-2018.09.01-linux-x64-installer.run\nsudo ./flexit-2018.09.01-linux-x64-installer.run\n")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You should now see the setup screen"),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",o({parentName:"p"},{src:"/img/deploy/setup1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you want to use a different database than the included Postgres DB, or change other config options, then go to \u201cCustomized Setup\u201d below. Otherwise you can click \u201cNext\u201d through the rest of the screens.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"At the last step, you\u2019ll see a URL link to open FlexIt. You can click that link or paste it into your preferred browser."),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The default URL is ",Object(a.b)("a",o({parentName:"p"},{href:"http://localhost:3030"}),"http://localhost:3030"))))),Object(a.b)("h3",{id:"customized-setup"},"Customized Setup"),Object(a.b)("p",null,"If you want to customize your FlexIt installation and configuration, here are your options as you progress through the setup process"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Installation Directory")," \u2013 you can change this setting to install FlexIt Analytics anywhere you would like.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Configure FlexIt Analytics")," \u2013 this is where you set port, service name, and content database (described below)"),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",o({parentName:"p"},{src:"/img/deploy/setup_configure.jpg",alt:null}))),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"FlexIt Analytics Port"),": this is the port that FlexIt runs on. If another process is using this port, the installer will force you to pick another port.",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"You can change the port later from ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/administration#server-settings"}),"Administration > Configuration > Server Settings")," or enable HTTPS (",Object(a.b)("a",o({parentName:"p"},{href:"/docs/administration#https"}),"see how"),")."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Windows Service Name")," (Windows only): when the machine you install FlexIt on restarts, the Windows Service makes sure that FlexIt is also up and running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Install Postgres Database"),": FlexIt needs a database to store content (i.e. reports, dashboards, users, etc.). If you want to use the default PostgreSQL 10 database server (high performing enterprise-level), leave this checked and select a port (default: 5433). If you do not check this, FlexIt will ask you to configure another database later. As mentioned above, that database must be one of the following: Microsoft SQL Server, PostgreSQL, MySQL, or Oracle."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Finish")," \u2013 click \u201cNext\u201d on the rest of the screens and finish the installation"))),Object(a.b)("h3",{id:"managing-flexit-post-installation"},"Managing FlexIt (Post Installation)"),Object(a.b)("h4",{id:"modify-configuration"},"Modify Configuration"),Object(a.b)("p",null,"You can modify the FlexIt configuration from within the web application as an Admin at any point, as shown below. The database you chose to store content can be configured under \u201cContent Database\u201d. The server port and other settings can be configured under \u201cServer Settings\u201d. For detailed documentation on these and other configuration settings, see the ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/administration"}),"Administration")," guide"),Object(a.b)("p",null,Object(a.b)("img",o({parentName:"p"},{src:"/img/admin/configuration.png",alt:null}))),Object(a.b)("h4",{id:"startstop-flexit-server"},"Start/Stop FlexIt Server"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Windows Only")," - it is best to use the Windows Service to start and stop FlexIt. The service starts both the FlexIt server and the default PostgreSQL server (if installed)")),Object(a.b)("p",null,"You can start or stop the FlexIt service manually using scripts in the \u201c","[FlexIt Install Directory]","/bin\u201d directory."),Object(a.b)("p",null,"Start FlexIt by running the ",Object(a.b)("inlineCode",{parentName:"p"},"start_flexit")," script"),Object(a.b)("p",null,"Stop FlexIt by running the ",Object(a.b)("inlineCode",{parentName:"p"},"stop_flexit")," script"),Object(a.b)("h4",{id:"modify-windows-service"},"Modify Windows Service"),Object(a.b)("p",null,"In Windows installations, FlexIt comes with the NSSM service manager executable so that you can easily customize or remove the FlexIt Windows Service. You can use NSSM.exe in any documented way to add/remove/modify any service. In most instances, this is not necessary since FlexIt automatically creates a new service on installation and removes that same service on uninstallation."),Object(a.b)("h4",{id:"default-postgresql-database"},"Default PostgreSQL Database"),Object(a.b)("p",null,"The default database where FlexIt stores content (users, reports, dashboards, etc.) is a PostgreSQL database. This is a highly-scalable enterprise-level database that can be used in a production environment. It is installed under the \u201c","[FlexIt Install Directory]","/pgsql\u201d directory and by default uses a trust account setting. If you decide to modify or migrate your Content Database at any time, you can change the settings in FlexIt under \u201cAdministration -> Configuration -> Content Database\u201d, shown below:"),Object(a.b)("p",null,Object(a.b)("img",o({parentName:"p"},{src:"/img/deploy/content_db.png",alt:null}))),Object(a.b)("h4",{id:"uninstalling-flexit"},"Uninstalling FlexIt"),Object(a.b)("p",null,"In the directory that FlexIt was installed, run the \u201cuninstall\u201d executable."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Important")," - this will remove FlexIt, the default PostgreSQL database, and all other content. Make sure you have backed up everything if you may want to restore it in the future.")),Object(a.b)("h3",{id:"upgrade-installation"},"Upgrade Installation"),Object(a.b)("p",null,"If you are upgrading to a newer version and already have FlexIt installed, you can simply install the new version over the existing version. Any files under the ",Object(a.b)("em",{parentName:"p"},"FlexIt Home")," directory that are overwritten will be placed into a backup folder."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Important")," - Back up the content store database or export the content to save all your content before upgrading")))}c.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,u=b[i+"."+p]||b[p]||c[p]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);