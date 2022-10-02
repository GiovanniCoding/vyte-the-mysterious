import emailjs from 'emailjs-com'

export const Contact = ({ ContactRef }) => {
  emailjs.init('XcdHnxUIR8fboe7m5');

  const handleSubmit = ( e ) => {
    e.preventDefault()
    console.log('Submit')
    const full_name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value
    emailjs.sendForm('service_kkc9ta8', 'template_mhsb9hh', e.target, 'XcdHnxUIR8fboe7m5')
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);
      })
  }

  return (
    <section ref={ ContactRef } className='bg-tprimary'>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-primary">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          </div>
        </div>
        <form onSubmit={ handleSubmit } noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input name="name" type="text" placeholder="" className="w-full p-3 rounded bg-tprimary" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input name="email" type="email" className="w-full p-3 rounded bg-tprimary" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea name="message" rows="3" className="w-full p-3 rounded bg-tprimary"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
        </form>
      </div>
    </section>
  )
}
