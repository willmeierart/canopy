import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import Player from '@vimeo/player'
import Vimeo from 'react-vimeo'

export default class FullScreenPlayer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			WIDTH: 0,
			HEIGHT: 0
		}
	}

	componentDidMount () {
		const init = () => {
			if (typeof window !== 'undefined') {
				window.addEventListener('resize', init)
				this.setState({ WIDTH: `${window.innerWidth}`, HEIGHT: `${window.innerHeight}` })
			} else {
				setTimeout(init, 500)
			}
		}
		init()
		setTimeout(() => {
			this.props.setCancellable(true)
		}, 500)
	}

	componentWillUnmount () {
		this.props.setCancellable(false)
	}

	onPause = e => {
		console.log(e)
		if (e.data.seconds > 0) {
			this.props.handleClick(false)
		}
	}

	onPlay = e => {
		console.log(e, document.fullScreenElement)
	}

	onError = () => {
		this.forceUpdate()
	}

	render () {
		const { WIDTH, HEIGHT } = this.state
		const { vimeoID } = this.props
		return (
			<div className='fullscreen-video-wrapper'>
				<Vimeo
					videoId={`${vimeoID}`}
					autoplay={true}
					loading={null}
					className='fullscreen-vid'
					playerOptions={{
						width: WIDTH,
						height: HEIGHT,
						autoplay: true,
						portrait: false,
						byline: false,
						autopause: false,
						api: true
					}}
					setColor='rgb(255,255,255)'
					onPlay={this.onPlay}
					onPause={this.onPause}
					allowFullScreen='true'
					playButton={null}
					onError={this.onError}
					onEnded={this.onPause}
				/>
				<style jsx global>{`
					.fullscreen-video-wrapper {
						display: inline-block;
						object-fit: fill;
						object-position: center;
						width: ${WIDTH}px;
						height: ${HEIGHT}px;
						min-width: ${WIDTH}px;
						min-height: ${HEIGHT}px;
						top: 0;
						left: 0;
						z-index: 20;
						position: relative;
					}
					.x {
						position: absolute;
						right: 10px;
						bottom: 100%;
						font-size: 3em;
						cursor: pointer;
					}
					.x:hover {
						color: var(--color-lightgrey);
					}
					.fullscreen-vid {
						width: ${WIDTH}px;
						height: ${HEIGHT}px;
					}
					.fullscreen-vid iframe {
						width: 100%;
						height: 100%;
					}
					.vimeo-loading {
						display: none;
					}
					.fullscreen-vid .player .vp-player-layout {
						top: 10px !important;
					}
				`}</style>
			</div>
		)
	}
}

FullScreenPlayer.propTypes = {}
