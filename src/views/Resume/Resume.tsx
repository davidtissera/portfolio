import WorkExperience from '@/components/WorkExperience'
import workExperiences from './work-experiences.json'
import './css/Resume.scss'

export default function Resume() {
  return (
    <div className="container py-2">
      <h1 className="fw-bold text-center text-md-start mb-4">Work experiences</h1>
      <div>
        {workExperiences.map(({
          name,
          activity_date: activityDate,
          about,
          type,
          technologies_involved: technologiesInvolved
        }) => {
          return (
            <div className="my-5">
              <WorkExperience
                key={name}
                title={name}
                type={type}
                activityDate={activityDate}
                about={about}
                technologiesInvolved={technologiesInvolved}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
