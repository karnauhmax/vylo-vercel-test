FROM node:20-alpine
WORKDIR /var/www/app
COPY . .
RUN apt update \
    && npm i \
    && npm run build
CMD npm run preview