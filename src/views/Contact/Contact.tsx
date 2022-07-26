import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  const [isSendingEmail, setSendingEmail] = useState(false)
  const handleClickSendMessage = async () => {
    setSendingEmail(true)
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('message sent')
        console.log('message sent')
        setSendingEmail(false)
      }, 3000)
    })

    await promise
  }

  return (
    <div className="container">
      <h1 className="text-center">{`${t('contact.contact_me')} 😁 !`}</h1>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="d-flex justify-content-center row container-sm">
          <div className="col-sm-12 col-md-5">
            <div className="w-100">
              <input
                id="fullname"
                type="text"
                className="form-control"
                placeholder={t('contact.form.full_name')}
                aria-label={t('contact.form.full_name')}
              />
            </div>
            <div className="w-100 mt-4">
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder={t('contact.form.your_email_address')}
                aria-label={t('contact.form.your_email_address')}
              />
            </div>
            <div className="w-100 mt-4 mb-4">
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder={t('contact.form.subject')}
                aria-label={t('contact.form.subject')}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div>
              <textarea
                id="message"
                className="form-control"
                placeholder={t('contact.form.leave_your_message')}
                aria-label={t('contact.form.leave_your_message')}
                rows={6}
                cols={20}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-md-end col-12 mt-4 mt-md-0">
            <button
              className="d-flex align-items-center justify-content-center btn btn-primary"
              onClick={handleClickSendMessage}
              disabled={isSendingEmail}
            >
              {isSendingEmail && (
                <div
                  className="spinner spinner-border"
                  style={{ width: "20px", height: "20px" }}
                  role="status"
                  aria-hidden={`${!isSendingEmail}`}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              <span className="mx-2">{t('contact.form.send_message')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
