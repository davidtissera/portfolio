import WorkExperience from '@/components/WorkExperience'
import { useTranslation } from 'react-i18next'
import workExperiences from './work-experiences.json'
import './css/Resume.scss'

export default function Resume() {
  const { t } = useTranslation()

  return (
    <div className="container">
      <h1 className="fw-semibold text-start mb-3 mb-md-5 mt-md-3">{t('resume.work_experiences')}</h1>
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
            <div className="mb-5">
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
