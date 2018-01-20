FROM openjdk:8u151-jre-alpine

ARG API_ARTIFACT
ARG API_HOSTNAME
ARG API_PORT

ENV API_ARTIFACT $API_ARTIFACT
ENV API_HOSTNAME $API_HOSTNAME
ENV API_PORT $API_PORT

RUN apk --update --no-cache add curl python py-pip && pip install jsonschema

COPY ./target/${API_ARTIFACT} /
RUN mkdir scripts
COPY ./scripts /scripts
HEALTHCHECK --interval=5s --timeout=3s CMD curl --fail http://localhost:${API_PORT}/healthcheck || exit 1

CMD exec java -jar /${API_ARTIFACT}
