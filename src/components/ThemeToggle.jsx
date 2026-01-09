import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = isDark ? "light" : "dark";

        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", nextTheme);
        setIsDark(!isDark);
    };

    return (
        <>
            {/* DESKTOP (ícone normal) */}
            <button
                onClick={toggleTheme}
                className={cn(
                    "hidden md:flex p-2 rounded-full transition-colors duration-300"
                )}
            >
                {isDark ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>

            {/* MOBILE (switch) */}
            <button
                onClick={toggleTheme}
                className={cn(
                    "md:hidden relative w-14 h-8 rounded-full transition-colors duration-300",
                    isDark ? "bg-zinc-800" : "bg-zinc-300"
                )}
                aria-label="Toggle theme"
            >
                <span
                    className={cn(
                        "absolute top-1 left-1 h-6 w-6 rounded-full bg-white flex items-center justify-center",
                        "transition-transform duration-300 ease-in-out",
                        isDark ? "translate-x-6" : "translate-x-0"
                    )}
                >
                    {isDark ? (
                        <Moon size={14} className="text-zinc-800" />
                    ) : (
                        <Sun size={14} className="text-yellow-500" />
                    )}
                </span>

            </button>
        </>
    );

};
