import { useTranslation } from 'react-i18next';
import './css/WorkExperience.css'
export interface IWorkExperience {
  title: string;
  type: string;
  website: string;
  activityDate: string;
  about: string;
  technologiesInvolved: string[];
}

export default function WorkExperience(props: IWorkExperience) {
  const { t } = useTranslation()
  const { title, website, activityDate, about, technologiesInvolved, type } = props

  const handleClickWebsite = (urlWebSite: string) => {
    window.open(urlWebSite, '_blank')?.focus()
  }

  return (
    <div>
      <span className="badge text-bg-primary">{activityDate}</span>
      <span className="badge text-bg-secondary mx-2">{type}</span>
      <h2 className="fw-bolder mt-1 mb-0">{title}</h2>
      <button
        className="website btn btn-link fw-semibold"
        onClick={() => handleClickWebsite(website)}
      >
        <span>🌐</span>
        <span className="mx-2">{website}</span>
      </button>
      <p className="fs-6 text-muted mt-3 mb-3">{about}</p>
      <small className="text-decoration-underline fw-bold">
        {t('resume.technologies_used').concat(':')}
      </small>
      <small className="technologies-used"> {technologiesInvolved.join(" - ")}</small>
    </div>
  )
}
