package com.attlas.api;

import java.util.ArrayList;
import java.util.HashMap;

public class GoalInfo {
  /**
   *
   */
  public GoalInfo() {
  }
  public GoalInfo(final String flowId, final Object parameters) {
    this.flowId = flowId;
    this.parameters = parameters;
  }

  /**
   *
   */
  public String getFlowId() {
    return this.flowId;
  }
  public void setFlowId(final String flowId){
    this.flowId = flowId;
  }
  public Object getParameters() {
    return this.parameters;
  }
  public void setParameters(final Object parameters){
    this.parameters = parameters;
  }

  private String flowId = null;
  private Object parameters = null;
}

