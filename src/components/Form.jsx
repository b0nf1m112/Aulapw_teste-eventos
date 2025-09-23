import { useState } from "react"

function Form() {

    function cadastrarUsuario(event){
        console.log(`Usurario: ${name} foi cadastrado com senha: ${password}`)
        console.log("Cadastrou Usuario!!")
        event.preventDefault()
    }

    const [name, setName]= useState ()
    const [password, setPassword]= useState ()

    return(
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" 
                    id="name" name="name" placeholder="Digite o seu nome"
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlfor="password">Senha: </label>
                    <input type="password" 
                    id="password" name="password" 
                    placeholder="Digite sua senha"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}
export default Form