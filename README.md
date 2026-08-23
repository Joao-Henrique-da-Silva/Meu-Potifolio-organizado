# 🚀 React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## 🚀 React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Meu-Potifolio-organizado


---

```markdown
# 🚀 Portfólio – João Henrique da Silva

![Status do Deploy](https://img.shields.io/github/deployments/Joao-Henrique-da-Silva/Meu-Potifolio-organizado/github-pages?label=deploy&logo=github&style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?logo=react&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&style=flat-square)

> Portfólio pessoal desenvolvido com React, Vite e Tailwind CSS, apresentando minhas habilidades, experiências e projetos em um design moderno com tema claro/escuro.

🔗 **Acesse o site:** [joao-henrique-da-silva.github.io/Meu-Potifolio-organizado](https://joao-henrique-da-silva.github.io/Meu-Potifolio-organizado/)

---

## ✨ Funcionalidades

- 🌗 **Tema claro/escuro** com persistência no `localStorage`
- 🎨 **Cores quentes (modo claro)** e **roxo/preto (modo escuro)**
- ✨ **Animações de entrada** (fade-in com delays em cascata)
- 🧑‍💻 **Busca automática de repositórios** via API do GitHub
- 🔍 **Filtro por linguagem** e busca por nome nos projetos
- 📬 **Formulário de contato** com validação usando **Zod** + `react-hook-form`
- 🖼️ **Glassmorphism** e gradientes modernos
- 📱 **Design responsivo** (mobile-first)
- ⚡ **Alta performance** com Vite

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React 18** | Biblioteca para construção da UI |
| **Vite** | Build tool rápida e moderna |
| **Tailwind CSS v4** | Framework de estilização utility-first |
| **React Hook Form** | Gerenciamento de formulários |
| **Zod** | Validação de schemas |
| **React Icons** | Ícones vetoriais |
| **GitHub API** | Busca de repositórios públicos |

---

## 📁 Estrutura de pastas

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Courses.jsx
│   ├── DarkModeToggle.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── data/
│   ├── coursesData.js
│   ├── educationData.js
│   └── experienceData.js
├── hooks/
│   └── useGitHubRepos.js
├── styles/
│   ├── animations.css
│   └── index.css
├── App.jsx
└── main.jsx
```

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/Joao-Henrique-da-Silva/Meu-Potifolio-organizado.git

# 2. Entre na pasta
cd Meu-Potifolio-organizado

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173/Meu-Potifolio-organizado/
```

### 🚀 Comandos úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Visualiza a build localmente |
| `npm run lint` | Executa o Oxlint para análise de código |

---

## 🌐 Deploy

O projeto é automaticamente publicado no **GitHub Pages** via **GitHub Actions** sempre que há um push na branch `main`.

**Workflow:** `.github/workflows/deploy.yml`

---

## 🎨 Personalização

### Cores do tema

As cores são definidas em `src/styles/index.css` usando variáveis CSS:

```css
@theme {
  --color-primary: #8B0000;        /* Modo claro */
  --color-dark-primary: #A78BFA;   /* Modo escuro */
  /* ... outras cores */
}
```

### 🚀 Animações

As animações estão em `src/styles/animations.css` e podem ser estendidas facilmente.

---

## 📸 Capturas de tela

| Modo Claro | Modo Escuro |
|------------|-------------|
| ![Claro](https://via.placeholder.com/400x300/FFF8F5/8B0000?text=Modo+Claro) | ![Escuro](https://via.placeholder.com/400x300/0F0A1A/A78BFA?text=Modo+Escuro) |

*(Substitua pelos prints reais do seu site)*

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**João Henrique da Silva**

- GitHub: [@Joao-Henrique-da-Silva](https://github.com/Joao-Henrique-da-Silva)
- E-mail: joaohs22@gmail.com
- LinkedIn: [em breve]

---

## 🙏 Agradecimentos

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zod](https://zod.dev/)

---

⭐ Se você gostou deste projeto, deixe uma estrela no repositório!
```

---

## 📌 Instruções para usar

1. Crie um arquivo `README.md` na raiz do seu projeto.
2. Cole todo o conteúdo acima.
3. **Substitua os placeholders das imagens** pelos prints reais do seu site (se quiser).
4. Adicione seu LinkedIn quando estiver pronto.
5. Faça commit e push:

```bash  🚀
git add README.md
git commit -m "Adicionando README.md completo"
git push origin main  
```

---

 
