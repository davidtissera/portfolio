import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingDotFlashing from '@/components/LoadingDotFlashing'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
