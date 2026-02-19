export enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
}

export enum Status {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done",
}

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export type TaskFilter = "all" | "todo" | "in_progress" | "done";

export type PriorityFilter = "all" | Priority;

