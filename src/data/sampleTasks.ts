import { Task, Priority, Status } from "@/types";
import { generateId } from "@/lib/id";

const now = new Date();
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date(now);
nextWeek.setDate(nextWeek.getDate() + 7);

const lastWeek = new Date(now);
lastWeek.setDate(lastWeek.getDate() - 7);

export const sampleTasks: Task[] = [
    {
        id: generateId(),
        title: "Complete Next.js tutorial",
        description: "Finish implementing all phases of the task manager tutorial to learn Next.js, React, and TypeScript.",
        priority: Priority.HIGH,
        status: Status.IN_PROGRESS,
        dueDate: nextWeek,
        createdAt: lastWeek,
        updatedAt: now,
    },
    {
        id: generateId(),
        title: "Review TypeScript documentation",
        description: "Read through TypeScript handbook to understand interfaces, enums, and type aliases better.",
        priority: Priority.MEDIUM,
        status: Status.TODO,
        dueDate: tomorrow,
        createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
    },
    {
        id: generateId(),
        title: "Set up development environment",
        description: "Install Node.js, VS Code extensions, and configure ESLint and Prettier.",
        priority: Priority.HIGH,
        status: Status.DONE,
        dueDate: lastWeek,
        createdAt: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000),
    },
    {
        id: generateId(),
        title: "Learn Tailwind CSS basics",
        description: "Understand utility-first CSS approach and responsive design with Tailwind breakpoints.",
        priority: Priority.MEDIUM,
        status: Status.TODO,
        dueDate: null,
        createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
    },
    {
        id: generateId(),
        title: "Practice React hooks",
        description: "Build small projects using useState, useEffect, and useContext to master React hooks.",
        priority: Priority.LOW,
        status: Status.TODO,
        dueDate: nextWeek,
        createdAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
    },
    {
        id: generateId(),
        title: "Deploy application to Vercel",
        description: "Push code to GitHub and deploy the Next.js application to Vercel for production.",
        priority: Priority.MEDIUM,
        status: Status.IN_PROGRESS,
        dueDate: tomorrow,
        createdAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
    },
];

