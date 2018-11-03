import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { routes } from '../../server/routes'

class Menu extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activeTopMenuItem: 'film'
		}
	}

	handleHover = activeTopMenuItem => {
		this.setState({ activeTopMenuItem })
	}

	handleClick = activeTopMenuItem => {
		window.innerWidth < 700 && this.handleHover(activeTopMenuItem)
	}

	formatRoutes = () => {
		return routes.reduce((routeObj, route) => {
			const splitRoute = route.prettyUrl.split('/')
			const topLvl = splitRoute[1]
			const child = splitRoute[2]
			if (routeObj[topLvl]) {
				routeObj[topLvl].children.push(route)
			} else {
				routeObj[topLvl] = {
					url: route.prettyUrl,
					children: !child ? null : [ route ]
				}
			}
			return routeObj
		}, {})
	}

	renderMenu = () => {
		const { activePage, isMobile } = this.props
		const { activeTopMenuItem } = this.state
		const menu = Object.keys(this.formatRoutes()).reverse().map(routeName => {
			const route = this.formatRoutes()[routeName]
			console.log(route)
			return (
				<li key={routeName} className={`${routeName} ${activePage.indexOf(routeName) !== -1 && 'active'}`}>
					<div
						onClick={() => {
							route.children && this.handleClick(routeName)
						}}
						onMouseOver={() => {
							this.handleHover(route.children ? routeName : null)
						}}
						className='top-lvl-item'
					>
						{route.children ? routeName : <a href={route.url}>{routeName}</a>}
					</div>
					{route.children &&
					activeTopMenuItem === routeName && (
						<React.Fragment>
							<div className='arrow' />
							<ul>
								{route.children.map(subroute => (
									<li key={subroute.page} className={activePage === subroute.prettyUrl && 'active'}>
										<a href={subroute.prettyUrl}>{subroute.title}</a>
									</li>
								))}
							</ul>
						</React.Fragment>
					)}
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
							li {
								position: initial;
							}
							li ul {
								top: 75px;
								width: 100vw;
								left: 0;
								box-sizing: border-box;
								justify-content: center;
							}
							li div {
								top: 61px;
							}
							li ul li {
								padding: 0 1em;
								box-sizing: border-box;
								width: fit-content;
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
				</li>
			)
		})
		return menu
	}

	render () {
		return (
			<div
				onMouseLeave={() => {
					this.handleHover(null)
				}}
			>
				<ul className='top-ul'>{this.renderMenu()}</ul>
				<style jsx>{`
					ul {
						display: flex;
						flex-grow: 1;
						flex-direction: ${this.props.isMobile ? 'row' : 'column'};
					}
					@media screen and (max-width: 700px) {
						ul {
							 {
								/* position: relative; */
							}
						}
					}
				`}</style>
			</div>
		)
	}
}

Menu.propTypes = {}

export default Menu
