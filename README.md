Objetivo
En esta actividad vamos a integrar y poner en práctica todo lo que sabemos acerca de
Next.js, construyendo una API, integrando la misma con el front end y desplegando la
aplicación completa en producción utilizando Vercel.
Instrucciones y requisitos de entrega
Paso 0: Setup inicial
Para iniciar nuestro trabajo, vamos a partir del repositorio que se encuentra en el link al final
de esta consigna. Allí, encontraremos un proyecto creado utilizando el template de Next.js,
con un setup mínimo que nos permitirá avanzar más rápido con las consignas que se
encuentran a continuación. El primer paso, entonces, es clonar el repositorio e instalar las
dependencias mediante el comando npm install (o yarn install).

1

Paso 1: Creamos la API
Una vez que tenemos creado el proyecto, comenzaremos creando nuestra API utilizando las
API Routes. Para ello, dentro de la ruta pages/api, encontraremos un archivo db.ts, el cual
contendrá la información que necesitaremos para realizar esta tarea. Debemos crear un
archivo para cada ruta (products.ts y tycs.ts). Dentro de cada uno de ellos, crearemos
nuestra función handler que retornará la información que consumiremos luego desde el front
end de la aplicación. Para mayor información acerca de cómo crear un handler, pueden
revisar la documentación oficial.
Si todo salió bien, podremos ver la información accediendo a los endpoints de la API
(recordemos levantar el proyecto para que podamos acceder):
● http://localhost:3000/api/products
● http://localhost:3000/api/tycs
Paso 2: Desplegamos nuestra API con Vercel
Ahora que tenemos nuestra API funcionando, vamos a desplegar la misma en producción
para poder luego consumir los recursos en el front end de la aplicación. Para poder hacer
esto, será necesario que realicen un push del repositorio en GitHub, ya que utilizaremos
dicho repositorio dentro de la plataforma de Vercel.
Una vez que tengamos nuestro proyecto en GitHub, crearemos un nuevo proyecto dentro de
Vercel, importamos el repositorio y realizamos el despliegue del mismo. Al finalizar,
podremos ver la información que nos devuelve cada API Route ingresando en el endpoint
correspondiente:
● ${urlDelProyecto}/api/products
● ${urlDelProyecto}/api/tycs
Paso 3: Creamos el front end
Con nuestra API desplegada, vamos a ocuparnos del front end. En primer lugar, crearemos la
página de productos destacados. Para ello, podremos inspeccionar el archivo index.tsx que
se encuentra dentro de la carpeta pages. Allí, encontraremos que dicha página actualmente

2

está consumiendo mock data. Deberán reemplazar dicha información por aquella que
proviene de la API. Un dato a tener en cuenta es que, si bien la lista de productos se
encuentra en un archivo estático, vamos a asumir que la misma puede cambiar de tiempo en
tiempo. Por lo que para hacernos de la información, debemos utilizar un método que nos
permita obtenerla al momento en que se carga la página, sin necesidad de volver a generar
un nuevo build.
Por otra parte, el segundo paso será renderizar la página de términos y condiciones. Dicha
página, al igual que la anterior, se encuentra maquetada utilizando mock data, por lo que la
tarea es similar al paso anterior. Pero, en este caso, dado que es poco probable que los
términos y condiciones se actualicen periódicamente, vamos a utilizar un método que nos
permita hacer prefetching de la información al momento de realizar el build, ya que de esta
manera vamos a acelerar el tiempo de carga inicial de dicha página.
Paso 4: Desplegamos la aplicación
Ahora que tenemos nuestra aplicación terminada, vamos a desplegarla en Vercel. Para esto,
simplemente debemos realizar un commit de los cambios introducidos y luego un push a la
rama principal. Luego de un par de segundos, podremos ver desplegada nuestra aplicación
en la URL que Vercel nos indicó al crear el proyecto.
¡Felicitaciones! Han conseguido desplegar una aplicación completa en producción.
# tienda-libre
# tienda-libre
