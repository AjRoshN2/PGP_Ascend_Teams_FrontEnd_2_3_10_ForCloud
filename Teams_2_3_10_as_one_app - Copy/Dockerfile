# Use the latest stable version of Node (as of the last update)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Explicitly install Bootstrap
RUN npm install bootstrap --legacy-peer-deps

RUN npm i @emotion/styled --legacy-peer-deps
RUN npm i @emotion/react --legacy-peer-deps
RUN npm i @mui/styles --legacy-peer-deps
RUN npm i @mui/material --legacy-peer-deps
RUN npm i @fortawesome/fontawesome-svg-core --legacy-peer-deps
RUN npm i @fortawesome/react-fontawesome --legacy-peer-deps
RUN npm install react-responsive-carousel --legacy-peer-deps
RUN npm install axios --legacy-peer-deps

# Install the rest of the project dependencies
RUN npm ci --legacy-peer-deps

RUN npm install --legacy-peer-deps

# Copy the rest of the code
COPY public/ ./public/
COPY src/ ./src/

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 9100

# Serve the static files from the build directory
CMD ["npx", "serve", "-s", "build", "-l", "9100"]
