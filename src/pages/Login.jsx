import React from 'react'
import gg from '../assets/gg.jpg'
import {useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'


const Login = () => {

   const { handleSubmit, register, control} = useForm()
   
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleLogin =  async()=>{

      navigate('/')
      dispatch(login())
   }


  return (
    <>
      <div className='bg-linear-65 from-gray-300 to-slate-500 h-screen w-[393px] sm:w-full flex justify-center items-center'>

         <div className='bg-white pt-4 h-[500px] w-[350px] rounded-xl border border-gray-400 shadow-lg'>
             
             <form onSubmit={handleSubmit(handleLogin)}>
            <div className='text-2xl pl-[80px]'>Login in to your</div>
            <div className='text-2xl pl-[120px]'><span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
             Account
             </span></div>
             <div className='mt-2 pl-[60px]'>Don't have account?<span className='text-blue-500 underline'>Sign up</span></div>
             <div className='mt-5 pl-[24px]'><input  {...register('username',{ required: "required"})} type="text" className='outline-none rounded-lg  bg-gray-300 w-[300px] h-[50px] text-xl pl-3' placeholder='Enter username' /></div>
             <div className='pl-[24px] mt-3'><input {...register('password',{ required: "required"})} type="text" className='outline-none rounded-lg bg-gray-300 w-[300px] h-[50px] text-xl pl-3' placeholder='Enter password' /></div>
             <div className='pl-[24px] mt-4'><button className='bg-gray-700 rounded-lg text-white w-[300px] h-[50px] active:bg-white active:text-gray-700'>Log in</button></div>
             </form>

             <div className='text-blue-600 pl-26 mt-3 hover:underline'>Forgot password?</div>
             <div className='bg-green-00  ml-16 mt-4 relative border-t w-50 border-gray-400'>
                <div className='relative bg-white w-5 pl-0.5 left-23 bottom-3.5'>or</div>
             </div>
             <div className='flex pl-2  ml-6 bg-gray-200 rounded-lg w-[300px] h-[50px]'>
                <div className='bg-green-00 h-10 mt-1 relative left-0 '><img src={gg} className='h-10 ' /></div>
                <div className='ml-10 pt-3' >Sign In with Google</div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Login
