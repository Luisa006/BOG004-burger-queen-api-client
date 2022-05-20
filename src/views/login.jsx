import React, { Fragment, useState} from "react";

export function TodoList({ todos }) {
    return (<ul>
        {todos.map((todo) => (
         <li>Tarea</li>   
        ))}
    </ul>
      
    )
  }  

export function App(){
    const [todos] = useState([
        {id: 1, task: "Tarea 1", completed: false },  
    ]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(email, password);
    }

    return (
    <Fragment>
        <TodoList todos={todos} />
        <input type="email" placeholder="email" onChange={ (e) => {setEmail(e.target.value) }}/>
        <input type="password" placeholder="contraseña" onChange={ (e) => {setPassword(e.target.value) }}/>
        <button onClick={handleSubmit}>Ingresar</button>
    </Fragment>    
        );
}