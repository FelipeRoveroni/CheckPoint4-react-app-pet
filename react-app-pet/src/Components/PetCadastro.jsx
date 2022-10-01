import React from "react";
import { DivForm } from "../style/styled";

const PetCadastro = (props)=>{
    return(
        <DivForm>
            <form>
                <div>
                    <input type="text" name="nome" placeholder="Nome" 
                    />
                </div>
            </form>
        </DivForm>
    )
}