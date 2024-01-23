import React from 'react';
import { Outlet} from 'react-router';



const AuthContent: React.FC = () => {

   return (
    <div className='h-screen w-screen bg-blue-200'>
        Parent Container of the Login page
        <Outlet/>
    </div>
   )
}
export default AuthContent;