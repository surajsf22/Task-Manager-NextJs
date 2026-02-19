"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Task, Priority, Status } from "@/types";
import { loadTasks, saveTasks } from "@/lib/storage";
import { sampleTasks } from "@/data/sampleTasks";

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const storedTasks = loadTasks();

        if (storedTasks.length === 0) {
            saveTasks(sampleTasks);
            setTasks(sampleTasks);
        } else {
            setTasks(storedTasks);
        }

        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            saveTasks(tasks);
        }
    }, [tasks, isInitialized]);

    const addTask = (taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
        const newTask: Task = {
            ...taskData,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const updateTask = (id: string, updates: Partial<Task>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, ...updates, updatedAt: new Date() }
                    : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}


