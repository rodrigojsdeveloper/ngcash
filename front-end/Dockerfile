FROM node

WORKDIR /app

COPY package.json ./

COPY ./ ./

RUN yarn

CMD ["yarn", "dev"]
