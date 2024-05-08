import React from 'react'
import Ill from '../../assets/Illustration.png'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className='div bg-[#F5F7FA] flex justify-center gap-20 -ml-32'>
                <div className='div_2 px-20 py-20'>
                    <p className='p_1 text-[3rem] font-semibold text-[#4D4D4D]'>Lessons and insights <br /><span className='text-[#4CAF4F]'>from 8 years</span>
                    </p>
                    <p className='p_2 text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
                    <div className='div_3 py-8'>
                <button className='btn bg-[#4CAF4F] px-8 text-white py-4 rounded-md'>Register</button>
                </div>
                </div>
                <div className='img'>
                    <img src={Ill} alt="" />
                </div>
                </div>
        </>
    )
}

export default Hero