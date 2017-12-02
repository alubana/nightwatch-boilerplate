# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 8088

COPY . .

RUN npm install

RUN npm run build

COPY /semantic/dist/semantic.min.css /public/

CMD ["npm", "start"]