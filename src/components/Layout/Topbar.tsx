import { ReactEventHandler } from 'react';
import { routes, IRoute } from '@/router/routes'
import { useMobile } from '@/hooks/useMobile';
import { HamburgerMenuIcon } from '@/components/HamburgerMenuIcon';
import './css/Topbar.css'
import { Link } from 'react-router-dom';

export interface IITopbar {
  onClickMenuIcon: ReactEventHandler;
  isHamburgerMenuActive: boolean;
}

function Topbar(props: IITopbar) {
  const { onClickMenuIcon, isHamburgerMenuActive } = props
  const isMobile = useMobile()

  return (
    isMobile ? (
      <TopbarMobile
        isHamburgerMenuActive={isHamburgerMenuActive}
        onClickMenuIcon={onClickMenuIcon}
      />
    ) : (
      <TopbarDesktop />
    )
  )
}

function TopbarDesktop() {
  return (
    <header className="topbar-desktop">
      <div className="topbar-column-one">
        <div className="topbar-circle-initials">D</div>
        <h3 className="topbar-myself-name"><b>David</b> Tissera</h3>
      </div>
      <div className="topbar-column-two">
        {routes.map((route: IRoute) => {
          return (
            <div key={route.path} className="topbar-menu-item">
              <Link to={route.path}>{route.label}</Link>
            </div>
          );
        })}
      </div>
    </header>
  )
}


function TopbarMobile(props: IITopbar) {
  const { onClickMenuIcon, isHamburgerMenuActive } = props

  return (
    <header className="topbar-mobile">
      <div className="topbar-menu-items-container-mobile">
        <div className="hamburger-menu-icon-container">
          <HamburgerMenuIcon isActive={isHamburgerMenuActive} onClick={onClickMenuIcon} />
        </div>
        <div className="topbar-circle-initials">D</div>
      </div>
    </header>
  )
}


export default Topbar
