# BlackbookWiki SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BlackbookWikiFeatures
  def self.make_feature(name)
    case name
    when "base"
      BlackbookWikiBaseFeature.new
    when "ratelimit"
      BlackbookWikiRatelimitFeature.new
    when "retry"
      BlackbookWikiRetryFeature.new
    when "test"
      BlackbookWikiTestFeature.new
    when "timeout"
      BlackbookWikiTimeoutFeature.new
    else
      BlackbookWikiBaseFeature.new
    end
  end
end
