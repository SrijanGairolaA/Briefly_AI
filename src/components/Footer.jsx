import React from 'react'
import LOGO from '../assets/ChatGPT Image Apr 12, 2025, 08_11_53 PM.png'
const Footer = () => {
  return (
    <>
      <div className='bg-gray-700 sm:pb-10 text-white mt-5 '>
       <div className='grid grid-cols-12   '>
         <div className='col-span-12 sm:col-span-6 mt-10'>
          <div className='bg-violet-00  sm:ml-15 '><img src={LOGO} alt="" className='h-[40px] rounded-lg' /></div>
          <div className='text-3xl p-1 mt-3 sm:ml-17'>Latest Headlines: Breaking <br /> News and Updates</div>
         </div>
         <div className='col-span-12 sm:col-span-6 pl-1 sm:pl-15 sm:pt-15 '>
          <div className='d1 text-3xl mt-4'>FOLLOW us:</div>
          <div className='bg-green-00 w-[220px]  flex justify-between mt-4 text-3xl '>
            <div className='bg-white w-10 h-10 pl-1 rounded-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer'><i class="ri-instagram-line text-pink-500"></i></div>
            <div  className='bg-white w-10 h-10 pl-1 rounded-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer '><i class="ri-facebook-box-line text-blue-500"></i></div>
            <div  className='bg-white w-10 h-10 pl-1 rounded-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer '><i class="ri-twitter-x-line text-black"></i></div>
            <div  className='bg-white w-10 h-10 pl-1 rounded-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer '><i class="ri-youtube-line text-red-500"></i></div>
          </div>
         </div>
       </div>
       <div className='bg-red-00 mt-10 w-[350px] sm:w-[1400px] ml-5 sm:ml-18 border-t-2 h-1 border-gray-400'>
       </div>
       <div className='bg-green-00 text-gray-400 grid grid-cols-10 gap-4 sm:pl-15 mt-8'>
        <div className='col-span-10 sm:col-span-2 pt-2 pl-4'>
          <div className='font-semibold text-xl text-white'>HOME</div>
          <div className='hover:underline'>US</div>
          <div className='hover:underline'>Politics</div>
          <div className='hover:underline'>Word</div>
          <div className='hover:underline'>Health</div>
          <div className='hover:underline'>Buisness</div>
        </div>
        <div className='col-span-10 sm:col-span-2 pl-4'>
          <div className='font-semibold text-xl text-white'>ENTERTAINMENT</div>
          <div className='hover:underline'>Ideas</div>
          <div className='hover:underline'>Science</div>
          <div className='hover:underline'>History</div>
          <div className='hover:underline'>Sports</div>
          <div className='hover:underline'>Magzine</div>
        </div>
        <div className='col-span-10 sm:col-span-2 pl-4'>
          <div className='font-semibold text-xl text-white'>TIME EDGE</div>
          <div className='hover:underline'>Video</div>
          <div className='hover:underline'>Maesthead</div>
          <div className='hover:underline'>Maesthead</div>
          <div className='hover:underline'>Subscribe</div>
          <div className='hover:underline'>Dgital Magzine</div>
        </div>
        <div className='col-span-10 sm:col-span-2 pl-4'>
          <div className='font-semibold text-xl text-white'>PRESS ROOM</div>
          <div className='hover:underline'>TIME Studios</div>
          <div className='hover:underline'> Side Map</div>
          <div className='hover:underline'> Media Kit</div>
          <div className='hover:underline'> Careers</div>
        </div>
        <div className='col-span-10 sm:col-span-2 pl-4 pb-5'>
          <div className='font-semibold text-xl text-white'>GET HELP</div>
          <div className='hover:underline'>Support</div>
          <div className='hover:underline'>Pricing</div>
          <div className='hover:underline'>Media Kit</div>
          <div className='hover:underline'>Aout Us</div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Footer
