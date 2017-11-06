FROM node:8.9.0-slim

WORKDIR /app

# Install packages before copying files
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

COPY . .

RUN yarn run build --production
    && gzip -rfk build/static

CMD cp -a build/* public/ && echo 'Build done'
