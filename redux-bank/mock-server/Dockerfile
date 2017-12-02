FROM node:boron

MAINTAINER Trowe: 0.1

RUN apt-get update && apt-get clean
RUN mkdir -p /var/mocks
WORKDIR /var/mocks

EXPOSE 3000

COPY .  /var/mocks

CMD ["node", "./index.js"]
