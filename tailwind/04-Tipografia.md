# 04. Tipografía

Tailwind simplifica enormemente el manejo de fuentes, tamaños y estilos.

## Fuente Predeterminada

Por defecto, Tailwind aplica una fuente **Sans-Serif** (`ui-sans-serif`). Puedes comprobarlo inspeccionando el `<body>` en el navegador (pestaña Computed -> filter "font").

Si aplicas una clase de fuente al `<body>`, como `font-family` es una propiedad **heredable**, se aplicará a toda la página.

Tailwind ofrece tres familias básicas:
- `font-sans` (Por defecto)
- `font-serif`
- `font-mono`

## Fuentes Personalizadas (Google Fonts)

Para usar una fuente que no sea estándar, lo ideal es usar **Google Fonts** y valores arbitrarios.

### Pasos:
1. Ve a [Google Fonts](https://fonts.google.com/).
2. Busca una fuente, por ejemplo "Plus Jakarta Sans".
3. Selecciona los estilos que quieras.
4. Copia los `<link>` que te proporciona y pégalos en el `<head>` de tu HTML.

```html
<head>
  <!-- ... otros meta tags ... -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
</head>
```

### Usar la fuente personalizada

Ahora usa la sintaxis de **corchetes** `font-[Nombre_Fuente]`.

> [!IMPORTANT]
> **Atención al Espacio**: No puedes usar espacios en blanco dentro de los corchetes. Debes sustituirlos por guiones bajos `_`.

Correcto:
```html
<body class="font-[Plus_Jakarta_Sans]">
```

Incorrecto:
```html
<!-- Esto no funcionará -->
<body class="font-[Plus Jakarta Sans]">
```

También puedes usar fuentes genéricas directamente:
```html
<body class="font-[cursive]">
```

---

## Tamaños (`font-size`)

Tailwind usa una escala T-shirt (XS, SM, base, LG, XL...).

- `text-xs`: Extra pequeño
- ...
- `text-base`: Tamaño base (normalmente 16px)
- ...
- `text-5xl`: 5 veces el tamaño XL

> [!TIP]
> Si buscas en la documentación "font-size", verás exactamente a cuántos píxeles corresponde cada clase.

También puedes usar valores arbitrarios si necesitas un tamaño exacto:
```html
<p class="text-[40px]">Texto de 40 píxeles exactos</p>
```

---

## Peso (`font-weight`)

Dependiendo de la fuente (especialmente en Google Fonts), tendrás disponibles diferentes pesos.

| Clase Tailwind | Peso CSS |
| :--- | :--- |
| `font-thin` | 100 |
| `font-light` | 300 |
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-bold` | 700 |
| `font-black` | 900 |

### Ejemplo Combinado

```html
<h1 class="text-5xl font-medium italic text-start">Textos en Tailwind</h1>
```
Aquí combinamos:
- `text-5xl`: Tamaño grande
- `font-medium`: Peso medio
- `italic`: Estilo cursiva
- `text-start`: Alineación a la izquierda (inicio)

> [!NOTE]
> Otras alineaciones útiles: `text-center`, `text-right`, `text-justify`.
