import { routes } from '@/router/routes'
import { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom'
import './css/Sidebar.css'

interface ISidebar {
  onClickMenuItem: ReactEventHandler;
  isVisible: boolean;
}

export function Sidebar(props: ISidebar) {
  const { isVisible, onClickMenuItem } = props;

  return (
    <div className={`sidebar-container${!isVisible ? ' hidden' : ''}`}>
      <ul className={`sidebar-routes-list${!isVisible ? ' hidden' : ''}`}>
        {routes.map((route) => {
          return (
            <li className="sidebar-routes-list-item" key={route.path}>
              <div className="sidebar-icon-container">
                <i className={`fa-solid ${route.icon}`} />
              </div>
              <Link onClick={onClickMenuItem} to={route.path}>{route.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
