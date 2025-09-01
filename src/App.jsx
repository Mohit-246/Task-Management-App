import React from 'react'
import './App.css'
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import useTask from './hooks/useTask'
import Taskstats from './components/Taskstats'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'

function App() {
  const {
    tasks,
    filter,
    stats,
    setFilter,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    clearCompletedTask,
  } = useTask();

  return (
    <>
      <div className='min-w-screen bg-white text-gray-900'>
        <Header />
        <main>
          <Taskstats stats={stats} />
          <AddTaskForm onAddTask={addTask} />
          <TaskFilter filter={filter} onFilterchange={setFilter} stats ={stats} completedtask={clearCompletedTask} />
          <TaskList 
            tasks={tasks}
            onToggle={toggleTask}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
      <div className='text-xs text-center p-4 text-gray-500'>
        &copy; 2024 Task Management App. All rights reserved.
      </div>
    </>
  )
}

export default App;