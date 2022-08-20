import React        from "react";
import HeroBg       from "../../assets/img/heroBg.png";
import { MenuData } from "../../data/MenuData";
import HeroCard     from "../common/HeroCard";

const Hero2 = () => {
    return (
        <>
            <img
                src={HeroBg}
                className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
                alt="hero-bg"
            />
            <div className="w-full  xl:w-[41rem] h-full absolute top-0 left-0 flex items-center justify-center xl:px-32  py-4 gap-4 flex-wrap">
                {MenuData.map((item, index) => {
                    return <HeroCard key={ index } props={item} />;
                })
                }
            </div>
        </>
    );
};

export default Hero2;