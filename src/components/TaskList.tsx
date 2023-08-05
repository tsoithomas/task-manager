import { Task } from "../Task";

interface TaskListProp {
    tasks: Array<Task>
}

const TaskFilter = (prop: TaskListProp) => {



    return (
        <div className="bg-gray-300 grow p-10 ">
            {
                prop.tasks.length > 0 
                ? "Ok"
                : "No tasks yet 😭"
            }
        </div>
    )
};


export default TaskFilter;