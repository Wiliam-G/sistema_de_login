import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/auth";

import { LoginPage, InputFields } from './styled';
import { Navigate } from "react-router-dom";



const Login = () => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const { authenticated, login } = useContext(AuthContext);

    if (authenticated) {
      return <Navigate to='/' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { userName, password});
        login(userName, password);
    };

    return (
<LoginPage>
  <form className="form" onSubmit={handleSubmit}>
      <p>{String(authenticated)}</p>
      <input
        name="username"
        id="username"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        input_label="nome de usuário"
      />
      <input
        name="password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        input_label="senha"
      />
    
    <button type="submit" btn_name="login_btn" btn="login">Login</button>
  </form>
</LoginPage>
    );
};

export default Login;