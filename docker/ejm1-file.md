[MD principal](./README.md)

### **Ejemplo Dockerfile 1**

[Enlace a Dockerfile.dev](./Dockerfile.ejm1)

```Dockerfile
FROM node:18-alpine3.16
# Usamos una imagen base de Node.js (versión 18) sobre Alpine Linux 3.16 (una versión ligera de Linux).

RUN npm install -g pnpm
# Instalamos globalmente `pnpm`, una alternativa más eficiente a npm.

WORKDIR /app/
# Definimos el directorio de trabajo dentro del contenedor como `/app/`.

COPY package.json pnpm-lock.yaml ./
# Copiamos los archivos `package.json` y `pnpm-lock.yaml` al directorio de trabajo (`/app`).

RUN pnpm i

EXPOSE 3000
# Expone el puerto 3000

COPY . .
# Copiamos todo el contenido del directorio local al contenedor.

# IMPORTANTE: Si usamos la forma de shell, el proceso se ejecuta a través de un ('sh -c')
# y no recibe las señales del sistema operativo directamente. Esto puede dificultar el cierre adecuado del contenedor. Ejemplo de forma shell:
# ENTRYPOINT pnpm start:dev

# Ejecutar el proceso directamente sin shell intermedio, asegura que el proceso principal (pnpm) reciba las señales del sistema para una parada limpia.
ENTRYPOINT ["pnpm", "start:dev"]
```
