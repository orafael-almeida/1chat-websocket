<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://github.com/orafael-almeida/1chat-websocket/blob/main/readme_img.png?raw=true" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next;js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js" />
  </div>
<br/><br/></br>
 
  <h1 align="center">1Chat - Messenger</h1>

   <div align="center">
    Sistema de web chat baseado em Websockets
    </div>
</div>

## 📋 <a name="table">Sumary</a>

1. 🚀 [Introdução](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 💻 [Como Usar](#quick-start)

## <a name="introduction">🤖 Introdução</a>

1Chat é um sistema de chat em tempo real baseado em Websockets, projetado para oferecer comunicação instantânea e eficiente. Com uma interface moderna e responsiva, a plataforma permite a troca de mensagens de forma rápida e segura, garantindo uma experiência fluida para os usuários.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Express.js
- Socket.io
- HTML / CSS
- React.js
- Next.js
- Tailwind CSS

## <a name="features">🔋 Recursos</a>

- **Mensagens em Tempo Real**: Comunicação instantânea entre usuários utilizando Websockets para troca de mensagens sem atrasos.

- **Indicação de Usuários Online**: Visualização em tempo real do status online dos participantes, promovendo interatividade.

- **Conexão de Múltiplos Usuários**: Permite que diversos usuários se conectem simultaneamente a uma mesma sala de chat, facilitando a comunicação em grupo e promovendo colaboração em tempo real.

## <a name="quick-start">🤸 Como usar</a>

Para iniciar o projeto, siga os seguintes passos em seu dispositivo:

**00 - Pré-requisitos**

Para usar este projeto você deve ter instalado previamente os seguintes pacotes:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager ou similar)
  <br/><br/>

**01 - Clonar o Repositório**

```bash
git clone https://github.com/orafael-almeida/1chat-websocket
```

**02 - Instalação de Dependências**

Instalar ou atualizar as dependências nas pastas CLIENT e SERVER:

```bash
cd client
npm install
```

```bash
cd server
npm install
```

Verifique as portas nas variáveis de ambiente:

Padrão usado:

CLIENT: PORT=3000
SERVER: PORT=4000

**03 - Rodar o Projeto**

Rodar as aplicações em CLIENT e SERVER:

```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no seu navegador.
