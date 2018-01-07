FROM node:9.3.0-alpine

WORKDIR /app

COPY . .

RUN yarn \
&& yarn run build \
&& find build/static -type f ! -name *.gz | xargs -I@ sh -c "gzip -c @ > @.gz" \
&& rm -rf node_modules \
&& rm -rf /usr/local/share/.cache \
&& rm -rf /usr/local/lib/node_modules

CMD cp -a build/* public/ && echo 'Build done'
