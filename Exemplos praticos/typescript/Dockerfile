FROM node:latest

RUN npm install -g typescript

WORKDIR /app

COPY . .

CMD [ "npx", "tsc" ]