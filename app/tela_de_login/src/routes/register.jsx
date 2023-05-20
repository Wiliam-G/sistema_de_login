import React from "react";

import Input from "../components/input";
import Button from "../components/button";

const Register = () => {
    return (
        <div>
            <Input label='user name' input_label='user name'></Input>
            <Input label='password' input_label='password'></Input>
            <Input label='confirm password' input_label='confirm password'></Input>
            <Button btn_name='register_btn' btn='register'></Button>
        </div>
    );
};

export default Register;