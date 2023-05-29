FROM maven:3.9.2-eclipse-temurin-20-alpine AS build
WORKDIR /usr/src/mymaven
COPY ./pom.xml .
# load and cache dependencies
RUN mvn verify --fail-never
COPY . .
RUN mvn package

FROM openjdk:20
WORKDIR /app
COPY --from=build /usr/src/mymaven/target/project-0.0.1-SNAPSHOT.jar ./project.jar
EXPOSE 5000
CMD java -jar project.jar