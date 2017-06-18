FROM php:7.1.5-apache

RUN apt-get update && \
    apt-get install -y mc mysql-client && \
    docker-php-ext-install pdo_mysql mysqli mbstring

#COPY ./php.ini /usr/local/etc/php/
COPY ./dist/ /var/www/html/

RUN chown www-data:www-data -R /var/www/html
RUN chmod u=rwX,g=srX,o=rX -R /var/www/html

EXPOSE 80 443