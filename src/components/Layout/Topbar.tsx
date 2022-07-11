import { ReactEventHandler } from 'react';
import { routes, IRoute } from '@/router/routes'
import { useMobile } from '@/hooks/useMobile';
import { HamburgerMenuIcon } from '@/components/HamburgerMenuIcon';
import davoPhoto from '@/assets/davo.jpg';
import './css/Topbar.css'

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
    <header className="topbar-desktop">
      <div className="topbar-column-one">
        <div className="topbar-circle-initials">D</div>
        <h3 className="topbar-myself-name"><b>David Alejandro Tissera</b></h3>
      </div>
      <div className="topbar-column-two">
        {routes.map((route: IRoute) => {
          return (
            <div key={route.path} className="topbar-menu-item">
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
    <header className="topbar-mobile">
      <div className="topbar-menu-items-container-mobile">
        <HamburgerMenuIcon onClick={onClickMenuIcon} />
        <div className="topbar-circle-initials">D</div>
      </div>
    </header>
  )
}


export default Topbar
