import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthLogin from '../contents/auth/login';
import AuthContent from '../pages/auth';


const MainRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContent />} />
        <Route index element={<AuthLogin />} />
        {/* Additional routes can be place here */}
      </Routes>
    </Router>
  );

};

export default MainRoutes;
