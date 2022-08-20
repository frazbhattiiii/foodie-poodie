import React    from 'react';
function HeroCard ( {props} ) {
    console.log(props);
    return (
        <>
            <div
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
            >
                <img
                    src={props.imgSrc}
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                    alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                    {props.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                    {props.description}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span> {props.price}
                </p>
            </div>

        </>
    );
}

export default HeroCard;