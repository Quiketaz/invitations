# 📜 Framework de Invitaciones Web Premium (No-Scroll & Hybrid UX)

Este documento contiene la arquitectura técnica y los principios de diseño optimizados para crear e-cards de lujo con compatibilidad total entre escritorio y móvil (100dvh).

## 🛠 Estructura de Diseño (Core Architecture)

### 1. El Contenedor "Anti-Scroll"
Para evitar que el contenido se desborde en móviles, se utiliza una estructura de altura dinámica.
- **Unidad de Medida:** `100dvh` (Dynamic Viewport Height) para ignorar las barras de herramientas del navegador móvil.
- **Layout:** `grid grid-cols-1 md:grid-cols-2` para pasar de apilado vertical a vista dividida.
- **Clase Clave:** `max-h-screen overflow-hidden`.

### 2. Gestión de Imagen (Smart Cropping)
- **Foco:** `object-[center_20%]` asegura que en móvil se vea el rostro y birrete, incluso con recortes verticales.
- **Comportamiento:** `absolute inset-0 w-full h-full object-cover`.

---

## 🎨 Design Tokens (Estética Premium)

| Elemento | Valor / Token | Propósito |
| :--- | :--- | :--- |
| **Color Oro** | `#D4AF37` | Champagne Gold (Lujo) |
| **Tipografía Script** | `Great Vibes` | Emocional / Nombres |
| **Tipografía Serif** | `Playfair Display` | Formal / Logística |
| **Espaciado** | `tracking-[0.2em]` o `0.3em` | Estética editorial / Aire |
| **Fondo** | `radial-gradient(#1a1a1a, #0a0a0a)` | Profundidad visual (OLED Friendly) |

---

## ⚡ Interactividad y Lógica

### 1. RSVP Progresivo (Modal System)
No desplazar el contenido. El formulario debe ser un "overlay" para mantener la integridad del 100dvh.
- **Trigger:** Botón sólido `bg-[#D4AF37]`.
- **Modal:** `fixed inset-0 z-50 bg-black/95 flex items-center justify-center`.

### 2. Integración de Datos (Backend Serverless)
- **Destino:** Google Sheets mediante Apps Script.
- **Método:** `fetch(url, { method: 'POST', body: new FormData(form) })`.
- **Acceso:** Debe implementarse como Web App con acceso a "Anyone" para evitar errores 401.

---

## 📝 Prompts Maestros para Agentes

### Prompt A: Estructura y Compatibilidad
> "Genera un layout de invitación usando Tailwind CSS con `100dvh` y `overflow-hidden`. Divide la pantalla en 2 columnas en escritorio y 2 filas (40/60) en móvil. La imagen debe usar `object-position` para no perder el punto de interés en pantallas estrechas."

### Prompt B: Optimización de Espacios (No-Scroll)
> "Ajusta todos los márgenes y paddings para que el contenido sea visible en una sola pantalla de iPhone SE. Usa fuentes escalables (`text-3xl md:text-5xl`) y convierte el formulario de RSVP en un modal fijo que no empuje el contenido del fondo."

---

## 🎓 Caso de Éxito: Amsy Betbirai Flores Hernandez
- **Institución:** Paetow High School.
- **Evento:** Celebración de Graduación.
- **Fecha:** Domingo 17 de Mayo, 2026 (Post-ceremonia oficial).
- **Ubicación:** The Flores Residence (Katy, TX).