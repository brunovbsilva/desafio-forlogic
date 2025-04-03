FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build:prod

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/desafio-forlogic/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]