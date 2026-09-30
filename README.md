# Musica API

API REST para gestionar canciones, hecha con Node.js, Express y MongoDB (Mongoose).
Sigue el mismo esquema del proyecto [node-api-mongo](https://github.com/samuelprado20/node-api-mongo), adaptado al tema de música.

## Estructura

```
musica-api/
├── app.js               # configuración de Express y rutas
├── index.js             # conexión a MongoDB y arranque del servidor
├── models/cancion.js     # esquema Mongoose de Cancion
├── controllers/cancion.js# lógica CRUD
└── routes/cancion.js     # endpoints /api/canciones
```

## Instalación

1. Copia estos archivos dentro de tu carpeta `D:\Musica` (reemplaza el `package.json` que ya tenías).
2. Instala las dependencias:
   ```
   npm install
   ```
3. Asegúrate de tener MongoDB corriendo localmente en `mongodb://127.0.0.1:27017`
   (o cambia la URL en `index.js` si usas MongoDB Atlas).
4. Inicia el servidor:
   ```
   npm start
   ```
   Por defecto corre en `http://localhost:3000`.

## Endpoints

| Método | Ruta                                  | Descripción              |
|--------|----------------------------------------|---------------------------|
| GET    | /api/canciones                        | Listar todas las canciones|
| GET    | /api/canciones/:id                    | Obtener una canción       |
| POST   | /api/canciones/guardar-cancion        | Crear una canción         |
| PUT    | /api/canciones/editar-cancion/:id     | Editar una canción        |
| DELETE | /api/canciones/eliminar-cancion/:id   | Eliminar una canción      |

## Ejemplo de body para crear una canción (POST)

```json
{
  "titulo": "Bohemian Rhapsody",
  "artista": "Queen",
  "album": "A Night at the Opera",
  "anio": 1975,
  "duracion": 355,
  "genero": "Rock",
  "colaboradores": [{ "nombre": "Freddie Mercury", "rol": "Compositor" }]
}
```
