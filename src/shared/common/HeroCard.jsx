import React    from 'react';
import Icecream from "../../assets/img/i1.png";

function HeroCard ( {props} ) {
    console.log(props);
    return (
        <>
            <div className='w-190 min-w-[190px] p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center flex-col justify-center  shadow-lg'>
                <img src={props.imgSrc} alt='Icecream' className='w-40 -mt-20 '/>
                <p className='text-base font-semibold text-textColor'> {props.title}</p>
                <p className='text-sm text-gray-500 font-semibold my-3'> {props.description}</p>
                <p className='text-sm font-semibold text-headingColor'>
                    <span className='text-xs text-red-600'>
                        $
                    </span>
                    {props.price}
                </p>
            </div>

        </>
    );
}

export default HeroCard;