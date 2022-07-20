import ViewContainer from "@/components/ViewContainer";
import { useEffect, useState } from "react";
import about from './about.txt'
import mySelfPhoto from '../../assets/davo.jpg'
import './css/AboutMe.scss'

export default function AboutMe() {
  const [aboutTextParagraphs, setAboutTextParagraphs] = useState<string[]>([])

  const doFetchText =  () => {
    fetch(about)
      .then(response => response.text())
      .then(text => {
        setAboutTextParagraphs(text.split('\n'))
      })
  }

  useEffect(() => {
    doFetchText()
  }, [about])

  return (
    <div className="container mt-4">
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
        </div>
      </div>
    </div>
  )
}
