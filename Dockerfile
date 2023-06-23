FROM node:16-alpine as BUILDER

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.7.2 && npm install
COPY . .
RUN npm run build

FROM nginx:latest

COPY --from=BUILDER /app/dist /usr/share/nginx/html

