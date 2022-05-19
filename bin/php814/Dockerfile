FROM php:8.1.4-apache
RUN apt-get -y update
RUN apt-get install git -y
RUN apt-get install -y zip unzip
COPY composer.phar /usr/local/bin/composer
RUN chmod 755 /usr/local/bin/composer
WORKDIR /var/www/html/app
CMD bash -C 'start.sh';