# Use official Node.js LTS image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build TypeScript files
RUN npm run build

# Expose port
EXPOSE 3001

# Command to run the application
CMD ["node", "dist/index.js"]
