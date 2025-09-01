import { Calendar, CheckCircle2, Edit3Icon, Flag, Trash2 } from 'lucide-react';
import React, { useState } from 'react'

export default function TaskItems({ onToggle, onUpdate, onDelete, task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);

    const handleEdit = () => {
        if (editTitle.trim()) {
            try {
                onUpdate(task.id, {
                    title: editTitle.trim(),
                    description: editDescription.trim(),
                });
                setIsEditing(false);
            }
            catch (error) {
                alert("Failed to update task. Please try again." + error.message);
            }
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditTitle(task.title);
        setEditDescription(task.description);
    }
    const priorityColors = {
        low: 'bg-green-400  text-green-800 border-green-600',
        medium: 'bg-yellow-400 text-yellow-800 border-yellow-600',
        high: 'bg-red-400 text-red-800 border-red-600',
    }

    const now = new Date();
    const dueDate = task.dueDate ? new Date(task.dueDate) : null;

    const isOverdue = dueDate && dueDate < now && !task.completed;
    const isDueSoon = dueDate && !task.completed &&
        dueDate.getTime() - now.getTime() <= 24 * 60 * 60 * 1000 &&
        dueDate > now;


    return (
        <>
            <div className={`border rounded-lg p-4 m-4 shadow-sm hover:shadow-md transition-shadow duration-300
        ${task.completed ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'}
        ${isOverdue ? 'border-red-500 bg-red-100' : ''}
        ${isDueSoon ? 'border-yellow-500 bg-yellow-100' : ''}
        `}>
                <div className="flex items-start gap-4">
                    <button
                        onClick={() => onToggle(task.id)}
                        className={`mt-1 p-2 rounded-full border 
                ${task.completed ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400 hover:bg-gray-100'}
                hover:border-green-600 hover:text-green-500 transition-colors duration-300`}
                    >
                        <CheckCircle2 size={20} />
                    </button>

                    <div>
                        {isediting ? (
                            <div className='space-y-4'>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className='border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 text-lg font-bold w-full'
                                    autoFocus
                                />
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    className='border-b-2 focus:ring-sky-400 focus:ring-2 focus:border-transparent w-full resize-none'
                                    rows={2}
                                />
                                <div className='flex gap-4'>
                                    <button
                                        onClick={handleEdit}
                                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300'
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-2'>
                                <h3 className={`text-xl font-bold transition duration-200 ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>{task.title}</h3>
                                {task.description && <p className={`text-gray-700 transition duration-200 ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.description}</p>}

                                <div className='flex items-center gap-4 flex-wrap'>
                                    <span className={`border text-sm px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
                                        <Flag size={16} />
                                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                                    </span>

                                    {task.dueDate && (
                                        <span className={`text-sm px-2 py-1 rounded-full border
                                        ${isOverdue ? 'bg-red-200 text-red-800 border-red-400' : ''}
                                        ${isDueSoon ? 'bg-yellow-200 text-yellow-800 border-yellow-400' : ''}
                                        ${!isOverdue && !isDueSoon ? 'bg-blue-200 text-blue-800 border-blue-400' : ''}
                                        `}>
                                            <Calendar size={16} />
                                            Due: {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex items-center gap-3'>
                        {!isEditing && (
                            <div>
                            <button 
                            onClick={setIsEditing(true)}
                            className='p-4 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-full transition-colors duration-300'>
                                <Edit3Icon size={16} />
                            </button>
                            
                            <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to delete this task?')) {
                                    onDelete(task.id);
                                }}}>
                                <Trash2 size={16} />
                            </button>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </>
    )
}
