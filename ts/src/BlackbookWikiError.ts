
import { Context } from './Context'


class BlackbookWikiError extends Error {

  isBlackbookWikiError = true

  sdk = 'BlackbookWiki'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BlackbookWikiError
}

