(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{SPvh:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return p}));var t,i=a("k1TG"),n=a("8o2o"),s=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("T0C+"),a("qKvR"),{}),c=(t="PageDescription",function(A){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",A)}),g={_frontmatter:r},b=o.a;function p(A){var e=A.components,a=Object(n.a)(A,["components"]);return Object(s.b)(b,Object(i.a)({},g,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)(c,{mdxType:"PageDescription"}),Object(s.b)("h2",null,"Introduction"),Object(s.b)("p",null,"This article show cases cross VPC sharing of volumes which might be useful in DR kind of scenarios"),Object(s.b)("h2",null,"Architecture"),Object(s.b)("p",null,"The solution has DC and DR located in two regions Dallas and Washington DC within Virtual Private Clouds (VPC) that are connected to each other through a transit gateway. The shared block storage is hosted on virtual server hosted in zone Dallas1 and mounted through SSHFS on virtual server in Dallas2 zone and Washington1 zone in DR site ."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2WSxIAr/xAAYEAADAQEAAAAAAAAAAAAAAAAAEBEBIf/aAAgBAQABBQKnTVV//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARIRBRYf/aAAgBAQABPyEo1k7YePIUVn//2gAMAwEAAgADAAAAEGwv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EJqP/8QAGxAAAgMAAwAAAAAAAAAAAAAAAREAMUEhUaH/2gAIAQEAAT8QMYWArioGNDsjMNVk16Yhfkeuf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/2e753/Screenshot_1.jpg",srcSet:["/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/69549/Screenshot_1.jpg 288w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/473e3/Screenshot_1.jpg 576w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/2e753/Screenshot_1.jpg 1152w","/ibm-enterprise-runbooks/static/d838025222705d153ccad760a60a974d/d627c/Screenshot_1.jpg 1368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"Transit Gateway"),Object(s.b)("p",null,"IBM Cloud® Transit Gateway is used to interconnect IBM Cloud classic and Virtual Private Cloud (VPC) infrastructures worldwide, keeping traffic within the IBM Cloud private network. With IBM Cloud Transit Gateway, organizations can define and control communication between resources on the IBM Cloud network, providing dynamic scalability, high availability, and private, in-transit data between IBM Cloud data centers. Transit gateways are commonly implemented to support hybrid workloads, frequent data transfers, private workloads, or to ease administration of the IBM Cloud environment. One can configure several types of connections with IBM Cloud Transit Gateway:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"1. Connect VPCs in the same region (local routing)\n2. Connect VPCs in different regions (global routing)\n3. Connect VPCs to your IBM Cloud classic infrastructure\n")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"607px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3wEH/8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEg/9oACAEBAAEFApR//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERECFhQf/aAAgBAQABPyH0Tt4LpN3GiP/aAAwDAQACAAMAAAAQEM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQRD/2gAIAQEAAT8QBs3nCCgDqoENWwFuk8GF9n//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/47248915ba27336d5cdca7d1e21f6024/00842/Screenshot_12.jpg",srcSet:["/ibm-enterprise-runbooks/static/47248915ba27336d5cdca7d1e21f6024/69549/Screenshot_12.jpg 288w","/ibm-enterprise-runbooks/static/47248915ba27336d5cdca7d1e21f6024/473e3/Screenshot_12.jpg 576w","/ibm-enterprise-runbooks/static/47248915ba27336d5cdca7d1e21f6024/00842/Screenshot_12.jpg 607w"],sizes:"(max-width: 607px) 100vw, 607px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"We will be leveraging the capability of VPC Interconnect across regions to connect DC and DR through transit gateway."),Object(s.b)("p",null,"From cost perspective Transit Gateway is charged above 1TB data transfer monthly. Refer below link for details on pricing:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/transit-gateway?topic=transit-gateway-tg-pricing"}),"https://cloud.ibm.com/docs/transit-gateway?topic=transit-gateway-tg-pricing")),Object(s.b)("p",null,"Transit needs to be created in one of the region say Dallas or Washington."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"824px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.694444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3KAH/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxABAAMAAAAAAAAAAAAAAAAAARARQf/aAAgBAQABPyEK2f/aAAwDAQACAAMAAAAQAA//xAAVEQEBAAAAAAAAAAAAAAAAAAAREP/aAAgBAwEBPxBZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAEQEhABD/2gAIAQEAAT8QrSrrvDXz/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/36ed191210311bbc21456c5e86b652b3/6459f/Screenshot_5.jpg",srcSet:["/ibm-enterprise-runbooks/static/36ed191210311bbc21456c5e86b652b3/69549/Screenshot_5.jpg 288w","/ibm-enterprise-runbooks/static/36ed191210311bbc21456c5e86b652b3/473e3/Screenshot_5.jpg 576w","/ibm-enterprise-runbooks/static/36ed191210311bbc21456c5e86b652b3/6459f/Screenshot_5.jpg 824w"],sizes:"(max-width: 824px) 100vw, 824px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Select “VPC” as both source and destination networks are VPC."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"839px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHcetiQD//EABUQAQEAAAAAAAAAAAAAAAAAABAR/9oACAEBAAEFAmP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAQMUH/2gAIAQEABj8Cxr//xAAZEAEAAwEBAAAAAAAAAAAAAAABABFBEFH/2gAIAQEAAT8hLxgvajBnrv8A/9oADAMBAAIAAwAAABATD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEAESExQVFxgf/aAAgBAQABPxBFRHdzAU8TXAc2cpCwq5l3n//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/507441b4ee86b0460d75f5ca52ddad8c/fe953/Screenshot_6.jpg",srcSet:["/ibm-enterprise-runbooks/static/507441b4ee86b0460d75f5ca52ddad8c/69549/Screenshot_6.jpg 288w","/ibm-enterprise-runbooks/static/507441b4ee86b0460d75f5ca52ddad8c/473e3/Screenshot_6.jpg 576w","/ibm-enterprise-runbooks/static/507441b4ee86b0460d75f5ca52ddad8c/fe953/Screenshot_6.jpg 839w"],sizes:"(max-width: 839px) 100vw, 839px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"For cross region routing “Global Routing” needs to be enabled."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"525px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHuRpUA/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhAAAgIDAAAAAAAAAAAAAAAAARARQQAhMf/aAAgBAQABPyG7ydwx0r//2gAMAwEAAgADAAAAEEAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxAAAgMAAwAAAAAAAAAAAAAAAAERITFBYaH/2gAIAQEAAT8QSc1NupQuVeYIWI9gsP/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/b6fa9955da3633e153a6383433c87791/d2c5c/Screenshot_4.jpg",srcSet:["/ibm-enterprise-runbooks/static/b6fa9955da3633e153a6383433c87791/69549/Screenshot_4.jpg 288w","/ibm-enterprise-runbooks/static/b6fa9955da3633e153a6383433c87791/d2c5c/Screenshot_4.jpg 525w"],sizes:"(max-width: 525px) 100vw, 525px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Add Connections"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"639px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"131.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7ZSoIaAP/EABYQAAMAAAAAAAAAAAAAAAAAAAEQMP/aAAgBAQABBQKIf//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CT//EABsQAAICAwEAAAAAAAAAAAAAAAARASEQMVFB/9oACAEBAAE/Ifdj6ii5kRopmhkLkUcx/9oADAMBAAIAAwAAABAABAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEBAAEFAQEAAAAAAAAAAAABEQAhMUFRgXGh/9oACAEBAAE/ECig1cJYq+41vMBMYXrFvM8yOhr5kS057wikQ33yuv3AbA685bcPmQ6M/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/d1c5dbca9a904e3e816ec27f9510722f/d74ea/Screenshot_7.jpg",srcSet:["/ibm-enterprise-runbooks/static/d1c5dbca9a904e3e816ec27f9510722f/69549/Screenshot_7.jpg 288w","/ibm-enterprise-runbooks/static/d1c5dbca9a904e3e816ec27f9510722f/473e3/Screenshot_7.jpg 576w","/ibm-enterprise-runbooks/static/d1c5dbca9a904e3e816ec27f9510722f/d74ea/Screenshot_7.jpg 639w"],sizes:"(max-width: 639px) 100vw, 639px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ibmcloud-vpc-blockstorage-dr-index-mdx-db80737ad6f23a677b19.js.map