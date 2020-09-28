FROM node:10-slim

RUN apt-get update && apt-get install

WORKDIR /code

COPY . .

# ADD package.json package.json
# ADD yarn.lock yarn.lock
# ADD internals internals
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]