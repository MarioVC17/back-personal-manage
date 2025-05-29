<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Una API RESTful construida con <a href="http://nodejs.org" target="_blank">Node.js</a> y el framework progresivo <a href="http://nestjs.com/" target="_blank">NestJS</a> para la gestión de personal.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  </p>

## Descripción

Este es un backend construido con NestJS para la gestión de información del personal. Proporciona una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la información de las personas, así como funcionalidades de autenticación básica.

## Funcionalidades Implementadas

* **Gestión de Personas:**
    * **Crear Persona:** Permite agregar nueva información de personal (nombre, apellido, email, teléfono, posición, departamento, fecha de contratación, salario).
    * **Leer Personas:** Permite obtener una lista paginada de todas las personas.
    * **Leer Persona por ID:** Permite obtener la información detallada de una persona específica utilizando su ID.
    * **Actualizar Persona:** Permite modificar la información existente de una persona.
    * **Eliminar Persona:** Permite eliminar la información de una persona.
* **Autenticación:**
    * **Registro de Usuario:** Permite crear nuevas cuentas de usuario.
    * **Inicio de Sesión:** Permite a los usuarios autenticarse y obtener un token JWT.
    * **Protección de Rutas:** Las rutas de gestión de personas están protegidas y requieren un token JWT válido para acceder.
* **Configuración Segura:** Se utiliza un archivo `.env` para almacenar información sensible como la URI de conexión a MongoDB y la clave secreta de JWT.

## Configuración del Proyecto

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/).

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone <tu_repositorio_url>
    cd tu_proyecto_backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea el archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes usar el `.env.example` como plantilla:
    ```
    MONGODB_URI=tu_uri_de_mongodb_aqui
    JWT_SECRET=tu_clave_secreta_aqui
    JWT_EXPIRES_IN=1d
    ```

## Ejecución de la Aplicación

```bash
# Modo de desarrollo (con recarga automática)
npm run start:dev

# Modo de producción
npm run start:prod
