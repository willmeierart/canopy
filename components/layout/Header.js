import Link from 'next/link'

const Header = ({ isMobile, activePage }) => {
  console.log(activePage)
  return (
    <div className='header-outer'>
      <div className='header-inner'>
        <a className='logo' href='/'>
          <img alt='logo' src='/static/assets/canopylogo_gray.png' />
        </a>
        <ul>
          <li className={activePage === 'dox' && 'active'}>
            <a href='/dox'>DOX</a>
          </li>
          <li className={activePage === 'about' && 'active'}>
            <a href='/about'>about</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .header-inner {
          display: flex;
          flex-direction: column;
          align-items: ${isMobile && 'center'};
          margin-top: 22px;
          margin-left: 28px;
          // width: fit-content;
          flex-shrink: 0;
        }
        .logo {
          margin-bottom: 11px;
          display: flex;
          justify-content: ${isMobile && 'center'};
        }
        ul {
          display: flex;
          flex-grow: 1;
          flex-direction: ${isMobile ? 'row' : 'column'};
        }
        li {
          padding: 1px;
          padding-left: ${!isMobile && '3px'};
          cursor: pointer;
          font-size: 12px;
          width: 50px;
          text-align: ${isMobile && 'center'};
        }
        li:hover {
          background-color: var(--color-lightgrey);
        }
        li.active {
          background-color: var(--color-darkgrey);
          color: white;
        }`}</style>
    </div>
  )
}

export default Header
