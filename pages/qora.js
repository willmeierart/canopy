import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Head from '../components/Head'
import { checkBrowser } from '../lib/redux/actions'
import { binder } from '../lib/_utils'
import StoreIcons from '../components/layout/StoreIcons'

class Qora extends Component {
	componentDidMount () {
		this.props.onCheckBrowser()
	}
	render () {
		const aspect = 9 / 16
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const WIDTH = dims ? dims.width * mult : 800
		const HEIGHT = WIDTH * aspect
		return (
			<main>
				<Head title='Qora - Canopy' />
				<section>
					<div className='copy'>
						<div className='title'>Qora</div>
						<div className='description'>
							Explore mysterious and stunning landscapes as you uncover the past in this pixel-art adventure game.
						</div>
					</div>
					<div className='video-wrapper'>
						<iframe
							id='ytplayer'
							type='text/html'
							width={WIDTH}
							height={HEIGHT}
							src='https://www.youtube.com/embed/f8EkoJzr_x0?autoplay=1&controls=0&loop=1&playsinline=1&showinfo=0&modestbranding=1&rel=0'
							frameBorder='0'
						/>
					</div>
					<div className='store-wrapper'>
						<StoreIcons
							isMobile={isMobile}
							device={browser}
							icons={{
								steam: 'https://store.steampowered.com/app/304460/Qora/',
								itchio: 'https://megavice.itch.io/qora'
							}}
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

export default connect(mapStateToProps, mapDispatchToProps)(Qora)

Qora.propTypes = {}
