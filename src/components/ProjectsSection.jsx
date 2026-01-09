import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "iPhone 17 Landing Page",
        description: "Uma landing page (Não oficial) do iPhone 17, construída com React e Tailwind CSS.",
        image: "/projects/Projeto1.jpeg",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://tailwind-react-landigpage-i-phone-1.vercel.app/",
        githubUrl: "https://github.com/Mkael-doug/tailwind-react-landigpage-iPhone-17.git",
    },
    {
        id: 2,
        title: "SaaS Landing Page",
        description: "Uma landing page moderna e construída com Typescript, React e Tailwind CSS.",
        image: "/projects/Projeto2.jpeg",
        tags: ["Typescript", "React", "Tailwind CSS"],
        demoUrl: "https://landing-page-tailwind-react-planilh.vercel.app/",
        githubUrl: "https://github.com/Mkael-doug/LandingPage-Tailwind-React-PlanilhaSuprema.git",
    },
    {
        id: 3,
        title: "Food Delivery Website",
        description: "Um site de entrega de comida com interface amigável e design atraente.",
        image: "/projects/Projeto3.jpeg",
        tags: ["JavaScript", "HTML/CSS", "Moderno"],
        demoUrl: "https://mkael-doug.github.io/Delivery-Food/",
        githubUrl: "https://github.com/Mkael-doug/Delivery-Food.git",
    },
]


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Projetos em <span className="text-primary">Destaque</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades em desenvolvimento web e design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full
                                        bg-primary/15 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}

                                </div>


                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-xs mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 mx-auto items-center">
                                        <a href={project.demoUrl}
                                            target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl}
                                            target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Mkael-doug" target="_blank">
                        Veja Meu Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};