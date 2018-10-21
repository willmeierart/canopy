import React, { Component } from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/redux/withReduxStore'
import Layout from '../components/layout'

class MyApp extends App {
	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}
	componentDidCatch (error, errorInfo) {
		console.log('CUSTOM ERROR HANDLING', error)
		// This is needed to render errors correctly in development / production
		super.componentDidCatch(error, errorInfo)
	}

	render () {
		const { Component, reduxStore, router } = this.props
		return (
			<Container>
				<Provider store={reduxStore}>
					<Layout router={router}>
						<PageTransition timeout={300} classNames='page-transition'>
							<Component {...this.props} />
						</PageTransition>
					</Layout>
				</Provider>
				<style jsx global>{`
					body {
						--color-darkgrey: #949494;
						--color-lightgrey: #e4e4e4;
						font-family: Proxima Nova;
						height: 100vh;
						width: 100vw;
						box-sizing: border-box;
						color: var(--color-darkgrey);
						font-size: 13px;
						margin: 0;
					}
					.page-transition-enter {
						opacity: 0;
					}
					.page-transition-enter-active {
						opacity: 1;
						transition: opacity 300ms;
					}
					.page-transition-exit {
						opacity: 1;
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: opacity 300ms;
					}
					a {
						text-decoration: none;
						color: inherit;
					}
					ul {
						margin: 0;
						padding: 0;
					}
					li {
						list-style: none;
					}
				`}</style>
				{/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
			</Container>
		)
	}
}

export default withReduxStore(MyApp)
