FROM node:18-alpine


WORKDIR /app


RUN npm install 


EXPOSE 5500 

COPY . .



CMD ["npm", "server.js"]