import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
    // Frontend Skills
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend Skills
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "PostgreSQL", level: 60, category: "backend" },
    { name: "RESTful APIs", level: 80, category: "backend" },

    // Tools & Platforms
    { name: "Docker", level: 60, category: "ferramentas" },
    { name: "Git/GitHub", level: 85, category: "ferramentas" },
    { name: "Figma", level: 75, category: "ferramentas" },
    { name: "VS Code", level: 80, category: "ferramentas" },

];

const categories = ["todas", "frontend", "backend", "ferramentas"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("todas");

    const filteredSkills = skills.filter((skill) => activeCategory === "todas" || skill.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                        Minhas <span className="text-primary">Habilidades</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                                    activeCategory === category ? "bg-primary text-primary-foreground scale-105" : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                                )}>
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory} // Reset animation when category changes
                >
                    {filteredSkills.map((skill, key) => (
                        <motion.div
                            key={`${skill.name}-${key}`} // Unique key for animation
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                            variants={itemVariants}
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-primary h-2 rounded-full origin-left"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}