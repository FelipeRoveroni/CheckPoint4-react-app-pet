import React, { useState } from "react";
import { DivLista } from "../style/styled";
import PetCadastro from "./PetCadastro"
import Tarefa from "./Tarefa";

const Listatarefas = ()=>{

    const[tarefa, setTarefa] = useState([{
        nome: 'Nome Do Pet',
        idade: 'Idade Do Pet',
        raca: 'Raca do Animal',
        tamanho: 'Tamanho Do Animal',
        nomeDono: 'Nome Do Dono',
        telefoneDono: 'Telefone Do Dono',
        imagemPet: 'imagem Do Pet',
        observacoes: 'Observacoes Do pet',
    },
])

    const[nTarefa, setNTarefa] = useState({
        nome:"",
        idade:"",
        raca:"",
        tamanho:"",
        nomeDono:"",
        telefoneDono:"",
        imagemPet:"",
        observacoes:"",
    });

    const addTarefa = (e)=>{
        e.preventDefault()
        setNTarefa({
            nome:"",
            idade:"",
            raca:"",
            tamanho:"",
            nomeDono:"",
            telefoneDono:"",
            imagemPet:"",
            observacoes:""
        })
        setTarefa([...tarefa, nTarefa])
    };

    const captura = (e)=>{
        const {value, name} = e.target

        if (name === "nome"){
            setNTarefa({nome:value, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
            nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
            observacoes:nTarefa.observacoes})
        } else if (name === "idade"){
            setNTarefa({nome:nTarefa.nome, idade:value, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
                nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
                observacoes:nTarefa.observacoes})
        } else if (name === "raca"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:value, tamanho:nTarefa.tamanho,
                nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
                observacoes:nTarefa.observacoes})
        } else if (name === "tamanho"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:value,
                nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
                observacoes:nTarefa.observacoes})
        } else if (name === "nomeDono"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
                nomeDono:value, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
                observacoes:nTarefa.observacoes})
        } else if (name === "telefoneDono"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
                nomeDono:nTarefa.nomeDono, telefoneDono:value, imagemPet:nTarefa.imagemPet,
                observacoes:nTarefa.observacoes})
        } else if (name === "imagemPet"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
                nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:value,
                observacoes:nTarefa.observacoes})
        } else if (name === "observacoes"){
            setNTarefa({nome:nTarefa.nome, idade:nTarefa.idade, raca:nTarefa.raca, tamanho:nTarefa.tamanho,
                nomeDono:nTarefa.nomeDono, telefoneDono:nTarefa.telefoneDono, imagemPet:nTarefa.imagemPet,
                observacoes:value})
        }
    };

    const removerTarefa= (tar)=>{
        let lista = tarefa
        lista = lista.filter((t)=> t!== tar)
        setTarefa(lista)
    };

    return (
        <>
            <PetCadastro
                addTarefa={addTarefa}
                tarefa={nTarefa}
                digit={captura}
            />
            <DivLista>
                {tarefa.map((tar, i) =>(
                    <Tarefa
                        key={i}
                        nome={tar.nome}
                        idade={tar.idade}
                        raca={tar.raca}
                        tamanho={tar.tamanho}
                        nomeDono={tar.nomeDono}
                        telefoneDono={tar.telefoneDono}
                        imagemPet={tar.imagemPet}
                        observacoes={tar.observacoes}
                        remove={removerTarefa.bind(this, tar)}
                    />
                ))}
            </DivLista>
        </>
    )
};

export default Listatarefas;