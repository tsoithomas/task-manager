import { ChangeEvent, useState } from "react";
import { Task } from "../Task";
import TaskFilter from "./TaskFilter";

interface TaskListProp {
    onDeleteTask: (id: number) => void,
    tasks: Array<Task>
}


const TaskList = (props: TaskListProp) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectCateogry = (e: ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        setSelectedCategory(category);
    };
    

    function categoryFilter(value: Task): value is Task {
        return selectedCategory == "" || selectedCategory == value.category;
    }

    return (
        <div className="bg-gray-300 grow p-5 ">
            <TaskFilter onSelectCateogry={handleSelectCateogry} />

            {
                props.tasks.length > 0 
                ? (
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Title</th>
                                    <th scope="col" className="px-6 py-3">Due Date</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.tasks.filter(categoryFilter).map((item) => {return (
                                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.title}</th>
                                            <td className="px-6 py-3">{item.duedate.toString()}</td>
                                            <td className="px-6 py-3">{item.category}</td>
                                            <td className="px-6 py-3 text-right">
                                                <button 
                                                    className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() => {props.onDeleteTask(item.id);}}
                                                    >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )})
                                }
                            </tbody>
                        </table>
                    </div>
                )
                : "No tasks yet 😭"
            }
        </div>
    )
};


export default TaskList;