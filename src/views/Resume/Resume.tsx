import WorkExperience from '@/components/WorkExperience'
import { useTranslation } from 'react-i18next'
import workExperiences from './work-experiences.json'
import './css/Resume.scss'

export default function Resume() {
  const { t } = useTranslation()

  return (
    <div className="container py-2">
      <h1 className="fw-bold text-start mb-4">💻 {t('resume.work_experiences')}</h1>
      <div>
        {workExperiences.map(({
          name,
          translation_key: translationKey,
          website,
          activity_date: activityDate,
          about,
          type,
          technologies_involved: technologiesInvolved
        }) => {
          return (
            <div className="my-5">
              <WorkExperience
                key={translationKey}
                title={name}
                website={website}
                type={type}
                activityDate={t(`resume.${translationKey}.activity_date`)}
                about={t(`resume.${translationKey}.about`)}
                technologiesInvolved={technologiesInvolved}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
