import { useEffect, useState } from 'react'

//components

import Menu from './components/Menu'

//styles
import './App.css'
import Task from './components/Task'


function App() {


  const [task, setTask ] = useState([]);
  const [tasksFromStorage, setTasksFromStorage] = useState([]);

  useEffect( ()=> {
    const data = localStorage.getItem("tasks")
    
    data ? setTasksFromStorage(JSON.parse(data)) : localStorage.setItem("tasks", "")

    
  }, []) 
  
  
  const addTask = (text) => {

   

    const newTask = [...tasksFromStorage, {
      id: Math.floor( Math.random() * 10000),
      text,
      isCompleted: false,
    }];


    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(newTask))

    setTasksFromStorage(newTask);
  }

  const deleteTask = (id) => {

    const newTasks = [...tasksFromStorage]

    const filteredTasks =  newTasks.filter( (task) => task.id !== id ? task : null );

    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(filteredTasks))

    

    setTasksFromStorage(filteredTasks);

    

  }

  const updateTask = (id ) => {

    const newTasks = [...tasksFromStorage]

    newTasks.map( (task) =>  task.id === id ? task.isCompleted = !task.isCompleted : task)

    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(newTasks))

    setTasksFromStorage(newTasks);
  }

  const markAll = () => {

    const newTasks = [...tasksFromStorage];

    newTasks.map( (task) =>  task.isCompleted = true)

    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(newTasks))


    setTasksFromStorage(newTasks);

  }

  const unmarkAll = () => {

    const newTasks = [...tasksFromStorage];

    newTasks.map( (task) =>  task.isCompleted = false)

    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(newTasks))

    setTasksFromStorage(newTasks);

  }

  
  console.log(tasksFromStorage)

  return (
    <>
      <div className="container">
        <p className='pageTitle'>suas tarefas</p>
        <Menu addTask={addTask} markAll={markAll} tasks={tasksFromStorage}  unmarkAll={unmarkAll}/>
      
        {

        tasksFromStorage.length > 0 ?  (tasksFromStorage.map( (ts) => <Task  key={ts.id} task={ts} deleteTask={deleteTask} updateTask={updateTask} />)) : 
  
          (<p className='noTasksText'>  Ainda não há tarefas</p>)
   }
       
      
        

      </div>
    </>
  )
}

export default App
