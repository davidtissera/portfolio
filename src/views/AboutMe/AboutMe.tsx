import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import mySelfPhoto from '../../assets/davo.jpg'
import './css/AboutMe.scss'
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const { t } = useTranslation()
  const [timeOutGoResume, setTimeoutGoResume] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const TIMEOUT_MSECS = 3000
    window.setInterval(() => {
      setTimeoutGoResume(true)
    }, TIMEOUT_MSECS)
  }, [])

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
          <div className="profession mt-2">{t('about_me.profession')}</div>
          <div className="mt-4">
            {['one', 'two', 'three', 'four', 'five'].map((paragraphNumber) => {
              return (
                <p key={paragraphNumber}>{t(`about_me.paragraphs.${paragraphNumber}`)}</p>
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
              {t('about_me.check_some_of_my_work_experiences')}
            </span>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
