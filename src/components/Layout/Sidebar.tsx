import { routes } from '@/router/routes'
import { ReactEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import './css/Sidebar.css'

interface ISidebar {
  onClickMenuItem: ReactEventHandler;
  isVisible: boolean;
}

export function Sidebar(props: ISidebar) {
  const { t } = useTranslation()
  const { isVisible, onClickMenuItem } = props;

  return (
    <div className={`sidebar-container${!isVisible ? ' hidden' : ''}`}>
      <div className={`sidebar-container-background${!isVisible ? ' hidden' : ''}`}>
        <ul className={`sidebar-routes-list${!isVisible ? ' hidden' : ''}`}>
          {routes.map((route) => {
            return (
              <li className="sidebar-routes-list-item" key={route.path}>
                <h1>{route.icon}</h1>
                <Link onClick={onClickMenuItem} to={route.path}>
                  {t(route.label)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
