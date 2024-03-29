
import { useEffect, useState } from 'react';
import Container from './../Shared/Container';
import Card from './Card';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Shared/Heading';
import Loader from '../Shared/Loader';

const Rooms = () => {
    const [rooms ,setRooms] = useState([])
    const [params ] = useSearchParams()
    const[ loading, setLoading] = useState(false)
    const category = params.get('category')
   
    useEffect(()=>{
       setLoading(true)
        fetch('rooms.json').then(res => res.json())
        .then(data =>{
          if(category){
            const filtered = data.filter(room=> room.category == category)
            setRooms(filtered)
          }else{
            setRooms(data)
          }
          setLoading(false)
          })
    },[category])
    if (loading) return <Loader></Loader>
      
  
    return (
     <Container>
       {
       rooms && rooms.length > 0 ?  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
       {
         rooms?.map(room =><Card key={room._id} room={room}></Card>)
       }
         </div> : <div className=' flex items-center justify-center h-screen'>
         <Heading center={true} title={'no rooms in this categories'}
         subtitle={'plz selected other categories'}></Heading>
         </div>
       }
     </Container>
    );
};

export default Rooms;