import { ChangeEvent } from "react";
import categories from "../categories";

interface TaskFilterProps {
    onSelectCateogry: (e: ChangeEvent<HTMLSelectElement>) => void,
}

const TaskFilter = (props: TaskFilterProps) => {
    return (
        <form className="w-full">

            <div className="mb-6 flex flex-row items-center">
            <label className="text-sm font-bold me-2" htmlFor="category">
                <div>Filter:</div>
            </label>
            <select 
                className="block appearance-none text-black w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline hover:border-x-8 hover:border-sky-300 transition-all"
                id="category"
                defaultValue=""
                onChange={props.onSelectCateogry}
                >
                <option value="" >All categories</option>
                {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            </div>
        </form>
    )
};


export default TaskFilter;