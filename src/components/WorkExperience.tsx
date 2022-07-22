export interface IWorkExperience {
  title: string;
  type: string;
  activityDate: string;
  about: string;
  technologiesInvolved: string[];
}

export default function WorkExperience(props: IWorkExperience) {
  const { title, activityDate, about, technologiesInvolved, type } = props

  return (
    <div>
      <span className="badge text-bg-primary">{activityDate}</span>
      <span className="badge text-bg-secondary mx-2">{type}</span>
      <h2 className="fw-bolder mt-1 mb-0">{title}</h2>
      <p className="fs-6 text-muted mt-3 mb-2">{about}</p>
      <small className="text-decoration-underline">Technologies used:</small><small> {technologiesInvolved.join(" - ")}</small>
    </div>
  )
}
