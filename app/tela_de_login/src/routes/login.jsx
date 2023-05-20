import React from "react";

import Input from '../components/input';
import Button from '../components/button';

const Login = () => {
    return (
        <div>
            <Input label='user name' input_label='user name'></Input>
            <Input label='password' input_label='password'></Input>
            <Button btn_name='login_btn' btn='login'></Button>
        </div>
    );
};

export default Login;