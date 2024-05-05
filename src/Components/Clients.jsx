import React from 'react'
import Four from '../assets/4.png' 
import Sphere from '../assets/sphere.png'
import Game from '../assets/game.png'
import Lorem from '../assets/Lorem.png'
import Maze from '../assets/maze.png'
import Infinity from '../assets/Infinity.png'


const Clients = () => {
  return (
    <>
    <div className='grid gap-4 text-center items-center justify-center py-8'>
        <p className='text-[#4D4D4D] text-4xl font-semibold'>Our Clients</p>
        <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
    </div>
    <div className='flex justify-center items-center gap-40'>
    <img src={Four} alt="" />
    <img src={Sphere} alt="" />
    <img src={Game} alt="" />
    <img src={Lorem} alt="" />
    <img src={Maze} alt="" />
    <img src={Infinity} alt="" />    
    <img src={Game} alt="" />
    </div>
    </>
  )
} 

export default Clients