# From alpine
FROM node:slim

WORKDIR /usr/src/app

# Install npm packages
COPY ./package.json .
RUN npm install 

# Copy Files
COPY ./checker/ ./

# Run parrot
CMD ["npm", "start"]