/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";



const RoomReservation = ({room}) => {

  const totalDays = parseInt( formatDistance(new Date(2024, 2, 25), new Date(2024, 3, 1)).split(' ')[0] )
  // console.log(totalDays)
  const totalPrice = totalDays * room?.price
  console.log(room?.to)
  console.log(room?.from)
 

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
            <div className="">${totalPrice}</div>
          </div>

        </div>
    );
};

export default RoomReservation;