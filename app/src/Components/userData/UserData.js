import React from "react";

const UserData = ({children}) => {
  return (
    <form>
      <p>Email</p>
      <input type="email" name="email" value="" />
      <p>Senha</p>
      <input type="password" name="password" value="" />
      <button type="submit">{children}</button>
    </form>
  )
}

export default UserData;