
import Rooms from "../../components/Rooms/Rooms"
import Categories from '../../components/Categories/Categories'
import { Helmet } from "react-helmet-async"



const Home = () => {

  return (
    <div>
          <Helmet>
        <title>Stay vista || Home</title>
        
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  )
}

export default Home
