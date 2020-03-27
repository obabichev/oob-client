FROM node:12.2.0-alpine as build

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

#RUN npm ci \
#    --no-optional \
#    --no-progress \
#    --production

RUN npm install

COPY public public
COPY src src

RUN npm run build


FROM nginx:1.17.9

COPY --from=build /app/build /usr/share/nginx/html

#RUN ls -la /usr/share/nginx/html
#RUN ls -la /usr/share/nginx/html/static
#RUN ls -la /usr/share/nginx/html/static/css
#RUN ls -la /usr/share/nginx/html/static/js

#COPY default.conf.template /etc/nginx/conf.d/default.conf
#COPY default.conf.template /etc/nginx/default.conf.template
#COPY default.conf.template.base /etc/nginx/default.conf.template

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


