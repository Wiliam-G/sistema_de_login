import React from "react"
import UserData from "../userData/UserData";

const Login = () => {
  return (
    <div>
      <UserData children={'Login'} />
      <p>Não tem conta?</p>
      <button>Registrar</button>
    </div>
  )
}

export default Login;