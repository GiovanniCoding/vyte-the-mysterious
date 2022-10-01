
export const ProjectCard = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <div className='overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4'>
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" className="w-full" />
      </div>
      <div>
        <h2>White City</h2>
        <p>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </div>
    </div>
  )
}
