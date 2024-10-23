import profile from './assets/profile.jpg'
import logo from './assets/logo.webp'
import logo2 from './assets/logo2.webp'
import wa from './assets/wa.svg'

const App = () => {
  return (
    <div className="relative min-h-screen">
      <marquee className="fixed top-0 left-0 w-full text-gray-800 z-10 bg-opacity-50 bg-gray-300 font-serif p-2 text-sm md:text-base" direction="left">
        <span className="inline-block mx-2">The Great Indian Property Show 2024 at Melbourne (4th to 9th Sep, 2024)</span>
        <span className="inline-block mx-2">The Great Indian Property Show 2024 at Melbourne (4th to 9th Sep, 2024)</span>
        <span className="inline-block mx-2">The Great Indian Property Show 2024 at Melbourne (4th to 9th Sep, 2024)</span>
      </marquee>

      <marquee className="fixed bottom-0 left-0 w-full text-gray-800 z-10 bg-opacity-50 bg-gray-300 font-serif p-2 text-sm md:text-base" direction="left">
        <span className="inline-block mx-2">Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai.</span>
        <span className="inline-block mx-2">Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai.</span>
        <span className="inline-block mx-2">Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai.</span>
      </marquee>

      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={profile} alt="background" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-gray-300 bg-opacity-40 p-6 rounded-lg shadow-md max-w-md w-full mt-16 mb-16">
          <h2 className="text-xl md:text-2xl mb-2 font-serif text-center text-neutral-800">A World of</h2>
          <h2 className="text-xl md:text-2xl mb-4 font-serif text-center text-neutral-800">Precious Experiences That Make Life Richer</h2>

          <div className="flex flex-col md:flex-row justify-center mb-4">
            <img className="max-w-[150px] md:max-w-[200px] mx-auto md:mx-2 mb-2 md:mb-0" src={logo} alt="logo" />
            <img className="max-w-[150px] md:max-w-[200px] mx-auto md:mx-2" src={logo2} alt="logo2" />
          </div>

          <h2 className="text-xl md:text-2xl mb-4 font-serif text-center text-neutral-800">Book Your Slots Now</h2>

          <form className="space-y-4">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full text-neutral-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email address'
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <h3 className='text-xl md:text-2xl font-serif mb-2 text-neutral-900'>We are Coming to</h3>
            <h1 className='text-3xl md:text-5xl font-bold mb-2'>MELBOURNE</h1>
            <h1 className='text-lg md:text-2xl font-bold text-neutral-800'>Save The Date 4th to 9th Sep, 2024</h1>
            <h1 className='text-lg md:text-2xl font-bold text-neutral-800'>Hilton Melbourne Little Queen Street</h1>
            <h1 className='text-lg md:text-2xl font-bold text-neutral-800'>18 Little Queen Street, Melbourne</h1>
          </div>
        </div>
      </div>

      <a href="#" className="fixed bottom-4 left-4 z-30">
        <img className="w-12 h-12 md:w-16 md:h-16 bg-green-400 rounded-full" src={wa} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default App