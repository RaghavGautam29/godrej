import profile from './assets/profile.jpg'
import logo from './assets/logo.webp'
import logo2 from './assets/logo2.webp'
import wa from './assets/wa.svg'
const App = () => {
  return (
   <>
   <div>
   <marquee
          className="absolute top-0 left-0 w-screen text-gray-800 z-10 bg-opacity-50 bg-gray-300 font-serif space-x-7 p-4" direction="left">
          <span>The Great Indian Property Show 2024 at Melbourne  (4th to 9th Sep, 2024)</span>  
          <span>The Great Indian Property Show 2024 at Melbourne  (4th to 9th Sep, 2024)</span>  
          <span>The Great Indian Property Show 2024 at Melbourne  (4th to 9th Sep, 2024)</span>  
        </marquee>
        <marquee
          className="absolute bottom-0 left-0 w-screen text-gray-800 z-10 bg-opacity-50 bg-gray-300 font-serif mb-[-550px] space-x-7 p-4" direction="left">
          <span>Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai. </span>  
          <span>Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai. </span>  
          <span>Project Locations- Delhi, Gurugram, Noida, Pune, Mumbai, Nagpur, Bangalore, Hyderabad, Kolkata and Chennai. </span>  
        </marquee>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-md z-20 mt-[260px] bg-gray-300 bg-opacity-40">      
        <h2 className="text-2xl mb-4 font-serif pl-[160px] text-neutral-800">A World of</h2>       
        <h2 className="text-2xl mb-4 font-serif text-neutral-800"> Precious Experiences Thats Make Life Richer</h2>
           
        <img className='pl-[110px]' src={logo} alt="logo"/>
        <img className='pl-[60px]' src={logo2} alt="logo"/>
        <h2 className="text-2xl mb-4 font-serif text-neutral-800 pt-[25px] pl-[110px]">Book Your Slots Now</h2>     
        <form>
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
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md pl-[40px] pr-[40px] ml-[160px]" >
            Submit
          </button>
        </form>
        <h3 className='text-2xl font-serif pl-[150px] pb-3 mt-3 text-neutral-900'>We are Coming to</h3>
        <h1 className='text-bold pl-[110px] text-5xl'>MELBOURNE</h1> 
        <h1 className='pl-[55px] text-2xl pt-3 text-bold text-neutral-800'>Save The Date 4th to 9th Sep, 2024</h1>
        <h1 className='pl-[45px] text-2xl pt-3 text-bold text-neutral-800'>Hilton Melbourne Little Queen Street</h1>
        <h1 className='pl-[60px] text-2xl pt-3 text-bold text-neutral-800'>18 Little Queen Street, Melbourne </h1>
        
         </div>
     
    <img className='absolute top-0 left-0 w-screen h-[1100px] object-cover z-0' src={profile} alt="img"/>
    <img className='absolute w-[60px] h-[60px] bg-green-400 rounded-full z-10 mt-[950px] ml-[20px]' src={wa} alt="wa"/>
   </div>
   </>
  )
}

export default App
