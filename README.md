# 🚀 Portfólio Profissional | Michael Oliveira

Bem-vindo ao repositório do meu Portfólio Profissional! Este projeto foi desenvolvido para demonstrar minhas habilidades, projetos e experiência como desenvolvedor, combinando um design moderno com alta performance e interatividade.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Funcionalidades

*   **⚡ Design Moderno & Responsivo**: Interface limpa e adaptável a qualquer dispositivo (Mobile, Tablet e Desktop), construída com **Tailwind CSS**.
*   **🎨 Animações Fluidas**: Experiência de usuário enriquecida com animações de entrada e interação utilizando **Framer Motion**.
    *   Barras de progresso de habilidades animadas.
    *   Entrada em cascata (staggered) de elementos.
    *   Scroll suave entre seções.
*   **📧 Formulário de Contato Funcional**: Integração completa com **EmailJS** para envio de mensagens diretamente pelo site, com validação e feedback visual (loading/sucesso/erro).
*   **🛠️ Componentização Sólida**: Arquitetura baseada em componentes React reutilizáveis e organizados.
*   **🌙 Dark Mode Friendly**: Estrutura de cores preparada para temas (usando variáveis CSS e classes utilitárias).

## 🛠️ Tecnologias Utilizadas

*   **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e consistente.
*   **[Vite](https://vitejs.dev/)**: Build tool de próxima geração, garantindo um desenvolvimento extremamente rápido.
*   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações complexas e gestos em React.
*   **[EmailJS](https://www.emailjs.com/)**: Serviço para envio de emails diretamente do client-side.
*   **[Lucide React](https://lucide.dev/)**: Coleção de ícones leves e consistentes.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

O projeto utiliza o **EmailJS** para o formulário de contato. Você precisará criar um arquivo `.env` na raiz do projeto com as suas credenciais:

1.  Crie um arquivo chamado `.env`.
2.  Adicione as seguintes linhas (substitua pelos seus dados do EmailJS):

```properties
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_active_key_aqui
```

> **Nota**: O arquivo `.env` já está no `.gitignore` para segurança. Não suba suas chaves reais para o GitHub.

### 4. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## 📂 Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis (Hero, Skills, Contact, etc.)
├── hooks/           # Custom Hooks (ex: use-toast)
├── lib/             # Utilitários (ex: cn para merge de classes)
├── App.jsx          # Componente principal
└── main.jsx         # Ponto de entrada
```

## 🤝 Contato

Estou sempre aberto a novas oportunidades e colaborações!

*   **Email**: micholiveira.md@gmail.com
*   **LinkedIn**: [Michael Oliveira](https://www.linkedin.com/in/michael-oliveira-a3826114b/)
*   **Twitter/X**: [@micholiveira_md](https://x.com/micholiveira_md)
*   **Instagram**: [@michdouglas_](https://www.instagram.com/michdouglas_/)

---

Desenvolvido com 💜 por [Michael Oliveira]
