FROM sonatype/nexus:oss

USER root

#ARG NEXUS_VERSION
ENV NEXUS_VERSION 2.14.4-03
RUN yum install -y unzip \
    yum clean all

# install nexus-p2-repository-plugin
RUN curl --fail --silent --location --retry 3 \
    -o /tmp/nexus-p2-repository-plugin-${NEXUS_VERSION}-bundle.zip \
    https://repo1.maven.org/maven2/org/sonatype/nexus/plugins/nexus-p2-repository-plugin/${NEXUS_VERSION}/nexus-p2-repository-plugin-${NEXUS_VERSION}-bundle.zip \
  && unzip -d /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository \
    /tmp/nexus-p2-repository-plugin-${NEXUS_VERSION}-bundle.zip \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-p2-repository-plugin-${NEXUS_VERSION} \
    -type d -exec chmod 755 {} \; \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-p2-repository-plugin-${NEXUS_VERSION} \
    -type f -exec chmod 644 {} \; \
  && rm /tmp/nexus-p2-repository-plugin-${NEXUS_VERSION}-bundle.zip

# install nexus-p2-bridge-plugin
RUN curl --fail --silent --location --retry 3 \
    -o /tmp/nexus-p2-bridge-plugin-${NEXUS_VERSION}-bundle.zip \
    https://repo1.maven.org/maven2/org/sonatype/nexus/plugins/nexus-p2-bridge-plugin/${NEXUS_VERSION}/nexus-p2-bridge-plugin-${NEXUS_VERSION}-bundle.zip \
  && unzip -d /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository \
    /tmp/nexus-p2-bridge-plugin-${NEXUS_VERSION}-bundle.zip \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-p2-bridge-plugin-${NEXUS_VERSION} \
    -type d -exec chmod 755 {} \; \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-p2-bridge-plugin-${NEXUS_VERSION} \
    -type f -exec chmod 644 {} \; \
  && rm /tmp/nexus-p2-bridge-plugin-${NEXUS_VERSION}-bundle.zip


# install nexus-obr-plugin
RUN curl --fail --silent --location --retry 3 \
    -o /tmp/nexus-obr-plugin-${NEXUS_VERSION}-bundle.zip \
    https://repo1.maven.org/maven2/org/sonatype/nexus/plugins/nexus-obr-plugin/${NEXUS_VERSION}/nexus-obr-plugin-${NEXUS_VERSION}-bundle.zip \
  && unzip -d /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository \
    /tmp/nexus-obr-plugin-${NEXUS_VERSION}-bundle.zip \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-obr-plugin-${NEXUS_VERSION} \
    -type d -exec chmod 755 {} \; \
  && find /opt/sonatype/nexus/nexus/WEB-INF/plugin-repository/nexus-obr-plugin-${NEXUS_VERSION} \
    -type f -exec chmod 644 {} \; \
  && rm /tmp/nexus-obr-plugin-${NEXUS_VERSION}-bundle.zip

USER nexus

