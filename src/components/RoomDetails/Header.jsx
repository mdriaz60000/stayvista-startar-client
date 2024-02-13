/* eslint-disable react/prop-types */

import Heading from "../Shared/Heading";



const Header = ({room}) => {
    return (
        <div>
            <Heading title={room.title} subtitle={room.location}> </Heading>
            <div className=" w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className=" object-cover w-full" src={room.image} alt="header image" />
            </div>
            {room.title}
        </div>
    );
};

export default Header;