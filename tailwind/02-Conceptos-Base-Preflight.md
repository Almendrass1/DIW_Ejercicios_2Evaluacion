# 02. Conceptos Base y Preflight

Al instalar Tailwind, lo primero que notarás es que tus elementos HTML estándar pierden su estilo habitual. Un `<h1>` parece texto normal, las listas no tienen puntos, etc.

## ¿Por qué mi `<h1>` se ve como un texto normal?

Esto se debe a **Preflight**.

Preflight es un conjunto de estilos base que incluye Tailwind para "borrar" o resetear los estilos predeterminados de los navegadores (Chrome, Safari, Firefox, etc.).

**Motivos:**
1. **Consistencia**: Asegura que tu web se vea **exactamente igual** en todos los navegadores desde el inicio.
2. **Control Total**: Evita que tengas que "pelear" contra márgenes o tamaños que el navegador decide por ti.

### Comparativa: Con y Sin Preflight

| Elemento | HTML Estándar (Sin Tailwind) | Con Tailwind (Preflight) |
| :--- | :--- | :--- |
| `<h1>` | Grande, negrita, con margen. | Tamaño base, peso normal, sin margen. |
| `<ul>` | Tiene puntos (bullets) y padding. | Sin puntos y sin padding. |
| `<a>` | Azul y subrayado. | Hereda el color y no tiene subrayado. |

---

## Cómo dar estilo "al estilo Tailwind"

En lugar de confiar en la etiqueta HTML, ahora tú tienes el control usando **Utility Classes**. Debes ser explícito.

HTML Tradicional:
```html
<h1>Título normal</h1>
<!-- Se ve grande y negrita por defecto -->
```

Tailwind CSS:
```html
<h1 class="text-4xl font-bold mb-4">Título Grande y Negrita</h1>
<!-- Tú defines explícitamente el tamaño, peso y margen -->
```

---

## Estilos Globales: `@layer base`

¿Qué pasa si quiero que **todos** los `<h1>` sean siempre grandes y no quiero repetir clases?

> [!TIP]
> **Consejo de "Thought Partner"**: Al principio parece más trabajo ser explícito, pero la ventaja es que nunca más te preguntarás: *"¿Por qué este título tiene un margen arriba que no le puse?"*. Tailwind elimina las sorpresas.

Sin embargo, si necesitas estilos base globales, puedes usar la directiva `@layer base` en tu archivo CSS principal (`src/css/tailwind.css`):

```css
@import "tailwindcss";

@layer base {
  h1 {
    @apply text-4xl font-bold mb-4;
  }
  h2 {
    @apply text-2xl font-semibold mb-2;
  }
}
```

Esto hará que, globalmente, todos tus `<h1>` recuperen ese estilo sin tener que escribir las clases cada vez en el HTML.

> [!IMPORTANT]
> **Atención**: Recuerda que cualquier cambio en el archivo CSS requiere que el proceso de compilación (`npm run tailwind`) esté ejecutándose para reflejarse en `estilos.css`.
