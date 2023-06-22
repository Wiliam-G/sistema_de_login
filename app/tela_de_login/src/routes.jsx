import { 
    BrowserRouter as Router, 
    Route, 
    Routes } from "react-router-dom";

import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from "./pages/registerPage";

import { AuthContext, AuthProvider } from "./context/auth";
import { useContext } from "react";


const AppRoutes = () => {
    const loading = useContext(AuthContext);


    if (loading) {
        return <div className="loading">Carregando...</div>;
    }
    
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exatc path="/" element={<HomePage/>} />
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )

}

export default AppRoutes