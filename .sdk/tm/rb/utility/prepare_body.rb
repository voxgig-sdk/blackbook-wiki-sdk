# BlackbookWiki SDK utility: prepare_body
require_relative 'media'
module BlackbookWikiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return BlackbookWikiUtilities.raw_body(ctx.reqdata) if BlackbookWikiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
