FROM nginx:alpine
LABEL author="TT"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
