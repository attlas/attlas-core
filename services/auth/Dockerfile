FROM node:9.8.0-alpine

ARG STATIC_AUTH_HOSTNAME
ARG STATIC_AUTH_PORT
ARG STATIC_AUTH_PORTS

ENV STATIC_AUTH_HOSTNAME $STATIC_AUTH_HOSTNAME
ENV STATIC_AUTH_PORT $STATIC_AUTH_PORT
ENV STATIC_AUTH_PORTS $STATIC_AUTH_PORTS


# Create app directory
WORKDIR /usr/src/app

# Copy sources
COPY package*.json ./
COPY ./src ./src

# Install app dependencies
RUN npm install
# RUN npm install --only=production

EXPOSE 8080
CMD [ "npm", "start" ]