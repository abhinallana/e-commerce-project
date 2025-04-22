#Using the official Alpine Node.js image as a base image(Smaller image size)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory for Docker Caching mechanism.
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .


#Expose the port that the application will run on, in this case, port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]