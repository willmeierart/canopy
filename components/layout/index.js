// main wrapper component - layout, universal styles, etc.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkIfMobile, getVPDims } from '../../lib/redux/actions'
// import { childrenWithProps } from '../../lib/_utils'
import Header from './Header'

// const { Provider, Consumer } = React.createContext({ env: { isMobile: false, vpDims: { width: 0, height: 0 } } })

// const childrenWithProps = (children, props) =>
//   React.Children.map((children, child) =>
//     React.cloneElement(child, { ...props })
//   )

// import globalStyles from '../../styles/index.scss'

class Layout extends Component {
  componentDidMount () {
    this.props.onCheckIfMobile()
    this.props.onGetVPDims()
    window.addEventListener('resize', () => {
      this.props.onCheckIfMobile()
      this.props.onGetVPDims()
    })
  }
  render () {
    const { children, isMobile, router } = this.props
    const activePage = router ? router.asPath.substring(1) : 'about'
    const isPrivacyPage = activePage.indexOf('privacy') !== -1
    const isAboutPage = activePage.indexOf('about') !== -1
    console.log(router)
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <header>
            <Header activePage={activePage} isMobile={isMobile} />
          </header>
          <section>
            {/* <Provider ctx={{ ...this.props }}>
              <Consumer>{ ctx => <div>{ childrenWithProps(children, this.props) }</div> }</Consumer>
            </Provider> */}
            { children }
          </section>
        </div>
        { (isAboutPage || isPrivacyPage) &&
          <div className='footer-link'>
            <a href={isPrivacyPage ? '/' : '/privacy'}>{ isPrivacyPage ? 'Home' : 'Our Terms of Service & Privacy Policy' }</a>
          </div>
        }
        <style jsx>{`
          .footer-link {
            width: 100%;
            display: flex;
            justify-content: center;
            color: var(--color-darkgrey);
            margin-top: 2em;
            margin-bottom: 2em;
          }
          .footer-link:hover {
            color: var(--color-lightgrey);
          }
        `}</style>
      </div>
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
  return {
    onCheckIfMobile: () => dispatch(checkIfMobile()),
    onGetVPDims: () => dispatch(getVPDims())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
// export default Layout

Layout.propTypes = {
}
