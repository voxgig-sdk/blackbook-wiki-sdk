

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cases":{"a":true,"h":"Cases","n":"cases","r":false,"sh":"List of cases associated with the person","t":"`$ARRAY`","key$":"cases","index$":0},"details":{"a":true,"h":"Details","n":"details","r":false,"sh":"Additional details about the person","t":"`$STRING`","key$":"details","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the person","t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Full name of the person","t":"`$STRING`","key$":"name","index$":3},"position":{"a":true,"h":"Position","n":"position","r":false,"sh":"Position or role of the person (e.g., judge, investigator, prosecutor)","t":"`$STRING`","key$":"position","index$":4}},"id":{"field":"id","name":"id"},"name":"person","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /persons/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"case_navalny","or":"case_navalny","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"internet_blocking","or":"internet_blocking","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/persons/","q":{"exist":["case_navalny","internet_blocking"]},"r":{},"s":[{"lit":"persons"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"person","name__orig":"person","Name":"Person","name_":"person","name-":"person","NAME":"PERSON","index$":0}, {"active":true,"entity":"person","key$":"BasicPersonFlow","kind":"basic","name":"BasicPersonFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"person_ref01"}}],"index$":0}]}, 'Person', {"GET /persons/":{"protocol":"http","operationId":"getPersonsList","responses":{"200":{"description":"Successful response with list of persons","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of persons returned","key$":"count","type":"integer"},"results":{"items":{"properties":{"cases":{"description":"List of cases associated with the person","items":{"type":"string"},"type":"array","key$":"cases"},"details":{"description":"Additional details about the person","type":"string","key$":"details"},"id":{"description":"Unique identifier for the person","type":"integer","key$":"id"},"name":{"description":"Full name of the person","type":"string","key$":"name"},"position":{"description":"Position or role of the person (e.g., judge, investigator, prosecutor)","type":"string","key$":"position"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[{"name":"case_navalny","in":"query","description":"Filter persons related to the Navalny case","required":false,"schema":{"type":"boolean"},"index$":0},{"name":"internet_blocking","in":"query","description":"Filter persons related to internet blocking cases","required":false,"schema":{"type":"boolean"},"index$":1}],"securitySource":"unspecified"}})
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
  
