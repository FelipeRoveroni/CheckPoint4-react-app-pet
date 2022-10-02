import React from "react";
import { DivFormulario } from "../style/styled";

const PetCadastro = (props)=>{
    return(
        <DivFormulario>
            <form action="post" onSubmit={props.addFormulario}>
                <div>
                    <input type="text" name="nome" placeholder="Nome" 
                    value={props.formulario.nome} onChange={props.dgit}/>

                </div>
            </form>
        </DivFormulario>
    )
}

export default PetCadastro;