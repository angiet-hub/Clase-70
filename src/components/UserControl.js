// Crear un componente UserControl que acepte una prop user (que es un string). Si user tiene algún valor, debe
// renderizar un componente p que diga Hola ${user} y un componente a que diga Logout, en cambio si user no tiene
// ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones
// en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage
import React from "react";

const GuestUserMessage = () => {
  return (
    <div>
      <a href="#section">Login</a>
      <a href="#section">Register</a>
    </div>
  );
};

const LoggedUserMessage = ({ user }) => {
  return (
    <div>
      <p>Welcome {user}</p>
      <a href="#section">Logout</a>
    </div>
  );
};

const UserControl = ({ user }) => {
  return (
    <div>
      {user !== "" ? <LoggedUserMessage user={user} /> : <GuestUserMessage />}
    </div>
  );
};
export default UserControl;
