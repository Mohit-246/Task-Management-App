export  function createTask(taskData) {
    //Validate task data
    if (!taskData.title || !taskData.description || typeof taskData.title !== 'string' || typeof taskData.description !== 'string') {
        throw new Error('Invalid task data');
    }
    // Check for excessively long title or description
    if (taskData.title.length > 100 || taskData.description.length > 500) {
        throw new Error('Title or description is too long');
    }
    // Simulate task creation
    if (!['low', 'medium', 'high'].includes(taskData.priority)) {
        throw new Error('Invalid priority level');
    }

    return {
        id: crypto.randomUUID(),
        task: taskData.title,
        description: taskData.description || undefined,
        dueDate: task.dueDate || undefined,
        completed: Boolean(taskData.completed),
        priority: taskData.priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}

export function createTaskFilter(status = 'all', priority = undefined) {
    if (!['all', 'active', 'completed'].includes(status)) {
        throw new error('Status must be all, active, or completed');
    }

    return {
        status,
        priority,
    }
}

export  function validateTasks(task) {
    const error = [];

    if (!task.id || typeof task.id !== 'string') {
        error.push('Task id shoud be String Only')
    }
    if (!task.title || typeof task.title !== 'string') {
        error.push('Task title should be string')
    }
    if (typeof task.completed !== 'boolean') {
        error.push('Task Should either be completed or not')
    }
    if (!['low', 'medium', 'high'].includes(task.priority)) {
        error.push('Task should only be Low, Medium, or High.')
    }

    return error;
}