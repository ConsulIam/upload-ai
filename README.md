<h2 align="center"> 
	Upload AI
</h2>
<p align="center">🧠 Transforming your videos into words</p>


---



<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-execute">How execute</a> • 
 <a href="#technologies">Technologies</a> •  
 <a href="#author">Author</a> • 
 <a href="#license">License</a>
</p>

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portuguese</a> •
 <a href="./README-es.md">🇨🇴 Spanish </a> •
 <a href="./README.md">🇺🇸 English</a>
</p>

---


## About

Generate creative titles, summaries and quizzes for your videos. Free yourself from transcribing the content of your recordings, we do it for you in an agile, coherent and practical way.



## :movie_camera: Demo

https://github.com/ConsulIam/upload-ai/assets/25617605/6665959b-90f1-497e-8aed-fc0fcf58dcb4



## :white_check_mark: Status: Finished & receiving updates



## :rocket: Features

- [x] Transcript videos in mp4 format (using AI Whisper from OpenAI)
- [x] Image video preview
- [x] Transcription process indicator
- [x] Add keywords to strengthen the transcription of the videos
- [x] Use pre-configured prompts
- [x] Adjust the temperature you want to use with the prompts
- [x] Adjust the content of pre-configured prompts before using them
- [x] Monitor the generation of titles, summaries and quizzes in real time
- [ ] Possibility of choosing the natural language model to use (coming soon)



## :computer: How Execute

### Clone Time Capsule repository

```bash
$ git clone https://github.com/ConsulIam/upload-ai.git
```

### Install server dependencies

```bash
$ cd upload-ai/api
$ npm install
```

### Create database

```bash
$ cp .env.example .env
$ npx prisma migrate reset -f
```

### Create a temporary folder for audios extracted from videos

```bash
$ mkdir tmp
```

### Update .env file with API key generated from [OpenAI](https://platform.openai.com/account/api-keys)

```bash
$ OPENAI_KEY = "use_the_openai_key_here"
```

### Execute server

```bash
$ npm run dev
```

### Install web dependencies

```bash
$ cd upload-ai/web
$ npm install
```

### Execute web

```bash
$ npm run dev
```

---

## :wrench: Technologies

- [Fastify](https://fastify.dev/)
- [Node.js](https://nodejs.org/en/)
- [OpenAI](https://openai.com/)
- [Prisma](https://www.prisma.io/)
- [React](https://pt-br.reactjs.org/)
- [shadcdn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

## :alien: Author

<p align="center">
<a href="https://bc.consuliam.com">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/25617605?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>🤖 Iván Lasso ⚙️</b></sub></a> <a href="https://bc.consuliam.com" title="ConsulIAm"></a>
 <br />
 </p>

---

## :bookmark_tabs: License

This project is licensed under [MIT](./LICENSE).

---

## :book: README versions

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portuguese</a> •
 <a href="./README-es.md">🇨🇴 Spanish </a> •
 <a href="./README.md">🇺🇸 English</a>
</p>
