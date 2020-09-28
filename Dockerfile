FROM node:10-slim

RUN apt-get update && apt-get install

WORKDIR /code

ARG BASE_URL="https://api.ukio.in"
ENV BASE_URL=$BASE_URL

COPY . .
RUN echo "export const baseUrl = '$BASE_URL';" > src/utils/baseApiConstant.js

# ADD package.json package.json
# ADD yarn.lock yarn.lock
# ADD internals internals
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]