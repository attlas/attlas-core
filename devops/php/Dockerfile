FROM php:7.1.7-apache

ARG SERVICE_HOST
ENV SERVICE_HOST $SERVICE_HOST

RUN apt-get update && \
    apt-get install -y mc mysql-client && \
    docker-php-ext-install pdo_mysql mysqli mbstring

#COPY php.ini /usr/local/etc/php

RUN mkdir /var/www/$SERVICE_HOST
COPY ./dist /var/www/$SERVICE_HOST
RUN chown www-data:www-data -R /var/www/$SERVICE_HOST
RUN chmod u=rwX,g=srX,o=rX -R /var/www/$SERVICE_HOST

COPY ./$SERVICE_HOST.conf /etc/apache2/sites-available
RUN a2dissite 000-default.conf
RUN a2ensite $SERVICE_HOST.conf

EXPOSE 443