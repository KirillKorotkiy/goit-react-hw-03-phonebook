import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerForm = styled(Form)`
    border: 1px solid black;
    width: 300px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const InputForm = styled(Field)`
    height: 25px;
    width: 100%;
    margin-bottom: 5px;
    
`
export const ButtonForm = styled.button`
     height: 25px;
    
`
export const Error = styled(ErrorMessage)`
color:red;
margin: 10px 0px;
`