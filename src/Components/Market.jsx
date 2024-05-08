import React from 'react'
import Comp from '../assets/Comp.png'
import Durag from '../assets/Durag.png'
import Tea from '../assets/Tea.png'
import { FaArrowRight } from "react-icons/fa";

function Market() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center py-7 text-[#4D4D4D]' >
                    <p className='text-4xl font-semibold'>Caring is the new marketing</p>
                    <p className='text-[#717171] py-3zz'>The Nexcent blog is the best place to read about the latest membership insights, <br />
                        trends and more. See who's joining the community, read about how our community <br />
                        are increasing their membership income and lot's more.​</p>
                </div>
                <div>
                    <img src={Durag} className='' />
                    <div className=' grid gap-4 shadow-md rounded-lg bg-red-300 z-50 justify-center items-center'>
                        <p className=' flex text-center font-semibold text-xl  text-[#4D4D4D]'>Creating Streamlined <br />
                            Safeguarding Processes with <br />
                            OneRen
                        </p>
                        <div className=' flex gap-3'>
                            <p className='text-green-500 text-xl font-lg'>Readmore</p>
                            <FaArrowRight className='flex justify-center text-lg mt-[6px] text-green-500' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Market