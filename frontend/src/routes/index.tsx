import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './public';


export const Routes = createBrowserRouter([PrivateRoutes]); // Also, the PublicRoutes should be place here e.g. Login page

export default Routes;