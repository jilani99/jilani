import React from "react";
import { useDispatch } from "react-redux";
import { deletee, done } from "../Redux/actions";
import Edit from "./Edit";

function TaskItems({ tasks }) {
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{tasks.task}</h1>

            <Edit id={tasks.id} />
            <button onClick={() => dispatch(deletee(tasks.id))}>delete</button>
            <button onClick={() => dispatch(done(tasks.id))}>
                {tasks.Done ? "undone" : "done"}
            </button>
        </div>
    );
}

export default TaskItems;
