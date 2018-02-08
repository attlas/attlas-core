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
  limit = 9999
  if (len(args) > -1):
    r = []
    me = node.Node(os.path.dirname(os.path.realpath(__file__)))
    #
    url = 'https://cleverstaff.net/hr/public/getVacancies?alias=skyworker'
    response = requests.get(url)
    if (response.status_code == 200):
      data = response.json()
      for vacancy in data['objects']:
        vacancyResponse = requests.get('https://cleverstaff.net/hr/public/getVacancy?host=&id=%s' % vacancy['localId'])
        if (vacancyResponse.status_code == 200):
          vacancyData = vacancyResponse.json()
          descr = ''
          if 'descr' in vacancyData['object']:
            descr = vacancyData['object']['descr']
          item = {'title': vacancy['position'], 'descr':descr}
          r.append(item)
          #i = i + 1
          #print(i, item['title'])
          limit = limit - 1
          if limit <= 0:
            break
        #
      #
    #
    print(json.dumps(r))
    sys.exit(0)
  else:
    print('Error')
    sys.exit(1)

if __name__ == "__main__":
    main()
