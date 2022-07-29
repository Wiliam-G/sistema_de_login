import { 
BrowserRouter as Router,
Route,
Routes
} from 'react-router-dom';
import Login from './Components/login/Login';
import Register from './Components/register/Register'
import { useState } from 'react';
import Home from './Components/home/Home';

const ApiRoutes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  return (
    <Router>
      <Routes>
        <Route exat path='/' element={ isAuthenticated ? <Home /> : <Login />} />
        <Route exat path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default ApiRoutes;