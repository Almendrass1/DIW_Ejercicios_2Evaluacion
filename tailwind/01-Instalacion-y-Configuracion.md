# 01. Instalación y Configuración de Tailwind CSS

> [!IMPORTANT]
> **La Biblia de Tailwind**: Antes de empezar, es fundamental tener a mano la documentación oficial: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation). Está en constante actualización y será nuestra referencia principal.

## Metodología 1: Instalación mediante CDN

Esta es la forma más rápida y sencilla de empezar, ideal para **pruebas rápidas** o prototipos, pero no recomendada para producción.

### Pasos de Instalación

Simplemente añade la siguiente línea dentro de la etiqueta `<head>` de tu HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### Probamos

Crea un archivo `index.html` básico y observa qué ocurre:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Instalación CDN</title>
   <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
   <h1>Instalación mediante CDN</h1>
</body>
</html>
```

> [!NOTE]
> **Observación**: Antes de añadir ninguna clase, verás que el `<h1>` se ve diferente (sin estilos por defecto). Esto es normal (lo veremos en "Preflight").

Ahora añadimos estilos con *Utility Classes*:

```html
<h1 class="text-3xl font-bold text-red-500">Instalación mediante CDN</h1>
```

> [!WARNING]
> **Desventaja del CDN**: Al usar CDN, el navegador descarga **todo** el CSS de Tailwind. Esto afecta al rendimiento porque el archivo es muy pesado. Solo es aconsejable para aprender o hacer pruebas rápidas.

---

## Metodología 2: Instalación mediante CLI (Recomendada)

Esta es la forma profesional. Utilizaremos la línea de comandos y NPM (Node Package Manager).

### Prerrequisitos
1. Tener instalado **Node.js**.
2. Verificar la versión en la terminal: `node -v`

### Pasos de Instalación

1. **Inicializar el proyecto**:
   Abre la terminal en tu carpeta de trabajo y ejecuta:
   ```bash
   npm init -y
   ```
   Esto creará el archivo `package.json`.

2. **Instalar Tailwind CSS**:
   Según la documentación oficial:
   ```bash
   npm install tailwindcss @tailwindcss/cli
   ```
   Esto creará la carpeta `node_modules` y el archivo `package-lock.json`.

3. **Crear Estructura de Archivos**:
   - Crea una carpeta `src`
   - Dentro de `src`, crea una carpeta `css`
   - Dentro de `src/css`, crea un archivo `tailwind.css` (la documentación lo llama `input.css`, pero usaremos `tailwind.css` para ser más descriptivos).
   - En `src`, crea tu `index.html`.

4. **Configurar Tailwind**:
   El archivo `src/css/tailwind.css` es crucial. Debe contener la importación de Tailwind:

   ```css
   @import "tailwindcss";
   ```

5. **Compilar el CSS**:
   Ejecutamos el comando CLI para "vigilar" nuestros cambios y compilar el CSS final. Adaptamos el comando de la documentación a nuestra estructura:

   ```bash
   npx @tailwindcss/cli -i ./src/css/tailwind.css -o ./src/css/estilos.css --watch
   ```

   **Explicación del comando**:
   - `-i`: Input (entrada), donde está nuestra configuración (`./src/css/tailwind.css`).
   - `-o`: Output (salida), donde queremos que se genere el CSS final (`./src/css/estilos.css`).
   - `--watch`: El proceso se queda "escuchando" cambios para recompilar automáticamente.

   > [!TIP]
   > Ahora verás que se ha creado `src/css/estilos.css` con muchas líneas de código, aunque aún no hayas escrito nada.

6. **Vincular en HTML**:
   En tu `index.html`, enlaza al archivo **generado** (`estilos.css`), NO al de configuración.

   ```html
   <link rel="stylesheet" href="css/estilos.css">
   ```

### Probamos CLI

Añade estas clases a tu HTML:

```html
<h1 class="text-center text-white bg-red-900 p-8 font-bold text-5xl">Bienvenido a Tailwind mediante CLI</h1>
```

Si miras el archivo `estilos.css`, verás que Tailwind ha generado el CSS necesario en la capa `@layer utilities`.

> [!NOTE]
> **Curiosidad**: Si eliminas una clase de utilidad del HTML, la regla CSS correspondiente **no se elimina** del archivo `estilos.css` hasta que vuelvas a compilar (detener y arrancar el proceso `npx`).

### Automatización con Scripts

Para detener la terminal pulsa `Ctrl + C`.
Para no tener que escribir el comando largo cada vez, creamos un **script** en `package.json`.

En la sección `"scripts"` de tu `package.json`:

```json
"scripts": {
  "tailwind": "npx tailwindcss -i ./src/css/tailwind.css -o ./src/css/estilos.css --watch"
}
```

Ahora solo tienes que ejecutar en la terminal:
```bash
npm run tailwind
```

> [!TIP]
> **Nota sobre extensiones**: No es necesario tener instalado el complemento "Tailwind CSS IntelliSense" para que esto funcione, aunque ayuda al desarrollo.
