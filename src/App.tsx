import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import Topbar from './components/Topbar'
import { useMobile } from './hooks/useMobile'

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
    <div className='App'>
      <Topbar onClickMenuIcon={handleClickMenuIcon} />
      {isSidebarVisible && <Sidebar />}
    </div>
  )
}

export default App
