import FlippingCard from "@/components/FlippingCard"
import workExperiences from './work-experiences.json'
import './css/Resume.scss'

export default function Resume() {
  return (
    <div className="container mt-4">
      <h1 className="fw-bold text-center text-md-start">Work experiences</h1>
      <div className="row row-cols-md-2 row-cols-lg-3">
        {workExperiences.map((workExperience, idx) => {
          const {
            name,
            logo,
            activity_date: activityDate,
            website,
            about,
            technologies_involved: technologiesInvolved,
            work_methodologies: workMethodologies
          } = workExperience
          return (
            <div className="col my-3 d-flex align-items-center justify-content-center">
              <FlippingCard
                key={name}
                front={<ResumeFront companyLogo={logo} />}
                back={(
                  <ResumeBack
                    name={name}
                    activityDate={activityDate}
                    technologiesInvolved={technologiesInvolved}
                    workMethodologies={workMethodologies}
                    website={website}
                    about={about}
                  />
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ResumeFront(props: any) {
  const { companyLogo } = props
  return (
    <img width="300px" src={companyLogo} />
  )
}

function ResumeBack(props: any) {
  const {
    name,
    activityDate,
    about,
    technologiesInvolved,
    workMethodologies
  } = props

  const keyValuePairs = [
    { label: "Activity Date", value: activityDate },
    { label: "About", value: about },
    { label: "Technologies Involved", value: technologiesInvolved.join(" - ") },
    { label: "Work Methodologies", value: workMethodologies.join(" - ") },
  ]

  return (
    <div className="resume-back container p-4">
      <h2 className="mb-3">{name}</h2>
      {keyValuePairs.map((keyValuePair) => {
        return (
          <div key={keyValuePair.value}>
            <div className="key">
              {keyValuePair.label}
            </div>
            <p className="value">
              {keyValuePair.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}
