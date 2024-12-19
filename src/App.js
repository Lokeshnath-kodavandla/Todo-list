/* import React,{use, useState} from "react";
import "./App.css"
function App() {
  let [todoinput,updatetoinput] = useState('test')
  let [todolist,updatetolist]=useState(
    [
      {
        id: 1,
        task: 'task1'
      },
      {
        id: 2,
        task: 'task2'
      }
    ]
  )
  let nextId = 3
  function addFunction() {
     if (todoinput === "")
     {
        alert('add a task')
     }
     else {
         let newtodos = [
          ...todolist, {
            id: nextId++,
            task: todoinput
          }
         ]
         updatetolist(newtodos);
         updatetoinput("");
     }
  }
  function Deletetodo(id) {
    let updatetodos = todolist.filter(
      (todo)=>{
        return  todo.id != id
      }
    )
    updatetolist(updatetodos)
  }


   return (

    <div className="container mt-5 w-50 ">
      <h3 className="text-center">Todolist</h3>
      <div className="input-group">
          <input className="form-control" onChange={(e)=>{
            let task = e.target.value
            updatetoinput(task)
          }} type="text" value={todoinput}></input>
          <button className="btn btn-primary" onClick={()=>{
            addFunction()
          }}>Add</button>
      </div>
      <ul className="list-group mt-4">
        {
          todolist.map(
            (todo)=> {
              return (
                <li className="list-group-item">
                  <p>{todo.task}</p>
                  <button className="btn btn-secondary" onClick={()=>{
                    Deletetodo(todo.id)
                  }} id="button-height-width-setter">Delete</button>
                </li>
              )
            }
          ) 
            
        }
      </ul>
    </div>
   )
}

export default App;
 */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [todoinput, updatetoinput] = useState("");
  let [todolist, updatetolist] = useState([
    { id: 1, task: "task1" },
    { id: 2, task: "task2" },
  ]);
  let [nextId, setNextId] = useState(3);

  function addFunction() {
    if (todoinput.trim() === "") {
      alert("Add a task");
    } else {
      let newtodos = [
        ...todolist,
        {
          id: nextId,
          task: todoinput,
        },
      ];
      updatetolist(newtodos);
      updatetoinput("");
      setNextId(nextId + 1);
    }
  }

  function Deletetodo(id) {
    let updatetodos = todolist.filter((todo) => todo.id !== id);
    updatetolist(updatetodos);
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todolist</h3>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Enter a task"
          onChange={(e) => {
            updatetoinput(e.target.value);
          }}
          type="text"
          value={todoinput}
        />
        <button className="btn btn-primary" onClick={addFunction}>
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todolist.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <p className="mb-0">{todo.task}</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                Deletetodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
