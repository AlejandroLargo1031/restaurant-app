# Oceans Full Stack Challenge

## Instrucciones Generales

### 1. Clona el repositorio y entra a la carpeta raíz

### 2. Configura y ejecuta el Backend

1. Ve a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo `.env.example` a `.env` y configura tus variables de entorno.
4. Ejecuta el servidor en desarrollo:
   ```
   npm run dev
   ```

#### Endpoints principales Backend
- `GET /products` — Listar productos
- `POST /products` — Crear producto
- `GET /orders` — Listar órdenes
- `POST /orders` — Crear orden

#### Estructura Backend
- `src/models/` — Modelos Sequelize
- `src/routes/` — Rutas de la API
- `src/sequelize.ts` — Conexión a PostgreSQL
- `src/index.ts` — Entrada principal

---

### 3. Configura y ejecuta el Frontend

1. Ve a la carpeta `frontend`:
   ```
   cd ../frontend
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Ejecuta la app en modo desarrollo:
   ```
   npm run dev
   ```
4. Abre la URL que te muestra la terminal (por defecto: http://localhost:5173)

#### Estructura Frontend
- `src/components/` — Componentes reutilizables
- `src/pages/` — Vistas principales
- `src/api/` — Lógica de consumo de API
- `src/types/` — Tipos y modelos TypeScript

---

## 4. Uso con Docker

### Levantar backend y base de datos con Docker Compose

1. Ve a la carpeta `backend`:
   ```
   cd backend
   ```
2. Construye y levanta los servicios:
   ```
   docker compose up --build
   ```
3. Si cambiaste la contraseña de postgres o tienes errores de autenticación, elimina el volumen de datos:
   ```
   docker compose down
   docker volume rm backend_postgres-data
   docker compose up --build
   ```
4. El backend estará disponible en `http://localhost:4000` y la base de datos en el puerto `5432`.

### Variables de entorno
- El backend y la base de datos usan las variables definidas en `docker-compose.yml`.
- El frontend debe consumir la API usando la variable de entorno `VITE_API_URL` en su `.env`:
  ```env
  VITE_API_URL=http://localhost:4000
  ```

---

## Notas
- Asegúrate de tener Docker y Docker Compose instalados si usas la opción con contenedores.
- Puedes usar Postman para probar los endpoints del backend.
- El frontend consume la API del backend en `http://localhost:4000` por defecto (ajusta la variable de entorno si es necesario). 