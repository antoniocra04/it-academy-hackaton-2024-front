FROM huecker.io/library/node:lts-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "preview" ]