import React from "react";

export default function Logout(){

    const userName = localStorage.getItem("userName");

    function logout(){
        localStorage.removeItem("userName");
        localStorage.removeItem("userPassword");
        window.location.reload();
    }

    return (
        <div className="logout">
            <h3>Olá {userName}, essa é a sua página de perfil</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}