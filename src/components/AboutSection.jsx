import { Coffee, Code, User } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Sobre <span className="text-primary">Mim</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Desenvolvedor Web & Criador de Tecnologia Apaixonado
                        </h3>
                        <p className="text-muted-foreground">
                            Com mais de 3 anos de experiência em desenvolvimento web, eu me especializo na criação de aplicações web responsivas, acessíveis e de alto desempenho usando tecnologias modernas.
                        </p>
                        <p className="text-muted-foreground">
                            Minha paixão por tecnologia vai além do código; eu adoro explorar novas ferramentas, estou sempre aprendendo e evoluindo como desenvolvedor.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Entre Em Contato</a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary transition-colors duration-300 hover:bg-primary/20">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>
                                        Desenvolvimento Web
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Criando sites responsivos e aplicativos web com tecnologias modernas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary' />

                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>
                                        UI/UX Design
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Projetando interfaces intuitivas e experiências de usuário envolventes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Coffee className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>
                                        Programador Back-end
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Construindo APIs robustas e gerenciando bancos de dados eficientes.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}