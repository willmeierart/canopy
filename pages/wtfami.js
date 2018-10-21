import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Head from '../components/Head'
import FullScreenPlayer from '../components/portfolio/FullScreenPlayer'
import { checkBrowser } from '../lib/redux/actions'
import StoreIcons from '../components/layout/StoreIcons'

class WTFAmI extends Component {
	constructor (props) {
		super(props)
		this.state = {
			player: null
		}
	}
	componentDidMount () {
		this.props.onCheckBrowser()
		// this.vid.requestFullScreen()
	}

	render () {
		const aspect = 640 / 1136
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const HEIGHT = dims ? dims.height * mult : 800
		const WIDTH = HEIGHT * aspect
		return (
			<main>
				<Head title='Where the Fuck Am I - Canopy' />
				<section />
				<style jsx>{`
					main {
						height: 100%;
						display: flex;
						flex-direction: column;
						flex-grow: 1;
						min-height: calc(100vh - 200px);
					}
					section {
						display: flex;
						flex-direction: column;
						justify-content: center;
						text-align: center;
						align-items: center;
						height: 100%;
						width: 80vw;
						margin: auto;
					}
					.logo {
						margin-top: 20px;
					}
					.video-wrapper {
						overflow: hidden;
						display: inline-block;
						object-fit: fill;
						object-position: center;
						width: ${WIDTH}px;
						height: ${HEIGHT}px;
						min-width: ${WIDTH}px;
						min-height: ${HEIGHT}px;
						margin-top: 10px;
					}
					.btn {
						padding: 3em;
						background: red;
						color: white;
						cursor: pointer;
					}
					.btn:hover {
						background: darkred;
					}
				`}</style>
			</main>
		)
	}
}

function mapStateToProps (state) {
	return {
		isMobile: state.env.isMobile,
		dims: state.env.dims,
		browser: state.env.browser
	}
}

function mapDispatchToProps (dispatch) {
	return {
		onCheckBrowser: () => dispatch(checkBrowser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WTFAmI)

WTFAmI.propTypes = {}
