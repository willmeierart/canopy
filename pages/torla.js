import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Head from '../components/Head'
import { checkBrowser } from '../lib/redux/actions'
import { binder } from '../lib/_utils'
import StoreIcons from '../components/layout/StoreIcons'

class Torla extends Component {
	componentDidMount () {
		this.props.onCheckBrowser()
	}
	render () {
		const aspect = 412 / 987
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const WIDTH = dims ? dims.width * mult : 800
		const HEIGHT = WIDTH * aspect
		return (
			<main>
				<Head title='Torla - Canopy' />
				<section>
					<div className='copy'>
						<div className='title'>Torla</div>
						<div className='description'>
							This whimsical rpg was in development for seven months before it’s kickstarter campaign didn’t reach its
							goal and the project was indefinitely set aside.
						</div>
					</div>
					<div className='video-wrapper'>
						<iframe
							width={WIDTH}
							height={HEIGHT}
							src='https://player.vimeo.com/video/256636770'
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
					.copy {
						margin: 20px 0;
						width: ${WIDTH}px;
					}
					.title {
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
						margin-top: 10px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Torla)

Torla.propTypes = {}
