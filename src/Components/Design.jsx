import React from 'react'
import Unseen from '../assets/Unseen.png'

const Spending = () => {
  return (
    <>
    <div className='md:flex-col md:px-5 flex justify-center items-center py-14 gap-14'>
        <div>
            <img className='size-96' src={Unseen} alt="" />
        </div>
        <div className=' flex flex-col '>
            <h2 className='text-[#4D4D4D] font-semibold text-3xl py-4'>
            How to design your site footer like <br /> we did               
            </h2>
            <p className='text-[#717171]'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br /> 
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br /> 
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br /> 
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br />
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br />
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br />
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <div className='py-6'>
            <button className='text-white px-8 py-3 rounded-md bg-[#4CAF4F]'>Learn More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Spending