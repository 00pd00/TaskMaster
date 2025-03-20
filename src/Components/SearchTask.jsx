import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SearchTask = () => {
  const tasks = useSelector(state => state.list); // Using filtered tasks from Redux
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleSearchChange = e => {
    const query = e.target.value;
    setSearchTerm(query); // Update search term
  };

  const filterTasks = () => {
    const filterone = tasks.filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filterone);
    setFilteredTasks(filterone);
  };

  return (
    <div>
      <div className="flex justify-between w-full p-4 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6 mx-auto space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a task..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          disabled={searchTerm.length === 0}
          onClick={filterTasks}
          className={`w-auto py-3 px-6 mt-4 sm:mt-0 rounded-md focus:outline-none ${searchTerm.length ===
          0
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800"}`}
        >
          Submit
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
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
              </div>
            )
          : <p className="text-gray-500 absolute w-full text-center">
              No tasks yet.
            </p>}
      </div>
    </div>
  );
};

export default SearchTask;
