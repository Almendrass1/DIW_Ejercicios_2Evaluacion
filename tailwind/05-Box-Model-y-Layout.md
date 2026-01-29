# 05. Box Model y Dimensiones

Tailwind facilita el manejo de dimensiones (`width` y `height`), espaciado (`padding` y `margin`) y bordes.

## Anchura (`width`)

Tailwind ofrece dos formas principales de definir la anchura con la clase `w-`:

### 1. Sistema Numérico
Tailwind usa una escala donde **1 unidad = 0.25rem (4px)**.
Por tanto, multiplicas el número por 4 para saber los píxeles.

- `w-1` = 4px
- `w-4` = 16px
- `w-full` = 100%

### 2. Fracciones (Porcentajes)
Muy útil para layouts fluidos, se usan fracciones.

- `w-1/2` = 50%
- `w-1/3` = 33.333%
- `w-full` = 100%

### Ejemplo Práctico

```html
<div class="text-center w-1/2 bg-amber-300">
   <h1 class="text-5xl">Mitad de ancho</h1>
</div>
```

También puedes usar valores arbitrarios para anchos específicos: `w-125` (si lo has configurado o es arbitrario) o `w-[500px]`.

---

## Imágenes Responsivas

Para asegurar que una imagen nunca desborde su contenedor, es una buena práctica darle `w-full`.

```html
<div class="w-1/2 bg-amber-300">
    <!-- La imagen ocupará el 100% del ancho de SU PADRE (el 50% de la pantalla) -->
    <img src="./assets/landscape.png" class="w-full" alt="Paisaje">
</div>
```

---

## Altura (`height`) y el Problema del 100%

La propiedad `h-` funciona de forma muy similar a `w-`.
- `h-full` = 100%
- `h-screen` = 100vh (altura de la ventana visible)
- `h-4/5` = 80%

### El Problema Común

Si intentas esto:
```html
<body>
    <div class="h-4/5 bg-amber-300">
        <!-- Esperas que ocupe el 80% de la pantalla -->
    </div>
</body>
```
... **probablemente no veas nada o no funcione como esperas.**

**¿Por qué?**
Para que una altura en porcentaje (`h-4/5`, `h-full`) funcione, **el padre del elemento debe tener una altura definida explícitamente**. Si el `body` no tiene altura, sus hijos no pueden calcular el "80% de nada".

### La Solución

Aplica `h-screen` al elemento padre principal (normalmente el `<body>` o un contenedor *wrapper*) para que ocupe toda la altura de la ventana.

```html
<!-- Correcto -->
<body class="font-[Plus_Jakarta_Sans] h-screen">
    
    <div class="text-center w-md h-4/5 bg-amber-300">
        <!-- Ahora sí ocupará el 80% de la altura de la pantalla (que hereda del body) -->
        ... contenido ...
    </div>

</body>
```

---

## Padding (Relleno Interno)

El padding añade espacio **dentro** del elemento, entre el contenido y el borde.

### Sintaxis Básica

- `p-10`: Padding de 40px (10 × 4px) en **todos** los lados.
- `px-10`: Padding **horizontal** (izquierda y derecha).
- `py-20`: Padding **vertical** (arriba y abajo).

### Padding Individual por Lado

- `pt-4`: Padding **top** (arriba)
- `pb-4`: Padding **bottom** (abajo)
- `pl-4`: Padding **left** (izquierda)
- `pr-4`: Padding **right** (derecha)

```html
<div class="bg-blue-500 p-10">
    <p class="bg-white">Contenido con padding de 40px alrededor</p>
</div>
```

---

## Margin (Margen Externo)

El margin funciona **exactamente igual** que el padding, pero añade espacio **fuera** del elemento.

### Sintaxis

- `m-10`: Margin de 40px en todos los lados.
- `mx-10`: Margin horizontal.
- `my-20`: Margin vertical.
- `mt-4`, `mb-4`, `ml-4`, `mr-4`: Márgenes individuales.

### Centrar Horizontalmente

> [!TIP]
> **Truco para centrar**: Usa `mx-auto` para centrar un elemento horizontalmente en su contenedor.

```html
<div class="w-1/2 mx-auto bg-amber-300">
    <!-- Este div estará centrado horizontalmente -->
</div>
```

### Márgenes Negativos

En CSS también existen los márgenes negativos. En Tailwind, se usa el **signo negativo** antes de la clase.

```html
<div class="-mb-6">
    <!-- Margen bottom negativo de -24px -->
</div>
```

> [!NOTE]
> **Uso común**: Los márgenes negativos se usan cuando queremos que elementos se solapen.

---

## Bordes

### Grosor del Borde

- `border`: Borde de 1px en todos los lados.
- `border-2`, `border-4`, `border-8`: Bordes más gruesos.
- `border-x-10`: Borde horizontal (izquierda y derecha).
- `border-y-10`: Borde vertical (arriba y abajo).
- `border-t`, `border-b`, `border-l`, `border-r`: Bordes individuales.

### Color del Borde

```html
<nav class="border-x-10 border-amber-400">
    <!-- Borde horizontal de 40px color ámbar -->
</nav>
```

Como con todos los colores, puedes aplicar **transparencia** o **colores personalizados**:
- `border-gray-500/50`: Gris con 50% de opacidad.
- `border-[#FF5733]`: Color hexadecimal personalizado.

