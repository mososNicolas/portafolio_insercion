# 🎮 Portafolio Interactivo - Estilo PSP (XMB)

> **Asignatura:** Inserción a la Vida Universitaria  
> **Estudiante:** Nicolás Mosos  
> **Tecnología:** Desarrollo de Software - Univalle

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![Diseño](https://img.shields.io/badge/Diseño-Responsive-blue)

## 📖 Descripción

Este proyecto es un portafolio web interactivo diseñado bajo el concepto de la interfaz **XrossMediaBar (XMB)** utilizada en la consola PlayStation Portable (PSP). 

El objetivo no fue solo presentar las reflexiones académicas del curso, sino demostrar competencias técnicas avanzadas en desarrollo frontend, creando una experiencia de usuario (UX) inmersiva, navegable por teclado y completamente adaptativa a diferentes dispositivos.

## 🚀 Características Técnicas (Nivel 5)

### 1. Arquitectura "Data-Driven UI"
El contenido no está hardcodeado en el HTML. Todo el renderizado se genera dinámicamente mediante JavaScript basado en una estructura de objetos (`menuData`). Esto permite escalabilidad y fácil mantenimiento.

### 2. Navegación Bidimensional (Matriz X/Y)
Implementación de lógica de coordenadas para navegar entre categorías (Eje X) y elementos (Eje Y), replicando el comportamiento nativo de la consola:
- **Horizontal:** Desplaza todo el contenedor en forma de carrusel
- **Vertical:** Lógica de "Ascensor" donde el ítem seleccionado siempre busca el centro visual.

### 3. Diseño Responsive de 3 Niveles
Utilizando **Tailwind CSS** y lógica reactiva en JS (`matchMedia`), la interfaz muta radicalmente según el dispositivo:
- **📱 Móvil (< 1024px):** Panel de información tipo "Bottom Sheet" y menú compacto superior.
- **💻 Laptop (1024px - 1536px):** Diseño clásico XMB con ajustes de altura para evitar colisiones.
- **🖥️ Monitor (> 1536px):** Experiencia "Wide" completa con espaciado original.

### 4. Detalles de UX/UI
- **Fondo Dinámico:** El video de fondo cambia según la categoría o acción (lógica de precarga y `.load()`).
- **Glassmorphism:** Paneles con `backdrop-blur` para legibilidad sobre videos.
- **Estados Visuales:** Manejo de opacidad para ítems "pasados" (fantasmas) y enfoque en el ítem activo.

## 🛠️ Tecnologías Utilizadas

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **Semántico**: Estructura base.
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Utility-First**: Estilizado rápido y responsive (vía CDN).
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **Vanilla ES6+**: Lógica de renderizado, eventos y control de estado.

## 🎮 Controles

La interfaz está diseñada para ser utilizada como una consola:

| Tecla | Acción |
| :--- | :--- |
| ⬅️ **Flecha Izq** | Cambiar Categoría (Atrás) |
| ➡️ **Flecha Der** | Cambiar Categoría (Siguiente) |
| ⬆️ **Flecha Arriba** | Navegar Submenú (Anterior) |
| ⬇️ **Flecha Abajo** | Navegar Submenú (Siguiente) |

## 📂 Estructura del Proyecto

```text
portafolio-xmb/
│
├── index.html          # Punto de entrada y contenedores base
├── script.js           # Lógica del Core, Datos y Renderizado
├── style.css           # Estilos personalizados (Scrollbars, fuentes)
│
├── src/                # Recursos multimedia
│   ├── video1.mp4      # Background loops
│   ├── 01 Settings.png # Iconos de categorías
│   └── ...
│
└── imagenes/           # Evidencias de las sesiones
    ├── sesion1.jpeg
    └── ...