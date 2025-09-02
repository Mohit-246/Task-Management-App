import { Calendar, Medal, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function AddTaskForm({ onAddTask }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('medium')


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    else {
      try {
        onAddTask({
          title: title.trim(),
          description: description.trim() || undefined,
          dueDate: dueDate || undefined,
          priority,
          completed: false,
        });
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('medium');
        setIsExpanded(false);
      }
      catch (error) {
        console.error('Error adding task:', error.message);
        alert('There was an error adding the task. Please try again.');
      }
    }
  }

  const priorityColor = {
    low: 'text-green-500',
    medium: 'text-yellow-500',
    high: 'text-red-500'
  }

  return (
    <>
      <div className='bg-white shadow-lg rounded m-8  overflow-hidden'>
        <form onSubmit={handleSubmit} className='p-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-sky-100 p-2 rounded-lg'>
              <Plus className=' text-lg text-blue-500 font-black' />
            </div>
            <input
              type="text"
              placeholder='Add The Task'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className='flex-1 text-2xl rounded-2xl p-4 border-none outline-none overflow-hidden bg-transparent font-bold ' />
          </div>
          {isExpanded && (
            <div className='space-y-4 mt-4'>
              <textarea
                placeholder='Description'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className='bg-gray-300 text-lg font-semibold w-full outline-none rounded-2xl p-4 focus:ring-2 focus:ring-gray-300 focus:bg-transparent transition-all duration-200 ease-in-out'
              />
              <div className='flex justify-between '>
                <div className='flex flex-wrap gap-4'>  
                <div className='flex items-center gap-2'>
                  <Medal className='inline mr-2 text-gray-500' />
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className={`font-medium text-gray-400 rounded-lg p-2 border border-gray-300 outline-none ${priorityColor[priority.toLowerCase()]}`}
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar className='inline mr-2 text-gray-500' />
                  <input type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className='font-medium text-gray-400 rounded-lg p-2 border border-gray-300 outline-none'
                    />
                    </div>
                </div>
                <div className='flex items-center gap-4 '>
                  <button className='bg-white text-blue-500 font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out mr-4'
                    type='button'
                    onClick={() => {
                      setTitle('');
                      setDescription('');
                      setDueDate('');
                      setPriority('medium');
                      setIsExpanded(false);
                    }}                    
                  >
                    Cancel
                  </button>
                  <button 
                    type='submit'
                    disabled={title.trim()===''}                
                    className='bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-blue-500 transition-colors duration-300 ease-in-out mr-4 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  )
}
