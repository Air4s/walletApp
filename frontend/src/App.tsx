import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './routes';


const App = () => {
  return <RouterProvider router={Routes} />
}

export default App