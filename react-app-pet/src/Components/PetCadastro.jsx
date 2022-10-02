import React from "react";
import { DivForm } from "../style/styled";

const PetCadastro = (props)=>{
    return(
        <DivForm>
            <form action="post" onSubmit={props.addTarefa}>
                <div>
                    <label>Nome</label>
                    <input type="text" name="nome" placeholder="Nome" 
                    value={props.tarefa.nome} onChange={props.digit}/>
                </div>
                <div>
                    <label>Idade</label>
                    <input type="number" name="idade" placeholder="Idade" 
                    value={props.tarefa.idade} onChange={props.digit}/>
                </div>
                <div>
                    <label>Raca</label>
                    <input type="text" name="raca" placeholder="Raca" 
                    value={props.tarefa.raca} onChange={props.digit}/>
                </div>
                <div>
                    <label>Tamanho</label>
                    <input type="text" name="tamanho" placeholder="Tamanho (Em CM)" 
                    value={props.tarefa.tamanho} onChange={props.digit}/>
                </div>
                <div>
                    <label>Nome do Dono</label>
                    <input type="text" name="nomeDono" placeholder="Nome do Dono" 
                    value={props.tarefa.nomeDono} onChange={props.digit}/>
                </div>
                <div>
                    <label>Telefone do Dono</label>
                    <input type="number" name="telefoneDono" placeholder="Telefone do Dono" 
                    value={props.tarefa.telefoneDono} onChange={props.digit}/>
                </div>
                <div>
                    <label>Imagem do pet</label>
                    <input type="file" name="imagemPet"  
                    value={props.tarefa.imagemPet} onChange={props.onFileChange}
                    />
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </DivForm>
    )
}

export default PetCadastro;