"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import { useToast } from "@/context/ToastContext";
import PriorityBadge from "@/components/PriorityBadge";

export default function TaskDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { tasks, deleteTask } = useTasks();
    const { showToast } = useToast();
    const [isDeleting, setIsDeleting] = useState(false);
    const taskId = params.id as string;
    const task = tasks.find((t) => t.id === taskId);

    if (!task && !isDeleting) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                    Task not found.
                </p>
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                    Back to tasks
                </Link>
            </div>
        );
    }

    if (!task) {
        return null;
    }

    const formatDate = (date: Date | null) => {
        if (!date) return "No due date";
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const getStatusLabel = (status: string) => {
        return status
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this task?")) {
            setIsDeleting(true);
            deleteTask(task.id);
            showToast("Task deleted");
            router.push("/");
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {task.title}
                        </h1>
                        <PriorityBadge priority={task.priority} />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {getStatusLabel(task.status)}
                    </span>
                </div>

                {task.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-wrap">
                        {task.description}
                    </p>
                )}

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Due: {formatDate(task.dueDate)}
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href={`/tasks/${task.id}/edit`}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors active:scale-[0.98]"
                    >
                        Edit Task
                    </Link>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors active:scale-[0.98]"
                    >
                        Delete Task
                    </button>
                    <Link
                        href="/"
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium py-2 px-4 rounded-md transition-colors active:scale-[0.98]"
                    >
                        Back to list
                    </Link>
                </div>
            </div>
        </div>
    );
}
