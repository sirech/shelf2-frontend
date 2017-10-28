FROM node:8.2.1

WORKDIR /app

# Install packages before copying files
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

COPY . .

RUN yarn run build --production
RUN gzip -rfk build/static

CMD cp -a build/* public/ && echo 'Build done'
