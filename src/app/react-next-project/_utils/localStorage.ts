import { Task } from '../_types/task';
export const getLocalStorageTasks = (): Task[] => {
  if (typeof window !== 'undefined') {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};
export const saveLocalStorageTasks = (tasks: Task[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
