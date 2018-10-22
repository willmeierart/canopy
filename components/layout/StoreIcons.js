import PropTypes from 'prop-types'

const StoreIcons = ({ isMobile, device, icons }) => (
	<div className='outer-container'>
		<div className='inner-container'>
			{Object.keys(icons).reduce((iconList, key) => {
				if (
					!isMobile ||
					!((device === 'ios' && (key === 'google' || key === 'amazon')) || (device !== 'ios' && key === 'appstore'))
				) {
					iconList.push(
						<a key={key} href={icons[key]}>
							<img alt={key} src={`/static/assets/${key}_icon.png`} />
						</a>
					)
				}
				return iconList
			}, [])}
		</div>
		<style jsx>{`
			.outer-container {
				margin-top: 20px;
			}
			.inner-container {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.inner-container a {
				margin: 12px;
			}
		`}</style>
	</div>
)

StoreIcons.propTypes = {}

export default StoreIcons
