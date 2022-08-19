import React        from 'react';
import HeroBg       from '../../assets/img/heroBg.png';
import Icecream     from '../../assets/img/i1.png';
import HeroCard     from "../common/HeroCard";
import { MenuData } from "../../data/MenuData";

function Hero2 ( props ) {


    return (
        <div className='w-full items-center flex flex-1 py-2 relative'>
        <img src={HeroBg} alt='Hero Bg' className='ml-auto h-420 lg:h-650 lg:w-auto w-full'/>
        <div className='w-full h-full flex absolute items-center justify-center px-32 py-4 gap-4 flex-wrap'>
            {
                MenuData.map((item, index) => {
                    return (
                  <HeroCard props={item}/>
                    );
                })
            }

        </div>
        </div>
    );
}

export default Hero2;