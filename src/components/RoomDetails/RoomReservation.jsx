/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";



const RoomReservation = ({room}) => {

  const totalDays = formatDistance(new Date(room.to), new Date(room.from))
  console.log(totalDays)

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
          <div className="flex items-center gap-1 p-4"></div>
          <div className=" text-2xl font-bold">${room?.price}</div>
          <div className="font-bold text-neutral-600">night</div>
          <hr />
          <div className=" flex justify-center"> <Calender></Calender></div>
          <hr />
          <div className=" p-4">
            <Button label={'Reserve'}></Button>
          </div>
          <div className="p-4 flex items-center justify-between font-semibold text-xl">
            <div className="">total</div>
            <div className="">${room.price}</div>
          </div>

        </div>
    );
};

export default RoomReservation;