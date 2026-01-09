import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";



const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },

]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300", isScrolled ? "py-1 bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent"
            )}>
            <div className="container flex h-16 items-center justify-between">

                <a className="text-md md:text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">&lt;/Michael&gt;</span> Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex items-center gap-10">

                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="
                                relative text-sm font-medium text-foreground/80
                                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                                after:bg-primary after:transition-all after:duration-300
                                hover:text-primary hover:after:w-full
                                "
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Theme toggle */}
                    <ThemeToggle />


                </div>

                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden pb-2 text-foreground/80 z-60" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        {/* Theme toggle */}
                        <div className="flex justify-center">
                            <ThemeToggle />
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};