import { useState } from "react"
import { useTranslation } from "react-i18next"
import { toast, ToastOptions } from "react-toastify";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { TOAST_OPTIONS } from "@/common/global";

export default function Contact() {
  const { t } = useTranslation()
  const [isSendingEmail, setSendingEmail] = useState(false)

  const validationSchema = yup.object({
    fullname: yup
      .string()
      .required('contact.form.errors.required_field'),
    from_email: yup
      .string()
      .email('contact.form.errors.email_invalid')
      .required('contact.form.errors.required_field'),
    subject: yup
      .string()
      .required('contact.form.errors.required_field')
      .min(5, 'contact.form.errors.min_chars')
      .max(40, 'contact.form.errors.max_chars'),
    message: yup
      .string()
      .required('contact.form.errors.required_field')
      .min(20, 'contact.form.errors.min_chars')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit'
  })

  const handleClickSendMessage = async (formData: any) => {
    setSendingEmail(true)
    const emailJSConfig = {
      serviceId: 'service_qyyj48m',
      templateId: 'template_l3g64uc',
      publicKey: 'qQb8x6oRs0mvx5H7R'
    }
    const { serviceId, templateId, publicKey } = emailJSConfig
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey)
      setSendingEmail(false)
      const toastSuccessOptions: ToastOptions = {
        ...TOAST_OPTIONS,
        type: "success",
      }
      toast(t('contact.form.email_sent_successfully'), toastSuccessOptions)
    } catch (error) {
      const toastErrorOptions: ToastOptions = {
        ...TOAST_OPTIONS,
        type: "error",
      }
      toast(t('contact.form.email_not_sent_successfully'), toastErrorOptions)
      setSendingEmail(false)
    }
  }

  return (
    <div className="container mt-2">
      <h1 className="text-center san-francisco-font">{`${t('contact.contact_me')} 😁 !`}</h1>
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
                <div className="invalid-feedback">{t(errors.fullname?.message as unknown as string)}</div>
              </div>
              <div className="w-100 mt-4">
                <input
                  id="email"
                  type="text"
                  placeholder={t('contact.form.your_email_address')}
                  aria-label={t('contact.form.your_email_address')}
                  {...register("from_email")}
                  className={`
                    form-control
                    ${errors.from_email ? 'is-invalid' : ''}
                  `}
                />
                <div className="invalid-feedback">{t(errors.from_email?.message as unknown as string)}</div>
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
                <div className="invalid-feedback">{t(errors.subject?.message as unknown as string, { min: '5', max: '40' })}</div>
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
                <div className="invalid-feedback">{t(errors.message?.message as unknown as string, { min: '20' })}</div>
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
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">Envío de email</div>
                <div className="toast-body">Email enviado satisfactoriamente</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
