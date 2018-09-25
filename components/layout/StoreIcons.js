import PropTypes from 'prop-types'

const StoreIcons = ({ isMobile, device }) => {
  const storeIcon = () => {
    if (device === 'ios') return { link: '', img: '/static/assets/appstore_icon.png' }
    else return { link: '', img: '/static/assets/google_icon.png' }
  }
  return (
    <div className='outer-container'>
      { !isMobile
        ? <div className='inner-container'>
          <a><img alt='app store' src='/static/assets/appstore_icon.png' /></a>
          <a><img alt='android store' src='/static/assets/google_icon.png' /></a>
          <a><img alt='amazon store' src='/static/assets/amazon_icon.png' /></a>
        </div>
        : <div className='inner-container'>
          <a href={storeIcon().link}><img alt='store icon' src={storeIcon().img} /></a>
        </div>
      }
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
}

StoreIcons.propTypes = {}

export default StoreIcons
