import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomePage } from './styled';
import { AuthProvider, AuthContext } from "../../context/auth";


const Home = () => {
    const { authenticated, logout } = useContext(AuthContext);
    const handleSair = () => {
        logout();
    }

    if(authenticated) {
        return (
            <HomePage>
                <h1>Home</h1>
                <AuthProvider>
                    <p>Bem vindo {  } </p>
                </AuthProvider>
                <button name='register' btn='register' onClick={handleSair}>Sair</button>
            </HomePage>
        )
    } else {
        return (
            <HomePage>
            <h1>Home</h1> 
            <Link to='login'>
                <button name='Login' btn='Login'>Login</button>
            </Link>
            <Link to='register'>
                <button name='register' btn='register'>Register</button>                            </Link>
            </HomePage>
        )
    }
};

export default Home;