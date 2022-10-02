import { BsBicycle } from 'react-icons/bs';

export const Contact = () => {
  return (
    <div className='bg-tprimary'>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-primary">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          </div>
        </div>
        <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-tprimary" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded bg-tprimary" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" rows="3" className="w-full p-3 rounded bg-tprimary"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
        </form>
      </div>
    </div>
  )
}
