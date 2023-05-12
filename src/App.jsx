import './App.css'

import {v4 as uuidv4} from 'uuid';

import {TodoItem}  from './components/TodoItem'
import { useState, useEffect } from 'react'

function App() {

  const initialTodos = JSON.parse(localStorage.getItem('todos_1'));
  const [todos, setTodos] = useState(initialTodos || [])
    
    useEffect(()=>{
    localStorage.setItem("todos_1", JSON.stringify(todos));
    }, [todos])

    const deleteTodo = (id) => {
      console.log('Delete called')
      setTodos(todos.filter((todoData) => {
        return todoData.id != id
      })
      )
    }

    const appendTodo = () => {
      let todoElement = document.getElementById("todo")
      let todo = todoElement.value
      if(todo === "") return
      todoElement.value = ""
      setTodos([...todos, {
        id: uuidv4(),
        todo: todo
        }])
    }

  return (
    <>
    <span className="text-3xl font-bold text-cyan-950"> TODO DASHBOARD </span>
    <div className='mt-8 flex justify-center'>
      <input id = "todo" className = "border border-cyan-950 rounded-lg text-center mr-10" type="text" placeholder="Enter the goal" />
      <button className = "bg-cyan-950 text-white uppercase hover:bg-pink-600 " onClick={()=> appendTodo()}>Add Goal</button>
    </div>
    <div className = "border border-cyan-950 rounded-lg mx-2 mt-16 p-2 flex flex-wrap justify-evenly gap-y-5 min-h-[25%]">
      {
        todos.map((todoData) => {
          return <TodoItem key = {todoData.id} todoData = {todoData} deleteTodo = {deleteTodo}/>
        })
      }
    </div>
    </>
  )
}

export default App
