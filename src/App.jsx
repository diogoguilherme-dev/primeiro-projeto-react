import { v4 as uuid } from "uuid";


function App() {
  const list = [{ id: uuid(), task: "Estudar para dar um futuro incrível para o meu amor!"},
    {id: uuid(), task: "Trabalhar ainda esse ano!"},
    {id: uuid(), task: "Buscar mais a presença do Senhor!"},
    {id: uuid(), task: "Me tornar cada vez melhor para o meu amor!"},
  ]

  function inputMudou(event) {
    console.log(event.target.value)
    list.push({id: uuid(), task: event.target.value})

    console.log(list)
  }

  function CliqueiNoBotao() {
    console.log("Eu te amo minha rainha amada!!!")
  }

  return (
    <>
      <div>
          <input onChange={inputMudou} placeholder="O que tenho para fazer..." />
          <button onClick={CliqueiNoBotao}>Adicionar</button>

          <ul>
            {
              list.map( item => (
                <li key={item.id}>{item.task}</li>
              ))
            }
          </ul>
      </div>
    </>
  )
}

export default App
