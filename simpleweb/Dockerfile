# use an existing docker image as a base
# FROM alpine - didn't had nodejs and npm and we  are using
#   different image which has nodejs install
#   to find suitable image go to https://hub.docker.com/ 
FROM node:alpine

# add our current folder in image
COPY ./ ./

# download and install  dependency
RUN npm install

# tell the image what to do on start as a container
CMD ["npm", "start"]
