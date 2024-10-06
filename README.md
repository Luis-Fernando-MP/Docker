# Curso Docker 🐳

- [Mas explicación acerca de Imágenes](./Images.md)
- [Mas información acerca de Redes](./Networks.md)
- [Mas información acerca de Volúmenes](./Volumes.md)
- [Mas información acerca de Docker file 1](./docker/ejm1-file.md)
- [Mas información acerca de Docker Compose](./docker/ejm1-compose.md)
- [Mas información acerca de Docker file 2](./docker/ejm2-file.md)

## 1. Instalación de Docker en Ubuntu Server

### 1.1. Instalación estándar con apt

1. **Actualizar los repositorios:**

   ```bash
   sudo apt update
   ```

2. **Instalar los paquetes necesarios:**

   ```bash
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Añadir la clave GPG oficial de Docker:**

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. **Agregar el repositorio de Docker:**

   ```bash
   echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Instalar Docker:**

   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io
   ```

6. **Verificar la instalación:**

   ```bash
   docker --version
   ```

7. **Habilitar Docker para que inicie automáticamente:**

   ```bash
   sudo systemctl enable docker
   sudo systemctl start docker
   ```

### 1.2. Instalación con Snap (Fav) 🌟

1. **Instalar Docker usando Snap:**

   ```bash
   sudo snap install docker
   ```

2. **Verificar que Docker se haya instalado correctamente:**

   ```bash
   sudo docker --version
   ```

3. **Habilitar y arrancar Docker (opcional, ya que snap lo hace automáticamente):**

   ```bash
   sudo systemctl enable snap.docker.dockerd
   sudo systemctl start snap.docker.dockerd
   ```

4. **En lugar de usar el systemctl, podríamos usar snap**

   ```bash
   sudo snap services
     # Service                        	Startup  Current
     # docker.dockerd                 	enabled  active
   sudo snap start docker
   ```

### 1.3. Docker sin sudo

```bash
getent group docker # Revisa si existe el grupo de docker
sudo groupadd docker # Agrega el grupo de docker
sudo usermod -aG docker $USER # Agregar tu usuario al grupo docker
newgrp docker # Cambiar al nuevo grupo
sudo reboot now # Reinicia la maquina
groups $USER # Verifica que el usuario esté en el grupo docker
```

## 2. Docker Compose

### 2.1. Instalación de Docker Compose

1. **Descargar la versión estable más reciente de Docker Compose:**

   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. **Aplicar permisos ejecutables al binario:**

   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. **Verificar la instalación:**

   ```bash
   docker-compose --version
   ```

## 3. Comandos esenciales de Docker

### 3.1. Descargar e instalar una imagen

- **Para ejecutar una imagen y crear un contenedor:**

  ```bash
  docker run [imagen]
  ```

- **Para solo descargar la imagen (sin ejecutarla):**

  ```bash
  docker pull [imagen]:[versión]  # default: latest
  ```

### 3.2. Listar contenedores e imágenes

- **Contenedores activos:**

  ```bash
  docker ps
  ```

- **Todos los contenedores:**

  ```bash
  docker ps -a
  ```

- **Imágenes descargadas:**

  ```bash
  docker images
  ```

### 3.3. Interactuar con contenedores (modo interactivo)

- **Ejecutar en modo interactivo:**

  ```bash
  docker run -it --name mi_debian debian bash
  ```

- **Reingresar a un contenedor existente:**

  ```bash
  docker start -i [nombreContenedor]
  docker exec -it [nombreContenedor] bash
  ```

### 3.4. Modo detach (en segundo plano)

- **Ejecutar un contenedor en segundo plano:**

  ```bash
  docker run -d nginx
  ```

### 3.5. Borrar contenedores e imágenes

- **Borrar un contenedor:**

  ```bash
  docker rm [nombreContenedor]
  ```

- **Borrar una imagen:**

  ```bash
  docker rmi [nombreImagen]
  ```

- **Borrar contenedores que han terminado su ejecución:** 🌟

  ```bash
  docker rm $(docker ps -aq -f status=exited)
  ```

### 3.6. Ver logs de un contenedor

- **Ver los logs de un contenedor:**

  ```bash
  docker logs [nombreContenedor]
  ```

- **Ver las últimas líneas de logs:**

  ```bash
  docker logs [nombreContenedor] --tail [númeroDeLíneas]
  ```

### 3.7. Ver estadísticas de un contenedor 🌟

```bash
docker stats [nombreContenedor]
```

Este comando mostrará el uso de CPU, memoria y otros recursos de los contenedores activos.

## 4. Gestión de Imágenes y Contenedores

### 4.1. Imágenes

- **Agregar una imagen:**

  ```bash
  docker pull mysql:8.0.32
  ```

- **Eliminar una imagen:**

  ```bash
  docker image rm [image_name]
  ```

- **Listar todas las imágenes:**

  ```bash
  docker images
  ```

### 4.2. Contenedores

**Correr una base de datos SQL:**

```bash
docker run -e "ACCEPT_EULA=Y" --name MSQL -e "MSSQL_SA_PASSWORD=juju123?__" -p 1433:1433 -d mcr.microsoft.com/mssql/server

docker exec -it ejemploBD bash
```

**Correr una base de datos MySQL:**

```bash
docker run --name mi_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=ejemplo -p 3306:3306 -d mysql:8.4
```

**Correr un contenedor de phpMyAdmin:**

```bash
docker run --name phpmyadmin -d --link mysql_db_server:mi_mysql -p 8080:80 phpmyadmin
```

- **Iniciar un contenedor:**

  ```bash
  docker start mi_mysql
  ```

- **Listar contenedores activos:**

  ```bash
  docker ps
  ```

- **Detener un contenedor:**

  ```bash
  docker stop mi_mysql
  ```

- **Eliminar un contenedor:**

  ```bash
  docker rm mi_mysql
  ```

### 4.3. Logs, ejecución y administración

- **Ver logs de un contenedor:**

  ```bash
  docker logs mi_mysql
  ```

- **Ejecutar un contenedor en segundo plano:**

  ```bash
  docker run -d --name mi_mysql -p 3306:3306 mysql:8.0.32
  ```

- **Ingresar a un contenedor en ejecución:**

  ```bash
  docker exec -it mi_mysql bash
  ```

## 5. Redes en Docker

### 5.1. Listar redes

```bash
docker network ls
```

### 5.2. Crear una red

```bash
docker network create miRed
```

### 5.3. Eliminar una red

```bash
docker network rm miRed
```

## 6. Creación de imágenes (Build)

### 6.1. Crear una imagen con Dockerfile

- **Comando básico para crear una imagen desde un Dockerfile:**

  ```bash
  docker build -t mi_imagen:1.0 .
  ```

- **Ejemplo de un Dockerfile básico:**

  ```Dockerfile
  # Usar una imagen base de Ubuntu
  FROM ubuntu:20.04

  # Instalar paquetes necesarios
  RUN apt-get update && apt-get install -y python3

  # Establecer el directorio de trabajo
  WORKDIR /app

  # Copiar los archivos al contenedor
  COPY . /app

  # Comando por defecto al ejecutar el contenedor
  CMD ["python3", "mi_script.py"]
  ```
