

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BlackbookWikiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PersonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BLACKBOOK_WIKI_TEST_LIVE=TRUE.
  afterEach(liveDelay('BLACKBOOK_WIKI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BlackbookWikiSDK.test()
    const ent = testsdk.Person()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BLACKBOOK_WIKI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'person.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cases","req":false,"short":"List of cases associated with the person","type":"`$ARRAY`","index$":0},{"active":true,"name":"details","req":false,"short":"Additional details about the person","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the person","type":"`$INTEGER`","index$":2},{"active":true,"name":"name","req":false,"short":"Full name of the person","type":"`$STRING`","index$":3},{"active":true,"name":"position","req":false,"short":"Position or role of the person (e.g., judge, investigator, prosecutor)","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"person","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"case_navalny","orig":"case_navalny","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"internet_blocking","orig":"internet_blocking","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /persons/","json":"{\"operationId\":\"getPersonsList\",\"parameters\":[{\"description\":\"Filter persons related to the Navalny case\",\"in\":\"query\",\"name\":\"case_navalny\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Filter persons related to internet blocking cases\",\"in\":\"query\",\"name\":\"internet_blocking\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Total number of persons returned\",\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"cases\":{\"description\":\"List of cases associated with the person\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"details\":{\"description\":\"Additional details about the person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the person\",\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the person\",\"type\":\"string\"},\"position\":{\"description\":\"Position or role of the person (e.g., judge, investigator, prosecutor)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of persons\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/persons/","segments":[{"lit":"persons"}],"select":{"exist":["case_navalny","internet_blocking"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"person","name__orig":"person","Name":"Person","name_":"person","name-":"person","NAME":"PERSON","index$":0}, {"active":true,"entity":"person","key$":"BasicPersonFlow","kind":"basic","name":"BasicPersonFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"person_ref01"}}],"index$":0}]}, 'Person')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let person_ref01_data = Object.values(setup.data.existing.person)[0] as any

    // LIST
    const person_ref01_ent = client.Person()
    const person_ref01_match: any = {}

    const person_ref01_list = (await person_ref01_ent.list(person_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/person/PersonTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BlackbookWikiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['person01','person02','person03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BLACKBOOK_WIKI_TEST_PERSON_ENTID': idmap,
    'BLACKBOOK_WIKI_TEST_LIVE': 'FALSE',
    'BLACKBOOK_WIKI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BLACKBOOK_WIKI_TEST_PERSON_ENTID']

  const live = 'TRUE' === env.BLACKBOOK_WIKI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BLACKBOOK_WIKI_TEST_PERSON_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BlackbookWikiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BLACKBOOK_WIKI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
