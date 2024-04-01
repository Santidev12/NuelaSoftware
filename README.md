# Aplicación de Gestión de Asignaturas - Nuela

Este es un proyecto de una aplicación web desarrollada con React y Typescript para visualizar las asignaturas y las horas de un profesor. La aplicación sigue las especificaciones proporcionadas en la prueba técnica para desarrolladores Full Stack de Nuela.

## Funcionalidades Clave

- Visualización del listado de asignaturas con sus horas correspondientes.
- Visualización del detalle de cada asignatura al hacer clic en el icono de los tres puntos.
- Implementación de git-flow para el control de versiones.
- Uso de una librería de estilos, en este caso, Tailwind CSS y Shadcn/ui, para el diseño y la maquetación.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas estándar para una aplicación React. Aquí hay una breve descripción de las carpetas principales:

- **src/components:** Contiene los componentes reutilizables utilizados en la aplicación, como botones, diálogos, etc.
- **src/pages:** Contiene las páginas principales de la aplicación, como la página principal (Home).
- **src/lib:** Contiene archivos y utilidades de apoyo, como funciones de utilidad, configuraciones, etc.
- **public:** Contiene archivos estáticos, como imágenes y el archivo HTML base.

# Explicación del Código

El proyecto es una aplicación web desarrollada con React y TypeScript que muestra un listado de asignaturas y las horas totales que tiene un profesor.

## Componente Home()

El componente Home es la página principal de la aplicación, donde se muestran los datos del usuario y las asignaturas.

#### Obtención de Datos de Usuario
Utiliza el hook `useUser` de la librería Clerk para obtener información del usuario autenticado, como el nombre y el correo electrónico.

### Efectos de React
#### Primer Efecto
Utiliza `useEffect` para obtener el nombre y correo del usuario y actualizar el estado local.

#### Segundo Efecto
Realiza una solicitud HTTP GET con Axios para obtener los datos de las asignaturas desde un servidor simulado. Los datos se almacenan en el estado local (useState) para su uso posterior.


## Otros Componentes dentro de Home

### Dialogo de Formulario (DiagloDemo) 
Este componente representa un diálogo de demostración que se puede abrir haciendo clic en un botón. Aunque no se proporciona una explicación detallada de su funcionamiento en el README, se puede inferir que es parte de la funcionalidad de la aplicación relacionada con la visualización y manipulación de datos.

### TableDashboard

El componente `TableDashboard` muestra una tabla con información detallada de las asignaturas. Es esencial para visualizar y administrar las asignaturas en la aplicación.

#### Funcionalidades Destacadas

- **Visualización de Datos**: Realiza una solicitud GET al servidor para obtener los datos de las asignaturas y los muestra en una tabla.
- **Eliminación de Asignaturas**: Permite eliminar asignaturas utilizando una solicitud DELETE al servidor.

### Componentes Utilizados

- **Table**: Organiza los datos de las asignaturas en una tabla.
- **AlertDialogForm**: Muestra detalles completos de una asignatura en un diálogo.
- **EditDialogForm**: Permite editar la información de una asignatura en un diálogo.
- **DeleteDialog**: Solicita confirmación antes de eliminar una asignatura.

### Solicitud Axios

El componente utiliza Axios para realizar solicitudes GET y DELETE al servidor para obtener y eliminar asignaturas, respectivamente.


- **Dialogo de Edición (EditDialogForm)**: Este diálogo se utiliza para editar la información de una asignatura específica. Al hacer clic en el botón "Editar" dentro de la fila de una asignatura en la tabla de datos, se abre este diálogo, que muestra un formulario prellenado con la información actual de la asignatura. Los usuarios pueden modificar esta información y guardar los cambios. La utilización de Axios se observa en la solicitud para cargar los datos de la asignatura desde el servidor al abrir el diálogo de edición.

- **Diálogo de Visualización (ViewDialogForm)**: Este diálogo se utiliza para visualizar la información detallada de una asignatura. Al hacer clic en el icono de "Ver" dentro de la fila de una asignatura en la tabla de datos, se abre este diálogo, que muestra la información completa de la asignatura en un formato legible para el usuario. No se utilizan solicitudes Axios directamente en este componente, ya que muestra solo datos existentes.

