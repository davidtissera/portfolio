import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import LoadingDotFlashing from '@/components/LoadingDotFlashing'

function App() {
  const [isLoading, setLoading] = useState(true)

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
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
