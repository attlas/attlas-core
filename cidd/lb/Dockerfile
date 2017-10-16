FROM nginx:1.13.5

ARG PROJECT_DOMAIN
ENV PROJECT_DOMAIN $PROJECT_DOMAIN

COPY ./dist/nginx.conf /etc/nginx/nginx.conf
