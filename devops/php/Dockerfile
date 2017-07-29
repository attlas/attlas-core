FROM php:7.1.7-apache

ARG SERVICE_DOMAIN
ENV SERVICE_DOMAIN $SERVICE_DOMAIN

RUN apt-get update && \
    apt-get install -y mc mysql-client && \
    docker-php-ext-install pdo_mysql mysqli mbstring

#COPY php.ini /usr/local/etc/php

RUN mkdir /var/www/$SERVICE_DOMAIN
COPY ./dist /var/www/$SERVICE_DOMAIN
RUN chown www-data:www-data -R /var/www/$SERVICE_DOMAIN
RUN chmod u=rwX,g=srX,o=rX -R /var/www/$SERVICE_DOMAIN

COPY ./$SERVICE_DOMAIN.conf /etc/apache2/sites-available
RUN a2dissite 000-default.conf
RUN a2ensite $SERVICE_DOMAIN.conf

EXPOSE 443