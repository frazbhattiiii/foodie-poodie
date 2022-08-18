import React                from 'react';
import logo                 from '../../assets/img/logo.png';
import Avatar               from '../../assets/img/avatar.png';
import { MdShoppingBasket } from "react-icons/md";
import { motion }           from "framer-motion";
import { Link }             from "react-router-dom";

function Header ( props ) {
    return (
        <div className='fixed z-50 w-screen p-6 px-16'>
            {/*For Larger Screen*/ }
            <div className='hidden md:flex w-full h-full flex items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={ logo } alt='logo' className='w-10 object-cover'/>
                    <p className='text-xl font-bold text-headingColor'>Foodie Poodie</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>
                            Home
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>
                            Menu
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>
                            About Us
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor  duration-100
                    transition-all ease-in-out cursor-pointer'>
                            Contact Us
                        </li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl ml-8'/>
                        <div
                            className=' absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>0</p>
                        </div>
                    </div>
                    <motion.img whileTap={{scale:0.6}} src={ Avatar } alt='avatar' className='w-10 min-w-[40]px h-10 min-h-[40]px drop-shadow-2xl'/>
                </div>
            </div>
            {/*    For Mobile*/ }
            <div className='flex md:hidden w-full h-full'>

            </div>
        </div>
    );
}

export default Header;