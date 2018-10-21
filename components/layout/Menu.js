import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Menu extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activeTopMenuItem: 'film'
		}
	}

	componentDidMount () {}

	handleHover = activeTopMenuItem => {
		console.log(activeTopMenuItem)
		this.setState({ activeTopMenuItem })
	}

	handleClick = activeTopMenuItem => {
		window.innerWidth < 700 && this.handleHover(activeTopMenuItem)
	}

	render () {
		const { activePage, isMobile } = this.props
		const { activeTopMenuItem } = this.state
		console.log(activePage)
		return (
			<div
				onMouseLeave={() => {
					this.handleHover(null)
				}}
			>
				<ul className='top-ul'>
					<li className={`film ${activePage.indexOf('film') !== -1 && 'active'}`}>
						<div
							onClick={() => {
								this.handleClick('film')
							}}
							onMouseOver={() => {
								this.handleHover('film')
							}}
							className='top-lvl-item'
						>
							film
						</div>
						{activeTopMenuItem === 'film' && (
							<React.Fragment>
								<div className='arrow' />
								<ul>
									<li className={activePage.indexOf('wtf-am-i') !== -1 && 'active'}>
										<a href='/film/wtf-am-i'>where the fuck am i?</a>
									</li>
									<li className={activePage.indexOf('portfolio') !== -1 && 'active'}>
										<a href='/film/portfolio'>portfolio</a>
									</li>
								</ul>
							</React.Fragment>
						)}
					</li>
					<li className={`games ${activePage.indexOf('games') !== -1 && 'active'}`}>
						<div
							onClick={() => {
								this.handleClick('games')
							}}
							onMouseOver={() => {
								this.handleHover('games')
							}}
							className='top-lvl-item'
						>
							games
						</div>
						{activeTopMenuItem === 'games' && (
							<React.Fragment>
								<div className='arrow' />
								<ul>
									<li className={activePage.indexOf('dox') !== -1 && 'active'}>
										<a href='/games/dox'>DOX</a>
									</li>
									<li className={activePage.indexOf('qora') !== -1 && 'active'}>
										<a href='/games/qora'>qora</a>
									</li>
									<li className={activePage.indexOf('gardener') !== -1 && 'active'}>
										<a href='/games/gardener'>gardener</a>
									</li>
								</ul>
							</React.Fragment>
						)}
					</li>
					<li className={activePage.indexOf('about') !== -1 && 'active'}>
						<div
							onMouseOver={() => {
								this.handleHover(null)
							}}
							className='top-lvl-item'
						>
							<a href='/about'>about</a>
						</div>
					</li>
				</ul>
				<style jsx>{`
					ul {
						display: flex;
						flex-grow: 1;
						flex-direction: ${isMobile ? 'row' : 'column'};
					}
					li {
						cursor: pointer;
						font-size: 12px;
						text-align: ${isMobile ? 'center' : 'left'};
						display: flex;
						width: fit-content;
						white-space: pre;
						position: relative;
					}
					.top-lvl-item,
					li li {
						padding: 1px;
						padding-left: ${!isMobile ? '3px' : '1px'};
					}
					li li {
						width: 100%;
						box-sizing: border-box;
					}
					li ul {
						position: absolute;
						left: 100%;
						top: 0;
					}
					.film ul {
						 {
							/* min-width: 106px; */
						}
					}
					li:hover {
						background-color: var(--color-lightgrey);
					}
					li.active .top-lvl-item,
					li li.active {
						background-color: var(--color-darkgrey);
						color: white;
					}
					li.active ul,
					li.active div {
						 {
							/* background: none; */
						}
					}
					.top-lvl-item {
						width: 50px;
					}
					.arrow,
					li.active .arrow,
					React.Fragment {
						background: white !important;
						padding: 0 5px;
					}
					.arrow::after {
						content: '>';
					}
					@media screen and (max-width: 700px) {
						.arrow {
							position: absolute;
							top: 100%;
							left: 0;
							width: 100%;
							text-align: center;
						}
						.arrow::after {
							content: 'v';
							font-family: sans-serif;
							font-weight: light;
						}
						.top-ul {
							position: relative;
						}
						li {
							position: initial;
						}
						li ul {
							left: 0;
							top: 200%;
							width: 100%;
						}
						li ul li a {
							width: 100%;
							text-align: center;
						}
						.film,
						.games {
							flex-direction: column;
						}
					}
				`}</style>
			</div>
		)
	}
}

Menu.propTypes = {}

export default Menu
