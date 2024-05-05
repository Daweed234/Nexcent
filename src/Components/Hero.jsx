import React from 'react'
import Ill from '../assets/Illustration.png'

const Hero = () => {
    return (
        <>
            <div className='bg-[#F5F7FA] flex justify-center gap-20 -ml-32'>
                <div className=' px-20 py-20'>
                    <p className='text-[3rem] font-semibold text-[#4D4D4D]'>Lessons and insights <br /><span className='text-[#4CAF4F]'>from 8 years</span>
                    </p>
                    <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
                    <div className='py-8'>
                <button className='bg-[#4CAF4F] px-8 text-white py-4 rounded-md'>Register</button>
                </div>
                </div>
                <div className=''>
                    <img src={Ill} alt="" />
                </div>
                </div>
        </>
    )
}

export default Hero