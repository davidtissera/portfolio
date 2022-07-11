import { routes, IRoute } from '@/router/routes'
import './css/Sidebar.css'

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-routes-list">
        {routes.map((route) => {
          return (
            <li className="sidebar-routes-list-item" key={route.path}>
              <div className="sidebar-icon-container">
                <i className={`fa-solid ${route.icon}`} />
              </div>
              <a href={route.path}>{route.label}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
