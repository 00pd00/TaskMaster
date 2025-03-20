import React, { useState } from "react";
import { useSelector } from "react-redux";

const TaskFilter = () => {
  const taskList = useSelector(state => state.list);

  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleStatusChange = event => {
    setSelectedStatus(event.target.value);
  };

  const filteredTasks =
    selectedStatus === "All"
      ? taskList
      : taskList.filter(task => task.status === selectedStatus);

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gray-50 rounded-lg shadow-md w-full">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 w-full">
        Filter Tasks by Status
      </h2>

      <select
        value={selectedStatus}
        onChange={handleStatusChange}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredTasks.length > 0
          ? filteredTasks.map(task =>
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
                  {task.priority}
                </p>
                <p className="text-gray-600">
                  <strong>Category: </strong>
                  {task.category}
                </p>
              </div>
            )
          : <p className="text-gray-500 text-center">No tasks to display.</p>}
      </div>
    </div>
  );
};

export default TaskFilter;
