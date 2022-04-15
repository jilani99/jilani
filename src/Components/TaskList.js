import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItems from "./TaskItems";

function TaskList() {
    const list = useSelector((state) => state.reducerTodo.tasks);
    const [status, setStatus] = useState("all");
    console.log(list);
    return (
        <div>
            <h1>taskList</h1>
            <button onClick={() => setStatus("all")}>All</button>
            <button onClick={() => setStatus("done")}>done</button>
            <button onClick={() => setStatus("undone")}>undone</button>

            {status === "all"
                ? list.map((el) => <TaskItems tasks={el} key={el.id} />)
                : status == "done"
                ? list.filter((el) => el.Done).map((el) => <TaskItems tasks={el} key={el.id} />)
                : list.filter((el) => !el.Done).map((el) => <TaskItems tasks={el} key={el.id} />)}
        </div>
    );
}

export default TaskList;
