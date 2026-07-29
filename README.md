# Portafolio Personal - Miguel Angel Carlos Rojas

Bienvenido a mi portafolio personal. Este proyecto es una aplicacion web disenada para mostrar mis habilidades, experiencia laboral, proyectos destacados y disponibilidad para colaborar en nuevos retos. Construido con tecnologias modernas, este portafolio es completamente responsivo y esta optimizado para una experiencia de usuario fluida.

## Tabla de Contenidos
- [Caracteristicas](#caracteristicas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalacion](#instalacion)
- [Ejecucion](#ejecucion)
- [Uso](#uso)
- [Personalizacion](#personalizacion)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

---

## Caracteristicas
- **Diseno Responsivo**: Adaptado para dispositivos moviles, tabletas y escritorios.
- **Secciones Interactivas**: Navegacion fluida entre Header, Carreras, Experiencia, Educacion, Proyectos y Contacto.
- **Proyectos Destacados**: Muestra proyectos con imagenes, descripciones y enlaces directos.
- **Experiencia Laboral**: Timeline cronologico de experiencias profesionales con logos de empresas.
- **Formulario de Contacto**: Integracion con EmailJS para envio de correos directos.
- **Botones de Redes**: Enlaces directos a LinkedIn, GitHub, YouTube y WhatsApp.

---

## Tecnologias Utilizadas
- **Frontend**:
  - React 18 (con JavaScript)
  - Vite (herramienta de construccion y desarrollo)
- **Estilos**:
  - CSS Modules para estilos componentizados
  - Animaciones con Framer Motion
- **Herramientas**:
  - Git y GitHub para control de versiones
  - Node.js y npm para gestion de dependencias
  - EmailJS para envio de correos
- **Despliegue**:
  - Vercel / Netlify (estatico)

---

## Estructura del Proyecto
```
PORTFOLIO/
├── src/
│   ├── assets/                    # Recursos estaticos
│   │   ├── certificates/          # Imagenes de certificados
│   │   ├── experiences/           # Logos de empresas
│   │   ├── Ilustrations/          # Ilustraciones decorativas
│   │   └── projects/              # Imagenes de proyectos
│   ├── data/                      # Datos del portafolio
│   │   ├── dataCareers.jsx        # Informacion de carreras/habilidades
│   │   ├── dataEducation.jsx      # Formacion academica
│   │   ├── dataExperiences.jsx    # Experiencia laboral
│   │   ├── dataInstitutions.jsx   # Instituciones educativas
│   │   ├── dataProjects.jsx       # Proyectos destacados
│   │   └── dataTools.jsx          # Herramientas y tecnologias
│   ├── pages/                     # Paginas de la aplicacion
│   │   ├── detailEducation/       # Detalle de formacion
│   │   ├── detailProject/         # Detalle de proyectos
│   │   └── home/                  # Pagina principal
│   │       └── sections/          # Secciones del home
│   │           ├── careers/       # Seccion de carreras
│   │           ├── contact/       # Formulario de contacto
│   │           ├── education/     # Formacion academica
│   │           ├── experience/    # Experiencia laboral
│   │           ├── header/        # Encabezado con CV
│   │           ├── nav/           # Navegacion
│   │           └── projects/      # Proyectos destacados
│   ├── routes/                    # Enrutamiento
│   │   └── AppRouter.jsx
│   ├── shared/                    # Componentes compartidos
│   │   ├── components/            # Componentes reutilizables
│   │   │   ├── accordion/
│   │   │   ├── backButton/
│   │   │   ├── cardProject/
│   │   │   ├── cardTitle/
│   │   │   ├── carousel/
│   │   │   ├── chip/
│   │   │   ├── feedback/
│   │   │   ├── footer/
│   │   │   ├── lazyImage/
│   │   │   ├── primaryButton/
│   │   │   ├── sectionHead/
│   │   │   ├── snackbar/
│   │   │   ├── socialButton/
│   │   │   ├── textField/
│   │   │   └── tooltip/
│   │   ├── context/               # Contexto de React
│   │   ├── hooks/                 # Hooks personalizados
│   │   └── utils/                 # Funciones utilitarias
│   ├── App.jsx                    # Componente raiz
│   └── main.jsx                   # Punto de entrada
├── public/                        # Archivos publicos
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## Requisitos Previos
Antes de instalar y ejecutar el proyecto, asegurate de tener lo siguiente:
- **Node.js**: Version 18.x o superior (descarga desde [nodejs.org](https://nodejs.org/))
- **npm**: Viene con Node.js
- **Git**: Para clonar el repositorio (descarga desde [git-scm.com](https://git-scm.com/))
- Un editor de codigo como **VS Code** (recomendado)

---

## Instalacion
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/MiguelCarlosRojas/Portfolio.git
   cd Portfolio
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno** (opcional para EmailJS):
   - Crea un archivo `.env` en la raiz del proyecto.
   - Aniade las variables de EmailJS:
     ```
     VITE_EMAILJS_SERVICE_ID=tu_service_id
     VITE_EMAILJS_TEMPLATE_ID=tu_template_id
     VITE_EMAILJS_PUBLIC_KEY=tu_public_key
     ```

---

## Ejecucion
1. **Modo Desarrollo**:
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:5173`

2. **Construccion para Produccion**:
   ```bash
   npm run build
   ```
   Los archivos generados estaran en la carpeta `dist/`.

3. **Vista previa de la build**:
   ```bash
   npm run preview
   ```

---

## Uso
- **Navegacion**: Usa la barra de navegacion para moverte entre secciones.
- **Descarga del CV**: En la seccion de encabezado, haz clic en "Descargar CV" para obtener el archivo PDF en nueva pestaña.
- **Proyectos**: Explora los proyectos destacados con imagenes y enlaces.
- **Experiencia**: Revisa mi trayectoria profesional completa.
- **Contacto**: Usa el formulario, email, LinkedIn o WhatsApp para contactarme.

---

## Personalizacion
1. **Cambiar contenido**:
   - Edita los archivos en `src/data/` para actualizar informacion.
   - Actualiza el CV en `src/assets/CURRICULUM-CARLOS-ROJAS-MIGUEL-ANGEL.pdf`.

2. **Aniadir proyectos**:
   - Agrega imagenes en `src/assets/projects/`.
   - Actualiza `src/data/dataProjects.jsx`.

3. **Aniadir experiencias**:
   - Agrega logos en `src/assets/experiences/`.
   - Actualiza `src/data/dataExperiences.jsx`.

4. **Estilos**:
   - Modifica los archivos `.module.css` en cada componente.

---

## Contribuciones
Las contribuciones son bienvenidas:
1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit.
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Contacto
- **Autor**: Miguel Angel Carlos Rojas
- **LinkedIn**: [linkedin.com/in/miguelacarlos](https://www.linkedin.com/in/miguelacarlos/)
- **GitHub**: [github.com/MiguelCarlosRojas](https://github.com/MiguelCarlosRojas)
- **WhatsApp**: [+51 993 857 362](https://api.whatsapp.com/send?phone=51993857362)
- **Email**: [isakiangel6@gmail.com](mailto:isakiangel6@gmail.com)

Gracias por visitar mi portafolio. Espero colaborar contigo pronto!
