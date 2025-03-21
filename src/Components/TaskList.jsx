import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  removeTask,
  editTask,
  markAsCompleted
} from "../redux/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.list);

  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [taskCategory, setTaskCategory] = useState("General");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleSave = () => {
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        status: taskStatus,
        priority: taskPriority,
        category: taskCategory
      };

      if (editingTask) {
        dispatch(editTask({ id: editingTask.id, updatedTask: newTask }));
      } else {
        dispatch(addTask(newTask));
      }

      resetForm();
    }
  };

  const handleEdit = task => {
    setEditingTask(task);
    setTaskName(task.name);
    setTaskStatus(task.status);
    setTaskPriority(task.priority);
    setTaskCategory(task.category);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setTaskName("");
    setTaskStatus("Pending");
    setTaskPriority("Low");
    setTaskCategory("General");
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleComplete = id => {
    dispatch(markAsCompleted(id));
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Task List</h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md mb-4"
      >
        Add New Task
      </button>

      {isModalOpen &&
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium mb-4">
              {editingTask ? "Edit Task" : "Add Task"}
            </h3>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            />
            <select
              value={taskStatus}
              onChange={e => setTaskStatus(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              value={taskPriority}
              onChange={e => setTaskPriority(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select
              value={taskCategory}
              onChange={e => setTaskCategory(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                {editingTask ? "Save Changes" : "Add Task"}
              </button>
              <button
                onClick={resetForm}
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {taskList.length > 0
          ? taskList.map(task =>
              <div key={task.id} className="bg-white p-4 rounded-lg shadow-md">
                <h4
                  className={`text-lg font-semibold ${task.status ===
                  "Completed"
                    ? "line-through text-gray-500"
                    : ""}`}
                >
                  {task.name}
                </h4>
                <p>
                  <strong>Status:</strong> {task.status}
                </p>
                <p>
                  <strong>Priority:</strong> {task.priority}
                </p>
                <p>
                  <strong>Category:</strong> {task.category}
                </p>
                <div className="flex gap-2 mt-2">
                  {task.status !== "Completed" &&
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md"
                    >
                      Mark as Completed
                    </button>}
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTask(task.id))}
                    className="bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          : <p className="text-gray-500">No tasks yet.</p>}
      </div>
    </div>
  );
};

export default TaskList;
