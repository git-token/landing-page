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
		'100% Free & MIT Licensed Open Source',
		'ERC-20+ Token Issuance & Automated Distributions',
		'GitHub Web Hook Integration',
		'Deployment & Transaction Signing Middleware',
		'GitHub Open Authorization (OAuth)',
		'Contributions Analytics Dashboard & Auction User Interfaces',
		'Software Upgradeability'
	],
	startDate: new Date().toDateString(),
	endDate: new Date("9/30/2017").toDateString(),
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
	title: 'GitToken',
	subtitle: 'Earn Ethereum Tokens for GitHub Contributions',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: '',
	code: ''
}, {
	title: 'Git + GitHub + GitToken',
	subtitle: 'Using Git and GitHub Work Flows with GitToken',
	gifs:['./src/assets/images/github_project_management.gif'],
	bullets: [
		'Git is distributed version control software; used to track changes in software.',
		'GitHub is the largest hosting service for open source code.',
		'GitHub helps developers organize and release their software.',
		'GitHub helps other developers report bugs, contribute, and evaluate software.',
		'GitToken provides software to GitHub organizations to reward contributions.'
	],
	description: '',
	code: '',
}, {
	title: 'Getting Started with GitToken',
	subtitle: 'Setting Up GitToken Services',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [
		'Docker Services',
		'GitHub Web Hook Configuration'
	],
	description: '',
	code: ''
}, {
	title: 'Docker Services',
	subtitle: 'Using Docker Compose to Deploy GitToken Software',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: '',
	code: ''
}, {
	title: 'GitHub Web Hook Configuration',
	subtitle: 'Listen for Contribution Events',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: '',
	code: ''
}, {
	title: 'A Practical Evolution in Software Development & Funding',
	subtitle: 'Integrating Milestones and Token Auctions',
	gifs: ['./src/assets/images/demo.gif'],
	bullets: [],
	description: '',
	code: ''
}],
activeSlide: 1
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
