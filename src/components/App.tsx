
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { Task } from "../Task"
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // getting stored value
    return JSON.parse(localStorage.getItem("tasks") as string) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = (task: TaskFormData) => {
    let newTask = {...task, id: Date.now()};

    setTasks((curTasks) => {return [...curTasks, newTask];});
  };


  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
