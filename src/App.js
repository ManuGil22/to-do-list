import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim();
      const newTaskList = [newTask, ...tasks];
      setTasks(newTaskList);
    }
  };

  const deleteTask = (id) => {
    const leftoverTasks = tasks.filter( task => task.id !== id);
    setTasks(leftoverTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map( task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <TaskForm onSubmit={addTask} />
        <TaskList taskList={tasks} deleteTask={deleteTask} completeTask={completeTask} />
      </div>
    </div>
  );
}

export default App;
