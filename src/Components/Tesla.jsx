import React from 'react'
import Car from '../assets/Tesla.png'
import Four from '../assets/4.png' 
import Sphere from '../assets/sphere.png'
import Game from '../assets/game.png'
import Lorem from '../assets/Lorem.png'
import Maze from '../assets/maze.png'
import Infinity from '../assets/Infinity.png'
import { FaArrowRight } from 'react-icons/fa'

const Tesla = () => {
    return (
        <>
            <div className='flex gap-32 justify-center py-10 bg-[#F5F7FA]'>
                <div>
                    <img src={Car} />
                </div>
                <div>
                    <div>
                        <p className='text-[#717171] text-lg'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br />
                            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br />
                            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br />
                            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br />
                            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br />
                            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. <br />
                            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <p className='text-[#4CAF4F] text-lg font-semibold py-3'>
                            Tim Smith
                        </p>
                        <p className='text-[#89939E] font-medium text-base'>
                            British Dragon Boat Racing Association
                        </p>
                    </div>
                    <div className='flex gap-10'>
                    <div className='flex gap-10 py-4'>
                        <img src={Four} alt="" />
                        <img src={Sphere} alt="" />
                        <img src={Game} alt="" />
                        <img src={Lorem} alt="" />
                        <img src={Maze} alt="" />
                        <img src={Infinity} alt="" />
                    </div>
                    <div className='flex gap-4 text-[#4CAF4F] py-7'>
                        <p className='text-lg font-semibold'>Meet all customers</p>
                        <FaArrowRight className='mt-[6px]' />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tesla