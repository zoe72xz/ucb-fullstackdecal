import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const TaskForm = () => {
  // State for managing input field content
  const [task, setTask] = useState('');
  
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Dispatch addTask action with the task text
      dispatch(addTask(task));
      // Clear the input field after submission
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm; 