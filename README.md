# 🔡 Word Search API - NestJS

Este proyecto es una API desarrollada con NestJS que permite buscar palabras dentro de una sopa de letras (matriz de caracteres). La lógica implementada encuentra palabras en cualquier dirección: horizontal, vertical y diagonal, en todos los sentidos posibles.

---

## 📌 Descripción del proyecto

Esta API fue desarrollada como parte de una prueba técnica para validar conocimientos en desarrollo backend con NestJS. El objetivo es recibir una matriz de letras (14x14) y un listado de palabras, y retornar cuáles de esas palabras están presentes en la matriz y cuáles no.

La búsqueda se realiza en **8 direcciones posibles**:

- ➡ derecha
- ⬅ izquierda
- ⬇ abajo
- ⬆ arriba
- ↘ diagonal abajo-derecha
- ↙ diagonal abajo-izquierda
- ↗ diagonal arriba-derecha
- ↖ diagonal arriba-izquierda

---

## 🛠 Tecnologías utilizadas

- [NestJS](https://nestjs.com/) - Framework backend
- TypeScript - Lenguaje principal
- class-validator - Validación de datos de entrada
- Node.js - Entorno de ejecución

---

## 🚀 Cómo ejecutar el proyecto

### 📦 Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

### ⚙️ Instalación

```bash
# Clona el repositorio
git clone https://github.com/sebastianbarrerah/word-search-api.git
cd word-search-api

# Instala dependencias
npm install

# Ejecuta el servidor
npm run start:dev

## 🌐 URL por defecto

Por defecto, la API estará disponible en:

http://localhost:3000/api/wordsearch/search

```

---

## 📨 Endpoint disponible

### `POST /wordsearch/search`

Recibe una matriz de letras y una lista de palabras. Devuelve cuáles palabras fueron encontradas en la matriz.

---

### ✅ JSON de entrada

```json
{
  "words": ["GATO", "ELEFANTE", "MONO"],
  "matrix": [
    ["G", "A", "T", "O", "S"],
    ["A", "B", "C", "D", "E"],
    ["T", "G", "A", "T", "O"],
    ["O", "H", "I", "J", "K"],
    ["S", "L", "M", "N", "Ñ"]
  ]
}
```

### ✅ JSON de salida

```json
{
  "found": ["GATO"],
  "notFound": ["ELEFANTE", "MONO"]
}
```

### 🧱 Estructura del proyecto

src/
├── wordsearch/
│   ├── wordsearch.controller.ts
│   ├── wordsearch.service.ts
│   ├── dto/
│   │   └── search.dto.ts
│   └── constants.ts
├── app.module.ts
└── main.ts

---


### ✍️ Autor
#### Sebastián Herrera
👨‍💻 Desarrollador Web | JavaScript | Node.js | NestJS | React
🌐 https://www.linkedin.com/in/sebastianbarrerah/





