package com.attlas.api;

import java.util.HashMap;

import org.apache.log4j.Logger;

public abstract class Resources<T extends Resources<T>> {
  //
  protected Resources(Class<? extends T> subClass) {
    this.subClass = subClass;
  }
  //
  public String getClassName(){
    return this.subClass.getName();
  }
  //
  private static final Logger logger = Logger.getLogger(Resources.class);
  //
  private static HashMap<String, Object> resources = new HashMap<String, Object>();
  //
  private final Class<? extends T> subClass;
}

