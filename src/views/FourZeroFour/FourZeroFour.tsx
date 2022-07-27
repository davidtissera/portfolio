import FourZeroFourSVG from '@/assets/404_not_found.svg'
import { useTranslation } from 'react-i18next'

export default function FourZeroFour() {
  const { t } = useTranslation()

  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '80vh' }}>
      <h1 className='text-danger fw-semibold'>{t('errors.page_not_found')}</h1>
      <img src={FourZeroFourSVG} width="700px" />
    </div>
  )
}
