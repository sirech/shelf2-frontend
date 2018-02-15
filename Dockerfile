FROM node:9.3.0-alpine as builder

WORKDIR /app

COPY . .

RUN yarn \
    && yarn run build \
    && find build/static -type f ! -name *.gz | xargs -I@ sh -c "gzip -c @ > @.gz"

FROM alpine:3.7

WORKDIR /app

COPY --from=builder /app/build build

CMD cp -a build/* public/ && echo 'Build done'
