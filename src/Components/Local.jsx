import React from 'react'
import Pay from '../assets/Pay.png'
import Ppl from '../assets/Ppl.png'
import Finger from '../assets/Finger.png'
import Club from '../assets/Club.png'

const Local = () => {
    return (
        <>
            <div className='flex justify-center gap-56 bg-[#F5F7FA] mt-6'>
                <div>
                    <p className='text-[#4D4D4D] font-semibold text-3xl py-4'>Helping a local <br />
                        <span className='text-[#4CAF4F]'>business reinvent itself</span>
                    </p>
                    <p className='text-[#18191F]'>We reached here with our hard work and dedication</p>
                </div>
                <div className='grid gap-4'>
                <div className='flex gap-20 mt-5'>
                        <div className='flex gap-5'>
                            <div>
                                <img src={Ppl} alt="" />
                            </div>
                            <div>
                                <p className='text-[#4D4D4D] font-medium text-2xl'>2,245,341</p>
                                <p className='text-[#717171] text-sm'>Members</p>
                            </div>

                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <img src={Club} alt="" />
                            </div>
                            <div>
                                <p className='text-[#4D4D4D] font-medium text-2xl'>46,328</p>
                                <p className='text-[#717171] text-sm'>Clubs</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex gap-20  mb-5'>
                        <div className='flex gap-5'>
                            <div>
                                <img src={Finger} alt="" />
                            </div>
                            <div>
                                <p className='text-[#4D4D4D] font-medium text-2xl'>828,867</p>
                                <p className='text-[#717171] text-sm'>Event Bookings</p>
                            </div>

                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <img src={Pay} alt="" />
                            </div>
                            <div className='px-5'>
                                <p className='text-[#4D4D4D] font-medium text-2xl'>1,926,436</p>
                                <p className='text-[#717171] text-sm'>Payments</p>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Local