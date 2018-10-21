import Menu from './Menu'

const Header = props => {
	const { isMobile } = props
	return (
		<div className='header-outer'>
			<div className='header-inner'>
				<a className='logo' href='/'>
					<img alt='logo' src='/static/assets/canopylogo_gray.png' />
				</a>
				<Menu {...props} />
			</div>
			<style jsx>{`
				.header-inner {
					display: flex;
					flex-direction: column;
					align-items: ${isMobile && 'center'};
					margin-top: 22px;
					margin-left: 28px;
					flex-shrink: 0;
				}
				.logo {
					margin-bottom: 11px;
					display: flex;
					justify-content: ${isMobile && 'center'};
				}
				@media screen and (max-width: 700px) {
					.header-outer {
						margin-bottom: 50px;
					}
				}
			`}</style>
		</div>
	)
}

export default Header
