"use client";

import { useParams } from "next/navigation";
import TaskForm from "@/components/TaskForm";

export default function EditTaskPage() {
    const params = useParams();
    const taskId = params.id as string;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <TaskForm taskId={taskId} />
        </div>
    );
}

