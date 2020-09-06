# Workflow for production enviornment

## production workflow
Dev --> test --> deploy

github repo - different branches - feature, master

codebase change process
1. pull feature branch
2. feature branch: make changes 
3. feature branch: push
4. create pull request
5. merge feature branch in master
6. at this merge request: setup Travis CI
7. Travis CI: run tests
8. Travis CI: deploy to cloud (ex. AWS Elastic Beanstalk)

## Example with react-app
npx create-react-app frontend

## Docker files
1. Docker file for dev env
2. docker file for prod env

### dev docker file
name: dev.Dockerfile

to build:
docker build -f dev.Dockerfile .

you will notice that all node_modules are also added to current image - which is not required. you can delete all of these.

to run
docker run -it -p 3000:3000 CONTAINER_ID

## Docker volume
by default any  changes in code are not reflected in app running in container.

docker volumes --> sets reference to files in our project itself.

docker run -it -p 3000:3000 -v /home/frontend/node_modules -v /$(pwd):/home/frontend kapilkathuria/frontend:latest

: in above command means that creat a refernce to folder in files outside container

Note: above command worked for me (doker desktop with wsl2, ubunutu 18.04 running in wsl)

try this if above doesn't work
winpty docker run -it -p 3000:3000 -v /home/frontend/node_modules -v "/$(pwd)":/home/frontend -e CHOKIDAR_USEPOLLING=true kapilkathuria/frontend:latest

## Run tests within docker
docker build -f dev.dockerfile .
docker run -it 39f9b60eefcd npm run test

if you make change to test cases, tests are not executed automatically within docker. to do this:
* one way using below command:
docker exec -it da5bb68a0da5 npm run test
* second way is by adding one more service in docker-compose
problem with this approach is, it isn't interactive.

  frontend-tests:
    build:
      context: .
      dockerfile: dev.dockerfile
    volumes:
      - /home/frontend/node_modules
      - .:/home/frontend
    command: ["npm", "run", "test"]
    environment:
      - CHOKIDAR_USEPOLLING=true
    stdin_open: true