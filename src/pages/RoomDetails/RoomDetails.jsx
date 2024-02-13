import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";

import RoomReservation from "../../components/RoomDetails/RoomReservation";


const RoomDetails = () => {
  const {id} = useParams()
  const[ loading, setLoading] = useState(false)
  const [room ,setRoom] = useState([])

  useEffect(()=>{
    setLoading(true)
     fetch(`https://raw.githubusercontent.com/mdriaz60000/stayvista-startar-client/main/public/rooms.json`).then(res => res.json())
     .then(data =>{
        const singleRoom = data.find(room => room._id === id)
        setRoom(singleRoom)
        setLoading(false)
     })
 },[id])
 if (loading) return <Loader></Loader>

    return <Container>
        <Helmet>
        <title>{room?.title}</title>
        
      </Helmet>
      <div>
        <section className=" flex flex-col gap-6">
          <Header room={room}></Header>
        </section>
        <section className=" grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <RoomInfo  room={room}></RoomInfo>
          <div className=" col-span-3 md:order-last mb-10">
             <RoomReservation room={room}></RoomReservation>
             </div>
        </section>
        
      </div>
        
    </Container>
};

export default RoomDetails;