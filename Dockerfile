FROM node:12.2.0-alpine as build

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm ci \
    --no-optional \
    --no-progress \
    --production

COPY public public
COPY src src

RUN npm run build

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

RUN mkdir -p /usr/local/etc/nginx

CMD ["nginx", "-c", "/usr/local/etc/nginx/nginx.conf", "-g", "daemon off;"]

