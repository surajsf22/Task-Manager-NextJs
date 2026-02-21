import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                404
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Page or task not found.
            </p>
            <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
                Back to tasks
            </Link>
        </div>
    );
}
