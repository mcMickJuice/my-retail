FROM node:8-onbuild

RUN npm i -g yarn

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn build:prod

COPY . .

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000
CMD ["/usr/local/bin/node", "./main.js"]