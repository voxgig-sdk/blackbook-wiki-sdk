
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'BlackbookWiki',
        slug: "blackbook-wiki",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "List of cases associated with the person",
          "type": "`$ARRAY`"
        },
        {
          "name": "details",
          "short": "Additional details about the person",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the person",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Full name of the person",
          "type": "`$STRING`"
        },
        {
          "name": "position",
          "short": "Position or role of the person (e.g., judge, investigator, prosecutor)",
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

