FROM php:7.1.5-apache

RUN apt-get update && \
    apt-get install -y mc mysql-client && \
    docker-php-ext-install pdo_mysql mysqli mbstring

#COPY php.ini /usr/local/etc/php

RUN mkdir /var/www/attlas.org
COPY dist /var/www/attlas.org
RUN chown www-data:www-data -R /var/www/attlas.org
RUN chmod u=rwX,g=srX,o=rX -R /var/www/attlas.org

COPY attlas.org.conf /etc/apache2/sites-available
RUN a2dissite 000-default.conf
RUN a2ensite attlas.org.conf

#COPY dist /var/www/html
#RUN chown www-data:www-data -R /var/www/html
#RUN chmod u=rwX,g=srX,o=rX -R /var/www/html

EXPOSE 80 443