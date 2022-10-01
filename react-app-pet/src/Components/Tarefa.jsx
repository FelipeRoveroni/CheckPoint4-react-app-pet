import React from "react";
import { DivLista } from "../style/styled";

const Tarefa = (props)=>{
    return(
        <DivLista>
            <h2>{props.nome}</h2>
            <p>{props.idade}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </DivLista>
    )
};

export default Tarefa;