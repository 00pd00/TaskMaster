import React from "react";
import { useSelector } from "react-redux";

const GroupedTaskList = () => {
  const taskList = useSelector(state => state.list);

  const groupedTasks = taskList.reduce((groups, task) => {
    const { category } = task;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(task);
    return groups;
  }, {});

  return (
    <div className="flex flex-col py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
        Task List Grouped by Category
      </h2>

      {Object.keys(groupedTasks).length > 0
        ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.keys(groupedTasks).map(category =>
              <div key={category} className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category}
                </h3>
                <div className="space-y-4">
                  {groupedTasks[category].map(task =>
                    <div
                      key={task.id}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                    >
                      <h4 className="text-xl font-semibold text-gray-800">
                        {task.name}
                      </h4>
                      <p className="text-gray-600">
                        <strong>Status:</strong> {task.status}
                      </p>
                      <p className="text-gray-600">
                        <strong>Priority:</strong> {task.priority}
                      </p>
                      <p className="text-gray-600">
                        <strong>Category:</strong> {task.category}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        : <p className="text-gray-500 text-center">No tasks available.</p>}
    </div>
  );
};

export default GroupedTaskList;
