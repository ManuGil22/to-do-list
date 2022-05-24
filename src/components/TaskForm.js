import React, { useState } from 'react'
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 }  from 'uuid'

function TaskForm ( props ) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        props.onSubmit(newTask);
        setInput('');
    };

    return(
        <form className='task-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Add a task'
                value={input} 
                className='task-input'
                onChange={handleChange} />
            <button type='submit' className='task-btn'>Add new task</button>
        </form>
    )
};

export default TaskForm;