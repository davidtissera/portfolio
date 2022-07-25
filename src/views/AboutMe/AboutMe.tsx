import { useEffect, useState } from "react";
import about from './about.txt'
import mySelfPhoto from '../../assets/davo.jpg'
import './css/AboutMe.scss'
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const [timeOutGoResume, setTimeoutGoResume] = useState(false)
  const navigate = useNavigate()
  const [aboutTextParagraphs, setAboutTextParagraphs] = useState<string[]>([])

  const doFetchText =  () => {
    fetch(about)
      .then(response => response.text())
      .then(text => {
        setAboutTextParagraphs(text.split('\n'))
      })
  }

  useEffect(() => {
    const TIMEOUT_MSECS = 3000
    window.setInterval(() => {
      setTimeoutGoResume(true)
    }, TIMEOUT_MSECS)
  }, [])

  useEffect(() => {
    doFetchText()
  }, [about])

  const handleClickGoResume = () => {
    navigate('/resume')
  }

  return (
    <div className="container mt-0 mt-md-2 p-4 pt-0">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center col-lg-5 col-md-12 col-sm-12">
          <img className="myself" src={mySelfPhoto} alt="Man with sunglasses" />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 mt-5">
          <h1 className="name">David <span>Alejandro</span> Tissera</h1>
          <div className="profession mt-2">Software developer</div>
          <div className="mt-4">
            {aboutTextParagraphs.map((paragraph) => {
              return (
                <p key={paragraph}>{paragraph}</p>
              )
            })}
          </div>
          <button
            onClick={handleClickGoResume}
            className={`
              d-flex align-items-center justify-content-center
              btn btn-primary
              btn-lg btn-go-see-resume ${timeOutGoResume ? 'visible' : 'hidden'}
              my-4
            `}
          >
            <span className="mx-2 fs-6">
              Check some of my work experiences
            </span>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
