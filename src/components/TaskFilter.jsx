import React from 'react'

export default function TaskFilter( { filter, onFilterchange, stats, completedtask} ) {

  const filterOptions = [
    {key:'all' ,lable: 'All', count: stats.total},
    {key:'active' ,lable: 'Active', count: stats.active},
    {key:'highpriority' ,lable: 'High Priority', count: stats.highpriority},
  ]
  
  return (
    <>
      <div className='flex flex-wrap gap-3 p-4'>
        {filterOptions.map(({key, lable, count})=>(
          <button
          key={key}
          onClick={()=>onFilterchange({status: key})}
          className={ `px-4 py-2 rounded-lg  border ${filter.status === key ? 'bg-blue-500 text-white' : ' text-gray-700 border-gray-400'} hover:scale-110 transition-transform duration-300`}>
<span className='font-semibold mr-2' >{lable}</span>
<span className={`px-2 py-1 font-medium  rounded-full text-xs ${filter.status === key? 'bg-blue-200 text-white': 'bg-gray-200 text-gray-600'}` }>{count}</span>
        </button>
        ))}

        {stats.completed > 0 && (
          <button
          onClick={completedtask}
          className='px-4 py-2 rounded-full border bg-red-500 text-white hover:bg-red-400 transition-colors duration-300'
          >
            Clear Completed
          </button>
        )}
        
      </div>
    </>
  )
}
