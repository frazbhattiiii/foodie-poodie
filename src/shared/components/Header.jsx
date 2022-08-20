import React , { useState } from 'react';
import logo                 from '../../assets/img/logo.png';
import Avatar                                             from '../../assets/img/avatar.png';
import { MdShoppingBasket , MdAdd , MdLogout }            from "react-icons/md";
import { motion }                                         from "framer-motion";
import { Link }                                           from "react-router-dom";
import { getAuth , signInWithPopup , GoogleAuthProvider } from "firebase/auth";
import { app }                                            from '../../config/firebase.config'
import { useStateValue }                                  from "../../context/StateProvider";
import { actionType }                                     from "../../context/reducer";

function Header ( props ) {
    const [ { user } , dispatch ] = useStateValue ();
    const [ IsMenu , setIsMenu ] = useState ( false );
    const firebaseAuth = getAuth ( app );
    const provider = new GoogleAuthProvider ();

    const login = async () => {
        if ( ! user ) {
            const { user : { refreshToken , providerData } } = await signInWithPopup ( firebaseAuth , provider );
            dispatch ( {
                           type : actionType.SET_USER , user : providerData[ 0 ]
                       } )
            localStorage.setItem ( 'user' , JSON.stringify ( providerData[ 0 ] ) );
        } else{
            console.log("hellay")
            setIsMenu(!IsMenu)
        }
    }
    const logout = async () => {
        const done =  window.confirm('Are you sure you want to logout?')
        if(done){
            setIsMenu ( false );
            localStorage.clear ();
            dispatch ( {
                           type : actionType.SET_USER , user : null
                       } )
            await firebaseAuth.signOut ();
        }
    }


    return (
        <div className='fixed z-50 w-screen p-3 px-8 md:p-6 md:px-16 bg-primary'>
            {/*For Larger Screen*/ }
            <div className='hidden md:flex w-full h-full flex items-center justify-between'>
                <Link to={ '/' } className='flex items-center gap-2'>
                    <img src={ logo } alt='logo' className='w-10 object-cover'/>
                    <p className='text-xl font-bold text-headingColor'>Foodie Poodie</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opacity: 0 , x: 200 }}
                        animate={{ opacity: 1 , x: 0 }}
                        exit={{ opacity: 0 , x: 200 }}
                        className='flex items-center gap-8'>
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
                    </motion.ul>
                    <div className='relative flex items-center justify-center cursor-pointer'>
                        <MdShoppingBasket className='text-textColor text-2xl ml-8'/>
                        <div
                            className=' absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>0</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={ { scale : 0.6 } }
                            src={ user ? user.photoURL : Avatar } alt='avatar'
                            className='w-10 min-w-[40]px h-10 min-h-[40]px drop-shadow-2xl cursor-pointer rounded-full'
                            onClick={ login }
                        />
                        {
                            IsMenu  && (
                                <motion.div
                                    initial={{opacity:0, scale :0.6}}
                                    animate={{opacity:5, scale :1}}
                                    exit={{opacity:0, scale :0.6}}
                                            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                    { user && user.email === 'bhattifraz94@gmail.com' && (
                                        <Link to={ '/createItem' }>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                                New Item <MdAdd/>
                                            </p>
                                        </Link>
                                    ) }
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                        logout <MdLogout/>
                                    </p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/*    For Mobile*/ }
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                <div className='relative flex items-center justify-center cursor-pointer'>
                    <MdShoppingBasket className='text-textColor text-2xl'/>
                    <div
                        className=' absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>0</p>
                    </div>
                </div>
                <Link to={ '/' } className='flex items-center gap-2'>
                    <img src={ logo } alt='logo' className='w-10 object-cover'/>
                    <p className='text-xl font-bold text-headingColor'>Foodie Poodie</p>
                </Link>
                <div className='relative '>
                    <motion.img
                        whileTap={ { scale : 0.6 } }
                        src={ user ? user.photoURL : Avatar } alt='avatar'
                        className='w-10 min-w-[40]px h-10 min-h-[40]px drop-shadow-2xl cursor-pointer rounded-full'
                        onClick={ login }
                    />
                    {
                        IsMenu  && (
                            <motion.div
                                initial={{opacity:0, scale :0.6}}
                                animate={{opacity:5, scale :1}}
                                exit={{opacity:0, scale :0.6}}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                { user && user.email === 'bhattifraz94@gmail.com' && (
                                    <Link to={ '/createItem' }>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                            New Item <MdAdd/>
                                        </p>
                                    </Link>
                                ) }
                                <ul
                                    className='flex flex-col'>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-100
                    transition-all ease-in-out cursor-pointer px-4 py-2'>
                                        Home
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor hover:bg-slate-100 duration-100
                    transition-all ease-in-out cursor-pointer px-4 py-2'>
                                        Menu
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-100
                    transition-all ease-in-out cursor-pointer px-4 py-2'>
                                        About Us
                                    </li>
                                    <li className='text-base text-textColor hover:text-headingColor  duration-100 hover:bg-slate-100
                    transition-all ease-in-out cursor-pointer px-4 py-2'>
                                        Contact Us
                                    </li>
                                </ul>
                                <p className='m-2 p-2 px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base bg-gray-200 justify-center hover:bg-gray-300'
                                onClick={logout}
                                >
                                    logout <MdLogout/>
                                </p>
                            </motion.div>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default Header;