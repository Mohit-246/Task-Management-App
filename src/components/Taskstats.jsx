import { BadgeAlert, CircleCheckBig, Target, TriangleAlert } from 'lucide-react';
import React from 'react'

export default function Taskstats({ stats }) {
  const completionpercentage = stats.totalTasks === 0 ? 0 : Math.round((stats.completedTasks / stats.totalTasks) * 100);
  return (
    <>
      <div className='grid grid-cols-2 space-x-4 p-8 gap-6 '>
        <div className='flex p-6 justify-between items-center inset-shadow-sm bg-white rounded-lg hover:shadow-md'>
          <div className='space-y-4'>
            <h2 className='text-lg text-gray-500 font-semibold '>Total Task</h2>
            <p className='text-2xl  font-bold text-blue-600'>{stats.total}</p>
          </div>
          <Target size={48} className='text-blue-500' />
      </div>
        <div className='flex p-6 justify-between items-center inset-shadow-sm bg-white rounded-lg hover:shadow-md'>
          <div className='space-y-4'>
            <h2 className='text-lg text-gray-500 font-semibold '>Completed</h2>
            <p className='text-2xl  font-bold text-green-600'>{stats.completed}</p>
          </div>
          <CircleCheckBig size={48} className='text-green-500' />
      </div>
        <div className='flex p-6 justify-between items-center inset-shadow-sm bg-white rounded-lg hover:shadow-md'>
          <div className='space-y-4'>
            <h2 className='text-lg text-gray-500 font-semibold '>Active</h2>
            <p className='text-2xl  font-bold text-amber-600'>{stats.active}</p>
          </div>
          <BadgeAlert size={48} className='text-amber-500' />
      </div>
        <div className='flex p-6 justify-between items-center inset-shadow-sm bg-white rounded-lg hover:shadow-md'>
          <div className='space-y-4'>
            <h2 className='text-lg text-gray-500 font-semibold '>High Priority</h2>
            <p className='text-2xl  font-bold text-red-600'>{stats.highpriority}</p>
          </div>
          <TriangleAlert size={48} className='text-red-500' />
      </div>
      </div>

    </>
  )
}
