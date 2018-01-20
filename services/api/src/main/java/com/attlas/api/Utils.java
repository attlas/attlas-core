package com.attlas.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.util.Optional;
import org.apache.log4j.Logger;

/**
 * Main class.
 *
 */
public class Utils {
  //
  private static final Logger logger = Logger.getLogger(Utils.class);

  /**
   */
  public static boolean exec(final String[] args){
    logger.info("[+] Executing: " + String.join(" ", args));
    int exitVal = -1;
    try {
      Process p = Runtime.getRuntime().exec(args);
      exitVal = p.waitFor();
      BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));
      String line = "";
      while ((line = reader.readLine())!= null) {
        System.out.println(" | " + line);
        logger.info(" | " + line);
      }
    } catch (Exception e) {
      logger.error("Execution error", e);
    }
    logger.info("[-]");
    return (exitVal == 0);
  }

}
