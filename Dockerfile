FROM node:18-alpine


WORKDIR /app

COPY . .

COPY ["package.json", "./"]

RUN npm install 

EXPOSE 5500

CMD ["node", "server.js"]