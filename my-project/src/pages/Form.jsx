import React from 'react';
import graduationCap from '../assets/graduation.svg';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



const Form = () => {
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [disposableError, setDisposableError] = useState('');

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      track: '',
      avatar: null,
      linkedin: '',
      quote: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Fullname is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      track: Yup.string().required('Track is required'),
      avatar: Yup.mixed().required('Avatar is required'),
    }),
    onSubmit: async (values) => {
      // Check email validity using Disify
      const response = await fetch(`https://disify.com/api/email/${values.email}`);
      const data = await response.json();

      if (data.disposable) {
        setDisposableError('Disposable emails are not allowed.');
        return;
      } else {
        setDisposableError('');
      }

      // Pass data to ticket page
      localStorage.setItem('formSubmitted', 'true');
      navigate('/ticket', {
        state: {
          fullname: values.fullname,
          track: values.track,
          email: values.email,
          avatar: avatarPreview,
        },
      });
    },
  });

  const handleAvatarChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue('avatar', file);
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  
  return (
    <div className=" text-white h-230 ">
      <div className="flex mx-auto justify-center pt-4">
        <img src={graduationCap} className="w-8 h-8" alt="graduation Cap" />
        <h3 className='self-center italic font-serif text-xs ml-2'>Alx Graduation Ceremony</h3>
      </div>
      <div className='mx-auto text-center'>
        <h1 className='font-bold'>Your Journey to the ALX Cohort 4 Graduation Starts Here!</h1>
        <p className='text-xs italic pt-0.5'>Secure your spot and celebrate your success with your peers and mentors.</p>
      </div>
      <form className=' flex flex-col mt-4 min-w-1/3' onSubmit={formik.handleSubmit} >
        <div className='mx-auto justify-center md:w-1/3 w-[90%] lg-[70%]'>
          <p className='text-center block justify-self-start'>Upload Avatar / Graduation Photo</p>
          <div className='relative rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 cursor-pointer w-full h-20 justify-center' >
            <div className='absolute w-full'>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pl-2 pt-0.5 text-sm" />
              <div className='mx-auto text-center'>
              {avatarPreview ? (
                <img src={avatarPreview} alt="avatar preview" className="h-16 p-1  mx-auto" />
              ) : (
                <>
                  <img src="/upload.svg" alt="upload icon" className="h-10 mx-auto" />
                  <p className="inline-block">Drag & Drop or <label className="underline text-red-400">Click to Upload</label></p>
                </>
              )}
                {/* <img src='/public/upload.svg' className='mx-auto h-10' />
                <p className='inline-block'>Drag and Drop or <label className='text-red-400 underline'>Click to Upload</label></p> */}
              </div>
            </div>
          </div>
          {formik.errors.avatar && <p className="text-red-500 text-xs ">{formik.errors.avatar}</p>}
          <div className='mt-9'>
            <label className='justify-self-start font-serif'>Fullname</label>
            <input type='text' name="fullname" className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8  pl-2 pt-0.5 pb-1.5 text-blue-200'  onChange={formik.handleChange}
            value={formik.values.fullname}/>
            {formik.touched.fullname && formik.errors.fullname && (
            <p className="text-red-500 text-xs">{formik.errors.fullname}</p>
          )}
            
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Email Address</label>
            <input type='text' name='email' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8  pl-2 pt-0.5 pb-1.5 text-blue-200' onChange={formik.handleChange} value={formik.values.email}/>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
          )}
          {disposableError && <p className="text-red-500 text-xs">{disposableError}</p>}
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Phone Number  (In case we need to contact you)</label>
            <input type='number' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8  pl-2 pt-0.5 pb-1.5 text-blue-200'/>
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Cohort Track</label>
            {/* <input type='text' className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8' /> */}
            <select
        id="track"
        name="track"
        onChange={formik.handleChange}
        value={formik.values.track}
        className="rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8  pl-2 pt-0.5 pb-1 text-blue-200" 
      >
        <option className='bg-blue-950' >Select Track</option>
        <option className='bg-blue-950' >Frontend Development</option>
        <option className='bg-blue-950' >Backend Development</option>
        <option className='bg-blue-950' >Aws Cloud Computing</option>
        <option className='bg-blue-950' >Data Analytics</option>
        <option className='bg-blue-950' >Salesforce Administrator</option>
      </select>
      {formik.touched.track && formik.errors.track && (
            <p className="text-red-500 text-xs">{formik.errors.track}</p>
          )}
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>LinkedIn</label>
            <input type='text' name='linkedin' onChange={formik.handleChange}
            value={formik.values.linkedin} className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-8  pl-2 pt-0.5 pb-0.5 text-blue-200' />
          </div>
          <div className='mt-3'>
            <label className='justify-self-start font-serif'>Personal Quote or Message (optional)</label>
            <textarea  name="quote"
            onChange={formik.handleChange}
            value={formik.values.quote} className='rounded-lg bg-[rgba(217,217,217,0.2)] mt-2 min-w-full h-20 pl-2 pt-1 text-xs text-blue-200'/>
          </div>
          <button type='submit' className='bg-[rgba(245,73,73,0.7)] mt-5 mx-auto block p-3 rounded-full pr-5 cursor-pointer text-black italic'>🎉 Reserve My Graduation Ticket</button>
        </div>
      </form >
    </div >
  )
}

export default Form;