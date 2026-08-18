# BlackbookWiki SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "cases",
            "type": "`$ARRAY`",
          },
          {
            "name": "details",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "position",
            "type": "`$STRING`",
          },
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
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "internet_blocking",
                      "orig": "internet_blocking",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.results`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
