import React, { useEffect, useState } from "react";
import CardTask from "./CardTask";
import { Link } from "react-router-dom";
import TasksAPI from "../services/tasksAPI";

export default function Tasks() {
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetchAllTasks();
    }, []);

    const fetchAllTasks = async () => {
        const data = await TasksAPI.findAll();
        setTasks(data.data);
        setIsLoading(false);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-between">
            <h1 className="text-3xl font-bold">My to-do list</h1>
            <div className="flex flex-col items-center gap-2 mx-2 ">
                <h1 className="text-2xl">Liste des tâches</h1>
                <div>Categories</div>
                <div className="flex flex-row gap-5">
                    {isLoading
                        ? "Loading..."
                        : tasks.map((task) => (
                              <div key={task.id}>
                                  <CardTask task={task.attributes} id={task.id} />
                              </div>
                          ))}
                </div>
            </div>
            {/* <Link to="/create">
                <div className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer font-bold">+ Add a task</div>
            </Link> */}
            <p>Made by nbinet</p>
        </div>
    );
}
