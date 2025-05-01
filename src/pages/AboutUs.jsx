import React from 'react'
import ww from '../assets/ww.jpg'
import cc from '../assets/cc.jpg'
import pp from '../assets/ppp.jpg'
const AboutUs = () => {
  return (
    <>
      <div className='bg-blue-00 grid grid-cols-12 pt-3'>
      <div className='col-span-10 col-start-2'> <img src={cc} className='sm:h-[600px] rounded-lg' /></div>
      <div className='col-span-10 col-start-2 mt-2'>
      <div className='bg-red-00 text-2xl sm:text-center sm:pr-25 font-semibold pl-26 mt-3 mb-3'>About Us</div>
      <div>In today’s fast-moving digital world, the volume of news and information can be overwhelming. With updates pouring in 24/7 from countless sources, it’s becoming harder than ever to keep up with what really matters — and even harder to find the time to read and understand everything. That’s why we built this app: to revolutionize the way people consume news.</div>
      <div>Our app is designed for the modern reader — someone who values staying informed but doesn’t always have the time to sift through lengthy articles or navigate through endless feeds. We use a powerful combination of real-time news delivery through the News API and intelligent summarization via the Gemini API, bringing you the best of both worlds: comprehensive coverage and concise content.</div>
      <div className='bg-red-00 text-2xl sm:text-center sm:pr-25 font-semibold pl-22 mt-3 mb-3'>How It Works</div>
      <div>Every few moments, the app pulls in the latest articles from trusted, global news sources through the News API. This ensures that you always have access to breaking news, trending stories, and important developments — across categories like world news, politics, business, science, technology, health, entertainment, and more.</div>
      <div>But we take it a step further. Instead of just showing you headlines or making you read long articles, our app harnesses the power of the Gemini API — an advanced generative AI model — to automatically generate brief, accurate, and meaningful summaries of each news piece. These summaries cut through the fluff and get right to the point, helping you grasp the core of every story in just a few seconds.</div>
      </div>
      <div className='bg-red-00 col-span-10 col-start-2 mt-3 sm:mt-10 sm:col-span-5 sm:col-start-2'><img src={ww} alt="" className='rounded-lg' /></div>
      <div className='bg-green-00 col-span-10 col-start-2 sm:col-span-6 sm:col-start-7 sm:pl-10 '>
        <div className='bg-red-00 text-2xl font-semibold pl-16 mt-3 mb-3 sm:mt-8 sm:pl-0 '>Why We Built This</div>
        <div>We believe that information is power — but only when it’s accessible, clear, and easy to digest. Too many people are either misinformed or under-informed simply because the modern news cycle is overwhelming. We wanted to create a tool that simplifies the experience without compromising on quality or truth.</div>
        <div>By combining smart automation with human-centered design, we’ve created a news app that respects your time, keeps you informed, and helps you engage with the world more intelligently</div>
        <div className='bg-red-00 text-2xl font-semibold pl-15 mt-3 mb-3 sm:pl-0'>What Sets Us Apart</div>
        <div >Our Mission</div>
        <div>
        <ul className="list-disc ml-6">
            <li>Empower people with clarity by transforming news into digestible summaries.</li>
            <li>Make information more accessible and actionable for everyone.</li>
            <li>Bridge the gap between technology and trustworthy journalism.</li>
        </ul>
        </div>
      </div>
      <div className='col-span-10 col-start-2 sm:col-span-5 sm:col-start-2'>
        <div className='bg-red-00 text-2xl font-semibold pl-22 mt-3 mb-3 sm:pl-0 sm:mt-10'>Our Mission</div>
        <div>Our mission is simple: to empower people with clarity in an age of information overload. We aim to make news consumption smarter, faster, and more meaningful by combining trusted journalism with the power of AI. We believe that everyone deserves access to information that is not only accurate, but also easy to understand and act upon.

We’re not just another news app — we’re a smarter way to see the world.</div>
      </div>
      <div className='col-span-10 col-start-2 sm:col-span-5 sm:mt-10'><img src={pp} alt=""  className='rounded-lg'/></div>
     

      </div>
    </>
  )
}

export default AboutUs
