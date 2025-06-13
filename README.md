![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-skyblue?logo=tailwindcss)
![Build Status](https://github.com/andreywilmsen/Portfolio-Andrey-Wilmsen/actions/workflows/ci.yml/badge.svg)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/license-MIT-green)

# Portfólio | Andrey Wilmsen

Este é o repositório do meu portfólio profissional como desenvolvedor, onde apresento meus projetos, stack de tecnologias, experiências e formas de contato. O site foi construído com Next.Js. Com foco em performance, responsividade e organização do código.

**Acesse o portfólio online:** [portfolioandreywilmsen.vercel.app](https://portfolioandreywilmsen.vercel.app/)

## Funcionalidades
 
- Seção de introdução com nome, título e área de atuação (Hero)  
- Sobre mim com descrição pessoal e objetivos profissionais  
- Listagem de projetos com tecnologias e links externos  
- Seção de contato com canais diretos (e-mail, LinkedIn, GitHub, WhatsApp etc.)  
- Totalmente responsivo, adaptado para dispositivos móveis  
- Design limpo, moderno e com identidade visual consistente  
- Estrutura escalável e modular com componentes reutilizáveis  
- Animações suaves ao rolar a página com AOS e Framer Motion 

## Tecnologias Utilizadas

- **Next.js** — framework React completo utilizado para roteamento, SSR e App Router  
- **React 19** — biblioteca para construção da interface do usuário  
- **TypeScript 5** — tipagem estática para maior segurança e produtividade  
- **Tailwind CSS 4** — framework de utilitários CSS para estilização moderna  
- **AOS (Animate On Scroll)** — biblioteca leve para animações ao rolar a página  
- **Vercel** — plataforma de deploy com integração nativa para projetos Next.js  

### Ferramentas de Desenvolvimento

- **ESLint (next lint)** — análise de código para garantir qualidade e consistência  
- **PostCSS** — usado junto ao Tailwind para processar CSS de forma eficiente  
- **@types** — tipagens para bibliotecas JavaScript utilizadas no projeto (Node, React, etc)  

## Estrutura de Pastas

Abaixo está um resumo da estrutura de diretórios do projeto, com foco nas responsabilidades de cada parte da aplicação.

src/
└── app/
├── admin/                    # (Em desenvolvimento) Painel administrativo para gerenciar conteúdo
├── components/               # Componentes reutilizáveis divididos por seção
│   ├── About/                # Seção "Sobre mim"
│   ├── Contact/              # Seção de contato
│   ├── Footer/               # Rodapé do site
│   ├── Header/               # Cabeçalho e menu de navegação
│   ├── Hero/                 # Seção inicial com título e animações
│   ├── Projects/             # Listagem de projetos e tecnologias usadas
│   ├── AnchorButton.tsx      # Botão de link estilizado
│   ├── AOSInitializer.tsx    # Inicializador do AOS (animações ao rolar)
│   ├── Button.tsx            # Componente de botão reutilizável
│   ├── Hamburguer.tsx        # Ícone do menu mobile
│   ├── Logo.tsx              # Componente da logo
│   └── PageBody.tsx          # Wrapper para layout das páginas
├── favicon.ico               # Ícone do site (favicon)
├── globals.css               # Estilos globais da aplicação
├── layout.tsx                # Layout principal da aplicação (Next.js App Router)
├── not-found.tsx             # Página de erro 404 personalizada
├── page.tsx                  # Página inicial (landing page)
└── types.ts                  # Tipagens globais utilizadas no app

Essa estrutura segue boas práticas de organização em projetos React com Next.js (App Router), permitindo separação clara entre componentes reutilizáveis, configuração global, páginas e funcionalidades futuras (como o painel admin).

## Como rodar localmente

1. Clone este repositório:

git clone https://github.com/andreywilmsen/Portfolio-Andrey-Wilmsen.git

2. Instale as dependências:

npm install

3. Inicie o servidor de desenvolvimento:

npm run dev

Acesse `http://localhost:3000` no navegador.

## Deploy

O projeto está hospedado gratuitamente na **Vercel**, com CI/CD automático a partir dos commits no GitHub.

## TODOs / Melhorias Futuras

- Adição de modo escuro  
- Área de blog ou artigos técnicos  
- Painel administrativo para gerenciar conteúdos do portfólio  
- Edição dinâmica da seção "Sobre"  
- Seção de "Últimas atualizações"  
- Sistema de blog integrado ao painel administrativo  

## Contato

Se quiser conversar ou tiver dúvidas:

* [LinkedIn](https://www.linkedin.com/in/andrey-wilmsen-de-paula-2b1354345/)
* [Email](mailto:andreywilmsendepaula@gmail.com)

Feito por **Andrey Wilmsen**