import React from 'react'
import Unseen from '../assets/Unseen.png'

const Spending = () => {
  return (
    <>
    <div className='flex justify-center items-center py-14'>
        <div>
            <img className='size-96' src={Unseen} alt="" />
        </div>
        <div className=' flex flex-col '>
            <h2 className='text-[#4D4D4D] font-semibold text-3xl py-4'>
            The unseen of spending three <br />years at Pixelgrade               
            </h2>
            <p className='text-[#717171]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br /> 
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> 
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> 
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
        </div>
    </div>
    </>
  )
}

export default Spending