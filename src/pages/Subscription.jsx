import React, { useState } from 'react'

const Subscription = () => {
  const [active, setActive] = useState('monthly')



  return (
    <>
      <div className='bg-linear-65 from-gray-300 to-slate-500 grid grid-cols-5 pt-15'>
        <div className='bg-red-00 col-span-5'>
          <div className='text-2xl font-bold text-center pr-4'>Our Pricing & Plans</div>
          <div className=' bg-green-00 sm:w-[800px] sm:ml-[400px] text-white p-5 sm:p-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos est quis quia fuga aspernatur a obcaecati fugit, consequatur mollitia accusantium sed officiis modi, delectus aperiam nostrum eius iure, voluptatum rem?</div>
        </div>
        <div className='bg-green-00 col-span-3 col-start-2 sm:pl-[350px]'>
   
         <div className='flex w-[200px]  rounded-full border border-gray-300'>
          <button  onClick={() => setActive('monthly')}
          className={`${
            active === 'monthly' ? 'bg-blue-500 text-white' : 'bg-slate-400 text-white'
          } px-6 py-2 rounded-full transition-all duration-300 ease-in-out`} >Monthly</button>
          <button   onClick={() => setActive('yearly')}
          className={`${
            active === 'yearly' ? 'bg-blue-500 text-white' : 'bg-slate-400 text-white'
          } px-6 py-2 rounded-full transition-all duration-300 ease-in-out`}>yearly</button>
         </div>
        </div>
        <div className='bg-green-00 col-span-5 pl-5 pb-5 sm:flex sm:justify-evenly sm:mt-5'>
          <div className='bg-white pt-8 pb-4 w-[350px] rounded-lg shadow-xl mt-5'>
           <div className='bg-blue-00 text-xl font-semibold text-center text-gray-500'>Basics</div>
           <div className='bg-cyan-00 text-center text-3xl mt-3 text-slate-900'>$49.0</div>
           <div className='bg-amber-00 h-1 w-80 border-t border-gray-400 ml-4 mt-4'></div>
           <div className='text-center mt-4 text-gray-400'>
            <div>Hire Unlimte Times</div>
            <div>Newsest Feature</div>
            <div>Monitor Acivity</div>
            <div>File Handler</div>
            <div>Find Nearest People</div>
           </div>
           <div className='text-center mt-8'> <button className='border border-slate-900 w-40 pt-3 pb-3 text-xl text-slate-900 rounded-full focus:bg-slate-900 focus:text-white'>Choose Plan</button></div>
           <div className='text-center mt-6 text-gray-400'>15 Days Money Back Guarantee</div>
          </div>
          <div className='bg-white pt-8 mt-5 pb-4 w-[350px] rounded-lg shadow-2xl'>
           <div className='bg-blue-00 text-xl font-semibold text-center text-gray-500'>Professional</div>
           <div className='bg-cyan-00 text-center text-3xl mt-3 text-slate-900'>$79.0</div>
           <div className='bg-amber-00 h-1 w-80 border-t border-gray-400 ml-4 mt-4'></div>
           <div className='text-center mt-4 text-gray-400'>
            <div>Hire Unlimte Times</div>
            <div>Newsest Feature</div>
            <div>Monitor Acivity</div>
            <div>File Handler</div>
            <div>Find Nearest People</div>
           </div>
           <div className='text-center mt-8'> <button className='border border-slate-900 w-40 pt-3 pb-3 text-xl text-slate-900 rounded-full focus:bg-slate-900 focus:text-white'>Choose Plan</button></div>
           <div className='text-center mt-6 text-gray-400'>15 Days Money Back Guarantee</div>
          </div>
          <div className='bg-white pt-8 pb-4 w-[350px] rounded-lg shadow-2xl mt-6'>
           <div className='bg-blue-00 text-xl font-semibold text-center text-gray-500'>Premium</div>
           <div className='bg-cyan-00 text-center text-3xl mt-3 text-slate-900'>$49.0</div>
           <div className='bg-amber-00 h-1 w-80 border-t border-gray-400 ml-4 mt-4'></div>
           <div className='text-center mt-4 text-gray-400'>
            <div>Hire Unlimte Times</div>
            <div>Newsest Feature</div>
            <div>Monitor Acivity</div>
            <div>File Handler</div>
            <div>Find Nearest People</div>
           </div>
           <div className='text-center mt-8'> <button className='border border-slate-900 w-40 pt-3 pb-3 text-xl text-slate-900 rounded-full focus:bg-slate-900 focus:text-white'>Choose Plan</button></div>
           <div className='text-center mt-6 text-gray-400'>15 Days Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription
