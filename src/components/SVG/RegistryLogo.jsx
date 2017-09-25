import React, { Component } from 'react'

export default class RegistryLogo extends Component {
	constructor(opts) {
		super(opts)
	}

	render() {
		const { width, height, style } = this.props
		return (
			<svg width={width} height={height} viewBox="0 0 400 400" style={style}>
				<path className={"path"} d="M 200 100 L 300 150 L 200 200 L 100 150 L 200 100 L 200 150 L 300 200 L 200 250 L 100 200 L 200 150 L 200 200 L 300 250 L 200 300 L 100 250 L 200 200 L 200 250 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#3e128c"
					strokeWidth="6"
					strokeDasharray={"100, 100"}
					strokeDashoffset={"1000"}
				/>

				<path d="M 200 200 L 300 150 L 300 250 L 200 300 L 100 250 L 100 150 L 200 100 L 255 127 "
					fill="transparent"
					strokeLinejoin={"round"}
					stroke="#cc5333"
					strokeWidth="12"
				/>

				<circle cx="255" cy="127" r="14" fill="#cc5333"/>
				<circle cx="255" cy="127" r="8" fill="#3e128c"/>
				<circle cx="200" cy="200" r="14" fill="#cc5333"/>
				<circle cx="200" cy="200" r="8" fill="#3e128c"/>

			</svg>
		)
	}
}
