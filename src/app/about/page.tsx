export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                About Task Manager
            </h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Task Manager is a simple and intuitive application designed to help you
                    organize and track your tasks efficiently.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                    Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Create, edit, and delete tasks</li>
                    <li>Set priorities (Low, Medium, High)</li>
                    <li>Track task status (Todo, In Progress, Done)</li>
                    <li>Filter tasks by status and priority</li>
                    <li>Set due dates for tasks</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                    Technology Stack
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This application is built using modern web technologies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Next.js - Full-stack React framework</li>
                    <li>React - UI library for building user interfaces</li>
                    <li>TypeScript - Typed JavaScript for better code quality</li>
                    <li>Tailwind CSS - Utility-first CSS framework</li>
                </ul>
            </div>
        </div>
    );
}

