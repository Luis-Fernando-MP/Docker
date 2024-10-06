[MD principal](./README.md)

### **Ejemplo Docker Compose 1**

[Enlace al docker-compose](./dockerCompose.ejm1.yml)

```yaml
version: '3.9' # Especifica la versión de Docker Compose

services: # Define los servicios (contenedores) que se van a levantar.
  dodo: # Nombre del servicio
    image: dodoImage
    container_name: dodoCon
    env_file:
      - .env
    build:
      context: . # Directorio del Dockerfile
      dockerfile: Dockerfile.dev # Dockerfile personalizado
    ports:
      - '3001:3000' # Mapea el puerto 3001 de la máquina local al puerto 3000 del contenedor
    links:
      - bd # Enlace al servicio bd
    depends_on:
      - bd # El servicio 'dodo' se ejecutará después de que 'bd' esté listo
    volumes:
      - .:/home/app/ # Monta el directorio actual en el contenedor en /home/app/ (refleja cambios en tiempo real)
      - /app/node_modules # Excluye la carpeta node_modules del montaje
    restart: unless-stopped # Reinicia el contenedor a menos que sea detenido manualmente
    environment:
      - DB_PORT=PORT
    networks:
      - dodoNet # Red personalizada para comunicar los servicios

  bd:
    container_name: myDB
    image: mysql:8.0.32
    ports:
      - '3306:3306'
    environment:
      - MYSQL_ROOT_PASSWORD=ju123 # Contraseña del usuario root
      - MYSQL_DATABASE=default
    volumes:
      - volumenDB:/var/lib/mysql # Volumen persistente para almacenar los datos de la base de datos

volumes:
  volumenDB: # Volumen persistente que se utilizará para la base de datos MySQL

networks:
  dodoNet: # Red personalizada que conecta los servicios
```
