"use client";

import { Task, TaskFilter, PriorityFilter, Status, Priority } from "@/types";
import TaskCard from "./TaskCard";
import FilterBar from "./FilterBar";
import { useState } from "react";

interface TaskListProps {
    tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
    const [statusFilter, setStatusFilter] = useState<TaskFilter>("all");
    const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all");

    const filteredTasks = tasks.filter((task) => {
        const matchesStatus =
            statusFilter === "all" || task.status === statusFilter;
        const matchesPriority =
            priorityFilter === "all" || task.priority === priorityFilter;
        return matchesStatus && matchesPriority;
    });

    return (
        <div>
            <FilterBar
                statusFilter={statusFilter}
                priorityFilter={priorityFilter}
                onStatusFilterChange={setStatusFilter}
                onPriorityFilterChange={setPriorityFilter}
            />
            {filteredTasks.length === 0 ? (
                <div className="text-center py-12 px-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 transition-opacity">
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-1">
                        No tasks match your filters
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        Try changing status or priority above.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

