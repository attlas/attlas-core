FROM nginx:1.13.5

ARG XAAS_DOMAIN
ENV XAAS_DOMAIN $XAAS_DOMAIN

COPY ./dist/ /usr/share/nginx/html/
