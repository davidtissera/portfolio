import { useState } from "react"
import { useTranslation } from "react-i18next"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"

export default function Contact() {
  const { t } = useTranslation()
  const [isSendingEmail, setSendingEmail] = useState(false)

  const validationSchema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().min(5).max(40),
    message: yup.string().min(20)
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit'
  })

  const handleClickSendMessage = async (formData) => {
    console.log(formData)
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
      <form
        onSubmit={handleSubmit(handleClickSendMessage)}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="d-flex align-items-center justify-content-center mt-5">
          <div className="d-flex justify-content-center row container-sm">
            <div className="col-sm-12 col-md-5">
              <div className="w-100">
                <input
                  id="fullname"
                  type="text"
                  placeholder={t('contact.form.full_name')}
                  aria-label={t('contact.form.full_name')}
                  {...register("fullname")}
                  className={`
                    form-control
                    ${errors.fullname ? 'is-invalid' : ''}
                  `}
                />
                <div className="text-capitalize invalid-feedback">{(errors.fullname?.message) as unknown as string}</div>
              </div>
              <div className="w-100 mt-4">
                <input
                  id="email"
                  type="text"
                  placeholder={t('contact.form.your_email_address')}
                  aria-label={t('contact.form.your_email_address')}
                  {...register("email")}
                  className={`
                    form-control
                    ${errors.email ? 'is-invalid' : ''}
                  `}
                />
                <div className="text-capitalize invalid-feedback">{(errors.email?.message) as unknown as string}</div>
              </div>
              <div className="w-100 mt-4 mb-4">
                <input
                  id="subject"
                  type="text"
                  placeholder={t('contact.form.subject')}
                  aria-label={t('contact.form.subject')}
                  {...register("subject")}
                  className={`
                    form-control
                    ${errors.subject ? 'is-invalid' : ''}
                  `}
                />
                <div className="text-capitalize invalid-feedback">{(errors.subject?.message) as unknown as string}</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div>
                <textarea
                  id="message"
                  placeholder={t('contact.form.leave_your_message')}
                  aria-label={t('contact.form.leave_your_message')}
                  rows={6}
                  cols={20}
                  {...register("message")}
                  className={`
                    form-control
                    ${errors.message ? 'is-invalid' : ''}
                  `}
                />
                <div className="text-capitalize invalid-feedback">{(errors.message?.message) as unknown as string}</div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end col-12 mt-4 mt-md-0">
              <button
                type="submit"
                className="d-flex align-items-center justify-content-center btn btn-primary"
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
      </form>
    </div>
  )
}
