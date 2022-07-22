import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingDotFlashing from '@/components/LoadingDotFlashing'
import Layout from './components/Layout/Layout'
import Router from './router/Router'

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
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
