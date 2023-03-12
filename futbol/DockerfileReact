FROM registry.frba.utn.edu.ar/apache-php:7.4

RUN a2dismod php7.4
RUN apt-get update --fix-missing
RUN apt-get -y install curl gnupg2 git


ARG NODE_VERSION=14
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/src/www/

RUN npx create-react-app react-base

RUN npm i react-router-dom axios

USER root

COPY site.conf /etc/apache2/sites-enabled/000-default.conf

RUN service apache2 restart

EXPOSE 80

