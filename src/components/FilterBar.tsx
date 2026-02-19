"use client";

import { TaskFilter, PriorityFilter, Priority } from "@/types";

interface FilterBarProps {
    statusFilter: TaskFilter;
    priorityFilter: PriorityFilter;
    onStatusFilterChange: (filter: TaskFilter) => void;
    onPriorityFilterChange: (filter: PriorityFilter) => void;
}

export default function FilterBar({
    statusFilter,
    priorityFilter,
    onStatusFilterChange,
    onPriorityFilterChange,
}: FilterBarProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Filter by Status
                    </label>
                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            onStatusFilterChange(e.target.value as TaskFilter)
                        }
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Statuses</option>
                        <option value="todo">Todo</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Filter by Priority
                    </label>
                    <select
                        value={priorityFilter}
                        onChange={(e) =>
                            onPriorityFilterChange(e.target.value as PriorityFilter)
                        }
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Priorities</option>
                        <option value={Priority.LOW}>Low</option>
                        <option value={Priority.MEDIUM}>Medium</option>
                        <option value={Priority.HIGH}>High</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

