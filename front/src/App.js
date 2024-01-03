import Task from "./components/Task";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Tasks />} />
                <Route path="/task/:id" element={<Task />} />
                <Route path="/create" element={<CreateTask />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
