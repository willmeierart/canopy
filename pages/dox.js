import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Head from '../components/Head'
import { checkBrowser } from '../lib/redux/actions'
import StoreIcons from '../components/layout/StoreIcons'

class DOX extends Component {
	componentDidMount () {
		this.props.onCheckBrowser()
	}
	render () {
		const aspect = 640 / 1136
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const HEIGHT = dims ? dims.height * mult : 800
		const WIDTH = HEIGHT * aspect
		return (
			<main>
				<Head title='DOX - Canopy' />
				<section>
					<div className='copy'>
						<div className='title'>DOX: A Puzzle Game</div>
						<div className='description'>Learn the language of each unique button to remove them from the grid.</div>
					</div>
					<div className='video-wrapper'>
						<iframe
							id='ytplayer'
							type='text/html'
							width={WIDTH}
							height={HEIGHT}
							src='https://www.youtube.com/embed/_36xkzplHOg?autoplay=1&controls=0&loop=1&playsinline=1&showinfo=0&modestbranding=1&rel=0'
							frameBorder='0'
						/>
					</div>
					<div className='store-wrapper'>
						<StoreIcons
							isMobile={isMobile}
							device={browser}
							icons={{
								appstore: 'https://itunes.apple.com/us/app/dox-a-puzzle-game/id1422501586?ls=1&mt=8',
								google: 'https://play.google.com/store/apps/details?id=com.canopyltd.dox',
								amazon: 'https://www.amazon.com/dp/B07HQ7NZXD/ref=sr_1_1?ie=UTF8&qid=1538111245&sr=8-1'
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
						margin: auto;
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

export default connect(mapStateToProps, mapDispatchToProps)(DOX)

DOX.propTypes = {}
