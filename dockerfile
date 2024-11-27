# Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build -- --output-path=dist

# Stage 2: Production Stage
FROM nginx:alpine

# Copy the custom nginx.conf to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the builder to the NGINX HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8010

CMD ["nginx", "-g", "daemon off;"]
