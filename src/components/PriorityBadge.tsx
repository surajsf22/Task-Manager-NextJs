import { Priority } from "@/types";

interface PriorityBadgeProps {
    priority: Priority;
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
    const getPriorityStyles = (priority: Priority) => {
        switch (priority) {
            case Priority.HIGH:
                return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
            case Priority.MEDIUM:
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
            case Priority.LOW:
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getPriorityLabel = (priority: Priority) => {
        return priority.charAt(0).toUpperCase() + priority.slice(1);
    };

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityStyles(priority)}`}
        >
            {getPriorityLabel(priority)}
        </span>
    );
}

