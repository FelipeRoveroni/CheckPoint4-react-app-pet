import React from "react";
import { DivForm } from "../style/styled";

const PetCadastro = (props)=>{
    return(
        <DivForm>
            <form action="post" onSubmit={props.addTarefa}>
                <div>
                    <input type="text" name="nome" placeholder="Nome" 
                    value={props.tarefa.nome} onChange={props.digit}/>
                </div>
                <div>
                    <input type="number" name="idade" placeholder="Idade" 
                    value={props.tarefa.idade} onChange={props.digit}/>
                </div>
                <div>
                    <input type="text" name="raca" placeholder="Raca" 
                    value={props.tarefa.raca} onChange={props.digit}/>
                </div>
                <div>
                    <input type="text" name="tamanho" placeholder="Tamanho (Em CM)" 
                    value={props.tarefa.tamanho} onChange={props.digit}/>
                </div>
                <div>
                    <input type="text" name="nomeDono" placeholder="Nome Do Dono" 
                    value={props.tarefa.nomeDono} onChange={props.digit}/>
                </div>
                <div>
                    <input type="number" name="telefoneDono" placeholder="Telefone Do Dono" 
                    value={props.tarefa.telefoneDono} onChange={props.digit}/>
                </div>
                <div>
                    <input type="text" name="imagemPet" placeholder="Imagem do Pet" 
                    value={props.tarefa.imagemPet} onChange={props.digit}/>
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </DivForm>
    )
}

export default PetCadastro;