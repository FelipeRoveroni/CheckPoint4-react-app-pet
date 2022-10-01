import React, { useState } from "react";
import { DivLista } from "../style/styled";


const ListaFormulario = ()=>{

    const[formulario, setFormulario] = useState([{
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

    const[nFormulario, setNFormulario] = useState({
        nome:"",
        idade:"",
        raca:"",
        tamanho:"",
        nomeDono:"",
        telefoneDono:"",
        imagemPet:"",
        observacoes:"",
    });

    const addFormulario = (e)=>{
        e.preventDefault()
        setNFormulario({
            nome:"",
            idade:"",
            raca:"",
            tamanho:"",
            nomeDono:"",
            telefoneDono:"",
            imagemPet:"",
            observacoes:""
        })
        setFormulario([...formulario, nFormulario])
    };

    const captura = (e)=>{
        const {value, name} = e.target

        if (name === "nome"){
            setNFormulario({nome:value, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
            nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
            observacoes:nFormulario.observacoes})
        } else if (name === "idade"){
            setNFormulario({nome:nFormulario.nome, idade:value, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
                nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
                observacoes:nFormulario.observacoes})
        } else if (name === "raca"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:value, tamanho:nFormulario.tamanho,
                nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
                observacoes:nFormulario.observacoes})
        } else if (name === "tamanho"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:value,
                nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
                observacoes:nFormulario.observacoes})
        } else if (name === "nomeDono"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
                nomeDono:value, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
                observacoes:nFormulario.observacoes})
        } else if (name === "telefoneDono"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
                nomeDono:nFormulario.nomeDono, telefoneDono:value, imagemPet:nFormulario.imagemPet,
                observacoes:nFormulario.observacoes})
        } else if (name === "imagemPet"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
                nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:value,
                observacoes:nFormulario.observacoes})
        } else if (name === "observacoes"){
            setNFormulario({nome:nFormulario.nome, idade:nFormulario.idade, raca:nFormulario.raca, tamanho:nFormulario.tamanho,
                nomeDono:nFormulario.nomeDono, telefoneDono:nFormulario.telefoneDono, imagemPet:nFormulario.imagemPet,
                observacoes:value})
        }
    };

    const removerTarefa= (tar)=>{
        let lista = formulario
        lista = lista.filter((t)=> t!== tar)
        setFormulario(lista)
    };

    return (
        <>
            <petCadastro
                addFormulario={addFormulario}
                formulario={nFormulario}
                digit={captura}
            />
            <DivLista>
                {formulario.map((tar, i) =>(
                    <formulario
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

export default ListaFormulario;