import { CircleCheck, Key } from 'lucide-react'
import React from 'react'
import TaskItems from './TaskItems'

export default function TaskList({tasks, onToggle, onUpdate, onDelete}) {
  if(tasks.length === 0){
    return (
      <>
      <div className='p-8  border border-dashed border-gray-300 rounded-lg m-4'>
        <CircleCheck size={75} className='text-gray-300 mx-auto mt-20' />
        <p className='text-center text-2xl font-bold text-gray-400 mt-4'>No Tasks Found</p>
      </div>
      </>
    )}


    return(
      <>
      <div>
        {tasks.map((task)=>(
          <div
          key={task.id}
          className='animate-in slidein-from-bottom duration-300'
          style={{animationDelay: `${task.id * 50}ms`}}
          >
            <TaskItems 
            onToggle={onToggle} 
            onUpdate={onUpdate} 
            onDelete={onDelete} 
            task={task} 
            />
          </div>
          ))}
      </div>
      </>
    )
}