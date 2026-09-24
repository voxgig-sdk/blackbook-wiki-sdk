
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BlackbookWikiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BlackbookWikiSDK.test()
    equal(testsdk instanceof BlackbookWikiSDK, true,
      'BlackbookWikiSDK.test() must return a client synchronously')
  })

})
