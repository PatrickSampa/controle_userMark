FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY prisma/schema.prisma .
RUN npx prisma generate

COPY . .


CMD npm run start:dev