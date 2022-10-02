import React from "react";
import { DivTarefa } from "../style/styled";


const Tarefa = (props)=>{
    return(
        <DivTarefa>
            <h2>Informacoes do pet</h2>
            <p>{props.nome}</p>
            <p>{props.idade}</p>
            <p>{props.raca}</p>
            <p>{props.tamanho}</p>
            <p>{props.nomeDono}</p>
            <p>{props.telefoneDono}</p>
            <p>{props.imagemPet}</p>
            <p>{props.observacoes}</p>
            <button onClick={props.remove}>Remover</button>
        </DivTarefa>
    )
};

export default Tarefa;