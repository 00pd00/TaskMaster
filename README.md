# **TaskMaster - Task Management Application**

**TaskMaster** is a simple and efficient task management application that allows users to:

- ✅ Add tasks  
- ❌ Remove tasks  
- 📌 Categorize tasks  

It also supports **filtering tasks** based on categories.

---

### 🛠️ Built With:

- ⚛️ **React**  
- 🔧 **Redux**  
- 🎨 **Tailwind CSS**

# TaskMaster - Task Management Application

TaskMaster is a simple and efficient task management application that allows users to add, remove, and categorize tasks. It also supports filtering tasks based on categories. This app was built using React, Redux, and Tailwind CSS.

## Features

- Add new tasks with details like name, status, priority, and category.  
- Task categorization and display.  
- Ability to filter tasks based on category.  
- Persistent state using Redux-Persist.  
- Fully responsive design optimized for mobile view.  

## Tech Stack

- Frontend: React.js  
- State Management: Redux (with Redux Toolkit)  
- Styling: Tailwind CSS  
- Persistence: Redux-Persist  

## Getting Started

To get a local     of the project up and running, follow these simple steps.

## Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (v14.x or higher)  
- **npm** (v6.x or higher)  


## Installation

Clone the repository:

git clone https://github.com/yourusername/taskmaster.git

Navigate into the project directory:

cd taskmaster

Install dependencies:

npm install

Start the development server:

npm run dev

Your app should now be running at http://localhost:3000.

## Folder Structure

taskmaster/  
│  
├── public/  
│   └── index.html            # Main HTML file  
├── src/  
│   ├── components/           # React components  
│   │   ├── Header.js         # App header component  
│   │   ├── TaskList.js       # Component to add tasks  
│   │   ├── GroupedTaskList.js # Component to show tasks grouped by category  
│   │   └── TaskItem.js       # Component for individual task  
│   ├── redux/                # Redux store and slices  
│   │   ├── store.js          # Redux store configuration  
│   │   └── taskSlice.js      # Redux slice for tasks  
│   ├── App.js                # Main app component  
│   └── index.js              # Entry point of the app  
├── tailwind.config.js        # Tailwind CSS configuration  
├── package.json              # Project dependencies and scripts  
└── README.md                 # Project information  

## How It Works

Header: Displays the app title TaskMaster with a tagline.  
Task List: Allows users to add tasks with details like name, status, priority, and category.  
Grouped Tasks: Tasks are grouped by category, allowing users to view them based on their type (Work, Personal, General).  
Persistence: Task data is persisted using Redux-Persist, so tasks will remain even after the app is refreshed or restarted.  

## Redux State Management

The app uses Redux Toolkit for state management. The state is persisted with Redux-Persist, which ensures that the tasks remain in the store even after page reloads. Here's how the store is configured:  

Task Slice: Contains actions to add and remove tasks from the state.  
Store: Configures the Redux store with the task slice and integrates Redux-Persist.  

## Tailwind CSS

We use Tailwind CSS for styling, making the app responsive and mobile-friendly. The app looks great on all screen sizes and provides a clean, modern design.  

## Mobile Optimization

The layout is responsive, ensuring that it looks good on all devices. The Task List and Task Add form are optimized for mobile view and are displayed side-by-side on larger screens.  

## Running the App

Once you've followed the installation steps, simply run the app using:  

npm run dev  

Your app will be available at [http://localhost:3000](http://localhost:3000).  

## Deployment

The app has been deployed using **Firebase Hosting** for fast and reliable performance. Firebase provides a secure and scalable way to serve web apps, ensuring quick load times and global availability. 

You can access the live version of the app here:  
[https://taskmaster-7d072.web.app/](https://taskmaster-7d072.web.app/)

