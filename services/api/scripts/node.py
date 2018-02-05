#!/usr/bin/python

import os
import sys
import json
import jsonschema

#
#
class Node:
  #
  def __init__(self, home):
    self.home = home
    self.attrs = None
    #
    fn = os.path.join(home,'attrs.json')
    if (os.path.exists(fn)):
      self.attrs = json.load(open(fn))
  #
  def getAttrs(self):
    return self.attrs
