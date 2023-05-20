import React from "react";
import Button from '../components/button';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Link to='login'>
                <Button name='Login' btn='Login'></Button>
            </Link>
            <Link to='register'>
                <Button name='register' btn='register'></Button>
            </Link>
            
        </div>
    )
};

export default Home;