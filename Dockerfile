FROM node:18-alpine3.16 as install
LABEL stage=install
RUN npm install -g pnpm
WORKDIR /src/install
COPY package.json pnpm-lock.yaml ./
RUN pnpm i


FROM node:18-alpine3.16 as build
LABEL stage=build
RUN npm install -g pnpm
WORKDIR /src/build
COPY --from=install /src/install .
COPY . .
RUN pnpm run build
RUN pnpm i -P


FROM node:18-alpine3.16 as deploy
WORKDIR /app
COPY --from=build /src/build/dist/main.js index.js
COPY --from=build /src/build/node_modules node_modules


ENTRYPOINT node .