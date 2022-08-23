import React        from 'react';
import { Hero }     from "./index";
import FruitSection from "./FruitSection";
import MenuSection  from "./MenuSection";

function HomeComponent ( props ) {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Hero/>
            <FruitSection/>
            <MenuSection/>
        </div>
    );
}

export default HomeComponent;