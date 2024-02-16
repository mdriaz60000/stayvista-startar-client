import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";


const PrivetRoutes = ({children}) => {
    const {loading,user} = useAuth()
    const location = useLocation()

    if(loading) return  <Loader></Loader>

    if(user) return children

    return <Navigate to='/login' state={{form:location}} replace='true' />
}
export default PrivetRoutes;