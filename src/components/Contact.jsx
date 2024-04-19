import React from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            name:data.Name,
            Email:data.Email,
            Message:data.Message
        }
        try {
            await axios.post("https://getform.io/f/navvmvna",userInfo);
            toast.success("Your Message has been sent")
        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong");
        }
      }
    
  return (
   <>
   <div name="Contact" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16'>
    <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
    <span>Please Fill out the form below to contact me</span>
    <div className='flex flex-col items-center justify-center mt-5'>
        <form 
        onSubmit={handleSubmit(onSubmit)} 
        // action="https://getform.io/f/navvmvna" 
        // method="POST" 
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-grey-700 text-sm font-bold mb-2' htmlFor="name" >FullName</label>
                <input name='name' className='shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Enter Your FullName' {...register("Name", { required: true })}/>
                {errors.Name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-grey-700 text-sm font-bold mb-2' htmlFor="name" >Email Address</label>
                <input name='email' className='shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Enter Your Email Address' {...register("Email", { required: true })} />
                {errors.Email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-grey-700 text-sm font-bold mb-2' htmlFor="name" >Message</label>
                <textarea name='message' className='shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Enter Your Message' {...register("Message", { required: true })} />
                {errors.Message && <span>This field is required</span>}
            </div>
            <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 ' type='submit' >Send</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Contact
