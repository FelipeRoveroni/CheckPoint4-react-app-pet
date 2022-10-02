import React from "react";
import { DivFormulario } from "../style/styled";

const Tarefa = (props)=>{
    return(
        <DivFormulario>
            <h2>{props.nome}</h2>
            <p>{props.idade}</p>
            <p>{props.raca}</p>
            <p>{props.tamanho}</p>
            <p>{props.nomeDono}</p>
            <p>{props.telefoneDono}</p>
            <p>{props.imagemPet}</p>
            <p>{props.observacoes}</p>
            <button onClick={props.remove}>Remover</button>
        </DivFormulario>
    )
};

export default Tarefa;