import './css/Footer.css'

export default function Footer() {
  const socialMedia = ["Github", "Linkedin"]

  return (
    <footer className='fs-6'>
      <div className='row d-flex align-items-center justify-content-center h-100'>
        <div className='social-media col-sm-12 col-md-6'>
          {socialMedia.map((socialMedia) => {
            return (
              <span className='mx-2 fw-bolder' key={socialMedia} style={{ cursor: "pointer" }}>
                {socialMedia}
              </span>
            )
          })}
        </div>
        <div className='designed-by col-sm-12 col-md-6'>
          <small>Designed & Programmed by David Alejandro Tissera</small>
        </div>
      </div>
    </footer>
  )
}
