#Proyecto Grupal E-Learning
# E-learning-AkademIT


## Introducción

Proyecto grupal realizado en el marco del Henry Bootcamp en el cual se espera que un grupo de alumnos integren todo lo aprendido en los últimos 4 meses y puedan desarrollar un proyecto innovador y útil para la sociedad. Es por eso que creamos AkademIT, una plataforma que ofrece formación en las últimas tecnologías y asistencia constante a los usuarios ante cualquier inconveniente que pueda surgir.

Esta plataforma permite que los alumnos puedan registrarse mediante un formulario controlado, registrarse mediante Google, iniciar sesión, buscar cursos, comprarlos, pagarlos con sus tarjetas de crédito, ver sus cursos comprados, tildar el progreso, dejar reseñas, reportar otras reseñas, eliminar reseñas propias, modificar sus datos del perfil tales como su avatar, contraseña, preferencias, entre otros y también pueden ver las compras realizadas por ellos mismos. 

En el caso de los instructores estos pueden: registrarse como cualquier usuario, iniciar sesion, modificar sus datos de perfil, crear un curso, añadirle categorias crear clases, cargar su CBU para cobrar las ganancias, ver sus ventas como instructor, editar curso, editar clase, habilitar o deshabilitar clases. 

En el caso de los Aministradores, ellos pueden : administrar cursos, aprobar o desaprobarlos, administrar clases, aprobar o desaprobarlas, eliminarlas, eliminar cursos, administrar reseñas, eliminar reseñas, ver reseñas reportadas, administrar usuarios: eliminarlos, editarlos, banearlos. Administrar ventas, marcar comisiones como pagas. Administrar categorias: agregar y eliminarlas. puedo ver las estadisticas de la pagina. Además, los administradores pueden ver el home y tambien reportar comentarios

Tecnologias utilizadas:
<br>
Lenguaje: JavaScript
<br>
Base de datos: PostgreSQL
<br>
Back-End: NodeJs, ExpressJs, Sequelize
<br>
Front-End: React, Redux, CSS

Librerias:
Mercado Pago
React-chartjs-2
React-Player
React-chat-bot
Json Web Token
Bcrypt
NodeMailer
Axios


## Para Probar el proyecto

Online:
<br>
https://akademit.vercel.app/

Local:
Despues de clonar el repositorio.
- Crear un archivo .env con las variables de entorno necesarias para la conexion a la base de datos en la carpeta api.
(DB_USER, DB_PASSWORD, DB_HOST, PORT, DB_NAME, ACCESS_TOKEN (indispensable para Mercado Pago), BASE_URL)
- Crear una base de datos con el nombre de la aplicacion y la contraseña.
- Volver al proyecto y dividir la terminal en dos
- En la primer terminal ejecutar el comando: `cd api` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar el servidor.
- En la segunda terminal ejecutar el comando: `cd client` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar el servidor.


## Imagenes

- Landing Page

![landingPage](/images/Landing-page.jpeg)


- Home

![home](/images/Home.jpeg)
![home](/images/podriagustarte.jpeg)


- Detalle del curso

![detalle del curso](/images/curso.jpeg)

-Reseñas 
![hacer reseñas](/images/hacerreseña.jpeg)

- Mercado Pago

![mercado pago](/images/mp.jpeg)

- Perfil Administrador

![perfil administrador](/images/admin.jpeg)

- Perfil Instructor

![perfil instructor](/images/instructor.jpeg)

