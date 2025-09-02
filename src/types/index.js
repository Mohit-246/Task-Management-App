export  function createTask(taskData) {
    // Validate title
  if (!taskData.title || typeof taskData.title !== 'string') {
    throw new Error('Invalid task data: Title is required and must be a string');
  }

  // Validate optional description
  if (taskData.description !== undefined && typeof taskData.description !== 'string') {
    throw new Error('Invalid task data: Description must be a string if provided');
  }
    
    // Simulate task creation
    if (!['low', 'medium', 'high'].includes(taskData.priority)) {
        throw new Error('Invalid priority level');
    }

    return {
        id: crypto.randomUUID(),
        title: taskData.title,
        description: taskData.description || undefined,
        dueDate: taskData.dueDate || undefined,
        completed: Boolean(taskData.completed),
        priority: taskData.priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
}

export function createTaskFilter(status = 'all', priority = undefined) {
    if (!['all', 'active', 'completed'].includes(status)) {
        throw new Error('Status must be all, active, or completed');
    }

    return {
        status,
        priority,
    }
}

export  function validateTasks(task) {
    const errors = [];

    if (!task.id || typeof task.id !== 'string') {
        errors.push('Task id should be String Only')
    }
    if (!task.title || typeof task.title !== 'string') {
        errors.push('Task title should be string')
    }
    if (typeof task.completed !== 'boolean') {
        errors.push('Task Should either be completed or not')
    }
    if (!['low', 'medium', 'high'].includes(task.priority)) {
        errors.push('Task should only be Low, Medium, or High.')
    }

    return errors;
}