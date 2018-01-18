package com.attlas.api;

import java.util.HashMap;

import com.attlas.api.Resources;
import com.attlas.api.GoalInfo;


public class Goals extends Resources<Goals> {
  //
  public Goals() {
    super(Goals.class);
  }
  //
  public static GoalInfo add(final GoalInfo goalInfo){
    return goalInfo;
  }
}
