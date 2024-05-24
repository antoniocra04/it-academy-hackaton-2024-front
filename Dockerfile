FROM node:lts

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "preview" ]