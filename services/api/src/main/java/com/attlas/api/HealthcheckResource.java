package com.attlas.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;


import org.apache.log4j.Logger;

/**
 * 
 */
@Path("healthcheck")
public class HealthcheckResource {

  private static final Logger logger = Logger.getLogger(HealthcheckResource.class);
  /**
   * @return String.
   */
  @GET
  @Produces(MediaType.TEXT_PLAIN)
  public String getIt(@Context UriInfo uriInfo) {
    return "live";
  }
}
