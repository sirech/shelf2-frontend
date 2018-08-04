FROM node:10.8-alpine as builder

WORKDIR /app

COPY . .

SHELL ["/bin/ash", "-o", "pipefail", "-c"]

RUN yarn \
    && yarn run build \
    && find build/static -type f ! -name "./*.gz" -print0 | xargs -I@ sh -c "gzip -c @ > @.gz"

FROM alpine:3.7

WORKDIR /app

COPY --from=builder /app/build build

# hadolint ignore=DL3025
CMD cp -a build/* public/
