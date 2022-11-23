FROM node:14-alpine AS build
RUN apk add --no-cache make gcc g++ python3
RUN npm install -g @angular/cli


WORKDIR /app

COPY . .
RUN ls
RUN npm install

RUN npm rebuild node-sass
RUN npm run build

FROM nginx:1.13-alpine
COPY --from=build /app/dist/bundle /usr/share/nginx/html

EXPOSE 80