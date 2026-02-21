"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Task, Priority, Status } from "@/types";
import { useTasks } from "@/context/TaskContext";
import { useToast } from "@/context/ToastContext";

interface TaskFormProps {
    taskId?: string;
}

export default function TaskForm({ taskId }: TaskFormProps) {
    const router = useRouter();
    const { tasks, addTask, updateTask } = useTasks();
    const { showToast } = useToast();
    const isEditMode = !!taskId;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: Priority.MEDIUM,
        status: Status.TODO,
        dueDate: "",
    });

    useEffect(() => {
        if (isEditMode && taskId) {
            const task = tasks.find((t) => t.id === taskId);
            if (task) {
                setFormData({
                    title: task.title,
                    description: task.description,
                    priority: task.priority,
                    status: task.status,
                    dueDate: task.dueDate
                        ? new Date(task.dueDate).toISOString().split("T")[0]
                        : "",
                });
            }
        }
    }, [isEditMode, taskId, tasks]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const taskData = {
            title: formData.title,
            description: formData.description,
            priority: formData.priority as Priority,
            status: formData.status as Status,
            dueDate: formData.dueDate ? new Date(formData.dueDate) : null,
        };

        if (isEditMode && taskId) {
            updateTask(taskId, taskData);
            showToast("Task updated");
        } else {
            addTask(taskData);
            showToast("Task created");
        }

        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {isEditMode ? "Edit Task" : "Create New Task"}
                </h2>

                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter task title"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter task description"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="priority"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Priority
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={Priority.LOW}>Low</option>
                                <option value={Priority.MEDIUM}>Medium</option>
                                <option value={Priority.HIGH}>High</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={Status.TODO}>Todo</option>
                                <option value={Status.IN_PROGRESS}>
                                    In Progress
                                </option>
                                <option value={Status.DONE}>Done</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="dueDate"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors active:scale-[0.98]"
                    >
                        {isEditMode ? "Update Task" : "Create Task"}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push("/")}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium py-2 px-4 rounded-md transition-colors active:scale-[0.98]"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}

