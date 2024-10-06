# Curso docker

## Comandos

```bash
❯ systemctl start docker
```

### corre e instala una imagen

```shell
❯ docker run [imagen]
#para solo instalar es
❯ docker pull [imagen]:[version por defecto latest]
```

### lista las contenedores activos o imágenes

```shell
docker [ps|images]
```

### Contenedores PS

- todos
- los últimos
- los ids de los
- el peso virtual

```shell
❯ docker ps [-a|-l|-q|-s]
```

### modo IT

- -it interactivo
- Reingresar: docker start -i [(nombre)mysql]

```shell
❯ docker run -it --name mysql -e MYSQL_ROOT_PASSWORD=ju mysql
❯ docker run -it --name mi_debian debian bash

❯ docker start mi_debian
❯ docker exec -it mi_debian bash
```

### modo Detach

- lo inverso a IT

```shell
❯ docker run -d nginx
```

### Borrar

- rm (para imágenes y contenedores)
- se puede usar rmi para imágenes
- también se puede usar kill

```shell
❯ docker rm [contenedor|imagen]
❯ docker rm $(docker ps -aq -f status=exited)
```

### Logs

```shell
❯ docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=ju mysql
❯ docker logs [nombreContenedor]
❯ docker logs [nombreContenedor] --tail [numero de lineas]
```

### Stats

-Sirve para las estadísticas de la maquina virtual

```shell
❯ docker stats [nombreContenedor]
#CONTAINER ID   NAME      CPU %     MEM USAGE ...
#bd52f8aef914   mysql     0.70%     364.4MiB / 7...
```
