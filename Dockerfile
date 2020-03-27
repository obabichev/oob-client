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


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod 666 /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

