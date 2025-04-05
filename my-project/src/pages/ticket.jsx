import React from 'react'
import graduationCap from '../assets/graduation.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Ticket = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const userData = location.state;
  
    useEffect(() => {
        if (!userData) {
          navigate('/');
        } else {
          localStorage.removeItem('formSubmitted');
        }
      }, [userData, navigate]);
    
      if (!userData) {
        return null; // Wait for useEffect to redirect
      }
    return (
        <div className=" text-white ">
            <div className="flex mx-auto justify-center pt-4">
                <img src={graduationCap} className="w-8 h-8" alt="graduation Cap" />
                <h3 className='self-center italic font-serif text-xs ml-2'>Alx Graduation Ceremony</h3>
            </div>
            <div className='mx-auto justify-items-center text-center'>
                <h1 className='text-[min(5vw,30px)] text-center mt-4 font-extrabold text-balance w-2/3 '>Congrats, <span className='text-red-300'>{userData.fullname}</span>!
                    Your Graduation Ticket is ready.</h1>
                <p className='text-[15px] mt-6 text-xs font-thin text-balance  w-2/3 sm:w-60 lg:w-80 md:w-70'>We've emailed your ticket to <span className='text-red-400'>{userData.email}</span> and will keep you updated as the big day approaches.</p>
            </div>
            <div className='mx-auto justify-items-center mt-20 w-full'>
                <div className=' relative w-[85%] sm:w-[70%] lg:w-[40%] justify-items-center'><img src='/pattern-ticket.svg' alt='pattern-ticket' className='relative w-full' />
                    <div className='absolute top-2 left-3'>
                        <div className='flex flex-row'> <img src={graduationCap} className="w-5 h-5" alt="graduation Cap" />
                            <h3 className='self-center italic text-sm ml-2'>Alx Cohort 4 Graduation</h3>
                            <p className='absolute top-4 left-8 text-[12px] mt-2'>April 19, 2025 /  Lagos, NG</p>
                        </div>
                    </div>
                    <img src={userData.avatar} className='w-[30px] h-[30px] rounded-md absolute bottom-4 left-3' />
                    <h3 className='bottom-8 left-13 absolute text-red-100 text-xs '>{userData.fullname}</h3>
                    <img src={graduationCap} className="w-4 absolute bottom-4 left-12 stroke-[rgba(126,105,105,0.98)]" alt="graduation Cap" />
                    <p className='absolute bottom-4 left-17 font-thin text-xs'>{userData.track}</p>
                    <p className='absolute right-1/18 rotate-90 bottom-[45%] opacity-25 text-[15px]'>#01609</p>
                </div>
            </div>

        </div>
    )
}

export default Ticket;