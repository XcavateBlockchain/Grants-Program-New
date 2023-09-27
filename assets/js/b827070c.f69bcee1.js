"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[543],{19116:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));i(8209);const o={},s="RFP: Substrate Identity Directory",l={unversionedId:"docs/RFPs/identity-directory",id:"docs/RFPs/identity-directory",title:"RFP: Substrate Identity Directory",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/identity-directory.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/identity-directory",permalink:"/docs/RFPs/identity-directory",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/identity-directory.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Grant Management Web Application",permalink:"/docs/RFPs/grant_management_webapp"},next:{title:"ink!/pallet/solidity performance benchmarking",permalink:"/docs/RFPs/implementation-benchmarking"}},r={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"List Page View",id:"list-page-view",level:3},{value:"Single Page View",id:"single-page-view",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Layouts and Linking",id:"layouts-and-linking",level:3},{value:"Default Plugins",id:"default-plugins",level:4},{value:"Optional Plugins",id:"optional-plugins",level:4},{value:"Deliverables",id:"deliverables",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Milestone 3",id:"milestone-3",level:3},{value:"Milestone 4",id:"milestone-4",level:3},{value:"Other considerations",id:"other-considerations",level:2},{value:"Additional Plug-in Ideas",id:"additional-plug-in-ideas",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rfp-substrate-identity-directory"},"RFP: Substrate Identity Directory"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Request for Proposals is currently considered ",(0,a.kt)("strong",{parentName:"p"},"under development"),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md"},"Under Development 1"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/Dotflow.md"},"Under Development 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proposer:")," swader"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for"),": Kusama, Polkadot, Substrate chains")),(0,a.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,a.kt)("p",null,"In Substrate-based chains which implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/identity"},"Identity pallet"),", users can register on-chain information about themselves. It is currently difficult to search by any of the identity fields. There is also no way to link directly to an on-chain account and see human-readable reports of its interactions with the chain, let alone quickly send tokens to it or otherwise interact directly with that account."),(0,a.kt)("p",null,"The Identity Directory is a ",(0,a.kt)("strong",{parentName:"p"},"fully client-side web application")," which makes this possible."),(0,a.kt)("p",null,"It accepts input such as ",(0,a.kt)("a",{parentName:"p",href:"https://kusama.polkaperson.com/swader"},"https://kusama.polkaperson.com/swader")," or ",(0,a.kt)("a",{parentName:"p",href:"https://kusama.polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT"},"https://kusama.polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT")," or ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/ThJ"},"https://polkaperson.com/ThJ"),"."),(0,a.kt)("p",null,"The service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reads the input param"),(0,a.kt)("li",{parentName:"ul"},"if the input param is an address or an index (second and third option respectively), the ",(0,a.kt)("a",{parentName:"li",href:"#single-page-view"},"single page view")," opens"),(0,a.kt)("li",{parentName:"ul"},"if the input param is not an address (first option), a ",(0,a.kt)("a",{parentName:"li",href:"#list-page-view"},"list page view")," opens")),(0,a.kt)("h3",{id:"list-page-view"},"List Page View"),(0,a.kt)("p",null,"The service looks through all the registered identities on Kusama or Polkadot, and lists all the identities that have the provided value set as ANY of the fields in their identity entry. Clicking any of them takes a person to the ",(0,a.kt)("a",{parentName:"p",href:"#single-page-view"},"Single Page View")," and changes the URL to ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT"},"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT")," with the appropriate address, since addresses are unique."),(0,a.kt)("p",null,"Alternatively, if the address has a ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-accounts#indices"},(0,a.kt)("strong",{parentName:"a"},"frozen index"))," attached, the index should replace the address in the URL for usability, i.e. ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/ThJ"},"https://polkaperson.com/ThJ"),"."),(0,a.kt)("h3",{id:"single-page-view"},"Single Page View"),(0,a.kt)("p",null,"The single page view contains a beautifully rendered identity card of an on-chain identity along with all the metadata in the identity entry, an avatar if provided, any verifications from registrars in the chain, and buttons somewhere in the UI that allow you to Send tokens directly to the user. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/PpQy855.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Above screenshot is from ",(0,a.kt)("a",{parentName:"em",href:"https://themeforest.net/item/pulse-personal-academic-vcard-template/10654629"},"Pulse HTML template"),".")),(0,a.kt)("p",null,"The UI should be tweetdeck-like in that it offers multiple columns, each with a specific purpose, and the columns should be close-able and re-orderable, so users can just order them as they choose. The order should be remembered across the app, and there should be a toggle to ",(0,a.kt)("strong",{parentName:"p"},"freeze")," a layout for a specific user (i.e. maybe you only want Validator Performance for a certain validator but maybe you're interested in ",(0,a.kt)("em",{parentName:"p"},"everything")," a high-profile account does on chain so you want all the columns)."),(0,a.kt)("h3",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"The application should support a plug-in ecosystem for different sub-views of identities. The hosted, on-line version would come with some default plugins activated (see ",(0,a.kt)("a",{parentName:"p",href:"#default-plugins"},"Default Plugins"),") while the off-line version should support simple installation of other plugins. Most plug-ins will be rendered as ",(0,a.kt)("strong",{parentName:"p"},"additional columns of data"),', except in some cases (i.e. replace the "recent news" ticket at the top of the screen with a "recent on-chain tips issued", or a plug-in which adds push notifications).'),(0,a.kt)("p",null,"Note: ",(0,a.kt)("strong",{parentName:"p"},"if a user is not connecting to an archive node, archive data should be unavailable"),". The plugins (default, optional, and third party plug-ins) are responsible for realizing this and reporting to the user that some info won't be available if the user connects to only a full node."),(0,a.kt)("h3",{id:"layouts-and-linking"},"Layouts and Linking"),(0,a.kt)("p",null,"The individual events and positions in the various columns should be ",(0,a.kt)("strong",{parentName:"p"},"linkable"),", and URLs will dictate which columns are visible and in which order. So a URL like ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589"},"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589"),", would render a screen on which the governance default plugin would scroll to block 448217, and the RMRK column would scroll to block 330589, and RMRK would come AFTER the governance column in the view. Setting it as ",(0,a.kt)("inlineCode",{parentName:"p"},"#rmrk@330589&governance@448217")," would make rmrk appear BEFORE governance. Including a column/plugin without a block number serves to simply activate it in the UI, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589"},"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589")," would contain the default basic identity column + governance + rmrk, and ",(0,a.kt)("a",{parentName:"p",href:"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589&identityhistoyt&society&remarks"},"https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589&identityhistoyt&society&remarks")," would also activate optional columns which show an account's identity registration history, their ",(0,a.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/en/maintain-guides-society-kusama"},"Society")," participation, and all the ",(0,a.kt)("inlineCode",{parentName:"p"},"system.remark")," calls they issued."),(0,a.kt)("h4",{id:"default-plugins"},"Default Plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"basic info"),": a column with basic information about an account, similar to the sidebar on Polkadot JS Apps UI. Should discern between registrars - it should list each registrar who verified this identity and the verification level they gave (i.e. KnownGood vs KnownBad etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"governance"),": a column listing all of an account's governance activity like votes, proposals, marking the times when the account was a council member, etc. It should resemble a vertical timeline, with related events referencing each other, quoted-tweet style. Events should be linkable as decribed above, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"governance@477723"),". The column should ",(0,a.kt)("strong",{parentName:"li"},"clearly")," mark when a user was a council member but failed to uphold their duties, i.e. there was a motion but the user did not vote, and other interesting info (i.e. the user did not do ANYTHING the council can do while being a council member)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"treasury"),": a history of an account's interactions with the treasury - tip proposals and endorsements, treasury proposals and grant wins, votes on TP motions if user was council at the time (and clear marks if the user FAILED to vote on a TP motion during his activity as councilor)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validator"),": showing the history/summary of the account's participation in securing the network")),(0,a.kt)("h4",{id:"optional-plugins"},"Optional Plugins"),(0,a.kt)("p",null,"The off-line version (self-run version) should support simple installation of plug-ins like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"yarn add @web3id/rmrk\n")),(0,a.kt)("p",null,"This would add the community-developed RMRK plugin column with details about an account's NFT activity on Kusama."),(0,a.kt)("p",null,"Optional plugins to support at launch:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txhistory")," for listing all of an account financial transactions (moving of tokens)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identityhistory")," for listing all of an account's interactions with identities - when they submitted their info, when and who verified them, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remarkshistory")," for listing all of an account's past issued remarks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"society")," for displaying an account's participation in Society, including how much they bid, when they were accepted, when their full payout is due, how many times they defended, how many times they voted, and other Society-related ops.")),(0,a.kt)("h2",{id:"deliverables"},"Deliverables"),(0,a.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,a.kt)("p",null,'A basic application is developed which supports querying by address, index, or identity fields, and displays a basic mobile-friendly list view or single page view with the "basic info" column fully functional. The user should be able to set their own node endpoint.'),(0,a.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,a.kt)("p",null,"Default plugins are developed: governance and treasury. Events in the columns are linkable, and layouts of the columns can be saved. The app is updated with these defaults and hosted on IPFS. Performance is crucial at this stage - caching queries and results and being creative with approaches is tantamount to UX. One example approach: allow users to enter their pinata key, and store set of fetched information to IPFS and pin on pinata (free tier of 1GB pins). On future queries of archive info, fetch from IPFS instead if faster. Along with pinata, users could also define their own IPFS node endpoint and serve their own IPFS data if they have one."),(0,a.kt)("h3",{id:"milestone-3"},"Milestone 3"),(0,a.kt)("p",null,"Optional plugins are developed, implemented into the app, and tested for per-identity layout saving and rendering on both mobile and desktop. The app should, at this point, support easy installation of plug-ins and have a ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," step that builds the site for offline or IPFS use."),(0,a.kt)("h3",{id:"milestone-4"},"Milestone 4"),(0,a.kt)("p",null,"Maintenance phase - the team is expected to deliver comprehensive documentation on developing plugins and hosting your own Identity Directory with and without IPFS and other supporting options. The team should help plug-in implementers finalize their work and review their plug-ins."),(0,a.kt)("p",null,"Please note that the proposal should include a proposal for medium to long term maintenance of this project, especially as architecture changes and parachains launch."),(0,a.kt)("h2",{id:"other-considerations"},"Other considerations"),(0,a.kt)("p",null,"The application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MUST be IPFS-hostable, so fully client-side"),(0,a.kt)("li",{parentName:"ul"},"MUST be docker-less and SHOULD be react-less, for ease of use and installation on regular machines, and to conserve resources. The goal is to be able to download the app directly, even zipped, and run it on one's machine without much difficulty and technical know-how. (Of course, if one wishes to add plugins, one has to use NodeJS and install them with ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn"),", then ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," the app to get something runnable)"),(0,a.kt)("li",{parentName:"ul"},"SHOULD be mobile-friendly, at least mobile-runnable. The Pulse theme linked above does come with mobile friendliness built-in, perhaps this is something to be inspired by.")),(0,a.kt)("h2",{id:"additional-plug-in-ideas"},"Additional Plug-in Ideas"),(0,a.kt)("p",null,"These can later become RFPs of their own."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rmrk"),": lists a user's interactions with the NFT ecosystem on Kusama. ",(0,a.kt)("a",{parentName:"li",href:"https://rmrk.app"},"More info"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"standing"),": a card which visualizes someone's standing in the community. Can hook into Polkassembly to see how many discussions they participated in, look into votes and other on-chain activity, and build a subjective profile on how productive a member of the chain's society this person is."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"earnings"),": visualizes and documents a user's earnings over time, both through staking and nominating, along with a historic overview of when the user was bonded, unbonded, etc.")))}u.isMDXComponent=!0}}]);