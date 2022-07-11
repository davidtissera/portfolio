import { routes, IRoute } from '../router/routes'
import { useMobile } from '../hooks/useMobile';
import './Topbar.css'
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { ReactEventHandler } from 'react';

export interface IITopbar {
  onClickMenuIcon: ReactEventHandler
}

function Topbar(props: IITopbar) {
  const { onClickMenuIcon } = props
  const isMobile = useMobile()

  return (
    isMobile ? <TopbarMobile onClickMenuIcon={onClickMenuIcon} /> : <TopbarDesktop />
  )
}

function TopbarDesktop() {
  return (
    <header className="topbar">
      <div className="topbar-menu-items-container">
        {routes.map((route: IRoute) => {
          return (
            <div key={route.path} className="topbar-menu-item">
              <i className={`fa-solid ${route.icon}`} />
              <a href={route.path} key={route.path}>{route.label}</a>
            </div>
          );
        })}
      </div>
    </header>
  )
}


function TopbarMobile(props: IITopbar) {
  const { onClickMenuIcon } = props

  return (
    <header className="topbar">
      <div className="topbar-menu-items-container">
        <HamburgerMenuIcon onClick={onClickMenuIcon} />
      </div>
    </header>
  )
}


export default Topbar
