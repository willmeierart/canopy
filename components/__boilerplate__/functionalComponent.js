import PropTypes from 'prop-types'

const Boilerplate = props => {
	return (
		<div className='outer-container'>
			<div className='inner-container' />
			<style jsx>{`
				.outer-container {
				}
				.inner-container {
				}
			`}</style>
		</div>
	)
}

Boilerplate.propTypes = {}

export default Boilerplate
