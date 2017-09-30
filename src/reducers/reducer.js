const INITITAL_STATE = {
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
	/**

	GitToken enables any GitHub organization to issue and distribute Ethereum
	ERC20 tokens to incentivize and reward contributors for contributing to
	organizations' GitHub (public or private) repositories.

	*/

	// Any time a Pages site is built or results in a failed build.
	gittoken.rewardValues['page_build']                       = 500 * 10**_decimals;

	// Any time a Project Card is created, edited, moved, converted to an issue,
	gittoken.rewardValues['project_card']                     = 250 * 10**_decimals;

	// Any time a Project is created, edited, closed, reopened, or deleted.
	gittoken.rewardValues['project']                          = 1000 * 10**_decimals;

	// Any time a pull request is assigned, unassigned, labeled, unlabeled, opened,
	// edited, closed, reopened, or synchronized (updated due to a new push in the
	// branch that the pull request is tracking). Also any time a pull request
	// review is requested, or a review request is removed.
	gittoken.rewardValues['pull_request']                     = 2500 * 10**_decimals;

	`
}, {
	title: 'Git + GitHub + GitToken',
	subtitle: 'Using Git and GitHub Work Flows with GitToken',
	gifs: [
		'./src/assets/images/github_project_management.gif'
	],
	bullets: [],
	description: [],
	code: `


	## Built to incentivize and reward project management and (open-source)
	## software development.


	## Integrates with Git command line interface (CLI) and graphical user interface
	## (GUI) programs.


	## Modeling toward incentivizing best practice works flows; Yet,
	## flexible enough to customize for your team's work flows.


	## Use GitHub webhook and organization settings to manage payload requests to
	## the contract.

	`,
}, {
	title: 'Getting Started with GitToken',
	subtitle: 'Installation',
	gifs: [
		'./src/assets/images/git-token-install.gif'
	],
	bullets: [],
	description: [],
	code: `


		## Install GitToken CLI programs using NPM or Yarn



		>_ npm i -g git-token@alpha



		## or, using Yarn package manager



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
	## Register using the GitToken CLI program

	>_ git token register

	also, as an alias...

	>_ git token rebase

	## Rebase will eventually be used to migrate contracts when new
	## versions of GitToken contracts are released





	## All Your Re-Base Are Belong To Us ;)

	`
},{
	title: 'GitToken Terminal',
	subtitle: 'Search and interact with GitToken projects from the terminal!',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: [],
	code: ''
},{
	title: 'GitToken Mechanics',
	subtitle: 'Technical Overview',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: [],
	code: ''
},{
	title: 'Torvalds Network',
	subtitle: 'Connect to: https://torvalds.gittoken.io',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [
		`
			The Torvalds Network is an Ethereum test network open to GitToken
			early adopters.
		`,
		`
			DISCLAIMER: This is a test network and values on this network do not hold
			any value or any future value. The network is purely for testing.
		`
	],
	description: [],
	code: ''
}, {
	title: 'Funding Open-Source Software Development',
	subtitle: 'Milestones, Auctions and Exchanges',
	gifs: [
		''
	],
	bullets: [
		`Completed milestones start new auctions`,
		`
			A reserved supply of tokens is withheld by the organizations' GitToken
			contract for auction upon certain events (e.g. a new member added or a milestone completed)
		`,
		'Auction Model'
	],
	description: [],
	code: ''
},{
	title: 'GitToken RoadMap',
	subtitle: 'Q4 2017',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: [],
	code: ''
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
		default:
      return state
  }
}
