import React from "react";
export default function Login(){
    

    function login(event){
        event.preventDefault();
        const userName = event.target.elements.userName.value;
        const password = event.target.elements.password.value;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userPassword", password);
        
        window.location.href="/";
    }


    return (
        <div className="login">
            <form onSubmit={login}>

                <label>Nome</label>
                <input type="text" name="userName" id="userName"/>
                <label>Senha</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Entrar" />

            </form>
        </div>
    )
}