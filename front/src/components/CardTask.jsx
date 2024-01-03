import { Link } from "react-router-dom";

export default function CardTask(props) {
    return (
        <div className="flex flex-col items-start gap-2 bg-orange-200 p-2 rounded-md w-xs max-h-60 overflow-auto">
            <div className="text-xl">{props.task.name}</div>
            <div className="flex flex-row gap-2">
                {props.task.tags.data.map((tag) => (
                    <div key={tag.id} className="bg-white px-2 rounded">
                        {tag.attributes.name}
                    </div>
                ))}
            </div>
            <Link to={`/task/${props.id}`}>
                <div className="text-blue-500 cursor-pointer hover:bg-slate-300 px-2 rounded">View more...</div>
            </Link>
        </div>
    );
}
