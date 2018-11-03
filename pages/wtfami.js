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
		const aspect = 9 / 16
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const WIDTH = dims ? dims.width * mult : 800
		const HEIGHT = WIDTH * aspect
		console.log(dims, WIDTH, HEIGHT)
		return (
			<main>
				<Head title='Where the Fuck Am I - Canopy' />
				<section>
					<div className='text'>
						<div className='title'>Where the Fuck Am I?</div>
						<div className='description'>
							Experimental. Travel. Sketch. Show. Each episode of “Where the Fuck Am I?” explores a different part of
							the world through surreal sketches, comedy, documentary, animation and more. A 30min pilot episode was
							finished in October 2018. Watch the trailer below:
						</div>
					</div>
					<div className='video-wrapper'>
						<iframe
							width={WIDTH}
							height={HEIGHT}
							src='https://player.vimeo.com/video/295476411'
							frameBorder='0'
							allowFullScreen
							mozallowfullscreen='true'
							webkitallowfullscreen='true'
						/>
					</div>
				</section>
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
						align-items: center;
						height: 100%;
						width: 80vw;
						margin: 0 auto;
						margin-top: 20px;
					}
					.text {
						width: ${WIDTH}px;
					}
					.title {
						margin-top: 20px;
						font-weight: bold;
						text-transform: uppercase;
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
