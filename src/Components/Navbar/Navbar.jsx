import React from 'react'
import Logo from '../../assets/Logo.png'
import { IoMenu } from "react-icons/io5";

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
                <IoMenu className='size-10 md:hidden' />
            </nav> 
{/* 

<nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center ">
      <span class="text-2xl font-[Poppins] cursor-pointer">
        <img class="h-10 inline" />
        tailwind
      </span>

      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
      </span>
    </div>

    <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
      </li>

      <button class="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
        Get started
      </button>
    </ul>
  </nav>


  <script>
* function Menu(e){
        let list = document.querySelector('ul');
        e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    } 
</script> */}


        </>
    )
}

export default Navbar