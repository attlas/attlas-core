"use strict";

module.exports = class BaseCtrl {
  //
  constructor(home) {
    this.home = home;
  }
  //
  getHome() {
    return this.home;
  }
}