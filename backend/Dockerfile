# Dockerfile
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración e instalación
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Expone el puerto (ajústalo si usas otro)
EXPOSE 4000

# Comando para iniciar el backend
CMD ["npm", "run", "dev"]
