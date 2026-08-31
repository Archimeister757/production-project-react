FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency files first to leverage Docker caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Compile the application (generates a 'dist' folder)
RUN npm run build:prod

FROM nginx:stable-alpine AS runner
WORKDIR /usr/share/nginx/html

# Clean the default Nginx public files
RUN rm -rf ./*

# Copy ONLY the compiled static files from the 'builder' stage
COPY --from=builder /app/dist .

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
