import { routes, IRoute } from '../router/routes'
import { useMobile } from '../hooks/useMobile';
import './Topbar.css'
import { HamburgerMenuIcon } from './HamburgerMenuIcon';

function Topbar() {
  const isMobile = useMobile()

  return (
    isMobile ? <TopbarMobile /> : <TopbarDesktop />
  )
}

function TopbarDesktop() {
  return (
    <header className="topbar">
      <div className="topbar-menu-items-container">
        {routes.map((route: IRoute) => {
          return (
            <a href={route.path} key={route.path} className="topbar-menu-item">{route.label}</a>
          );
        })}
      </div>
    </header>
  )
}

function TopbarMobile() {
  return (
    <header className="topbar">
      <div className="topbar-menu-icon-container">
        <HamburgerMenuIcon />
      </div>
    </header>
  )
}


export default Topbar
