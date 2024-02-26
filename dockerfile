FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN yarn install

COPY prisma/schema.prisma .
RUN prisma generate

COPY . .

RUN npm run build

CMD npm run start:prod