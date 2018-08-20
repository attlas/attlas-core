FROM node:9.10.1-alpine

<<<<<<< HEAD
ARG COMPONENT_PARAM_PORT

HEALTHCHECK --interval=5s --timeout=3s CMD curl --fail http://localhost:${COMPONENT_PARAM_PORT}/healthcheck || exit 1

=======
>>>>>>> ae23603f80a20e7d56fe3a846bc84d3791bb1221
# Create app directory
WORKDIR /usr/src/app

# Copy sources
COPY ./package*.json ./
COPY ./src ./src
COPY ./.env.template ./
COPY ./docker-entry.sh ./

# Install app dependencies
<<<<<<< HEAD
RUN apk --update --no-cache add git gettext curl
=======
RUN apk --update --no-cache add git gettext
>>>>>>> ae23603f80a20e7d56fe3a846bc84d3791bb1221
RUN npm install --only=production

CMD [ "./docker-entry.sh" ]
