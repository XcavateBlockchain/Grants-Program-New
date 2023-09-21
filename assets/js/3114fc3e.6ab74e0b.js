"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[60532],{73686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(8209);const i={},r="Privacy Enhancement for Polkadot Extension",l={unversionedId:"docs/RFPs/Under Development/privacy-enhancement-polkadot-extension",id:"docs/RFPs/Under Development/privacy-enhancement-polkadot-extension",title:"Privacy Enhancement for Polkadot Extension",description:"Status:* Under Development",source:"@site/docs/RFPs/Under Development/privacy-enhancement-polkadot-extension.md",sourceDirName:"docs/RFPs/Under Development",slug:"/docs/RFPs/Under Development/privacy-enhancement-polkadot-extension",permalink:"/docs/RFPs/Under Development/privacy-enhancement-polkadot-extension",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/privacy-enhancement-polkadot-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Polkadot Protocol Conformance Tests",permalink:"/docs/RFPs/Under Development/polkadot-protocol_conformance_tests"},next:{title:"High-availability validator setup",permalink:"/docs/RFPs/Under Development/raft-validators"}},s={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1",id:"milestone-1",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"privacy-enhancement-for-polkadot-extension"},"Privacy Enhancement for Polkadot Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-js-extension-per-account-auth.md"},"Under Development")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," jonasW3F"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for")," ","[optional]",": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/extension"},"https://github.com/polkadot-js/extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Teams/People that could deliver the RFP:")," @celrisen")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,'An increasing number of websites require access to the Polkadot extension with a growing ecosystem. By allowing access to the extension, websites (naturally) can see the addresses that are contained in the extension. This imposes a big risk to privacy, because malicious actors could create lists about which addresses belong to one entity and, in the worst case, even link it to real-world identities (if at least one address is linked to an on-chain identity). A feature to prevent this is currently the "hide" button on single addresses, which prevent websites from seeing that address. However, it is currently cumbersome to handle that feature. The idea of this RFP is to extend on that feature and include a few QOL functionalities to make it easier for users to protect their privacy.'),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("p",null,"As outlined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension/issues/893"},"here"),", the deliverable should include five features to the extension and a successful completion of this RFP includes a merge of a PR to the main polkadot-js/extension repo. ",(0,o.kt)("strong",{parentName:"p"},"It is of great importance to generate clean code that follows best-practices"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  Amount of time (in days) required for a single person to complete this project (",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Full-time_equivalent"},"see"),") "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," $10'000. ")),(0,o.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  Amount of time (in days) required for a single person to complete this milestone"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," $10'000")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},'"Hide all"'),(0,o.kt)("td",{parentName:"tr",align:null},"A global button that hides/un-hides all addresses")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},'"View-Groups"'),(0,o.kt)("td",{parentName:"tr",align:null},'Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},'"Privacy Mode"'),(0,o.kt)("td",{parentName:"tr",align:null},'A setting that automatically changes the extension to a specific view group (which could be "hide all").')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4."),(0,o.kt)("td",{parentName:"tr",align:null},'"Hide from Extension"'),(0,o.kt)("td",{parentName:"tr",align:null},"A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5."),(0,o.kt)("td",{parentName:"tr",align:null},'"Link View-Groups to URLs"'),(0,o.kt)("td",{parentName:"tr",align:null},"The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon ",(0,o.kt)("em",{parentName:"td"},"first")," authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one.")))))}u.isMDXComponent=!0}}]);