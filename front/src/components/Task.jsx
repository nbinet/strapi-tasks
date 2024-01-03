import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tasksAPI from "../services/tasksAPI";

export default function Task() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        const data = await tasksAPI.findOne(id);
        setTask(data.data.attributes);
        setIsLoading(false);
    };

    return (
        <div className="h-screen mx-4 py-4 flex flex-col items-start gap-4">
            <Link to="/">
                <div className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer font-bold">← Back</div>
            </Link>
            {isLoading ? (
                "Loading..."
            ) : (
                <div className="flex flex-col bg-orange-200 px-4 py-2 rounded-lg gap-4">
                    <h1>{task.name}</h1>
                    <p>{task.step}</p>
                    <div className="flex flex-row gap-2">
                        {task.tags.data.map((tag) => (
                            <div key={tag.id} className="bg-white px-2 rounded">
                                {tag.attributes.name}
                            </div>
                        ))}
                    </div>
                    <p>{task.description}</p>
                </div>
            )}
        </div>
    );
}
