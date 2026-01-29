# 03. Colores y Personalización

Tailwind ofrece una paleta de colores inmensa y herramientas potentes para personalizarlos.

Consulta siempre el apartado **Colors** en la documentación oficial para ver todas las opciones.

## Uso Básico de Colores

Los colores se aplican combinando la propiedad (texto, fondo, borde) con el nombre del color y su intensidad (50-950).

- **Texto**: `text-pink-600`
- **Fondo**: `bg-red-900`
- **Borde**: `border-blue-500`

```html
<h1 class="bg-red-900 text-white">Bienvenido a Tailwind</h1>
```

## Opacidad y Transparencia

> [!TIP]
> **Truco**: Para añadir transparencia, puedes usar la sintaxis de barra inclinada `/` seguida del porcentaje de opacidad.

Ejemplo: `text-pink-600/50` (Color rosa con 50% de transparencia).

**Probamos:** Juega con los valores de transparencia:
```html
<h1 class="bg-black/90 text-pink-900/20">Título con transparencias</h1>
```

## Agrupación de Estilos

Si quieres aplicar el mismo color a más de un elemento, a veces puedes agruparlos en un `<div>` padre.

```html
<div class="text-green-500 bg-black">
    <p>Este texto hereda el color verde</p>
    <p>Este también</p>
</div>
```

> [!IMPORTANT]
> **¡Cuidado con la Herencia!**
>
> En CSS (y Tailwind), hay dos tipos de propiedades:
> 1. **Se heredan**: Relacionadas con texto (`text-color`, `font-bold`, `italic`). Si se las pones al padre, los hijos las heredan.
> 2. **NO se heredan**: `bg-color`, `padding`, `margin`, `border`. Si pones un fondo azul al padre, los hijos **no** heredan la clase "fondo azul", simplemente están *dentro* de una caja azul.

### Truco: Arbitrary Variants `[&>*]`

Si realmente quieres forzar que todos los hijos tengan una propiedad no heredable (como padding o background), puedes usar este truco avanzado:

```html
<div class="[&>*]:bg-blue-500 [&>*]:p-4">
    <p>Soy azul con padding</p>
    <p>Yo también</p>
</div>
```
`[&>*]:` le dice a Tailwind: *"Aplica esto a todos los hijos directos"*.

---

## Valores Personalizados (Arbitrary Values)

¿Qué pasa si necesito un color que **no está** en la paleta de Tailwind, como el azul exacto de Facebook (`#1877f2`)?

No necesitas configurar nada complejo, usa los **corchetes `[]`**:

```html
<h1 class="bg-[#2E86AB] text-white">Título con color personalizado directo</h1>
```

Si pones `bg-[#2E86AB]`, Tailwind genera una clase específica para ese color hexadecimal.

---

## Ejemplo Práctico: Iconos SVG

Vamos a usar un icono SVG externo (ej. de boxicons.com) y controlarlo con Tailwind.

1. Copiamos el SVG (ej. logo de Facebook).
2. **Importante**: Eliminamos los estilos en línea que traiga (`width`, `height`, `fill`) para que Tailwind pueda controlarlos.
3. Añadimos nuestras clases: `w-`, `h-`, `fill-`.

```html
<!-- Icono de Facebook con color personalizado -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="w-12 h-12 fill-[#1877f2]"
>
    <!-- Path del SVG -->
    <path d="M20 3H4a1..."></path>
</svg>
```

> [!NOTE]
> Observa cómo usamos `fill-[#1877f2]` para aplicar el color exacto de Facebook al icono.
