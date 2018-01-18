package com.attlas.api;

import java.util.ArrayList;
import java.util.HashMap;

public class GoalInfo {
  /**
   *
   */
  public GoalInfo() {
  }
  public GoalInfo(final String flowId) {
    this.flowId = flowId;
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

  private String flowId = null;
}

