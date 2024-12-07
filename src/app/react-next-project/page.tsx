'use client';

import React, { useState, useEffect } from 'react';
import TaskItem from './_components/TaskItem';
import { Task } from './_types/task';
import {
  getLocalStorageTasks,
  saveLocalStorageTasks,
} from './_utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';
import Link from 'next/link';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
  });

  // Filter and Sort Functionality
  const [filter, setFilter] = useState<{
    status?: Task['status'];
    priority?: Task['priority'];
  }>({});

  useEffect(() => {
    setTasks(getLocalStorageTasks());
  }, []);

  const addTask = () => {
    if (!newTask.title) return;

    const taskToAdd: Task = {
      ...(newTask as Task),
      id: uuidv4(),
      createdAt: new Date(),
    };

    const updatedTasks = [...tasks, taskToAdd];
    setTasks(updatedTasks);
    saveLocalStorageTasks(updatedTasks);

    // Reset form
    setNewTask({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
    });
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveLocalStorageTasks(updatedTasks);
  };

  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveLocalStorageTasks(updatedTasks);
  };

  // Filtered tasks based on status and priority
  const filteredTasks = tasks.filter(
    (task) =>
      (!filter.status || task.status === filter.status) &&
      (!filter.priority || task.priority === filter.priority)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center">
        Task Management App
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title || ''}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full px-3 py-2 border text-gray-600 text-md rounded-md mb-2"
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description || ''}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full px-3 py-2 border text-md text-gray-600 rounded-md mb-2"
        />
        <div className="flex space-x-2 mb-4">
          <select
            value={newTask.priority || 'medium'}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                priority: e.target.value as Task['priority'],
              })
            }
            className="w-full px-3 text-md text-gray-600 py-2 border rounded-md"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <select
            value={newTask.status || 'todo'}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                status: e.target.value as Task['status'],
              })
            }
            className="w-full text-md text-gray-600 px-3 py-2 border rounded-md"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          onClick={addTask}
          className="w-full bg-blue-500 text-md text-white py-2 mb-9 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
        <div className="w-full bg-white text-md text-gray-600 py-2 rounded-md text-center">
          Filter Tasks by Categories
        </div>
        {/* Filtering Section */}
        <div className="mt-4 flex space-x-2">
          <select
            value={filter.status || ''}
            onChange={(e) =>
              setFilter({
                ...filter,
                status: (e.target.value as Task['status']) || undefined,
              })
            }
            className="w-full px-3 text-gray-600 text-md py-2 border rounded-md"
          >
            <option value="">All Statuses</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            value={filter.priority || ''}
            onChange={(e) =>
              setFilter({
                ...filter,
                priority: (e.target.value as Task['priority']) || undefined,
              })
            }
            className="w-full px-3 py-2 text-md text-gray-600 border rounded-md"
          >
            <option value="">All Priorities</option>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
      </div>

      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
      <section className="mt-8">
        <Link
          href="/"
          className="bg-blue-500 text-white text-md px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}
