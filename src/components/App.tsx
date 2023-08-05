
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import {Task} from "../Task"
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
