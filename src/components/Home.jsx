import React from "react";
import useAuth from "../actions/userAuth";

export default function Home(props){

    let userName = localStorage.getItem("userName");


    return (
        <div className="page">
            <h1>Olá, Seja Bem-vindo(a) {useAuth() ? userName : ""}!!!</h1>
            <h2>Trabalho feito por Felipe e Sabrina</h2>
            <h4>INFO:</h4>
            <p>Nesse site para que você possa ver todas as páginas é necessário que<br/>
            esteja logado na sua conta, utilizando um <b>Nome</b> e uma <b>Senha</b>! 
            </p>

            <br/><br/>

        </div>
        
    )
}