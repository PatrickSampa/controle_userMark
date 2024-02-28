FROM node:20

WORKDIR /app

COPY . .
COPY package.json .
RUN npm install

RUN npx prisma generate


CMD npm run start:dev