ARG NODE_ENV=development

FROM node:18-alpine

ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG NODE_ENV

RUN NODE_ENV=$NODE_ENV npx webpack --config webpack.config.js

EXPOSE 5500

CMD ["npx", "live-server", "--port=5500", "--host=0.0.0.0", "--entry-file=/html/login.html"]
