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
      <h2 className="fs-3 fw-bolder my-2">{title}</h2>
      <button
        className="website btn btn-link fw-semibold"
        onClick={() => handleClickWebsite(website)}
      >
        <span className="d-flex align-items-center badge rounded-pill text-bg-light">
          <span className='me-2 fs-6'>🌐</span>
          <a href={website} className="website-text">{website}</a>
        </span>
      </button>
      <p className="fs-6 text-muted mt-3 mb-3">{about}</p>
      <small className="text-decoration-underline fw-bold">
        {t('resume.technologies_used').concat(':')}
      </small>
      <small className="technologies-used"> {technologiesInvolved.join(" - ")}</small>
    </div>
  )
}
