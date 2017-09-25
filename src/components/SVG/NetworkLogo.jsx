import React, { Component } from 'react'

export default class NetworkLogo extends Component {
	constructor(opts) {
		super(opts)
	}

	render() {
		const { width } = this.props
		return (
			<svg width={width} viewBox="0 0 400 400" >

				<path className={"path"} d="M 200 200 A 50 50 0 1 1 250 150 A 50 50 0 1 1 200 200 A 50 50 0 1 1 250 200 A 50 50 0 1 1 200 200 L 200 200 A 50 50 0 1 1 250 250 A 50 50 0 1 1 200 200 A 50 50 0 1 1 200 250 A 50 50 0 1 1 200 200 A 50 50 0 1 1 150 250 A 50 50 0 1 1 200 200 A 50 50 0 1 1 150 200 A 50 50 0 1 1 200 200 A 50 50 0 1 1 150 150 A 50 50 0 1 1 200 200 A 50 50 0 1 1 200 150 A 50 50 0 1 1 200 200 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#3e128c"
					strokeWidth="4"
					strokeDasharray={"100"}
					strokeDashoffset={"1000"}
				/>

				<path d="M 200 200 L 300 150 L 300 250 L 200 300 L 100 250 L 100 150 L 200 100 L 255 127 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="12"
				/>

				<circle cx="255" cy="127" r="14" fill="#cc5333"/>
				<circle cx="255" cy="127" r="8" fill="#2a1e38"/>
				<circle cx="200" cy="200" r="14" fill="#cc5333"/>
				<circle cx="200" cy="200" r="8" fill="#2a1e38"/>

			</svg>
		)
	}
}
