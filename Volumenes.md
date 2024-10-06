### LS

- Los volúmenes son la forma de almacenar la información de los contenedores de Docker

```shell
#Desde la maquina local podríamos conectar y enviar archivos al contenedor, solo entraríamos a la carpeta _data
❯ sudo su
❯ cd /var/lib/docker/volumes
❯ cd /[contenedor_id]/_data
❯ touch ejemplo.txt
#Podríamos ver el archivo ejemplo en el contenedor, y asi todo el rato, la PC y el contenedor estarían interactuando
❯ docker run --name myUbuntu -v /db -it ubuntu
❯ cd db
❯ ls
  # root@4d55a73d467c:/db# ls
  # ejemplo.txt
```

- Asi mismo podríamos cambiar la ruta, ya que tener que ubicar el folder "\_data" es muy largo, lo haríamos de esta forma:

```shell
#$(pwd)/ubuntuFolder: Es nuestra ruta actual
#db es el folder del contenedor
#Después del :/db: podemos agregar permisos, como el de solo lectura (:ro) o (rwo)
❯ docker run --name myUbuntu -v $(pwd)/ubuntuFolder:/db -it ubuntu
```

- Para enlazar varios contenedores a un mismo volumen usaríamos el "from"

```shell
#$(pwd)/ubuntuFolder: Es nuestra ruta actual
#db es el folder del contenedor
❯ docker run --name ubu1 -v $(pwd)/ubuntuFolder:/db -it ubuntu

❯ docker run --name ubu2 --volumes-from ubu1 -it ubuntu
```

### CREATE, INSPECT

```shell
❯ docker volume create jusiVolume
❯ docker volume ls
❯ docker volume inspect
# {
#   "CreatedAt": "2024-03-08T19:24:33-05:00",
#   "Driver": "local",
#   "Labels": null,
#   "Mountpoint": "/var/lib/docker/volumes/jusiVolume/_data",
#   "Name": "jusiVolume",
#   "Options": null,
#   "Scope": "local"
# }
```

- Para crear volúmenes pero enlazados a nuestra propia carpeta personal, lo haríamos asi, donde:
  1. --driver local: (opcional). utilizará el controlador local de forma predeterminada.
  2. --opt type=none: (opcional), es recomendable para indicar que no se realizará un montaje automático.
  3. --opt device=$(pwd)/ubuntuFolder: (necesario) especifica la ruta personalizada.
  4. --opt o=bind: (opcional), se utiliza en combinación con "--opt device" para enlazar la ruta del host al contenedor.
  5. jusiVolume: Nombre del volumen.

```shell
❯ docker volume create --driver local --opt type=none --opt device=$(pwd)/ubuntuFolder --opt o=bind jusiVolume
❯ docker volume inspect
# {
# "CreatedAt": "2024-03-08T19:40:31-05:00",
#   "Driver": "local",
#   "Labels": null,
#   "Mountpoint": "/var/lib/docker/volumes/jusiVolume/_data",
#   "Name": "jusiVolume",
#   "Options": {
#     "device": "/home/jlsempiternidad/Documentos/PG/CUR-docker/ubuntuFolder",
#     "o": "bind",
#     "type": "none"
#   },
#   "Scope": "local"
# }
```

```shell
docker run --name ubu1 -v jusiVolume:/db -it ubuntu
docker run --name ubu2 --volumes-from ubu1 -it ubuntu
docker run --name ubu3 -v jusiVolume:/db:ro -it ubuntu
```

### REMOVE

- El comando "prune" borrar todos aquellos volúmenes no vinculados a contenedores

```shell
❯ docker volume rm jusiVolume
❯ docker volume prune
❯ docker ls
```
