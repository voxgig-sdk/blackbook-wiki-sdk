# BlackbookWiki SDK utility: make_context
require_relative '../core/context'
module BlackbookWikiUtilities
  MakeContext = ->(ctxmap, basectx) {
    BlackbookWikiContext.new(ctxmap, basectx)
  }
end
