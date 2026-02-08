# 💻 Portfólio Pessoal — Ewerton Hecsley

Este é o meu portfólio pessoal desenvolvido com **Next.js 16**, **TypeScript** e **Tailwind CSS**, com foco em performance, responsividade e boas práticas modernas de desenvolvimento **Front‑end e Full Stack**.

O projeto foi criado para apresentar meus trabalhos, habilidades técnicas e experiência profissional de forma clara, moderna e alinhada ao mercado.

---

## 🚀 Tecnologias Utilizadas

### Front-end
- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)

### Boas práticas e arquitetura
- Componentização e reutilização de UI
- Organização escalável de pastas
- Responsividade Mobile First
- Foco em performance e experiência do usuário

### DevOps / Infra
- **Docker** 🐳 (containerização da aplicação)
- **Docker Compose** (orquestração do ambiente)
- Pronto para deploy em ambientes cloud como **Railway**, **Render** e **VPS**

---

## 🎯 Principais Funcionalidades

- Header responsivo com:
  - Menu desktop
  - Menu mobile animado (hambúrguer)
  - Logo adaptável para telas pequenas  
- Navegação por âncoras (`#hero`, `#about`, `#projects`, etc.)
- Animações suaves com **Framer Motion**
- Layout moderno com efeitos visuais e foco em legibilidade
- Seção “Sobre mim” com destaque para stack Full Stack
- Totalmente responsivo (mobile first)

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo o conceito **Mobile First**, garantindo boa experiência em diferentes tamanhos de tela.

### Ajustes aplicados:
- Logo completa exibida a partir de **360px**
- Logo reduzida em telas menores
- Menu desktop exibido apenas em telas maiores
- Menu mobile animado para dispositivos menores

---

## 🧠 Organização do Projeto

```bash
src/
├── app/
│   ├── components/
│   ├── globals.css
│   └── page.tsx
├── public/
├── Dockerfile
├── docker-compose.yml
└── tailwind.config.js
```

**components/** → Componentes reutilizáveis  
**app/** → Estrutura principal do Next.js (App Router)  
**Dockerfile** → Configuração da imagem Docker  
**docker-compose.yml** → Orquestração do container  
**globals.css** → Estilos globais  
**tailwind.config.js** → Configuração do Tailwind CSS  

---

## 🐳 Rodando com Docker (modo produção)

Este projeto está preparado para rodar em qualquer máquina com Docker instalado.

### 🔹 Build da imagem

```bash
docker compose build
```

### 🔹 Subir o container

```bash
docker compose up
```

A aplicação ficará disponível em:

👉 http://localhost:3000

---

## 💻 Rodando localmente (modo desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/EwertonHecsley/next-portfolio-2.0.git

# Acesse a pasta
cd next-portfolio-2.0

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse:  
👉 http://localhost:3000

---

## ☁️ Deploy

O projeto é compatível com:

- **Railway** (deploy via Docker)
- **Render**
- **VPS com Docker**
- **Vercel** (sem usar Docker)

---

## 📌 Status do Projeto

✅ Estrutura profissional  
✅ Containerizado com Docker  
🚀 Em constante evolução e melhorias  
📚 Projeto focado em prática real de desenvolvimento moderno  

---

## 👨‍💻 Autor

**Ewerton Hecsley**  
Graduando em Engenharia de Software  
Desenvolvedor Full Stack em formação

🔗 GitHub: https://github.com/EwertonHecsley  
🔗 LinkedIn: https://www.linkedin.com/in/ewerton-hecsley-8a613992/

---

⭐ Se este projeto te ajudou ou te inspirou, considere deixar uma estrela no repositório!
