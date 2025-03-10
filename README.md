# Portafolio Personal - Miguel Angel Carlos Rojas 🎉

¡Bienvenido a mi portafolio personal! 🌟 Este proyecto es una aplicación web diseñada para mostrar mis habilidades, experiencia, proyectos destacados y disponibilidad para colaborar en nuevos retos. Construido con tecnologías modernas, este portafolio es completamente responsivo y está optimizado para una experiencia de usuario fluida. 🚀

## Tabla de Contenidos 📋
- [Características](#características-🌟)
- [Tecnologías Utilizadas](#tecnologías-utilizadas-💻)
- [Estructura del Proyecto](#estructura-del-proyecto-📂)
- [Requisitos Previos](#requisitos-previos-✅)
- [Instalación](#instalación-🔧)
- [Ejecución](#ejecución-▶️)
- [Uso](#uso-🖱️)
- [Archivos y Carpetas](#archivos-y-carpetas-📁)
- [Personalización](#personalización-🎨)
- [Contribuciones](#contribuciones-🤝)
- [Contacto](#contacto-📧)

---

## Características 🌟
- **Diseño Responsivo**: Adaptado para dispositivos móviles, tabletas y escritorios. 📱💻
- **Multilenguaje**: Soporte para español e inglés mediante traducciones dinámicas. 🌐
- **Carga Dinámica**: Incluye un overlay de carga para mejorar la experiencia inicial. ⏳
- **Secciones Interactivas**: Navegación fluida entre "Sobre mí", "Habilidades", "Proyectos", "Contacto" y "Pie de página". 🔄
- **Proyectos Destacados**: Muestra proyectos en vivo con iframes y enlaces directos. 🖼️
- **Estilos Modernos**: Uso de gradientes, animaciones y transiciones suaves. 🎨

---

## Tecnologías Utilizadas 💻
- **Frontend**:
  - React 18 (con TypeScript) ⚛️
  - Vite (como herramienta de construcción y desarrollo) ⚡
- **Estilos**:
  - CSS puro con variables CSS para consistencia 🎨
  - Animaciones con `@keyframes` 🎞️
- **Herramientas**:
  - Git y GitHub para control de versiones 📦
  - Node.js y npm para la gestión de dependencias 🌱
- **Otros**:
  - ESLint y Prettier para calidad de código (opcional, configúralos si los necesitas) 🛠️

---

## Estructura del Proyecto 📂
```
PORTFOLIO/
├── node_modules/          # Dependencias instaladas 📦
├── src/                   # Código fuente 🌐
│   ├── assets/            # Recursos estáticos (imágenes, íconos) 🖼️
│   ├── pages/             # Componentes de la aplicación 🌍
│   │   ├── components/    # Subcomponentes reutilizables 🧩
│   │   │   ├── About.tsx  # Sección "Sobre mí" ℹ️
│   │   │   ├── Available.tsx # Sección de disponibilidad ✅
│   │   │   ├── Footer.tsx # Pie de página 📝
│   │   │   ├── Header.tsx # Sección de encabezado 🖼️
│   │   │   ├── Navbar.tsx # Barra de navegación 🌐
│   │   │   ├── Projects.tsx # Sección de proyectos 🚧
│   │   │   └── Skills.tsx # Sección de habilidades 🎓
│   │   └── Portfolio.tsx  # Componente principal 🌟
│   ├── routes/            # Rutas (si las hay) 🗺️
│   │   └── index.tsx      # Configuración de rutas 📍
│   ├── styles/            # Archivos CSS optimizados 🎨
│   │   ├── about.css      # Estilos para About ℹ️
│   │   ├── available.css  # Estilos para Available ✅
│   │   ├── body.css       # Estilos globales para body 🌐
│   │   ├── footer.css     # Estilos para Footer 📝
│   │   ├── header.css     # Estilos para Header 🖼️
│   │   ├── loader.css     # Estilos para el overlay de carga ⏳
│   │   ├── navbar.css     # Estilos para Navbar 🌐
│   │   ├── projects.css   # Estilos para Projects 🚧
│   │   └── skills.css     # Estilos para Skills 🎓
│   ├── translation/       # Traducciones 🌐
│   │   └── translate.tsx  # Lógica de traducciones 📝
│   ├── utils/             # Utilidades 🛠️
│   │   └── types.ts       # Definiciones de tipos TypeScript 🔧
│   ├── views/             # Vista proporciona acceso a los datos 📂
│   │   └── pdf/           # Archivos PDF 📄
│   │       └── CURRICULUM-CARLOS-ROJAS-MIGUEL-ANGEL.pdf # Currículum descargable 📑
│   ├── App.tsx            # Componente raíz de la aplicación 🌱
│   ├── index.css          # Estilos globales adicionales 🎨
│   ├── main.tsx           # Punto de entrada de la aplicación 🚀
│   └── vite-env.d.ts      # Definiciones de TypeScript para Vite 🔧
├── .env                   # Variables de entorno (ignoradas por Git) 🔒
├── .gitignore             # Archivos ignorados por Git 🚫
├── eslintrc.json          # Configuración de ESLint (si está presente) 🛠️
├── index.html             # Archivo HTML base 📄
├── package-lock.json      # Lock de dependencias 🔗
├── package.json           # Configuración de dependencias y scripts 📋
├── tsconfig.json          # Configuración de TypeScript 🔧
├── tsconfig.node.json     # Configuración de TypeScript para Node 🔧
├── vite.config.ts         # Configuración de Vite ⚙️
└── README.md              # Este archivo 📖
```

---

## Requisitos Previos ✅
Antes de instalar y ejecutar el proyecto, asegúrate de tener lo siguiente:
- **Node.js**: Versión 16.x o superior (descarga desde [nodejs.org](https://nodejs.org/)). 🌱
- **npm**: Viene con Node.js, pero puedes actualizarlo con `npm install -g npm`. 📦
- **Git**: Para clonar el repositorio (descarga desde [git-scm.com](https://git-scm.com/)). 📡
- Un editor de código como **VS Code** (recomendado). ✍️

---

## Instalación 🔧
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/MiguelCarlosRojas/portafolio.git
   cd Portfolio
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno** (opcional):
   - Crea un archivo `.env` en la raíz del proyecto.
   - Añade variables si las necesitas, por ejemplo:
     ```
     VITE_API_TRANSLATE_URL=https://cloudtranslator.onrender.com/api/translate
     ```
   - Nota: El archivo `.env` está ignorado por `.gitignore` para proteger datos sensibles. 🔒

---

## Ejecución ▶️
1. **Modo Desarrollo**:
   - Inicia el servidor de desarrollo con Vite:
     ```bash
     npm run dev
     ```
   - Abre tu navegador en `http://localhost:5173` (o el puerto que indique la consola). 🌐

2. **Construcción para Producción**:
   - Genera una versión optimizada:
     ```bash
     npm run build
     ```
   - Los archivos generados estarán en la carpeta `dist/`. 📂

3. **Vista previa de la build**:
   - Prueba la versión de producción localmente:
     ```bash
     npm run preview
     ```

---

## Uso 🖱️
- **Navegación**: Usa la barra de navegación para moverte entre secciones ("Sobre mí", "Habilidades", "Proyectos", "Contacto", "Pie de página"). 🌐
- **Cambio de idioma**: Haz clic en la bandera en la barra de navegación para alternar entre español e inglés. 🌍
- **Descarga del CV**: En la sección de encabezado, haz clic en "Descargar CV" para obtener el archivo PDF. 📑
- **Proyectos**: Explora los proyectos destacados con iframes y enlaces a versiones en vivo. 🖼️
- **Contacto**: Usa el botón de WhatsApp en la sección "Available" para contactarme directamente. 📱

---

## Archivos y Carpetas 📁
### `src/assets/`
- No visible en la estructura, pero típicamente contiene imágenes e íconos (puedes añadirlo si usas `profile.jpg`, `whatsapp.webp`, etc.). 🖼️

### `src/pages/`
- **Portfolio.tsx**: Componente principal que une todos los subcomponentes y maneja el estado del idioma y la carga. 🌟
- **components/**:
  - `About.tsx`: Sección "Sobre mí" con información personal y profesional. ℹ️
  - `Available.tsx`: Sección de disponibilidad con botón de WhatsApp. ✅
  - `Footer.tsx`: Pie de página con información adicional. 📝
  - `Header.tsx`: Encabezado con foto de perfil, texto animado y enlace al CV. 🖼️
  - `Navbar.tsx`: Barra de navegación con menú hamburguesa responsivo y cambio de idioma. 🌐
  - `Projects.tsx`: Muestra proyectos destacados con iframes y enlaces. 🚧
  - `Skills.tsx`: Sección de habilidades (puede incluir lista de tecnologías o certificaciones). 🎓

### `src/routes/`
- `index.tsx`: Configuración de rutas si usas un enrutador (puede estar vacío o no implementado aún). 🗺️

### `src/styles/`
- Archivos CSS optimizados con variables CSS:
  - `about.css`: Estilos para la sección "Sobre mí". ℹ️
  - `available.css`: Estilos para la sección de disponibilidad. ✅
  - `body.css`: Estilos globales para el cuerpo de la página. 🌐
  - `footer.css`: Estilos para el pie de página. 📝
  - `header.css`: Estilos para el encabezado. 🖼️
  - `loader.css`: Estilos para el overlay de carga. ⏳
  - `navbar.css`: Estilos para la barra de navegación. 🌐
  - `projects.css`: Estilos para la sección de proyectos. 🚧
  - `skills.css`: Estilos para la sección de habilidades. 🎓

### `src/translation/`
- `translate.tsx`: Objeto con traducciones en español e inglés. 🌐

### `src/utils/`
- `types.ts`: Definiciones de tipos TypeScript para props de componentes. 🔧

### `src/views/pdf/`
- `CURRICULUM-CARLOS-ROJAS-MIGUEL-ANGEL.pdf`: Currículum descargable. 📑

### Raíz del proyecto
- `App.tsx`: Componente raíz que puede renderizar `Portfolio.tsx` o gestionar la aplicación. 🌱
- `index.css`: Estilos globales adicionales. 🎨
- `main.tsx`: Punto de entrada que renderiza la aplicación. 🚀
- `vite-env.d.ts`: Definiciones de TypeScript para Vite. 🔧
- `.env`: Variables de entorno (no subidas a Git). 🔒
- `.gitignore`: Ignora `node_modules`, `dist`, `.env`, etc. 🚫
- `eslintrc.json`: Configuración de ESLint (si está presente). 🛠️
- `index.html`: Archivo HTML base. 📄
- `package-lock.json`: Lock de dependencias. 🔗
- `package.json`: Configuración de dependencias y scripts. 📋
- `tsconfig.json`: Configuración de TypeScript. 🔧
- `tsconfig.node.json`: Configuración de TypeScript para Node. 🔧
- `vite.config.ts`: Configuración de Vite. ⚙️

---

## Personalización 🎨
1. **Cambiar contenido**:
   - Edita las traducciones en `src/translation/translate.tsx`. 🌐
   - Actualiza el CV en `src/views/pdf/` o añade imágenes en `src/assets/` si las usas. 📑🖼️

2. **Añadir secciones**:
   - Crea un nuevo componente en `src/pages/components/` (por ejemplo, `Contact.tsx`). 🧩
   - Añade su CSS en `src/styles/` y vincúlalo en el componente. 🎨
   - Inclúyelo en `Portfolio.tsx` o `App.tsx`. 🌟

3. **Estilos**:
   - Modifica las variables CSS en `:root` dentro de cada archivo `.css` para ajustar colores, tamaños, etc. 🎨

4. **Proyectos**:
   - Agrega más `<div className="project-card">` en `Projects.tsx` con nuevos iframes y descripciones. 🚧

---

## Contribuciones 🤝
¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:  
1. Haz un fork del repositorio. 🍴  
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`). 🌿  
3. Realiza tus cambios y haz commit (`git commit -m "Añadí nueva funcionalidad"`). ✅  
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`). 📤  
5. Abre un Pull Request. 🚀  

---

## Contacto 📧
- **Autor**: Miguel Angel Carlos Rojas 🎓  
- **LinkedIn**: [linkedin.com/in/miguelacarlos](https://www.linkedin.com/in/miguelacarlos/) 💼  
- **GitHub**: [github.com/MiguelCarlosRojas](https://github.com/MiguelCarlosRojas) 👨‍💻  
- **WhatsApp**: [wa.me/914793557](https://wa.me/914793557) 📱  
- **Email**: [isakiangel6@gmail.com](mailto:isakiangel6@gmail.com) ✉️  

Gracias por visitar mi portafolio. ¡Espero colaborar contigo pronto! 🙌