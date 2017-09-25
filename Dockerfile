FROM node:6.11.0

RUN npm i -g yarn http-server

WORKDIR /landing-page

ADD . .

RUN yarn install
RUN yarn run build-ui

ENTRYPOINT http-server -a 0.0.0.0 -p 8080

EXPOSE 8080
