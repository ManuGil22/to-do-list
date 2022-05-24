import React from 'react';
import '../stylesheets/Task.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Tarea({ id, taskText, completed, deleteTask, completeTask }) {
    return (
        <div className={ completed ? 'task completed' : 'task'}>
            <div className='task-name' onClick={() => completeTask(id)}>
                {taskText}
            </div>
            <div className='icons-container' onClick={() => deleteTask(id)}>
                <RiDeleteBin6Line className='task-icon' />
            </div>
        </div>
    )
};

export default Tarea;