const INITITAL_STATE = {
menuModal: false,
timeRemaining: '',
route: '',
roadmap: [{
	title: 'Alpha Software Release',
	milestoneUrl: 'https://github.com/git-token/server/milestone/1',
	description: `
		The alpha software release provides everything needed to setup GitToken
		for any GitHub organization!
	`,
	features: [
		'100% Free & MIT Licensed Open-Source',
		'ERC-20+ Token Issuance & Automated Distributions',
		'GitHub Web Hook Integration',
		'Deployment & Transaction Signing Middleware',
		'GitHub Open Authorization (OAuth)',
		'Contributions Analytics Dashboard & Auction User Interfaces',
		'Software Upgradeability'
	],
	startDate: new Date().toDateString(),
	endDate: new Date('Sat Sep 30 2017 16:00:00 GMT-0700 (PDT)'),
	gif: './src/assets/images/demo.gif'
},{
	title: 'GitToken Registry & Exchange',
	milestoneUrl: '',
	description: `
		The GitToken registry and exchange services provide the infrastructure for
		others to discover, contribute to, and exchange with your GitToken projects.
	`,
	features: [
		'Free Project Registration & Showcase on GitToken.org!',
		'Early Adopters Receive Zero Exchange Fees for Contract Lifetime',
		'GitToken Projects on the Test Network can Discover and Exchange with Each Other'
	],
	startDate: new Date().toDateString(),
	endDate: new Date("10/31/2017").toDateString(),
	gif: './src/assets/images/demo.gif'
},{
	title: 'Beta Software Release',
	milestoneUrl: '',
	description: 'Following the alpha testing period, GitToken Token (GTK) will be launched on the Live Ethereum network.',
	features: [
		'GTK Token is Live and Distributed in Return for GitToken Organization GitHub Contributions!',
		'Free Project Registration & Showcase on GitToken.org!',
		'Early Adopters Receive Zero Exchange Fees for Contract Lifetime',
		'Adoption of Open Protocols & Community Network Effects'
	],
	startDate: new Date().toDateString(),
	endDate: new Date("11/30/2017").toDateString(),
	gif: './src/assets/images/demo.gif'
}, {
	title: 'Live Software Release',
	milestoneUrl: '',
	description: `
		GitToken services are deployed on the Live Ethereum network. Initial trades
		occur on the exchange between GitToken projects. Early Adopters receive zero
		exchange fees for the contract's indefinite lifetime.
	`,
	features: [
		'Registration Requires Holding 10,000 GitToken (GTK) Tokens',
		'Initial Trades on GitToken Exchange'
	],
	startDate: new Date().toDateString(),
	endDate: new Date("1/1/2018").toDateString(),
	gif: './src/assets/images/demo.gif'
}],
presentation: [{
	title: 'Introducing GitToken',
	subtitle: 'Issue and Earn Ethereum ERC20 Tokens for Your GitHub Contributions',
	gifs: [],
	bullets: [],
	description: [`\n`],
	code: `
	GitToken enables any GitHub organization to issue and
	distribute Ethereum ERC20 tokens to incentivize and
	reward contributors for contributing to organizations'
	GitHub (public or private) repositories.

	Presentation Topics:

	- Installing GitToken CLI
	- Registering a GitHub Organization with GitToken Registry
	- Git + GitHub + GitToken Work Flows
	- Using the GitToken Terminal
	- Torvalds Ethereum Network
	- Funding Open-Source Software with GitToken
	- GitToken Q4 2017 RoadMap

	`
},{
	title: 'Getting Started with GitToken',
	subtitle: 'Installation',
	gifs: [
		'./src/assets/images/git-token-install.gif'
	],
	bullets: [],
	description: [],
	code: `

	Install GitToken CLI programs using NPM or Yarn

	>_ npm i -g git-token@alpha

	or, using Yarn package manager

	>_ yarn global add git-token@alpha


	`
},{
	title: 'GitToken Registry',
	subtitle: 'Register Your Organization to Setup https://webhook.gittoken.io/<organization>',
	gifs: [
		'./src/assets/images/git-token-register.gif'
	],
	bullets: [],
	description: [],
	code: `
	Register using the GitToken CLI program

	>_ git token register

	also, as an alias...

	>_ git token rebase

	The 'rebase' command will eventually be
	used to migrate contracts when new versions
	of GitToken contracts are released or when
	migrating contracts to different blockchain
	networks

	`
},{
	title: 'Git + GitHub + GitToken',
	subtitle: 'Using Git and GitHub Work Flows with GitToken',
	gifs: [
		'./src/assets/images/github_project_management.gif'
	],
	bullets: [],
	description: [],
	code: `


	Built to incentivize and reward project
	management and (open-source) software
	development.


	Integrates with Git command line interface
	(CLI) and graphical user interface (GUI)
	programs.


	Modeling toward incentivizing best practice work
	flows; Yet, flexible enough to customize for your
	team's style.


	Use GitHub webhook and organization settings to
	manage payload requests to the contract.

	`,
},{
	title: 'GitToken Terminal',
	subtitle: 'Search and Interact with GitToken Projects from the Command Terminal!',
	gifs: ['./src/assets/images/git-token-terminal.gif'],
	bullets: [],
	description: [],
	code: `

	The GitToken Terminal is installed with
	the GitToken CLI package

	>_ git token terminal


	The GitToken Terminal listens to contract
	events in real-time for a selected organization.


	The terminal will eventually provide a
	decentralized auction and exchange for
	GitToken projects.

	`
},{
	title: 'Torvalds Network',
	subtitle: `new Web3(Web3.providers.HttpProvider("https://torvalds.gittoken.io")`,
	gifs: ['./src/assets/images/git-token-torvalds-network.gif'],
	bullets: [],
	description: [],
	code: `

	Using a Generic Parity Development Chain + Bootnode

	{
		"name": "Torvalds",
		"engine": {
			"instantSeal": {
				"params": {}
			}
		},
		"params": {
			"accountStartNonce": "0x0",
			"maximumExtraDataSize": "0x20",
			"minGasLimit": "0x1388",
			"networkID": "0x9"
		},
		...
	}
	`
}, {
	title: 'Funding Open-Source Software Development',
	subtitle: 'Milestones, Auctions and Exchanges',
	gifs: [
		'./src/assets/images/git-token-contract-tests.gif'
	],
	bullets: [],
	description: [],
	code: `
  function _initializeAuction(
    Data storage self,
    uint _initialPrice,
    uint _delay,
    uint _tokenLimitFactor,
    bool _lockTokens
  ) internal returns(uint[8]) {
		...

    return ([
      self.auctionRound,
      self.auctionDetails[self.auctionRound].startDate,
      self.auctionDetails[self.auctionRound].endDate,
      self.lockTokenTransfersUntil,
      self.auctionDetails[self.auctionRound].tokensOffered,
      self.auctionDetails[self.auctionRound].initialPrice,
      self.auctionDetails[self.auctionRound].fundLimit,
      self.auctionDetails[self.auctionRound].tokenLimitFactor
    ]);
  }
	`
},{
	title: 'GitToken RoadMap',
	subtitle: 'Q4 2017',
	gifs: ['https://media.giphy.com/media/jnBXe38Ww2XAI/giphy.gif'],
	bullets: [],
	description: [],
	code: `
	- October 31st, 2017
		- Refactor GitToken Contracts
			- Cost Optimizations
			- Default Reward Point Changes
			- GitToken Registry Contract Integration
		- GitToken Terminal Updates
			- Ledger Nano Integration
		- GitToken Web Application
			- MetaMask Integrations
	- November 30th, 2017
		- Integrations and Partnerships with
		  Ethereum eco-system
		- GitToken Exchange & Market Makers
		  (alpha on Torvalds)
		- GitToken Terminal Updates
			- Auction & Exchanges UI Integration
		- Testing on public Ethereum test (Ropsten)
		  and live networks
	- January 1st, 2018
		- GitToken Mobile UI (alpha)
		- First GitToken Auctions on Main
		  Ethereum network
		- GitToken Web Application & Terminal
		  Updates
			- Contract voting integrations
			  (use git-vote?)
		- All Your Re-Base Are Belong To GitToken
	`
}],
activeSlide: 0
}

export default function main(state=INITITAL_STATE, action) {
  switch(action.type) {
		case 'SET_COUNTDOWN':
			return {
				...state,
				timeRemaining: action.value
			}
			break;
		case 'SET_ROUTE':
			return {
				...state,
				route: action.value
			}
			break;
		case 'SET_SLIDE':
			return {
				...state,
				activeSlide: action.value
			}
			break;
		case 'UPDATE':
			return {
				...state,
				[action.id]: action.value
			}
			break;
		default:
      return state
  }
}
