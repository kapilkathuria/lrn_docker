# as builder - means start of section
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

# we haven't sepcifified as
FROM nginx
COPY --from=builder /app/build /use/share/nginx/html
