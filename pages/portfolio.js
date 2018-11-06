import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '../components/portfolio/Grid'
import FullScreenPlayer from '../components/portfolio/FullScreenPlayer'
import { checkBrowser } from '../lib/redux/actions'
import { portfolio } from '../lib/data'

class Portfolio extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activeItem: 0,
			playVideo: false,
			showVideo: false,
			fsCancellable: false
		}
	}

	componentDidMount () {
		document.addEventListener('fullscreenchange', this.exitFS)
		document.addEventListener('webkitfullscreenchange', this.exitFS)
		document.addEventListener('mozfullscreenchange', this.exitFS)
		document.addEventListener('MSFullscreenChange', this.exitFS)
	}

	exitFS = e => {
		console.log(e, this.state.fsCancellable)
		if (this.state.fsCancellable) {
			this.handleClick(false)
		}
	}

	setActiveItem = activeItem => {
		this.setState({ activeItem })
	}

	handleClick = bool => {
		this.setState({ showVideo: bool })
	}

	setCancellable = bool => {
		this.setState({ fsCancellable: bool })
	}

	render () {
		const { title, description, vidSrc, vimeoID } = portfolio[this.state.activeItem]
		return (
			<main>
				<section>
					{!this.state.showVideo && (
						<div className='text'>
							<div className='title'>{title}</div>
							<div className='description'>{description}</div>
						</div>
					)}

					{this.state.showVideo ? (
						<FullScreenPlayer
							setCancellable={this.setCancellable}
							src={vidSrc}
							vimeoID={vimeoID}
							handleClick={this.handleClick}
						/>
					) : (
						<Grid
							isMobile={this.props.isMobile}
							handleClick={this.handleClick}
							workSamples={portfolio}
							setActiveItem={this.setActiveItem}
						/>
					)}
				</section>
				<style jsx>{`
					main {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 100%;
						min-height: calc(100vh - 105px);
					}
					main:focus {
						outline: none;
					}
					section {
						position: relative;
					}
					.text {
						position: absolute;
						bottom: 100%;
						margin-left: 2vw;
						margin-bottom: 1em;
					}
					.text .title {
						font-weight: bold;
						text-transform: uppercase;
					}
					@media screen and (max-width: 700px) {
						.text {
							display: none;
						}
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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)

Portfolio.propTypes = {}
