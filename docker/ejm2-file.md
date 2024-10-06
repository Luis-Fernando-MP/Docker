[MD principal](./README.md)

# Docker multi-stage builds

## Ejemplo **Dockerfile por etapas**

- [Enlace a Dockerfile](./Dockerfile.ejm2)

```yaml
FROM node:18-alpine3.16 as install # Etapa install

LABEL stage=install # Etiqueta de la etapa

RUN npm install -g pnpm

WORKDIR /src/install # Establece el directorio de trabajo en /src/install

COPY package.json pnpm-lock.yaml ./

RUN pnpm i


FROM node:18-alpine3.16 as build # Etapa build

LABEL stage=build

RUN npm install -g pnpm

WORKDIR /src/build

COPY --from=install /src/install .
# Se copia el contenido de la etapa install al directorio de la etapa build

COPY . .

RUN pnpm run build

RUN pnpm i -P # Se instala solo las dependencias de producción

FROM node:18-alpine3.16 as deploy

WORKDIR /app

COPY --from=build /src/build/dist/main.js index.js

COPY --from=build /src/build/node_modules node_modules
# Se copian las dependencias desde la etapa build

ENTRYPOINT ["node", "."]
# ejecuta la aplicación
```
