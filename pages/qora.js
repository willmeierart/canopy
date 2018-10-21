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
		const aspect = 640 / 1136
		const { isMobile, dims, browser } = this.props
		const mult = 0.7
		const HEIGHT = dims ? dims.height * mult : 800
		const WIDTH = HEIGHT * aspect
		return (
			<main>
				<Head title='Qora - Canopy' />
				<section>
					<div className='logo'>
						<img alt='Qora logo' src='/static/assets/Qora_title.png' />
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
						<StoreIcons isMobile={isMobile} device={browser} />
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
