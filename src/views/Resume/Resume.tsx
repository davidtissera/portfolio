import WorkExperience from '@/components/WorkExperience'
import { useTranslation } from 'react-i18next'
import workExperiences from './work-experiences.json'
import './css/Resume.scss'

export default function Resume() {
  const { t } = useTranslation()

  return (
    <div className="container py-2">
      <h1 className="fw-bold text-start mb-4">💻 {t('words.work_experiences')}</h1>
      <div>
        {workExperiences.map(({
          name,
          website,
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
                website={website}
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
