# BlackbookWiki SDK configuration


def make_config():
    return {
        "main": {
            "name": "BlackbookWiki",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://black-book.wiki/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "person": {},
            },
        },
        "entity": {
      "person": {
        "fields": [
          {
            "active": True,
            "name": "case",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "detail",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "position",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "person",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "case_navalny",
                      "orig": "case_navalny",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "internet_blocking",
                      "orig": "internet_blocking",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/persons/",
                "parts": [
                  "persons",
                ],
                "select": {
                  "exist": [
                    "case_navalny",
                    "internet_blocking",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
