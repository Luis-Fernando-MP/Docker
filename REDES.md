### LS

- bridge: usa nuestra red física
- host: usar la red principal host
- none: no usa ninguna red

```shell
❯ docker network ls
# NETWORK ID     NAME      DRIVER    SCOPE
# 4a1560bfa923   bridge    bridge    local
# d320867d605c   host      host      local
# 364c1e7807b3   none      null      local
```

### INSPECT

```shell
❯ docker network inspect [nombre puede ser (bridge)]
# "Containers": { <- están todos los contenedores que tienen una red en este caso bridge
#   "1f5...": {
#     "Name": "mysql",
#     "EndpointID": "f6c...",
#     "MacAddress": "02:42:ac:11:00:02",
#     "IPv4Address": "172.17.0.2/16",
#     "IPv6Address": ""
#   }
# }
```

### CREATE

```shell
❯ docker network create [nombre]
❯ docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=ju mysql --network juju_net
❯ docker network connect [redNueva] [contenedor]
❯ docker network dis connect [redNueva] [contenedor]
```
