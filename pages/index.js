import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../components/Head'
import ImperativeRouter from '../server/ImperativeRouter'

class HomePage extends Component {
	componentDidMount () {
		console.log(this.props)
		if (this.props.router.asPath === '/') {
			ImperativeRouter.push('index', { ext: 'about' }, false)
		}
	}
	render () {
		console.log(this.props)
		return (
			<main>
				<Head title='Home - Canopy' />
				<section>
					<div className='descrip'>
						<span className='name'>Canopy</span>
						<span> is a creative studio with offices in the US and China.</span>
						<br />
						<span>We create original film, game, and animated content.</span>
					</div>
					<div className='contact'>
						say <a href='mailto:hello@canopy.limited'>hello@canopy.limited</a>
					</div>
					<div className='notice'>
						Our site is currently being updated. <br /> Check back soon for lots of new projects!{' '}
					</div>
					<div className='socials'>
						<a href='https://twitter.com/canopylimited'>
							<img alt='canopy on twitter' src='/static/assets/twitter_icon.png' />
						</a>
						<a href='https://vimeo.com/canopylimited'>
							<img alt='canopy on vimeo' src='/static/assets/vimeo_icon.png' />
						</a>
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
					.name {
						font-weight: bold;
					}
					a {
						font-weight: bold;
					}
					.contact {
						margin-top: 25px;
					}
					.notice {
						margin-top: 25px;
						font-style: italic;
					}
					.socials {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 35px;
					}
					.socials a:first-of-type {
						margin-right: 19px;
					}
				`}</style>
			</main>
		)
	}
}

function mapStateToProps (state) {
	return {
		isMobile: state.env.isMobile,
		dims: state.env.dims
	}
}

function mapDispatchToProps (dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
