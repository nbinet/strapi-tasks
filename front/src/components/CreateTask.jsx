import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tasksAPI from "../services/tasksAPI";

export default function Task() {
    const [task, setTask] = useState({});
    const [steps, setSteps] = useState({});
    const [tags, setTags] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSteps();
    }, []);

    const getSteps = async () => {
        const data = await tasksAPI.getSteps();
        setSteps(data.data);
        getTags();
    };

    const getTags = async () => {
        const data = await tasksAPI.getTags();
        setTags(data.data);
        setIsLoading(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newTask = tasksAPI.createOne(task);
            console.log(newTask);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setTask({
            ...task,
            [name]: value,
        });
    };

    return (
        <div className="h-screen mx-4 py-4 flex flex-col items-start gap-4">
            <Link to="/">
                <div className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer font-bold">← Back</div>
            </Link>
            <div className="flex flex-col items-start bg-orange-200 px-4 py-2 rounded-lg gap-4">
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <label className="flex flex-col">
                        Name of the task :
                        <input id="name" name="name" type="text" onChange={handleChange} />
                    </label>
                    <label className="flex flex-col">
                        description of the task :
                        <textarea id="description" name="description" type="text" onChange={handleChange} />
                    </label>
                    {isLoading ? (
                        "Loading..."
                    ) : (
                        <select onChange={handleChange} id="step" name="step">
                            {steps.map((step) => (
                                <option key={step.id} value={step.id}>
                                    {step.attributes.name}
                                </option>
                            ))}
                        </select>
                    )}
                    {isLoading ? (
                        "Loading..."
                    ) : (
                        <select onChange={handleChange} id="tags" name="tags">
                            {tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>
                                    {tag.attributes.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <button type="submit" className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer font-bold">
                        Create this task
                    </button>
                </form>
            </div>
        </div>
    );
}
