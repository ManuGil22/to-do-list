import React, { useState } from 'react';
import Task from './Task';
import '../stylesheets/TaskList.css';

function TaskList({ taskList, deleteTask, completeTask }) {
    return(
        <div className='tasks-container'>
            {
                taskList.map( task => 
                    <Task 
                        key={task.id}
                        id={task.id}
                        taskText={task.text}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask} />)
            }
        </div>
    );
};

export default TaskList;