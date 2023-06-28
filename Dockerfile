FROM node:20-bookworm

LABEL maintainer="Saiful Islam"

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /app

RUN apt-get update \
    && npm install -g npm@latest

#RUN npm create vite@latest app --template react-ts

#RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

EXPOSE 3000 5173
