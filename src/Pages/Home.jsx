import React    from 'react';
import { Hero } from "../shared/components";

function Home ( props ) {
    return (
        <>
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <Hero/>
        </div>
        </>
    );
}

export default Home;