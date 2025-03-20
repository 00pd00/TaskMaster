import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../redux/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.list);

  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [taskCategory, setTaskCategory] = useState("General");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        status: taskStatus,
        priority: taskPriority,
        category: taskCategory
      };
      dispatch(addTask(newTask));
      setTaskName("");
      setTaskStatus("Pending");
      setTaskPriority("Low");
      setTaskCategory("General");
      setIsModalOpen(false);
    }
  };

  const handleRemove = id => {
    dispatch(removeTask(id));
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 w-full">
        Task List
      </h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-3/4 md:w-1/3 lg:w-1/3 bg-gray-200 text-black p-3 rounded-md mb-6 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        Add New Task
      </button>

      {isModalOpen &&
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-medium mb-4 text-gray-700">
              Add New Task
            </h3>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                value={taskStatus}
                onChange={e => setTaskStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <select
                value={taskPriority}
                onChange={e => setTaskPriority(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <select
              value={taskCategory}
              onChange={e => setTaskCategory(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={handleAdd}
                className="w-full bg-gray-200 text-white p-3 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Add Task
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {taskList.length > 0
          ? taskList.map(task =>
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {task.name}
                </h4>
                <p className="text-gray-600">
                  <strong>Status: </strong>
                  <span
                    className={
                      task.status === "Completed"
                        ? "text-green-500"
                        : task.status === "In Progress"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }
                  >
                    {task.status}
                  </span>
                </p>
                <p className="text-gray-600">
                  <strong>Priority: </strong>
                  <span
                    className={
                      task.priority === "High"
                        ? "text-red-600"
                        : task.priority === "Medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                    }
                  >
                    {task.priority}
                  </span>
                </p>
                <p className="text-gray-600">
                  <strong>Category: </strong>
                  {task.category}
                </p>
                <button
                  onClick={() => handleRemove(task.id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            )
          : <p className="text-gray-500 text-center">No tasks yet.</p>}
      </div>
    </div>
  );
};

export default TaskList;
