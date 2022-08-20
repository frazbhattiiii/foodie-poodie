import React    from 'react';
import Hero2    from "./Hero2";
import Hero1    from "./Hero1";
function Hero ( props ) {
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
                <Hero1/>
                <div className="py-2 flex-1 flex items-center relative">
                    <Hero2/>
                </div>
            </section>
        </>
    );
}

export default Hero;