### PULL

-Descarga una imagen de ubuntu

```shell
❯ docker pull ubuntu
```

### HISTORY

- Podemos ver el historial de las imagenes que hemos descargado

```shell
❯ docker history ubun
```

### CREATE

- Creamos nuestras propias imágenes, muy util

```shell
❯ docker pull ubuntu
❯ docker run --name ubu -it ubuntu
- apt-get update && apt-get upgrade
- apt-get install vim ranger bat
❯ docker commit [container] bun
#bun seria la nueva imagen configurada
❯ docker run -it bun
#podemos tener varios contenedores de esta nueva imagen
```

### CREATE FROM DOCKER FILE

- Los comandos asi como la imagen que usaremos sera configuradas en un archivo llamado dockerfile

```shell
❯ docker build -t img -f ./imagenes/Dockerfile.uno .
❯  docker run -it img
❯  docker rm $(docker ps -aq -f status=exited)
❯  docker rmi $(docker images -q -f dangling=true)
```
