
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BlackbookWikiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BlackbookWikiSDK.test()
    equal(null !== testsdk, true)
  })

})
