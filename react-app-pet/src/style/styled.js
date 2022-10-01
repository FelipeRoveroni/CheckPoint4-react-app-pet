import styled from "styled-components";

export const DivLista = styled.div`
    width: 100%;
    min-height: calc(100vh - 200px);
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const DivForm = styled.div`
    width: 100%;
    form {
        max-width: 300px;
        margin: 20px auto;
        input[type='text'],
        textarea {
            width: 100%;
            margin-bottom: 7px;
            padding-left: 5px;
            height: 25px;
        }
        textarea {
            height: 70px;
            padding: 7px;
        }
        button {
            width: 100%;
            padding: 5px 0;
            border-radius: 10px;
            border: 1px solid gray;
            cursor: pointer;
        }
    }
`;
