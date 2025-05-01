import React, { use, useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setContent } from '../store/searchSlice'
import LOGO from '../assets/ChatGPT Image Apr 12, 2025, 08_11_53 PM.png'
import { logout } from '../store/authSlice'

const Header = () => {
  const [search, setSearch] = useState(false)
  const [option, setOption] = useState(false)
  const [value, setValue] = useState('')

  const loginn = useSelector((state)=>state.auth.status)



const navigate = useNavigate()
const Login = ()=>{
      if(loginn){
        dispatch(logout())
        navigate('/login')
      }
      else{
        navigate('/login')
      }
}

const dispatch = useDispatch()
const handleKeyDown = (e)=>{
  if(e.key === "Enter"){
    e.preventDefault()
    dispatch(setContent(value))
  }
}
  return (
    <>
      <div className='bg-gray-700 w-full flex h-[70px]'>
      <div className='bg-blue-60 w-[190px] h-16 pt-2 ml-2 sm:ml-8'><img src={LOGO} className='rounded-lg' /></div>
      <div className='hidden bg-red-00 text-white  sm:flex w-[520px] justify-evenly pt-5 '>
        <div className='font-semibold hover:scale-105'><Link to='/'>Home</Link></div>
        <div className='font-semibold hover:scale-105'>Catergories</div>
        <div className='font-semibold hover:scale-105'><Link to="/aboutus">About Us</Link></div>
        <div className='font-semibold hover:scale-105'><Link to='/subscription'>Subscription</Link></div>
        <div className='font-semibold hover:scale-105'><button onClick={Login}>Log In</button></div>
      </div>

      <div onClick={()=>setSearch(!search)} className='search  text-white absolute text-3xl h-10 w-10 mt-4 pl-1 right-15 active:bg-gray-300 active:text-black active:rounded-full'><i class="ri-search-2-line"></i></div>
      <div onClick={()=>setOption(!option)} className='text-white sm:hidden absolute text-3xl right-5 mt-4  h-10 w-10  pl-1 active:bg-gray-300 active:text-black active:rounded-full'><i class="ri-more-2-line"></i></div>
      
      </div>
      <div className={`${option? 'block' : 'hidden'}   absolute sm:hidden bg-slate-900 text-white w-[350px] h-full z-80 text-xl pt-2 pl-2 right-0`}>
      <div onClick={()=>setOption(!option)} ><Link>Home</Link></div>
      <div onClick={()=>setOption(!option)} className='mt-1'><Link to="/aboutus">
       About Us
      </Link></div>
      <div className='mt-1'>Categories</div>
      <div onClick={()=>setOption(!option)} className='mt-1'><Link to="/subscription">
       Subscription
      </Link></div>
      <div className='absolute    bottom-25 right-6'><button onClick={Login} className='bg-slate-900 border  text-white w-25 h-12 rounded-full active:bg-white active:text-slate-900'>{loginn ? "Log Out" : "Log In"}</button></div>
      </div>
      <div 
        className={`absolute top-[70px] sm:top-[10px] left-0 sm:left-[800px] w-full sm:w-[600px] z-10 transition-all duration-500 ease-in-out bg-gray-700  sm:bg-white border sm:border-white  ${
          search ? 'max-h-[50px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } overflow-hidden flex items-center justify-center`}
      >
        <input 
                  type="text" 
                  placeholder='Enter' 
                  className='focus:outline-none   text-2xl text-gray-500 h-[50px] w-full border-b border-gray-700 px-4' 
         onKeyDown={handleKeyDown}
         onChange={(e) => setValue(e.target.value)}
        />
      </div>
     
    </>
  )
}

export default Header
