
import axiosSecure from './index';

// save database users data
export const saveUser = async user => {
         const currentUser ={
            email : user.email,
            role  : 'quest',
            status : 'verified',
         }
         const {data} = await axiosSecure.put(`/users/${user?.email}`,currentUser)
         return data
};

// get token server
 export const getToken = async email =>{
   const {data} = await axiosSecure.post(`/jwt`, email)
   console.log('token received............', data)
   return data
}

// clear token in browser
export const clearCookie = async () =>{
   const {data} = await axiosSecure.get('/logout')
   return data
}

