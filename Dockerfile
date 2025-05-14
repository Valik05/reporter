FROM node:20.15.1-alpine

WORKDIR /app

COPY package*.json ./

ENV VITE_APP_BASE_API_URL=https://reporter-back.dot-it.ink
ENV VITE_APP_BASE_SOCKET_API_URL=wss://reporter-back.dot-it.ink

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8000

CMD ["serve", "-s", "dist", "-l", "8000"]
