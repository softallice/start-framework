FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

# EXPOSE 80:3030
# EXPOSE 443:3030

CMD ["npm", "run", "start"]