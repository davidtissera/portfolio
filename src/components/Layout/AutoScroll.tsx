import { useMobile } from '@/hooks/useMobile'
import { animateScroll } from 'react-scroll'
import { useEffect, useState } from 'react'
import './css/AutoScroll.css'

export default function AutoScroll() {
  const [isVisible, setVisible] = useState(false)
  const isMobile = useMobile()

  const handleScroll = () => {
    const position = window.scrollY
    setVisible(position > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleClickAutoScroll = () => {
    animateScroll.scrollToTop({
      duration: 300,
      delay: 0,
      smooth: true,
      spyThrottle: 0,
      isDynamic: false
    })
  }

  return (
    <button
      className={
        `auto-scroll btn btn-secondary
        ${isMobile ? 'mobile' : ''}
        ${isVisible ? 'visible' : ''}
      `}
      onClick={handleClickAutoScroll}
    >
      <i className='fa-solid fa-arrow-up' />
    </button>
  )
}
