(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{SPvh:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return l}));var a,n=t("k1TG"),i=t("8o2o"),o=(t("q1tI"),t("7ljp")),s=t("013z"),r=(t("T0C+"),t("qKvR"),{}),c=(a="PageDescription",function(A){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",A)}),b={_frontmatter:r},d=s.a;function l(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(o.b)(d,Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"}),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"This article show cases cross VPC sharing of volumes which might be useful in DR kind of scenarios"),Object(o.b)("h2",null,"Architecture"),Object(o.b)("p",null,"The solution has DC and DR located in two regions Dallas and Washington DC within Virtual Private Clouds (VPC) that are connected to each other through a transit gateway. The shared block storage is hosted on virtual server hosted in zone Dallas1 and mounted through SSHFS on virtual server in Dallas2 zone and Washington1 zone in DR site ."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2WSxIAr/xAAYEAADAQEAAAAAAAAAAAAAAAAAEBEBIf/aAAgBAQABBQKnTVV//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARIRBRYf/aAAgBAQABPyEo1k7YePIUVn//2gAMAwEAAgADAAAAEGwv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EJqP/8QAGxAAAgMAAwAAAAAAAAAAAAAAAREAMUEhUaH/2gAIAQEAAT8QMYWArioGNDsjMNVk16Yhfkeuf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/2e753/Screenshot_1.jpg",srcSet:["/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/69549/Screenshot_1.jpg 288w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/473e3/Screenshot_1.jpg 576w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/2e753/Screenshot_1.jpg 1152w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/d627c/Screenshot_1.jpg 1368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("h2",null,"Transit Gateway"),Object(o.b)("p",null,"IBM Cloud® Transit Gateway is used to interconnect IBM Cloud classic and Virtual Private Cloud (VPC) infrastructures worldwide, keeping traffic within the IBM Cloud private network. With IBM Cloud Transit Gateway, organizations can define and control communication between resources on the IBM Cloud network, providing dynamic scalability, high availability, and private, in-transit data between IBM Cloud data centers. Transit gateways are commonly implemented to support hybrid workloads, frequent data transfers, private workloads, or to ease administration of the IBM Cloud environment. One can configure several types of connections with IBM Cloud Transit Gateway:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"1. Connect VPCs in the same region (local routing)\n2. Connect VPCs in different regions (global routing)\n3. Connect VPCs to your IBM Cloud classic infrastructure\n")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.541666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdywMBP/xAAWEAEBAQAAAAAAAAAAAAAAAAAAATL/2gAIAQEAAQUCuVf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAWEAADAAAAAAAAAAAAAAAAAAAAARD/2gAIAQEAAT8hFx//2gAMAwEAAgADAAAAEPgP/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EDF//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITFx/9oACAEBAAE/EElh2icPkTZryf/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/922e0007162814bbb5267b7ee3efd758/2e753/Screenshot_2.jpg",srcSet:["/ibm-enterprise-runbooks/static/922e0007162814bbb5267b7ee3efd758/69549/Screenshot_2.jpg 288w","/ibm-enterprise-runbooks/static/922e0007162814bbb5267b7ee3efd758/473e3/Screenshot_2.jpg 576w","/ibm-enterprise-runbooks/static/922e0007162814bbb5267b7ee3efd758/2e753/Screenshot_2.jpg 1152w","/ibm-enterprise-runbooks/static/922e0007162814bbb5267b7ee3efd758/0bd34/Screenshot_2.jpg 1417w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ibmcloud-vpc-blockstorage-dr-index-mdx-bb6450601cc60273f449.js.map