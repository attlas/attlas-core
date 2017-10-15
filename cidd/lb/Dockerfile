FROM nginx:1.13.5

ARG SERVICE_DOMAIN
ENV SERVICE_DOMAIN $SERVICE_DOMAIN

COPY ./dist/nginx.conf /etc/nginx/nginx.conf
