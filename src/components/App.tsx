
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

  const handleDeleteTask = (id: number) => {
    setTasks((curTasks) => {
      for (let i=0; i<curTasks.length; i++) {
        const task = curTasks[i];
        if (task.id == id) {
          curTasks.splice(i, 1);
          break;
        }
      }
      return [...curTasks];
    });
  };


  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList onDeleteTask = {handleDeleteTask} tasks={tasks}/>
    </>
  )
}

export default App
