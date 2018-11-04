import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WorkModule extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isHovered: false
		}
	}

	handleMouseOver = id => {
		this.setState({ isHovered: true })
		this.props.setActiveItem(id)
	}

	handleMouseOut = () => {
		this.setState({ isHovered: false })
		this.props.setActiveItem(0)
	}

	handleClick = () => {
		this.props.handleClick(true)
		setTimeout(() => {
			const player = document.querySelector('iframe')
			if (player) {
				const RFS = player.requestFullscreen || player.mozRequestFullScreen || player.webkitRequestFullScreen
				RFS.bind(player)()
			} else {
				setTimeout(this.handleClick, 500)
			}
		}, 200)
	}

	render () {
		const { data: { imgSrc, id }, rows, handleClick } = this.props
		typeof window !== 'undefined' && console.log(86 / 100 * window.innerWidth / 6)
		return (
			<div onClick={this.handleClick} onMouseOver={() => this.handleMouseOver(id)} onMouseOut={this.handleMouseOut}>
				<style jsx>{`
					div {
						background-image: url('${imgSrc}');
						background-size: contain;
						width: ${rows === 2 ? 'calc(86vw / 6)' : 'calc(90vw / 4)'};
						height: ${rows === 2 ? 'calc(86vw / 6)' : 'calc(90vw / 4)'};
						max-width: 210px;
						max-height: 210px;
						display: flex;
						opacity: ${this.state.isHovered ? 0.5 : 1};
						cursor: pointer;
						transition: opacity .5s ease-in-out;
					}
					@media screen and (max-width: 700px) {
						div {
							width: 96vw;
							height: 96vw;
							margin: auto;
							margin-bottom: 2vw;
						}
					}
					 {
						/* @media screen and (max-width: 1000px) {
            div {
              width: calc(92vw / 3);
              height: calc(92vw / 3);
            }
          } */
					}
				`}</style>
			</div>
		)
	}
}

WorkModule.propTypes = {}

export default WorkModule
