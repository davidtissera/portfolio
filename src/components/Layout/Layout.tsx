import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import Topbar from './Topbar'
import { useMobile } from '../../hooks/useMobile'

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

  return (
    <>
      <Topbar onClickMenuIcon={handleClickMenuIcon} />
      {isSidebarVisible && <Sidebar />}
    </>
  )
}

export default App
