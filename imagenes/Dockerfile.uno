FROM ubu

#Esto seria la ejecución de un EXEC
#CMD ["echo", "hola", ">>", "~/ejemplo.txt"] 
#Esto seria la ejecución de un SHELL
#CMD [ "echo", "hola ubuntu" ]
RUN neofetch
WORKDIR /home/data
RUN touch ejemplo.txt

COPY ./copiar/ .



