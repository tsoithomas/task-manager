import { useState } from "react";
import logo from "../assets/react.svg"
import categories from "../categories";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const TaskForm = () => {
    const [menu, setMenu] = useState("h-[22rem]");
    function toggleMenu(): void {
        setMenu(menu == "h-[22rem]" ? "h-0 pt-0" : "h-[22rem]");
    }

    const formSchema = z
        .object({
            title: z.string().min(1, "Title is required").max(100),
            duedate: z.string().refine((arg) =>
                    arg.match(
                    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/
                )),
            category: z.string().min(1, "Category is required")
            });
    type FormSchemaType = z.infer<typeof formSchema>;
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> =  (data) => {
        console.log(data);
    };

    return (
        <div className="drop-shadow">
            <header className="w-full flex flex-row bg-gray-800 px-5 py-4 text-gray-300 place-items-center">
                <img src={logo} className="h-12" />
                <h1 className="overflow-hidden transition-all whitespace-nowrap text-2xl sm:text-3xl font-bold ms-4 grow">Task Management</h1>
                <div className="">
                <div className="space-y-2 hover:bg-gray-700 p-2 rounded cursor-pointer group" onClick={toggleMenu}>
                    <span className="block w-8 h-1 bg-gray-600 group-hover:bg-gray-400 rounded"></span>
                    <span className="block w-8 h-1 bg-gray-600 group-hover:bg-gray-400 rounded"></span>
                    <span className="block w-8 h-1 bg-gray-600 group-hover:bg-gray-400 rounded"></span>
                </div>
                </div>
            </header>

            <div className={"overflow-y-hidden bg-gray-800 px-10 pt-5 text-gray-300 transition-all duration-250 " + menu}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                <label className="flex flex-row place-content-between text-sm font-bold mb-2 space" htmlFor="title">
                    <div>Title</div>
                    {errors.title && (
                    <span className="text-red-400 block">
                        {errors.title?.message}
                    </span>
                    )}
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="title" 
                    type="text" 
                    placeholder="Enter a title"
                    {...register("title")}
                    />
                </div>

                <div className="mb-6">
                <label className="flex flex-row place-content-between text-sm font-bold mb-2" htmlFor="duedate">
                    <div>Due Date</div>
                    {errors.duedate && (
                        <span className="text-red-400 block">
                            {errors.duedate?.message}
                        </span>
                        )}
                </label>
                <input 
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="duedate" 
                    type="date"
                    {...register("duedate")}
                    />
                </div>

                <div className="mb-6">
                <label className="flex flex-row place-content-between text-sm font-bold mb-2" htmlFor="category">
                    <div>Category</div>
                    {errors.category && (
                        <span className="text-red-400 block mt-2">
                            {errors.category?.message}
                        </span>
                        )}
                </label>
                <select 
                    className="block appearance-none text-black w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    {...register("category")}
                    >
                    {categories.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                </div>

                <div className="flex items-center justify-between">
                <button 
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    disabled={isSubmitting}
                    >
                    Submit
                </button>

                </div>
            </form>
            </div>
        </div>
    )


};


export default TaskForm;