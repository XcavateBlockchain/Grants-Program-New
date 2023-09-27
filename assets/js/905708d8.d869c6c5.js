"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[99980],{89740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));a(8209);const s={},i="APPI: Auto-funded public P2P infrastructure",l={unversionedId:"docs/RFPs/appi",id:"docs/RFPs/appi",title:"APPI: Auto-funded public P2P infrastructure",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/appi.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/appi",permalink:"/docs/RFPs/appi",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/appi.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Anti-Collusion Infrastructure",permalink:"/docs/RFPs/anti-collusion_infrastructure"},next:{title:"BPF-based ink! smart contracts",permalink:"/docs/RFPs/bpf-contracts"}},r={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Overview",id:"overview",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Load Balancer (LB)",id:"load-balancer-lb",level:3},{value:"Payout Calculation",id:"payout-calculation",level:4},{value:"Database",id:"database",level:3},{value:"LB Daemon",id:"lb-daemon",level:3},{value:"Payout script",id:"payout-script",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Milestones",id:"milestones",level:2},{value:"Milestone 1: LB Daemon and Database",id:"milestone-1-lb-daemon-and-database",level:3},{value:"Milestone 2: Load Balancer",id:"milestone-2-load-balancer",level:3},{value:"Milestone 3: Payout Script",id:"milestone-3-payout-script",level:3},{value:"Milestone 4: Dashboard",id:"milestone-4-dashboard",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"appi-auto-funded-public-p2p-infrastructure"},"APPI: Auto-funded public P2P infrastructure"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This Request for Proposals is ",(0,n.kt)("em",{parentName:"p"},"closed"),", meaning we are not looking for any more proposals on this topic at the moment.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nodefactoryio/vedran"},"Implemented")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/swader"},"swader")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for"),": ",(0,n.kt)("a",{parentName:"li",href:"https://kusama.network"},"https://kusama.network"),", ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network"},"https://polkadot.network"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"In Ethereum, most user-facing applications default to Infura as an endpoint to access full node information. "),(0,n.kt)("p",null,"While it is tempting to conclude that this is because running home nodes is prohibitively expensive, the main reason is in fact ",(0,n.kt)("strong",{parentName:"p"},"inertia"),". Put simply, people weren't given the option or incentive to run their own nodes fast enough, and defaulted to an easier route which stuck."),(0,n.kt)("p",null,"There have been attempts at financing home-run infrastructure - projects like ",(0,n.kt)("a",{parentName:"p",href:"https://vipnode.org/"},"VIPNode")," have lead the charge - but the aforementioned inertia prevented any significant adoption. Another recent contender is Pokt.network."),(0,n.kt)("p",null,"This document describes auto-funded public p2p infrastructure (APPI) for the Polkadot and, specifically, Kusama ecosystem. The idea is to incentivize people to run full and archive nodes at home, without relying on cloud servers and centralized points of failure."),(0,n.kt)("h2",{id:"dependencies"},"Dependencies"),(0,n.kt)("p",null,"Depends on Treasury Recurring Payouts: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/6551"},"https://github.com/paritytech/substrate/issues/6551")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The payout, approved by a Council motion for a specific pool of nodes would go to the the ",(0,n.kt)("a",{parentName:"p",href:"#payout-script"},"payout script")," (identified as an address), then the pool would distribute the funds based on the ",(0,n.kt)("a",{parentName:"p",href:"#database"},"database"),"."),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("h3",{id:"load-balancer-lb"},"Load Balancer (LB)"),(0,n.kt)("p",null,"The Load Balancer is a tool that assigns an incoming connection request to a node in its pool. The Load Balancer should only accept nodes with the ",(0,n.kt)("strong",{parentName:"p"},"same settings")," as every other node. "),(0,n.kt)("p",null,"E.g. if a node is running with some RPC endpoints off, it should not share a pool with a node that has them all on, otherwise the users connecting to the pool might experience lower QoS."),(0,n.kt)("p",null,"The Load Balancer should monitor for node ",(0,n.kt)("strong",{parentName:"p"},"freshness")," via ",(0,n.kt)("a",{parentName:"p",href:"LB-Daemon"},"LB Daemon")," and log penalties into the ",(0,n.kt)("a",{parentName:"p",href:"#Database"},"Database")," if a node is offline (not reporting a ping for more than 30 seconds) or not fresh (a node's latest and best block lag behind the best in the pool by more than 10 blocks)."),(0,n.kt)("p",null,"A penalized node should enter an initial cooldown of 1 minute, and issue another check after the cooldown expires. After every check, if the offense is still on-going, the duration of the last cooldown doubles. When a node's cooldown exceeds 17 hours, the node is permanently removed from the pool (automatically removed from the whitelist)."),(0,n.kt)("p",null,"An LB operator can define the following settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LB name"),(0,n.kt)("li",{parentName:"ul"},"LB capacity (max number of nodes)"),(0,n.kt)("li",{parentName:"ul"},"Whitelist (list of node IDs)"),(0,n.kt)("li",{parentName:"ul"},"Fee (cut to take)"),(0,n.kt)("li",{parentName:"ul"},"Selection method (random or round robin)"),(0,n.kt)("li",{parentName:"ul"},"Aliases: if the operator is running alternative clones of the same LB on other infra, aliases can be defined here. All LB clones should also define the same list of aliases, including the original. This should reduce reliance on a single LB endpoint."),(0,n.kt)("li",{parentName:"ul"},"Payout period in days"),(0,n.kt)("li",{parentName:"ul"},"Payout script executable path")),(0,n.kt)("p",null,"The LB should be able to automatically and periodically - based on ",(0,n.kt)("em",{parentName:"p"},"payout period")," - call out to a ",(0,n.kt)("a",{parentName:"p",href:"#payout-script"},"Payout script")," which takes as input a list of addresses and points."),(0,n.kt)("h4",{id:"payout-calculation"},"Payout Calculation"),(0,n.kt)("p",null,"The LB adds points to a node in the ratio of 90:10 for requests:liveness. In other words, a node that has been online but got no requests due to bad luck should still be paid something."),(0,n.kt)("h3",{id:"database"},"Database"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"append-only database")," for historical data (",(0,n.kt)("a",{parentName:"p",href:"LB-Daemon"},"see below"),") should be running alongside the LB. The LB operator should be able to define the age of the data to store. The age should default to 30 days."),(0,n.kt)("p",null,"Can be Prometheus if the ",(0,n.kt)("a",{parentName:"p",href:"LB-Daemon"},"daemon")," is built in a way that exposes this information."),(0,n.kt)("h3",{id:"lb-daemon"},"LB Daemon"),(0,n.kt)("p",null,"The LB Daemon is a background process (perhaps with Prometheus metrics exposed) meant to run alongside a Substrate node. This Daemon:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pings its home LB every few seconds with the node's ID"),(0,n.kt)("li",{parentName:"ul"},"alphabetically orders and standardizes, then hashes a node's startup settings (exclude basepath and name) and sends them along with every ping"),(0,n.kt)("li",{parentName:"ul"},"retrieves the node's best and latest blocks and sends them along with every ping"),(0,n.kt)("li",{parentName:"ul"},"reports telemetry data to the LB, like connected peers, memory use, etc. The LB stores this data into the ",(0,n.kt)("a",{parentName:"li",href:"#Database"},"Database"))),(0,n.kt)("p",null,"Without a companion Daemon, a node ",(0,n.kt)("strong",{parentName:"p"},"cannot")," join a pool."),(0,n.kt)("h3",{id:"payout-script"},"Payout script"),(0,n.kt)("p",null,"The Payout script is in charge of disbursing payments. This is a multi-pay script which takes as input a mapping of addresses and points. The payout script should be an account of the chain it is paying out for (e.g. a Kusama account if we're dealing with a Kusama pool), so that it can receive the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/6551"},"auto-payout from the Treasury"),"."),(0,n.kt)("p",null,"The payout script should be a standalone executable. Future efforts can develop payout scripts for other chains, which would make them immediately compatible with the other components in this document."),(0,n.kt)("h3",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/"},"Telemetry"),", the Dashboard should output stats for all nodes of a given LB as well as that LB itself (fee, name, contact info). Alongside those standard stats, the dashboard should also show historical information on the LB's performance as well as the performance of individual nodes in that LB. This information comes from the ",(0,n.kt)("a",{parentName:"p",href:"#Database"},"Database"),"."),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  160 hours"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," ~20000 USD")),(0,n.kt)("h2",{id:"milestones"},"Milestones"),(0,n.kt)("h3",{id:"milestone-1-lb-daemon-and-database"},"Milestone 1: LB Daemon and Database"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"lb-daemon"},"LB Daemon")," and ",(0,n.kt)("a",{parentName:"p",href:"database"},"Database")," for definitions."),(0,n.kt)("p",null,"Summary: The LB Daemon, a standalone daemon to run alongside a Kusama or Polkadot node, should be able to feed node information into a remote database."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  40 hours"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 5000 USD")),(0,n.kt)("h3",{id:"milestone-2-load-balancer"},"Milestone 2: Load Balancer"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"Lead-Balancer-LB"},"Load Balancer")," for definition."),(0,n.kt)("p",null,"Summary: The LB should be able to read the database from milestone 1 and route RPC requests to qualified nodes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  80 hours"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10000 USD")),(0,n.kt)("h3",{id:"milestone-3-payout-script"},"Milestone 3: Payout Script"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"#Payout-script"},"Payout Script")," and ",(0,n.kt)("a",{parentName:"p",href:"#Payment-calculation"},"Payment Calculation")," for details."),(0,n.kt)("p",null,"Summary: The Payout script should be callable externally and be able to distribute payments from a single stash of tokens to multiple addresses in a single call, using a provided data file of ratios provided by the caller."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 week"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  20 hours"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 5000 USD")),(0,n.kt)("h3",{id:"milestone-4-dashboard"},"Milestone 4: Dashboard"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"#dashboard"},"Dashboard")," for details."),(0,n.kt)("p",null,"Summary: A dashboard for public insight into a given pool should be developed. The pool operator should be able to easily deploy this dashboard on his own infrastructure, with or without wrapper services like Docker."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 week"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  20 hours"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 5000 USD")))}h.isMDXComponent=!0}}]);