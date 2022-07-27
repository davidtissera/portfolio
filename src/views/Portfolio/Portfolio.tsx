import UnderConstruction from '@/assets/under_construction.svg'
import { useTranslation } from 'react-i18next'
import './css/Portfolio.css'

export default function Portfolio() {
  const { t } = useTranslation()

  return (
    <div className="d-flex align-items-center justify-content-center flex-column container" style={{ height: '80vh' }}>
      <h1 className="fw-semibold">
        {t('errors.page_under_construction')}
      </h1>
      <img src={UnderConstruction} />
    </div>
  )
}
