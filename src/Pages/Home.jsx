import React        from 'react';
import { Hero }     from "../shared/components";
import FruitSection from "../shared/components/FruitSection";

function Home ( props ) {
    return (
        <>
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Hero/>
            <FruitSection/>
        </div>
        </>
    );
}

export default Home;