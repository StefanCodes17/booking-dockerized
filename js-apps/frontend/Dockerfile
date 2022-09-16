FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:latest as production-stage
EXPOSE 3000
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf
