import { useTranslation } from 'react-i18next'
import './css/Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  const socialMedia = [
    { name: "Github", icon: "fa-brands fa-github", link: 'https://github.com/davidtissera/' },
    { name: "Linkedin", icon: "fa-brands fa-linkedin", link: 'https://www.linkedin.com/in/david-tissera-6745b71ab/' },
  ]

  const handleClickSocialMedia = (link: string) => {
    window.open(link, '_blank')?.focus()
  }

  return (
    <footer className='fs-6'>
      <div className='row d-flex align-items-center justify-content-center h-100'>
        <div className='social-media col-sm-12 col-md-6'>
          {socialMedia.map((socialMedia) => {
            return (
              <button
                className='social-media-button btn btn-sm btn-link mx-2 fw-bolder'
                key={socialMedia.name}
                onClick={() => handleClickSocialMedia(socialMedia.link)}
              >
                <i className={`${socialMedia.icon} mx-2`} />
                {socialMedia.name}
              </button>
            )
          })}
        </div>
        <div className='designed-by col-sm-12 col-md-6'>
          <small>{t('footer.designed_and_programmed_by_david_alejandro_tissera')}</small>
        </div>
      </div>
    </footer>
  )
}
