"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[38054],{62555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));a(8209);const s={},l="SCALE Codec Comparator",n={unversionedId:"docs/RFPs/Closed/scale-codec-comparator",id:"docs/RFPs/Closed/scale-codec-comparator",title:"SCALE Codec Comparator",description:"Status:* Implemented for ten encoding types",source:"@site/docs/RFPs/Closed/scale-codec-comparator.md",sourceDirName:"docs/RFPs/Closed",slug:"/docs/RFPs/Closed/scale-codec-comparator",permalink:"/docs/RFPs/Closed/scale-codec-comparator",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Closed/scale-codec-comparator.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Privacy Enhancement for Polkadot Extension",permalink:"/docs/RFPs/Closed/privacy-enhancement-polkadot-extension"},next:{title:"Social Recovery Wallet",permalink:"/docs/RFPs/Closed/social-recovery-wallet"}},i={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1: Feature-completeness &amp; FFI to Rust",id:"milestone-1-feature-completeness--ffi-to-rust",level:3},{value:"Milestone 2: Badge integration",id:"milestone-2-badge-integration",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scale-codec-comparator"},"SCALE Codec Comparator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md"},"Implemented for ten encoding types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mmagician/"},"Marcin G\xf3rny"))),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,"To date, there are ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"9 published")," implementations of the SCALE Codec. Since each is implemented by a different team & ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-scale-codec"},"the reference implementation")," still introduces small fixes, it would be beneficial to compile a table of feature-completeness.\nThis would provide (some) assurance that the implementation in a given language is safe & sound to use."),(0,o.kt)("p",null,"One approach would be to provide wrappers to the Rust reference implementation, like in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb/blob/develop/src/lib.rs"},"scale.rb")," and using the Foreign Function Interface (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/itering/scale.rb/blob/develop/spec/ffi_helper.rb"},"here"),") to call these directly from within the library."),(0,o.kt)("p",null,"Stage 2: To take this a step further, a GitHub action could be integrated to run all native unit tests also against the Rust lib. For repos which provide feature completeness & pass all relevant tests, a SCALE specific badge could be awarded."),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2+ months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," ~ 12,000 DAI")),(0,o.kt)("h3",{id:"milestone-1-feature-completeness--ffi-to-rust"},"Milestone 1: Feature-completeness & FFI to Rust"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," ~ 10,000 DAI")),(0,o.kt)("p",null,"For each library listed on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"substrate.dev"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a PR, providing a FFI to Rust's reference implementation."),(0,o.kt)("li",{parentName:"ul"},"Ensure feature completeness, by ensuring there are comprehensive unit tests for each data type.")),(0,o.kt)("h3",{id:"milestone-2-badge-integration"},"Milestone 2: Badge integration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Estimated Duration:")," 1 week")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"FTE:"),"  1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Costs:")," ~ 2000 DAI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a GitHub badge for SCALE feature complete libs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure that each lib listed above has the process of publishing the badge integrated into the CI workflow (e.g. GitHub action to run tests & award badge on successful run)"))),(0,o.kt)("p",null,"Note: The goal is to have your changes merged upstream. While the final decision is taken by the repo owners, you should make sure that your PRs pass all checks specific to each lib, conforms to their contributing guidelines etc."))}u.isMDXComponent=!0}}]);