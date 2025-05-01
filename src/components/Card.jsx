import React from 'react'
import img from "../assets/noimage.jpg"
const Card = ({
  news = [],
  generateSummary,
  setShowSummary
}) => {
  return (
    <>

        { news.map((item, index)=>(
          <div key={index} className=' relative bg-violet-00 h-[200px]   col-span-10 col-start-2 sm:col-span-3 '>
       <div className='absolute bg-teal-500 text-white text-3xl h-10 w-10 pl-1  rounded-lg right-2 top-2 sm:right-3 sm:top-2'><button onClick={()=> {generateSummary(item.content)
  setShowSummary(true)}} ><i class="ri-openai-fill"/></button></div>
         {item.urlToImage ? (
       <img src={item.urlToImage} alt={`News ${index}`} className="object-cover w-full h-full rounded-lg" />
     ) : (
       <img src={img} className='h-[200px] ml-15'/>
     )}
           <div className='bg-red-00 text-white relative bottom-20 p-1'>{item.title || 'No Title'}</div>
          </div>

        ))}



      {/* <div className=' bg-violet-600 h-[200px]   col-span-10 col-start-2 '>
        

      </div> */}
    </>
  )
}

export default Card
