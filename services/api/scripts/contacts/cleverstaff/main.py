#!/usr/bin/python

import os
import sys
import json
import jsonschema
import requests

sys.path.append(os.path.dirname(os.path.realpath(os.path.join(__file__, '../../'))))
import node

##
##
def main(args=None):
  if args is None:
    args = sys.argv[1:]
  #
  if (len(args) > -1):
    r = []
    me = node.Node(os.path.dirname(os.path.realpath(__file__)))
    #
    url = 'https://cleverstaff.net/hr/public/getVacancies?alias=skyworker'
    response = requests.get(url)
    i = 1000
    if (response.status_code == 200):
      data = response.json()
      for vacancy in data['objects']:
        vacancyResponse = requests.get('https://cleverstaff.net/hr/public/getVacancy?host=&id=%s' % vacancy['localId'])
        if (vacancyResponse.status_code == 200):
          vacancyData = vacancyResponse.json()
          item = {'title': vacancy['position'], 'desc':vacancyData['object']['descr']}
          r.append(item)
          #i = i + 1
          #print(i, item['title'])
          i = i - 1
          if i <= 0:
            break
        #
      #
    #
    print(json.dumps(r))
  else:
    print('Error')

if __name__ == "__main__":
    main()
