"use client";

import TaskList from "@/components/TaskList";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
    const { tasks } = useTasks();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                My Tasks
            </h1>
            <TaskList tasks={tasks} />
        </div>
    );
}
