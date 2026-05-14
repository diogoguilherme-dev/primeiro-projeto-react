import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFF;
    width: 530px;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 50px;
    }
`

export const TaskSpace = styled.div`
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    width: 70%;

    font-size: 1rem;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size: 17px;
    line-height: 2px;
    width: 25%;
    height: 45px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export let ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.$isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 500px;
    height: 60px;

    padding: 0 15px;
    margin-bottom: 20px;
    list-style: none;
`

export const EmptyList = styled.h3`
    text-align: center;
    color: #A9A9A9;
`

export const FieldTasks = styled.li`
    width: 100%;
    text-align: center;
    `
    
export const CheckMark = styled(FcCheckmark)`
        font-size: 1.5rem;
        cursor: pointer;
    `

export const Trash = styled(FcEmptyTrash)`
    font-size: 1.5rem;
    cursor: pointer;
    `

