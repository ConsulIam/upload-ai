<h2 align="center"> 
	Upload AI
</h2>
<p align="center">🧠 Transformando tus videos en palabras</p>


---



<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#rocket-caracteristicas">Características</a> •
 <a href="#computer-como-ejecutar">Cómo ejecutar</a> • 
 <a href="#wrench-tecnologias">Tecnologías</a> •  
 <a href="#alien-autor">Autor</a> • 
 <a href="#bookmark_tabs-licencia">Licencia</a>
</p>

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portugués</a> •
 <a href="./README-es.md">🇨🇴 Español </a> •
 <a href="./README.md">🇺🇸 Inglés</a>
</p>

---


## Sobre

Genera títulos creativos, resúmenes y cuestionarios para tus videos. Libérate de transcribir el contenido de tus grabaciones, nosotros lo hacemos por ti de manera ágil, coherente y práctica.



## :movie_camera: Demo

https://github.com/ConsulIam/upload-ai/assets/25617605/6665959b-90f1-497e-8aed-fc0fcf58dcb4



## :white_check_mark: Estado: Finalizado y recibiendo actualizaciones



## :rocket: Características

- [x] Transcribir videos en formato mp4 (usando AI Whisper de OpenAI)
- [x] Vista previa del video en imagen
- [x] Indicador del proceso de transcripción
- [x] Agregar palabras clave para fortalecer la transcripción de los videos
- [x] Utilizar prompts pre-configurados
- [x] Ajustar la temperatura que deseas utilizar con los prompts
- [x] Ajustar el contenido de los prompts pre-configurados antes de usarlos
- [x] Acompañar la generación de títulos, resúmenes y cuestionarios en tiempo real
- [ ] Posibilidad de elegir el modelo de lenguaje natural a utilizar (próximamente)



## :computer: Cómo Ejecutar

### Clonar el repositorio de Upload AI

```bash
$ git clone https://github.com/ConsulIam/upload-ai.git
```

### Instalar las dependencias del servidor

```bash
$ cd upload-ai/api
$ npm install
```

### Crear la base de datos

```bash
$ cp .env.example .env
$ npx prisma migrate reset -f
```

### Crear una carpeta temporal para los audios extraídos de los videos

```bash
$ mkdir tmp
```

### Actualizar el archivo .env con la clave de la API generada desde [OpenAI](https://platform.openai.com/account/api-keys)

```bash
$ OPENAI_KEY = "use_the_openai_key_here"
```

### Ejecutar servidor

```bash
$ npm run dev
```

### Instalar  dependencias web

```bash
$ cd upload-ai/web
$ npm install
```

### Ejecutar aplicación web

```bash
$ npm run dev
```

---

## :wrench: Tecnologías

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

## :bookmark_tabs: Licencia

Este proyecto está licenciado bajo [MIT](./LICENSE).

---

## :book: Versiones README

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portugués</a> •
 <a href="./README-es.md">🇨🇴 Español </a> •
 <a href="./README.md">🇺🇸 Inglés</a>
</p>