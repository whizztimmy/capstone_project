import React from 'react';
import graduationCap from '../assets/graduation.svg';

const Form = () => {
  return (
    <div className="h-210 min-w-full  overscroll-none bg-cover bg-center bg-[url(/public/background.jpg)] text-white ">
      <div className="flex mx-auto justify-center pt-4">
        <img src={graduationCap} className="w-8 h-8" alt="graduation Cap" />
        <h3 className='self-center italic font-serif text-xs ml-2'>Alx Graduation Ceremony</h3>
      </div>
      <div className='mx-auto text-center'>
        <h1 className='font-bold'>Your Journey to the ALX Cohort 4 Graduation Starts Here!</h1>
        <p className='text-xs italic pt-0.5'>Secure your spot and celebrate your success with your peers and mentors.</p>
      </div>
      <form className=' flex flex-col mt-4'>
        <div className='mx-auto justify-center w-1/4'>
          <p className='text-center block justify-self-start'>Upload Avatar / Graduation Photo</p>
          <div className='relative rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 cursor-pointer w-full h-20 justify-center' >
            <div className='absolute w-full'>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className='mx-auto text-center'>
                <img src='/public/upload.svg' className='mx-auto h-10' />
                <p className='inline-block'>Drag and Drop or <label className='text-red-400 underline'>Click to Upload</label></p>
              </div>
            </div>
          </div>
          <div className='mt-9'>
            <label className='justify-self-start font-serif'>Fullname</label>
            <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-3 min-w-full h-8' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Email Address</label>
            <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Phone Number  (In case we need to contact you)</label>
            <input type='number' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Cohort Track</label>
            <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>LinkedIn</label>
            <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Personal Quote or Message (optional)</label>
            <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-14' />
          </div>
          <button type='submit' className='bg-[rgba(245,73,73,0.7)] mt-5 mx-auto block p-3 rounded-full pr-5 cursor-pointer text-black italic'>🎉 Reserve My Graduation Ticket</button>
        </div>
      </form >
    </div >
  )
}

export default Form;