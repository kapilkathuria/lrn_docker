# lrn_docker
Course: https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19223580#overview

## Why use docker
makes software installtion easier and smooth

## What docker is?
Image: single file with all the depenedencies and config requied to run a program

Container: is intance of image

## Docker ecosystem
* docker client
* docker machine
* Docker hub
* docker server
* docker images
* docker compose

## Setup
* insall docker for windows or mac - - it contains
   * Docker client: tool we use
   * docker server: tools responsible for creating images, running containers etc.

## Docker containers
two use different version of software together, name spacing can be used. 

another related feature is control group - this is used to limited amount of resources avaiable for separate namespace

container: isolated part  - which can do everything  a normal software can do. it accesses system resources via os kernel still keeping isolation.
specific software are avaialble within container

it also has specific startup command.

docker uses linux kernel.

when we install docker, it install linux kernel.

## Useful commands
* Run a container
docker run name-of-image
docker run hello-world

* overriding the command
docker run name-of-image command
ex. docker run name-of-image ls --> this will list all the folders/files

default command in docker will not be used

* list runningn containers
docker ps
docker ps --all --> shows all containers created

* watch output from container
docker start -a <image-id>

* start container again
docker ps --all
docker start <id>  --> id can be seen from first command. it starts container again

* remoivng stopped containers
see all container
docker system prune --> this will remove all containers

* reteriving output logs
docker logs container-id

* stopping containers
docker create busybox ping google.com
docker start container-id
docker logs container-id --> see the log
docker ps --> will show running container
docker stop container-id

* multi-command containers / running commands in containers
docker exec -it container-id command
ex. docker exec -it fb0f50de1d4e redis-cli

-it argument: two flags -i and -t . -i means is to attach terminal and -t means show in pretty format

* command prompt in containers
docker exec -it container-id sh
ex. docker exec -it fb0f50de1d4e sh

other way
docker run -it busybox sh

## Creating containers
we will be creating docker file
docker file is passed to --> docker client --> docker server
docker server creates docker image

let's build docker imager for redis-server
mkdir redis-image
cd redis-image
vi Dockerfile --> content of DockerFile   
   # use an existind docker image as a base
   FROM alpine 

   # download and install  dependency
   RUN apk add --update redis

   # tell the image what to do on start
   CMD ["redis-server"]

docker build .


