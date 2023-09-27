"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[52402],{97194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));a(8209);const s={},n="Alternative javascript console for Polkadot JS API",l={unversionedId:"docs/RFPs/alternative-polkadot-js-api-console",id:"docs/RFPs/alternative-polkadot-js-api-console",title:"Alternative javascript console for Polkadot JS API",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/alternative-polkadot-js-api-console.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/alternative-polkadot-js-api-console",permalink:"/docs/RFPs/alternative-polkadot-js-api-console",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/alternative-polkadot-js-api-console.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Availability and Validity - Network Topology",permalink:"/docs/RFPs/a-and-v-topology"},next:{title:"Alternative Polkadot Host Implementation",permalink:"/docs/RFPs/alternative_polkadot_host_implementations"}},i={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Current State",id:"current-state",level:3},{value:"Proposed-RFP",id:"proposed-rfp",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alternative-javascript-console-for-polkadot-js-api"},"Alternative javascript console for Polkadot JS API"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Request for Proposals is currently considered ",(0,r.kt)("strong",{parentName:"p"},"under development"),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://w3f.github.io/Grants-Program/applications/sandox"},"Under Development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/muddlebee"},"muddlebee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for")," ","[optional]",": Javascript console at ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/js"},"https://polkadot.js.org/apps/#/js"))),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("h3",{id:"current-state"},"Current State"),(0,r.kt)("p",null,"We have a Javascript console on the Developer tab which is really useful for running Polkadot-JS API scripts ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},"Polkadot-JS API docs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link")," - ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/js"},"https://polkadot.js.org/apps/#/js"),", UI screenshot below"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8139783/197954316-1449075f-b8be-4a30-a759-873c15f8a14f.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current limitations of the above console"),":\nCannot save code properly, not many keyboard shortcuts, cannot customize configurations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternative polkadot js API playground")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/subdirectory/subshell"},"https://github.com/subdirectory/subshell"))),(0,r.kt)("h3",{id:"proposed-rfp"},"Proposed-RFP"),(0,r.kt)("p",null,"A new Polkadot-JS API playground with VS Code-like configurations like save the code, workspace, keyboard shortcuts, etc.\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/js"},"https://polkadot.js.org/apps/#/js")),(0,r.kt)("p",null,"some examples -> ",(0,r.kt)("a",{parentName:"p",href:"https://playground.substrate.dev/"},"https://playground.substrate.dev/"),"\nhere we have to manually build and run our js bundles\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8139783/198254152-abdd0f2e-62d4-4f0f-aad1-bcfdd6d48a74.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why alternative javascript console for Polkadot-JS API"),"?"),(0,r.kt)("p",null,"Current polkadot js API console which I mentioned in beginning of this post, has some limitations, which we can overcome by creating a better version for smoother dev experience."),(0,r.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,r.kt)("p",null,"The following items could be the initial deliverables of the project. Of course, improvements and additions are more than welcome."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initial research:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"study how the current javascript console is developed at ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/js"},"https://polkadot.js.org/apps/#/js")),(0,r.kt)("li",{parentName:"ul"},"understand the libaries currently integrated from ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/"},"polkadot JS API docs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Development:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"design a new UI/UX with better experience than current javascript console with features like"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"save code preferably with secure session management"),(0,r.kt)("li",{parentName:"ul"},"keyboard shortcuts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Proposed-RFP"},"example"))),(0,r.kt)("p",{parentName:"li"},"Any additional features which make the Polkadot-JS experience more productive and smoother are welcome."))))))}u.isMDXComponent=!0}}]);