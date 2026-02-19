import { Task } from "@/types";

const STORAGE_KEY = "tasks";

export const loadTasks = (): Task[] => {
    if (typeof window === "undefined") {
        return [];
    }

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return [];
        }

        const tasks = JSON.parse(stored);
        return tasks.map((task: any) => ({
            ...task,
            dueDate: task.dueDate ? new Date(task.dueDate) : null,
            createdAt: new Date(task.createdAt),
            updatedAt: new Date(task.updatedAt),
        }));
    } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
        return [];
    }
};

export const saveTasks = (tasks: Task[]): void => {
    if (typeof window === "undefined") {
        return;
    }

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
};


