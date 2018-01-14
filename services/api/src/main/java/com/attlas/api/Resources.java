package com.attlas.api;

import java.util.HashMap;

import org.apache.log4j.Logger;

public abstract class Resources<T extends Resources<T>> {
  //
  private static final Logger logger = Logger.getLogger(Resources.class);
  //
  private final Class<? extends T> subClass;
  //
  protected Resources(Class<? extends T> subClass) {
    this.subClass = subClass;
  }
  //
  public String getClassName(){
    return this.subClass.getName();
  }
  //
  private static HashMap<String, Object> contacts = new HashMap<String, Object>();
}

