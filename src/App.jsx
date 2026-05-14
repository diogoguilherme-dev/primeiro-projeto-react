import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import GlobalStyles from './globalStyles.js';

import { Container, ToDoList, Input, Button, ListItem, FieldTasks, TaskSpace, CheckMark, Trash, EmptyList } from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function CliqueiNoBotao() {
    if(inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }



  return (
    <Container>
      <ToDoList>

        <TaskSpace >
          <Input onChange={inputMudou} placeholder="Novos pedidos:" />
          <Button onClick={CliqueiNoBotao}>Adicionar</Button>
        </TaskSpace>

        <ul>
          {list.length > 0 ? (
              list.map(item => (
                <ListItem $isFinished={item.finished} $isDeleted={item.deleted} key={item.id}>
                  <CheckMark onClick={() => finalizarTarefa(item.id)} />
                  <FieldTasks>{item.task}</FieldTasks>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <EmptyList>Não há itens na lista...</EmptyList>
            )
          }
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
