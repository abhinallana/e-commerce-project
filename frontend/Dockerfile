#Here we will follow the approach of using a multi-stage build to create a production-ready image.

#-------------------------------Stage-1--------------------------------------
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory for Docker Caching mechanism.
COPY package*.json ./
# Copies the complete application code to the working directory
COPY . .

# Install the dependencies for react router-dom
RUN npm install react-router-dom

# Run and build the Application
RUN npm run build

#-------------------------------Stage-2--------------------------------------

# Using the official Nginx image as a base image
FROM nginx:alpine

# Copy the React build from previous stage
COPY --from=build /app/build /usr/share/nginx/html
# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx server
# The -g daemon off; option is used to run Nginx in the foreground
# This is important for Docker containers, as they will stop if the main process exits
CMD ["nginx", "-g", "daemon off;"]