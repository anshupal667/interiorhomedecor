# Stage 1: Build the React app
FROM node:alpine

# Create app directory
WORKDIR ./interiorhomedecor

# Install app dependencies
EXPOSE 3000
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .
CMD ["npm","run","start"]
