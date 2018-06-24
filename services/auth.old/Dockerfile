FROM node:9.10.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy sources
COPY ./package*.json ./
COPY ./src ./src
COPY ./.env.template ./
copy ./docker-entry.sh ./

# Install app dependencies
RUN apk --update --no-cache add git gettext
RUN npm install --only=production
RUN pwd && printenv && ls -la

CMD [ "./docker-entry.sh" ]