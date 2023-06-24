FROM node:lts-slim AS development
WORKDIR /code
COPY . .
RUN npm i
EXPOSE 80
CMD npm run dev

FROM development AS build
RUN npm run build

FROM nginx:1.13-alpine
COPY --from=build /code/dist /usr/share/nginx/html