"use client";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from "react";

type ToastMessage = string;

interface ToastContextType {
    showToast: (message: ToastMessage) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const TOAST_DURATION_MS = 3000;

export function ToastProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<ToastMessage | null>(null);

    const showToast = useCallback((msg: ToastMessage) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), TOAST_DURATION_MS);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {message !== null && (
                <div
                    role="status"
                    aria-live="polite"
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                    {message}
                </div>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
