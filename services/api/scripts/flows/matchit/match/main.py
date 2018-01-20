#!/usr/bin/python

import os
import sys
import json
import jsonschema

def match(stream, tags):
  streamTags = []
  streamLen = len(stream)
  dels = [" ", ".", "!", "?", "/", "\\", ";", ",", "|", "\t"]
  for tag in tags:
    try:
      utag = str(tag).lower();
      utagLen = len(utag)
      lPos = stream.find(utag)
      if lPos != -1:
        rPos = lPos + utagLen
        add = False
        if (lPos == 0):
          if (rPos < streamLen):
            add = stream[rPos] in dels
          else:
            add = True
        else:
          add = stream[lPos-1] in dels

        if (rPos >= streamLen):
          if (lPos > 0):
            add = stream[lPos-1] in dels
          else:
            add = True;
        else:
          add = stream[rPos] in dels
        if add:
          streamTags.append(utag)
    except:
      pass
  return streamTags;

##
def main(args=None):
  if args is None:
    args = sys.argv[1:]
  #
  if (len(args) > 0):
    try:
      print(1)
      home = os.path.dirname(os.path.realpath(__file__))
      print(2)
      schema = json.load(open(os.path.join(home,'attrs.json')))
      print(3)
      print(args[0])
      inputs = json.loads(args[0])
      print(4)
      #
      try:
        jsonschema.validate(inputs, schema)
        hardSkills = json.load(open(os.path.join(home,'docs/skills/hard/attrs.json')))
        arr1 = match(inputs['streams'][0].lower(), hardSkills['tags'])
        arr2 = match(inputs['streams'][1].lower(), hardSkills['tags'])
        r = []
        for i1 in arr1:
          for i2 in arr2:
            if i1 == i2:
              r.append(i1)
        #
        result = 0.0
        rLen = len(r)
        arr1Len = len(arr1)
        arr2Len = len(arr2)
        if (rLen > 0):
          m = 1.0
          if (arr1Len > 0) and (arr2Len > 0):
            m = 2.0
          if (arr1Len > 0):
            result += float(rLen) / float(arr1Len)
          if (arr2Len > 0):
            result += float(rLen) / float(arr2Len)
          result /= m
        #
        print(json.dumps({"value" : result}))
          

      except Exception as inst:
        print type(inst)
        print inst.args
        print inst
    except:
      print("Error")
      sys.exit(2)
  #
  sys.exit(1);

if __name__ == "__main__":
    main()
