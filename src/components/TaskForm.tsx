

const TaskForm = () => {

    return (
        <div className="bg-gray-800 p-10 text-gray-300">
        <form className="w-full">
            <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
                Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter a title"/>
            </div>

            <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
                Due Date
            </label>
            <input className="shadow appearance-none border-2 border-red-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="duedate" type="date"/>
            <p className="text-red-400 text-xs italic">Please choose a date.</p>
            </div>

            <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
                Category
            </label>
            <select className="block appearance-none text-black w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Really long option that will likely overlap the chevron</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            </div>

            <div className="flex items-center justify-between">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
            </button>

            </div>
        </form>
        </div>

    )


};


export default TaskForm;