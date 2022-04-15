import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { edit } from "./../Redux/actions";

function Edit({ id }) {
    const taskRef = useRef();
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(edit({ task: taskRef.current.value, id }));
        taskRef.current.value = "";
    };
    return (
        <div>
            <input type="text" name="" id="" ref={taskRef} />
            
            <button onClick={() => handleEdit(id)}>edit</button>
        </div>
    );
}

export default Edit;
