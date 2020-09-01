# use an existing docker image as a base
FROM alpine

# download and install  dependency
RUN apk add --update redis

# tell the image what to do on start as a container
CMD ["redis-server"]
