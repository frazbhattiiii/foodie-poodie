import React from 'react';
import Delivery from '../../assets/img/delivery.png';
function Hero ( props ) {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='py-2 px-2 gap-6 flex-1 flex flex-col items-start justify-center'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 rounded-full px-4 py-1 shadow-2xl'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className=' w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                    <img
                    src={Delivery}
                    className='w-full h-full object-contain'
                    alt='delivery'
                    />
                    </div>
                </div>
                    <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
                        The Fastest delivery service in {" "}<span className='text-orange-500 text-[3rem] lg:text-[5rem]'>Your  City</span>
                    </p>
                    <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                    </p>
                    <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500  md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition:all ease-in-out duration-100 text-white'>
                    Order Now
                    </button>
                </div>
                <div className='py-2 flex-1 bg-blue-400'>

                </div>

            </div>
        </>
    );
}

export default Hero;