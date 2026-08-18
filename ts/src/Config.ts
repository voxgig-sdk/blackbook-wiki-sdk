
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'BlackbookWiki',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://black-book.wiki/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      person: {
      },

    }
  }


  entity = {
    "person": {
      "fields": [
        {
          "name": "cases",
          "type": "`$ARRAY`"
        },
        {
          "name": "details",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "position",
          "type": "`$STRING`"
        }
      ],
      "name": "person",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "case_navalny",
                    "orig": "case_navalny",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "internet_blocking",
                    "orig": "internet_blocking",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/",
              "parts": [
                "persons"
              ],
              "select": {
                "exist": [
                  "case_navalny",
                  "internet_blocking"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

