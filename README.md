# Prueba Técnica PostProducción ZARA - Réplica de diseño

Este proyecto es una prueba técnica para el equipo de **Postproducción ZARA**. El objetivo principal fue replicar un diseño proporcionado con precisión visual, implementando animaciones modernas y asegurando una experiencia completamente responsive en diferentes dispositivos.

## 🚀 Tecnologías utilizadas

- **React 19**
- **Vite** como bundler
- **Tailwind CSS** para los estilos
- **Swiper** para la creación del carrousel
- **ScrollReveal** para animaciones al hacer scroll
- **TypeScript** para añadir tipados, mejorando la experiencia de desarrollo y mantenimiento del código

## 🛠 Cómo Ejecutar el Proyecto

### **1️⃣ Instalar Dependencias**

Antes de ejecutar el proyecto, asegúrate de tener **Node.js** instalado. Luego, instala las dependencias ejecutando el comando:

```sh
npm install
```

### **2️⃣ Ejecutar en Modo Desarrollo**

Para iniciar un servidor de desarrollo ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará la aplicación en `http://localhost:5173` (o en un puerto diferente si está configurado).

### **3️⃣ Compilar para Producción**

Para generar una compilación optimizada para producción:

```sh
npm run build
```

Esto creará una carpeta `dist/` que contiene la aplicación compilada.

### **4️⃣ Ejecutar la Versión de Producción Localmente**

Para previsualizar la compilación de producción:

```sh
npm run preview
```

Esto sirve los archivos compilados localmente para realizar pruebas antes del despliegue.

---

Para poder probar este proyecto sin necesidad de clonar el repositorio, podés utilizar **[este enlace](https://prueba-tecnica-frontend-zara.vercel.app/)**.

## 📸 Funcionalidades implementadas

### ✨ Animaciones

- **Hover Effects** sobre imágenes.
- **Carousel** utilizando `Swiper`.
- **Scroll Animations** con `ScrollReveal` para que al hacer scroll los elementos aparezcan dinámicamente

### 📱 Responsividad

La interfaz fue diseñada para adaptarse tanto a pantallas grandes (desktop), medianas (tablet) y pequeñas (móviles).

### 🧠 Decisiones técnicas

Tailwind CSS: Elegido por su velocidad de desarrollo, utilidad para lograr un diseño pixel-perfect y facilidad para manejar breakpoints responsive.

ScrollReveal: Una librería ligera y sencilla para animaciones al hacer scroll, sin necesidad de usar un framework más pesado como GSAP.

Swiper: Por su robustez, flexibilidad y soporte excelente para carousels responsivos.

Vite + React 19: Stack moderno, rápido y familiar para el desarrollo de SPAs.

Arquitectura modular: Los componentes fueron divididos según responsabilidad visual, mejorando la legibilidad y mantenibilidad del código.

Tipado con TypeScript: Para mayor seguridad y escalabilidad.

Cambio de formato de imágenes: Se optó por cambiar el formato .jpeg de las imágenes a .webp, ya que de esta manera se reduce el tamaño de las mismas, logrando una carga más rápida de la aplicación.

⏱️ Tiempo dedicado
Aproximadamente 11 horas en total, divididas de la siguiente manera:

Setup y configuración inicial: 1 hora

Implementación visual y estructura base: 2 horas

Animaciones (scroll, hover, carousel): 4 horas

Responsividad y pruebas cross-device: 3 horas

Ajustes finos y documentación: 1 hora
