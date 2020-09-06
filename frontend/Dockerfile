FROM node:alpine

WORKDIR /home/frontend

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]
