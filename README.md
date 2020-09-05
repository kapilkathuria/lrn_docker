# lrn_docker
Course: https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19223580#overview
Couse 2: https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide

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
ex. 
docker run redis-server
docker exec -it fb0f50de1d4e redis-cli

-it argument: two flags -i and -t . -i means is to attach terminal and -t means show in pretty format

* command prompt in containers
docker exec -it container-id sh
ex. docker exec -it fb0f50de1d4e sh

other way
docker run -it busybox sh

* giving name to docker image generated
convention  is
your-docker-id/project-name:version
kapilkathuria/redis:v1.0

docker -t kapilkathuria/redis:v1.0

-t means tag

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
   # apk - is package manager on alpine to install packages
   RUN apk add --update redis

   # tell the image what to do on start
   CMD ["redis-server"]

docker build . --> to build the docker container.  you will get container number
docker run 40aa57c1e1ea --> run the container recently created


## understanding docker file
it's like installing a software or multiple software incuding os
i.e. 
1. downlad os and install
2. download software and install
3. do all required configurations

## image caching
docker server keeps image cache. for exammple if you  have used alpine image earlier, it won't download again rather it will use from existing local cache

## changing existing docker file
if there is no order change of commands in docker file, docker continue to use existing cache. though if there is change in order, docker generates image again. if you put your changes as down as possible, image creation time should be significant less 

## generate image from container
usually not expected to be done in project but useful to know


docker run -it alpine sh  --> create container
apk add --update redis --> install redis

create a image from container
docker commit -c 'CMD ["redis-server"]' 2cd40edc3919

## Docker image of node application
take alpine image
install dependency (npm install)
start node application (npm start)

note: FROM alpine - didn't had nodejs and npm and we  are using different image which has nodejs install. to find suitable image go to https://hub.docker.com/ 

## port mapping
by default all requests coming to given port are not forwarded to docker container and those need to specified in command line
docker run -p 8080:8080 image

docker run -p 3005:3005 kapilkathuria/simpleweb:latest

## working directory
let's specify working directoy so that files are not copied in root
WORKDIR /home/simpleweb