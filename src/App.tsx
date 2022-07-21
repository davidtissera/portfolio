import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import LoadingDotFlashing from '@/components/LoadingDotFlashing'
import { useMobile } from './hooks/useMobile'

function App() {
  const [isLoading, setLoading] = useState(true)
  const isMobile = useMobile()
  const sidebarHeightMobile = "60px"
  const sidebarHeightDesktop = "120px"

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  if (isLoading) {
    return (
      <LoadingDotFlashing />
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Layout />
        <div style={{ marginTop: isMobile ? sidebarHeightMobile : sidebarHeightDesktop }}>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
