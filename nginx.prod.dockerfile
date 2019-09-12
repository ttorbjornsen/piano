#### STAGE 1
FROM node:latest as node
LABEL author="TT"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

#### STAGE 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/piano /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
