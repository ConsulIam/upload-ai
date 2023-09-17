<h2 align="center"> 
	Upload AI
</h2>
<p align="center">🧠 Transformando seus vídeos em palavras</p>


---



<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#rocket-recursos">Recursos</a> •
 <a href="#computer-como-executar">Como executar</a> • 
 <a href="#wrench-tecnologias">Tecnologias</a> •  
 <a href="#alien-autor">Autor</a> • 
 <a href="#bookmark_tabs-licencia">Licencia</a>
</p>

<p align="center">
 <a href="./README-pt.md">🇧🇷 Português</a> •
 <a href="./README-es.md">🇨🇴 Espanhol </a> •
 <a href="./README.md">🇺🇸 Inglês</a>
</p>

---


## Sobre

Gera títulos criativos, resumos e questionários para seus vídeos. Liberte-se da transcrição do conteúdo de suas gravações, nós fazemos isso por você de maneira ágil, coerente e prática.



## :movie_camera: Demo

https://github.com/ConsulIam/upload-ai/assets/25617605/6665959b-90f1-497e-8aed-fc0fcf58dcb4



## :white_check_mark: Concluído e recebendo atualizações



## :rocket: Recursos

- [x] Transcrever vídeos no formato mp4 (usando AI Whisper da OpenAI)
- [x] Visualização prévia do vídeo em imagem
- [x] Indicador do processo de transcrição
- [x] Adicionar palavras-chave para reforçar a transcrição dos vídeos
- [x] Usar prompts pré-configurados
- [x] Ajustar a temperatura que deseja usar com os prompts
- [x] Ajustar o conteúdo dos prompts pré-configurados antes de usá-los
- [x] Monitorar a geração de títulos, resumos e questionários em tempo real
- [ ] Possibilidade de escolher o modelo de linguagem natural a ser usado (em breve)



## :computer: Como Executar

### Clonar o repositório do Upload de IA

```bash
$ git clone https://github.com/ConsulIam/upload-ai.git
```

### Instalar as dependências do servidor

```bash
$ cd upload-ai/api
$ npm install
```

### Criar o banco de dados

```bash
$ cp .env.example .env
$ npx prisma migrate reset -f
```

### Criar uma pasta temporária para os áudios extraídos dos vídeos

```bash
$ mkdir tmp
```

### Atualizar o arquivo .env com a chave da API gerada a partir da [OpenAI](https://platform.openai.com/account/api-keys)

```bash
$ OPENAI_KEY = "use_the_openai_key_here"
```

### Executar servidor

```bash
$ npm run dev
```

### Instalar dependências da web

```bash
$ cd upload-ai/web
$ npm install
```

### Executar a aplicação web

```bash
$ npm run dev
```

---

## :wrench: Tecnologias

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

## :alien: Autor

<p align="center">
	<a
		href="https://bc.consuliam.com">
		<img style="border-radius: 50%;"
		src="https://avatars.githubusercontent.com/u/25617605?v=4"
		width="256px;"
		alt="Iván Lasso"/>
	<br />
	</a>
	<a
		href="https://bc.consuliam.com"
		title="ConsulIAm">
		<sub>
			<b>🤖 Iván Lasso ⚙️</b>
		</sub>
	</a>
	<br />
 </p>

---

## :bookmark_tabs: Licença

Este proyecto está licenciado bajo [MIT](./LICENSE).

---

## :book: Versões README

<p align="center">
 <a href="./README-pt.md">🇧🇷 Português</a> •
 <a href="./README-es.md">🇨🇴 Espanhol </a> •
 <a href="./README.md">🇺🇸 Inglês</a>
</p>