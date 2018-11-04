import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WorkModule from './WorkModule'

class Grid extends Component {
	constructor (props) {
		super(props)
		this.state = {
			rows: 2
		}
	}

	componentDidMount () {
		const init = () => {
			if (typeof window !== 'undefined') {
				this.handleLayout()
				window.addEventListener('resize', this.handleLayout)
			} else {
				setTimeout(init, 400)
			}
		}
		init()
	}

	handleLayout = () => {
		const { rows } = this.state
		window.innerWidth < window.innerHeight && rows === 2 && this.setState({ rows: 3 })
		window.innerWidth > window.innerHeight && rows === 3 && this.setState({ rows: 2 })
	}

	renderGrid = () => {
		const { workSamples, setActiveItem, handleClick } = this.props
		return workSamples.slice(1).map((work, i) => (
			<div key={work.title} className='outer-wrapper'>
				{typeof window !== 'undefined' &&
				window.innerWidth < 700 && (
					<div className='text'>
						<div className='title'>{work.title}</div>
						<div className='description'>{work.description}</div>
						<style jsx>{`
							.title {
								font-weight: bold;
							}
						`}</style>
					</div>
				)}
				<WorkModule data={work} setActiveItem={setActiveItem} handleClick={handleClick} rows={this.state.rows} />
			</div>
		))
	}

	render () {
		const { rows } = this.state
		return (
			<div className='grid-wrapper'>
				{this.renderGrid()}
				<style jsx>{`
					.grid-wrapper {
						display: grid;
						grid-template-rows: ${rows === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
						grid-template-columns: ${rows === 2 ? 'repeat(6, 1fr)' : 'repeat(4, 1fr)'};
						grid-gap: 2vw;
						padding: 2vw;
						box-sizing: border-box;
						padding-top: 5px;
						flex-direction: ${this.props.isMobile ? 'column' : 'row'};
					}
					@media screen and (max-width: 700px) {
						.grid-wrapper {
							display: flex;
							flex-direction: column;
							margin-top: 4vw;
						}
					}
				`}</style>
			</div>
		)
	}
}

Grid.propTypes = {
	workSamples: PropTypes.arrayOf(PropTypes.object).isRequired,
	setActiveItem: PropTypes.func.isRequired
}

export default Grid
