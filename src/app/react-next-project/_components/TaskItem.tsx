import React, { useState } from 'react';
import { Task } from '../_types/task';
import {
  TrashIcon,
  Pencil2Icon,
  CheckIcon,
  Cross1Icon,
} from '@radix-ui/react-icons';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>(task);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="space-y-2">
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            className="w-full text-gray-600 text-md px-2 py-1 border rounded"
            placeholder="Task Title"
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            className="w-full text-gray-600 text-md px-2 py-1 border rounded"
            placeholder="Task Description"
          />
          <div className="flex space-x-2">
            <select
              value={editedTask.priority}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  priority: e.target.value as Task['priority'],
                })
              }
              className="w-full text-gray-600 text-md px-2 py-1 border rounded"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <select
              value={editedTask.status}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  status: e.target.value as Task['status'],
                })
              }
              className="w-full text-gray-600 text-md px-2 py-1 border rounded"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white text-md px-3 py-1 rounded flex items-center"
            >
              <CheckIcon className="mr-1 text-sm" /> Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-3 text-md py-1 rounded flex items-center"
            >
              <Cross1Icon className="mr-1 text-sm" /> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl text-gray-800 font-semibold">{task.title}</h3>
        <p className="text-gray-600 text-md">{task.description}</p>
        <div className="flex space-x-2 mt-2">
          <span
            className={`px-2 py-1 rounded text-sm ${getPriorityColor(
              task.priority
            )}`}
          >
            Priority: {task.priority.toUpperCase()}
          </span>
          <span
            className={`px-2 py-1 rounded text-sm ${
              task.status === 'todo'
                ? 'bg-gray-100 text-gray-800'
                : task.status === 'in-progress'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            Status: {task.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Pencil2Icon />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
