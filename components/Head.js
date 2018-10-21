// literally HTML head - all SEO stuff, etc.
import Head from 'next/head'

const initialProps = {
	title: 'Agency Zero',
	initialScale: '1.0'
}

const CustomHead = (props = initialProps) => {
	const { title, initialScale } = props
	return (
		<Head>
			<title key='title'>{title}</title>
			<meta key='charset' charSet='utf-8' />
			<meta
				key='viewport'
				name='viewport'
				content={`initial-scale=${initialScale || initialProps.initialScale}, width=device-width, shrink-to-fit=no`}
			/>
			<meta key='meta-title' name='title' content='Canopy ' />
			<link rel='shortcut icon' href='/static/favicon.png' />
			{/* <script defer src='https://use.fontawesome.com/releases/v5.0.6/js/all.js' /> */}
			{/* <script async src='https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X' /> */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
            @font-face {
              font-family: 'Proxima Nova';
              src: url('/static/fonts/ProximaNova-Regular.eot');
              src: url('/static/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/ProximaNova-Regular.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: 'Proxima Nova';
              src: url('/static/fonts/ProximaNova-RegularIt.eot');
              src: url('/static/fonts/ProximaNova-RegularIt.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/ProximaNova-RegularIt.woff') format('woff');
              font-weight: normal;
              font-style: italic;
            }
            @font-face {
              font-family: 'Proxima Nova';
              src: url('/static/fonts/ProximaNova-Bold.eot');
              src: url('/static/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/ProximaNova-Bold.woff') format('woff');
              font-weight: bold;
              font-style: normal;
            }
          `
				}}
			/>
		</Head>
	)
}

export default CustomHead
