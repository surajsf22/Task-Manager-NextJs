"use client";

import Link from "next/link";
import TaskList from "@/components/TaskList";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
    const { tasks } = useTasks();

    const hasNoTasks = tasks.length === 0;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    My Tasks
                </h1>
                <Link
                    href="/tasks/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors w-fit active:scale-[0.98]"
                >
                    Create Task
                </Link>
            </div>

            {hasNoTasks ? (
                <div className="text-center py-16 px-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                        No tasks yet
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                        Create your first task to get started.
                    </p>
                    <Link
                        href="/tasks/new"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                        Create your first task
                    </Link>
                </div>
            ) : (
                <TaskList tasks={tasks} />
            )}
        </div>
    );
}
