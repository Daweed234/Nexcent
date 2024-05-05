import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-center items-center gap-36 bg-[#F5F7FA] py-5'>
                <div>
                    <img src={Logo} />
                </div>
                <ul className='flex justify-center items-center gap-10'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Features</li>
                    <li>Product</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
                <div>
                <button className='text-green-500 px-8 py-4 rounded-md'>Login</button>
                <button className='bg-[#4CAF4F] px-8 text-white py-4 rounded-md'>Sign Up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar