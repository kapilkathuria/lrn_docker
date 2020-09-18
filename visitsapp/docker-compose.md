nodejs app to count number of visits
uses redis to maintain count
from scalability purpose we wil run redis in separate container,
and our visitapp in separate container

## Making two different containers communicate
docker cli  can be used but not lot of people use it

docker-compose : is separate cli which is usually for this purpose

# docker-compose
1. help to avoid us writing repitive commands
2. multiple containers can be started at same time
3. automates some of the long arguments

see docker-compose.yml in visitsapp

by having two services defined as below, it makes multiple containers can communicate with each other and no separate networking is requied

services:
  redis-server:
    image: 'redis'
  visits-app:
    build: .
    ports:
      - "4001:8081"


## running docker-compose
docker run image --> docker-compose up

docker build . && docker run image --> docker-compose up --build

## 
To rebuild  image you must use 
docker-compose build 
or 
docker-compose up --build

##  stopping with docker-compose
docker-compose up -d --> run containers in background
docker-compose down --> stop the contaiiners. run from same working directory wehre you have docker-compose.yml

## containers maintainance
1. restarting container which has crashed
restart policies
    "no": never start
    always
    on-failure
    unless-stopped

## container status
docker-compose ps --> run from same working directory wehre you have docker-compose.yml


