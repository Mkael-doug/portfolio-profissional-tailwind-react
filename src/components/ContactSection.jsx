import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    toast({
                        title: "Mensagem Enviada!",
                        description: "Obrigado por entrar em contato. Responderei em breve.",
                    });
                    e.target.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    toast({
                        variant: "destructive",
                        title: "Erro ao enviar",
                        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
                    });
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Entre Em <span className="text-primary">Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
                    vontade para me enviar uma mensagem!
                </p>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Informações de Contato
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        href="mailto:micholiveira.md@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                                    >
                                        micholiveira.md@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Celular</h4>
                                    <a
                                        href="tel:+5521966102281"
                                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                                    >
                                        +55 (21) 96610-2281
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Endereço</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors text-left">
                                        Av. Nilo Peçanha, 22A - SJM, RJ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className=" font-semibold mb-4">Minhas Redes Sociais</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/michael-oliveira-a3826114b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="text-foreground hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://x.com/micholiveira_md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className="text-foreground hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://www.instagram.com/michdouglas_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="text-foreground hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://www.facebook.com/maiconoliveira.md/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook className="text-foreground hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-xl font-semibold mb-6">Fale Comigo</h3>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-medium text-sm mb-2">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    placeholder="Seu nome..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-medium text-sm m-2">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    placeholder="usuario@dominio.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-medium text-sm m-2">Sua Mensagem</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="3"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                                    placeholder="Olá, eu gostaria de falar sobre..."
                                />
                            </div>

                            <button type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
