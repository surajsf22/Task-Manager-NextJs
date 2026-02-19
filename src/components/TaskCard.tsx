import Link from "next/link";
import { Task } from "@/types";
import PriorityBadge from "./PriorityBadge";

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    const formatDate = (date: Date | null) => {
        if (!date) return "No due date";
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "done":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            case "in_progress":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
            case "todo":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getStatusLabel = (status: string) => {
        return status
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <Link href={`/tasks/${task.id}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                        {task.title}
                    </h3>
                    <PriorityBadge priority={task.priority} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {task.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                    <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                    >
                        {getStatusLabel(task.status)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                        {formatDate(task.dueDate)}
                    </span>
                </div>
            </div>
        </Link>
    );
}

