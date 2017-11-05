package com.attlas.xaas;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.io.IOException;
import java.net.URI;
import java.util.Optional;
import java.util.concurrent.CountDownLatch;

import org.apache.log4j.Logger;

/**
 * Main class.
 *
 */
public class Main {

  private final static Logger logger = Logger.getLogger(Main.class);
  //
  private static HttpServer server;
  private static CountDownLatch exitEvent;

  // Base URI the Grizzly HTTP server will listen on
  public static final String BASE_URI;
  private static final String protocol;
  private static final Optional < String > host;
  private static final Optional < String > port;

  static {
    protocol = "http://";
    host = Optional.ofNullable(System.getenv("SERVICE_HOSTNAME"));
    port = Optional.ofNullable(System.getenv("SERVICE_PORT"));
    BASE_URI = protocol + host.orElse("localhost") + ":" + port.orElse("80") + "/";
  }

  /**
   * Starts Grizzly HTTP server exposing JAX-RS resources defined in this application.
   * @return Grizzly HTTP server.
   */
  public static HttpServer createServer() {
    logger.info("Grizzly server URL " + BASE_URI);
    // create a resource config that scans for JAX-RS resources and providers
    // in com.attlas package
    final ResourceConfig rc = new ResourceConfig().packages("com.attlas.xaas");

    // create and start a new instance of grizzly http server
    // exposing the Jersey application at BASE_URI
    return GrizzlyHttpServerFactory.createHttpServer(URI.create(BASE_URI), rc);
  }

  /**
   * Main method.
   * @param args
   * @throws IOException
   */
  public static void main(String[] args) throws IOException {
    //
    logger.info("Initiliazing Grizzly server using " + BASE_URI);
    exitEvent = new CountDownLatch(1);
    server = createServer();
    // register shutdown hook
    Runtime.getRuntime().addShutdownHook(new Thread(new Runnable() {
      @Override
      public void run() {
        logger.info("Stopping server ...");
        server.stop();
        exitEvent.countDown();
      }
    }, "shutdownHook"));

    try {
      server.start();
      logger.info(String.format("Jersey app started with WADL available at %sapplication.wadl", BASE_URI));
      logger.info("Press CTRL^C to exit ...");
      exitEvent.await();
      logger.info("Exiting service ...");
      //Thread.currentThread().join();
    } catch (InterruptedException e) {
      logger.error("There was an error while starting Grizzly HTTP server.", e);
    }
  }
}
