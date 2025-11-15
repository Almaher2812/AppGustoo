# Use a multi-stage build to optimize the image size
# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps
COPY frontend ./
RUN npm run build

# Stage 2: Build the backend
FROM maven:3.9.4-eclipse-temurin-17 AS backend-build

WORKDIR /app/backend
COPY backend/pom.xml ./
RUN mvn -B dependency:go-offline
COPY backend/src ./src
RUN mvn -B package -DskipTests

# Stage 3: Final image for frontend (nginx)
FROM nginx:stable-alpine AS frontend-runtime
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Stage 4: Final image for backend (runtime)
FROM eclipse-temurin:17-jdk AS backend-runtime
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar /app/backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/backend.jar"]