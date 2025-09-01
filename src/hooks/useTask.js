import { useState } from "react"
import { createTask , validateTasks } from '../types'


export default function useTask() {
    const [tasks, setTasks] =useState([]);
    const [filter, setFilter] = useState({status: 'all'})

    const addTask =(taskData)=>{
        try{
            const newTask = createTask(taskData);
            setTasks(prev => [newTask,...prev])
        }
        catch(error){
            console.error('The Task Cannot be created:',error)
            throw error;
        }
    }

    const updateTask = (id, updates)=>{
        if(!id|| typeof id !=='string'){
            throw new  Error('Task id must be String')
        }

        setTasks(prev=>
            prev.map(task=>{
                if(task.id===id){
                    const updatedTask = {
                        ...task,
                        ...updates,
                        updatedAt : new Date().toISOString(),
                    };
                    const error = validateTasks(updatedTask);
                        if(error.length >0 ){
                            console.error('Invalid Task',error);
                            return task;
                        }
                    return updatedTask;
                }
                return task;
            })
        );
    }

    const deleteTask=(id)=>{
        if(!id|| typeof id !=='string'){
            throw new Error('Task Id Should be A String')
        }
        setTasks(prev => prev.filter(task => task.id !==id));
    };

    const toggleTask=(id)=>{
        const task = tasks.find(t=> t.id ===id);
        if(task){
            updateTask(id,{completed:!task.completed})
        }
    }

    const clearCompletedTask=()=>{
        setTasks(prev => prev.filter(task =>!task.completed));
    };


    const filteredTask =tasks.filter(task=>{
        if(filter.status ==='active') return !task.completed;
        if(filter.status ==='completed') return task.completed;
        if(filter.priority) return task.priority ===filter.priority;
        return true;    
    })
    const stats ={
        total: tasks.length,
        completed: tasks.filter(t=>t.completed).length,
        active: tasks.filter(t=>!t.completed).length,
        highpriority: tasks.filter(t=>t.priority ==='high'&&!t.completed).length,
    }
    return {
        tasks: filteredTask,
        filter,
        stats,
        setFilter,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        clearCompletedTask,
    };
  }