### Estilo del Borde

Tailwind ofrece diferentes estilos de borde (similar a `border-style` en CSS):

- `border-solid` (por defecto)
- `border-dashed`
- `border-dotted`
- `border-double`
- `border-none`

> [!IMPORTANT]
> **Restricción**: El estilo del borde se aplica a **todos** los lados, no se puede aplicar solo a un lado específico.

```html
<div class="border-4 border-blue-500 border-dashed">
    Borde azul discontinuo
</div>
```

---

## Espaciado entre Elementos Hijos: `space-`

Si tienes varios elementos dentro de un contenedor y quieres separarlos, en lugar de añadir `margin` a cada uno individualmente, usa las clases `space-`.

- `space-x-4`: Añade margen horizontal entre hijos.
- `space-y-4`: Añade margen vertical entre hijos.

**Se aplica al padre**, no a los hijos.

```html
<nav class="space-y-4">
    <a href="#" class="bg-slate-800 px-8 py-4 block">Inicio</a>
    <a href="#" class="bg-slate-800 px-8 py-4 block">Acerca de</a>
    <a href="#" class="bg-slate-800 px-8 py-4 block">Contacto</a>
</nav>
```

---

## Bordes entre Elementos Hijos: `divide-`

Similar a `space-`, pero en lugar de márgenes, añade **bordes** entre los elementos hijos.

- `divide-x`: Bordes verticales entre hijos.
- `divide-y`: Bordes horizontales entre hijos.

Debes especificar también el grosor, color y estilo:

```html
<nav class="flex divide-x-10 divide-lime-500 divide-dotted">
    <a href="#" class="px-8 py-4">Inicio</a>
    <a href="#" class="px-8 py-4">Acerca de</a>
    <a href="#" class="px-8 py-4">Contacto</a>
</nav>
```

---

## Problema con `<a>` y Padding Vertical

> [!IMPORTANT]
> **Atención**: Los elementos `<a>` son **inline** por defecto. El padding vertical (`py-`) **no se aplica correctamente** a elementos inline.

**Solución**: Cambiar el display a `inline-block` o `block`.

```html
<!-- No funciona correctamente -->
<a href="#" class="px-8 py-4">Enlace</a>

<!-- Correcto -->
<a href="#" class="px-8 py-4 inline-block">Enlace</a>
<!-- o -->
<a href="#" class="px-8 py-4 block">Enlace</a>
```

---

## Ejemplo Completo: Card con Tailwind

Vamos a crear una tarjeta (card) profesional aplicando todo lo aprendido:

```html
<div class="w-md mx-auto my-20 border-2 border-gray-500/50 py-7 px-5 rounded-2xl space-y-8">
  <img src="./assets/mountain_landscape.png" class="w-full h-60 object-cover rounded-md" alt="">
  <h3 class="text-3xl font-bold my-6">¡Título Card!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga temporibus consectetur libero impedit a
    provident sed exercitationem, praesentium quam ea accusamus voluptatem unde? Est rem quod dignissimos sint
    tempora.
  </p>
  <a href="#" class="block bg-blue-600 text-white text-center py-4 rounded-full">Leer más</a>
</div>
```

### Desglose de la Card

#### 1. Contenedor Principal (`<div>`)

| Clase | Significado |
|:------|:------------|
| `w-md` | Ancho medio (28rem) |
| `mx-auto` | Centrado horizontal |
| `my-20` | Margen vertical grande (80px arriba y abajo) |
| `border-2` | Borde de 2px |
| `border-gray-500/50` | Color gris con 50% opacidad |
| `py-7` | Padding vertical interno (28px) |
| `px-5` | Padding horizontal interno (20px) |
| `rounded-2xl` | Esquinas muy redondeadas (16px) |
| `space-y-8` | Separación vertical automática entre hijos (32px) |

> [!TIP]
> **`space-y-8`**: Esta clase es muy potente. Añade automáticamente margen superior a todos los hijos (excepto al primero) para separarlos verticalmente. Evita tener que poner `mt-` o `mb-` a cada elemento.

#### 2. Imagen (`<img>`)

| Clase | Significado |
|:------|:------------|
| `w-full` | Ocupa el 100% del ancho del contenedor |
| `h-60` | Altura fija de 240px |
| `object-cover` | Recorta la imagen para llenar el espacio sin deformarse |
| `rounded-md` | Esquinas ligeramente redondeadas |

> [!IMPORTANT]
> **`object-cover`**: Fundamental cuando fijas ancho y alto. Hace que la imagen se recorte para llenar el espacio sin deformarse (similar a `background-size: cover`).

#### 3. Título (`<h3>`)

| Clase | Significado |
|:------|:------------|
| `text-3xl` | Tamaño grande (30px) |
| `font-bold` | Negrita (peso 700) |
| `my-6` | Margen vertical (24px) |

#### 4. Botón (`<a>`)

| Clase | Significado |
|:------|:------------|
| `block` | Convierte el enlace en bloque (ocupa todo el ancho) |
| `bg-blue-600` | Fondo azul vibrante |
| `text-white` | Texto blanco |
| `text-center` | Texto centrado |
| `py-4` | Padding vertical generoso (16px) |
| `rounded-full` | Forma de "píldora" (bordes completamente redondeados) |

