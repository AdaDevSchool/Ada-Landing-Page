## CONSTRUCCION DE ASISTENETE INTELIGENTE DE IA PARA NEGOCIOS --
## E-Comerce BOT-HELPER

### A diferencias de otros chatbots, este asistente tendras mas capacidades como :

1. Capacidad para distingir cuando consultar la base de datos, y cuando responder directamente.
2. Herremientas configurables informacion de productos reales.
3. Recordar partes de conversaciones pasadas.
4. Capacidad de tomar multiples procesos o decisiones como, percibir, planear, actuar, y responder al usuario.




## Stack a manejar

1. LangGraph, mongoDB, Google Gemini


## PASO A PASO

1. Instalacion de tpescript, npm init.
2. Creacion de index.ts.
3. Colacar estos scripts en nuestro package.json : 
"dev": "npx ts-node index.ts", // Inicito del servidor
"seed": "npx ts-node seed-database.ts" // Inicio Base de Datos
4. Instalacion de express mongodb cors @langchain/google-genai (Sirve para trabajar con GEMINI) @langchain/core @langchain/langgraph @lanchain/langgraph-cheackpoint-mongodb @langchain/mongodb dotenv langchain zod @types/cors @types/express ts-node
5. mover ts-node types/express types/cores , mejor a devDependencies.
6. Comienzo de configuracion y programacion de index.ts
7. Creacion de archivo .env para almacenamiento de claves de seguridad
8. Creacion de cuenta y configuracion de Base de datos con mongo DB
9. Concexion de la Base de datos con MongoDb con nuestra APP.
10. Visitar Google CLoud para utilizar API . console.cloud.google.com -> API y Servicios -> Credenciales - Crear Credenciales y Crear clave API , copiar la clave, y ponerla en el archivo .env
11. Segimos configurando index.ts