- **Diálogo de Eliminación (DeleteDialog)**: Este diálogo se utiliza para confirmar la eliminación de una asignatura. Al hacer clic en el icono de "Eliminar" dentro de la fila de una asignatura en la tabla de datos, se abre este diálogo, que solicita al usuario que confirme la eliminación de la asignatura. Si el usuario confirma, la asignatura se elimina de la lista. No se realizan solicitudes Axios directamente en este componente, pero se espera que el evento de eliminación desencadene una solicitud DELETE al servidor.

Estos componentes adicionales dentro de Home son fundamentales para proporcionar una experiencia de usuario completa en la aplicación, permitiendo la interacción con los datos y la navegación entre las diferentes vistas.


### Librerías y Dependencias

- **axios**: Se utiliza para realizar solicitudes HTTP al servidor JSON simulado y obtener los datos de las asignaturas.
- **@clerk/nextjs**: Proporciona el hook `useUser` para obtener información del usuario actualmente autenticado.
- **Shadcn/ui**: Librería de estilos utilizada para estilizar los componentes de la interfaz de usuario.


### Estilo y Diseño

- Se utiliza Tailwind CSS como librería de estilos para una apariencia moderna y responsiva.
- Se implementan las pestañas y el diseño de la tabla según los diseños proporcionados en Figma, prestando especial atención a la usabilidad y la aproximación correcta de los diseños.

### Uso de JSON Server

JSON Server es una herramienta que proporciona una API REST completa basada en un archivo JSON. Es especialmente útil durante el desarrollo de aplicaciones web, ya que permite simular un servidor API sin la necesidad de configuraciones complicadas ni una base de datos real.

- **Facilidad de Uso**: JSON Server es extremadamente fácil de configurar y usar. Se ejecuta un comando para iniciar el servidor y está listo para manejar solicitudes HTTP basadas en un archivo JSON.

- **Configuración Mínima**: No se requiere configuración adicional para empezar a usar JSON Server. Solo se necesita un archivo JSON que contenga los datos que se quieren exponer a través de la API.

- **API REST Completa**: Implementa una API REST completa que soporta todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos del archivo JSON. Esto incluye rutas para obtener todos los recursos, obtener un recurso por su ID, agregar un nuevo recurso, actualizar un recurso existente y eliminar un recurso.

- **Versatilidad**: JSON Server puede ser utilizado en una variedad de entornos de desarrollo, incluyendo entornos locales, servidores de prueba y entornos de desarrollo en la nube. Esto lo hace ideal para el desarrollo de aplicaciones web en cualquier contexto.

- **Ideal para Desarrollo Frontend**: Es particularmente útil para desarrolladores frontend que necesitan un servidor API simulado para probar y desarrollar sus aplicaciones sin depender de un backend real.

En resumen, JSON Server es una herramienta esencial para el desarrollo de aplicaciones web, ya que simplifica la creación de servidores API simulados y proporciona una API REST completa de manera rápida y sencilla.


### Otros Aspectos

- **Git-flow**: Se sigue un flujo de trabajo de git-flow para el desarrollo del proyecto, con ramas de características, de desarrollo y de lanzamiento según sea necesario.

#### Propuesta de Gestión de Ramas

Aunque el proyecto actual no implementa explícitamente el flujo de trabajo de git-flow con ramas de desarrollo, lanzamiento y producción, se propone seguir estas convenciones para mantener un flujo de trabajo organizado y eficiente en futuras iteraciones del proyecto.

- **Rama de Desarrollo (development)**: Se utilizaría para el trabajo principal del proyecto, fusionando todas las ramas de características (feature branches) una vez completadas y probadas.

- **Rama de Lanzamiento (release)**: Se crearía cuando se esté preparando una nueva versión para ser lanzada, realizando las últimas pruebas, ajustes finales y preparativos antes del lanzamiento.

- **Rama de Producción (main)**: Representaría la versión en producción de la aplicación, fusionando la rama de lanzamiento cuando una versión está lista para ser desplegada en el entorno de producción.

Aunque esta propuesta no está implementada en el proyecto actual, su adopción facilitaría el desarrollo, prueba y despliegue de nuevas versiones de la aplicación de manera ordenada y controlada en futuras iteraciones.


## Ejecución del Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. En una terminal, ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.
5. En otra terminal, ejecuta `npm run json-server` para iniciar el servidor JSON simulado.
6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.