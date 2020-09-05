# use an existing docker image as a base
# FROM alpine - didn't had nodejs and npm and we  are using
#   different image which has nodejs install
#   to find suitable image go to https://hub.docker.com/ 
FROM node:alpine

# let's specify working directoy so that files are not copied in root root
WORKDIR /home/simpleweb

# add our current folder in image
# to avoid image to rebuilt completly for minor chages, we are
#   first copy package.json
COPY ./package.json ./

# download and install  dependency
RUN npm install

# now copy rest of files so that changes in these file won't require
#   docker to isntall all npm packges
COPY ./ ./


# tell the image what to do on start as a container
CMD ["npm", "start"]
