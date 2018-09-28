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
          <a href='https://itunes.apple.com/us/app/dox-a-puzzle-game/id1422501586?ls=1&mt=8'><img alt='app store' src='/static/assets/appstore_icon.png' /></a>
          <a href='https://play.google.com/store/apps/details?id=com.canopyltd.dox'><img alt='android store' src='/static/assets/google_icon.png' /></a>
          <a href='https://www.amazon.com/dp/B07HQ7NZXD/ref=sr_1_1?ie=UTF8&qid=1538111245&sr=8-1'><img alt='amazon store' src='/static/assets/amazon_icon.png' /></a>
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
