import { ReactElement, useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import Topbar from './Topbar'
import { useMobile } from '@/hooks/useMobile'
import './css/Layout.css'

export interface ILayout {
  children: ReactElement;
}

function Layout(props: ILayout) {
  const { children } = props
  const isMobile = useMobile()
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setSidebarVisible(false)
    }
  }, [isMobile])

  const handleClickMenuIcon = () => {
    setSidebarVisible((prevState) => !prevState)
  }

  const handleClickMenuItem = () => {
    setSidebarVisible(false)
  }

  return (
    <>
      <Topbar onClickMenuIcon={handleClickMenuIcon} isHamburgerMenuActive={isSidebarVisible} />
      <Sidebar isVisible={isSidebarVisible} onClickMenuItem={handleClickMenuItem} />
      <div className='content'>{children}</div>
    </>
  )
}

export default Layout
