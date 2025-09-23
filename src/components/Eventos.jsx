import Button from "./evento/Button"
function Eventos(){

function primeiroEvento (){
    console.log("Primeiro Disparo Ativado!!!")
}
function segundoEvento (){
    console.log("Segundo Disparo Ativado!!!")
}
    return(
        <>
            <p>Clique para disparar um Evento</p>
            <Button event ={primeiroEvento} text="Primeiro Disparo do Evento"/>
            <Button event ={segundoEvento} text="Segundo Disparo do Evento"/>
        </>
    )
    
}
export default Eventos