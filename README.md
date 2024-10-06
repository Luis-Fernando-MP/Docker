# `1. Hello Docker`

## `1.0. Images`

### 1.0.1. Add

```bash
  ▶ docker pull mysql:8.0.32
```

### 1.0.2. Remove

```bash
  ▶ docker image rm [image_name] | [image_id]
```

### 1.0.3. All

```bash
  ▶ docker images
```

## `1.1. Containers`

### 1.1.0. Add

```bash
  ▶ docker create --name ejm mysql:8.0.32
  ▶ docker create -p 3306:3306 --name ejm mysql:8.0.32
  ▶ docker create -p 3306:3306 --name ejm -e MYSQL_ROOT_PASSWORD=root mysql:8.0.32
```

### 1.1.1. Execute

```bash
  ▶ docker start ejm
```

### 1.1.2. Show

```bash
  ▶ docker ps !(-a)
```

### 1.1.3. Stop

```bash
  ▶ docker stop ejm
```

### 1.1.4. Remove

```bash
  ▶ docker !(container) rm ejm
```

## `1.2. Logs, Run, Exec`

### 1.2.0. Logs

```bash
  ▶ docker logs ejm
```

### 1.2.1. Follow

```bash
  ▶ docker logs --flow ejm
```

### 1.2.3. run

<i>(-d inverse --flow)</i>

```bash
  ▶ docker run [image_name] | [image_id]
  ▶ docker run -d mysql:8.0.32
  ▶ docker run --name ejm -p 3306:3306 -d mysql:8.0.32
  ▶ docker run --name ejm -p 3306:3306 -d --network miRed mysql:8.0.32
  ▶ docker run --name ejm -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=testDocker -e MYSQL_USER=ju -e MYSQL_PASSWORD=456 -d mysql:8.0.32
```

### 1.2.4. Exec

```bash
  ▶ docker exec -it ejm bash
```

## `1.3. Network`

### 1.3.0. List

```bash
  ▶ docker network ls
```

### 1.3.1. Create

```bash
  ▶ docker network create miRed
```

### 1.3.1. Delete

```bash
  ▶ docker network rm miRed
```

## `1.4. Build`

### 1.3.1. create

```bash
  ▶ docker build -t [name]:[tag] [DockerFile]
  ▶ docker build -t testEjm:1 .
```
