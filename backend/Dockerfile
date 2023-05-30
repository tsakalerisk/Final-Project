FROM maven:3.9.2-eclipse-temurin-20-alpine AS build
WORKDIR /usr/src/mymaven
COPY ./pom.xml .
# load and cache dependencies
RUN mvn verify --fail-never
COPY . .
EXPOSE 5000
CMD mvn spring-boot:run