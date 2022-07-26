import { ReactElement, useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import Topbar from './Topbar'
import { useMobile } from '@/hooks/useMobile'
import './css/Layout.css'
import Footer from './Footer'

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
      <div className="content">
        <Sidebar isVisible={isSidebarVisible} onClickMenuItem={handleClickMenuItem} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
