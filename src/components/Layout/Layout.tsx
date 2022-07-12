import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import Topbar from './Topbar'
import { useMobile } from '@/hooks/useMobile'

function App() {
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
    </>
  )
}

export default App
