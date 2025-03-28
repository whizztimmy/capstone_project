import React from 'react';
import graduationCap from '../assets/graduation.svg';

const Form = () => {
  return (
    <div className="h-500 w-full bg-cover bg-center bg-[url(/public/background.jpg)] text-white">
      <div className="flex mx-auto justify-center pt-4">
        <img src={graduationCap} className="w-8 h-8" alt="graduation Cap" />
        <h3 className='self-center italic font-serif text-xs ml-2'>Alx Graduation Ceremony</h3>
      </div>
      <div className='mx-auto text-center'>
        <h1 className='font-bold'>Your Journey to the ALX Cohort 4 Graduation Starts Here!</h1>
        <p className='text-xs italic pt-0.5'>Secure your spot and celebrate your success with your peers and mentors.</p>
      </div>
      <form className=' flex flex-col text-center mt-4'>
        <div className='mx-auto justify-center w-1/4'>
          <p className='text-center block justify-self-start'>Upload Avatar / Graduation Photo</p>
          <div className='relative rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 cursor-pointer w-full h-20 justify-center' >
            <div className='absolute w-full'>
              <input
                type="file"
                accept="image/*"
                className="z-1 opacity-0 relative" viewBox="0 0 72 48" />
              <div className='mx-auto text-center z-10 inset-0 '>
                <img src='/public/upload.svg' className='mx-auto h-10' />
                <p className='inline-block'>Drag and Drop or <label>click to Upload</label></p>
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >
  )
}

export default Form;