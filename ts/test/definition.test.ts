import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "person",
    "accessor": "Person",
    "op": "list",
    "method": "GET",
    "path": "/persons/",
    "args": [],
    "select": {
      "case_navalny": "v1",
      "internet_blocking": "v1"
    },
    "headers": [],
    "query": [
      "case_navalny",
      "internet_blocking"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "results": [
        {
          "cases": [
            "x"
          ],
          "details": "x",
          "id": 1,
          "name": "x",
          "position": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
