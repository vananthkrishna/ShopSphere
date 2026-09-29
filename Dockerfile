FROM node:22

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install --with-deps

CMD ["npm","test"]