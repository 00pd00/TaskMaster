import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import TaskList from "./Components/TaskList";
import GroupedTaskList from "./Components/GroupedTaskList";
import Header from "./Components/Header";
import TaskFilter from "./Components/TaskFilter";
import SearchBar from "./Components/SearchTask";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Header />
        <Outlet />
      </PersistGate>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TaskList />,
        errorElement: <ErrorPage />
      },
      {
        path: "/category",
        element: <GroupedTaskList />,
        errorElement: <ErrorPage />
      },
      {
        path: "/filter",
        element: <TaskFilter />,
        errorElement: <ErrorPage />
      },
      {
        path: "/search",
        element: <SearchBar />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
