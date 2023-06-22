import React, { useState } from "react";

import { RegisterPage, InputFields } from './styled';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("register");
    }

    return (
        <div>
            <form className="register" onSubmit={handleRegister}>
                
                    <input label='user name' input_label='user name'></input>
                    <input label='password' input_label='password'></input>
                    <input label='confirm password' input_label='confirm password'></input>
                
                <button type="submit" btn_name='register_btn' btn='register'>Register</button>
             </form>
        </div>
    );
};

export default Register;