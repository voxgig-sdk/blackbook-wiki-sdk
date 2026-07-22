# BlackbookWiki SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BlackbookWikiFeatures
  def self.make_feature(name)
    case name
    when "base"
      BlackbookWikiBaseFeature.new
    when "test"
      BlackbookWikiTestFeature.new
    else
      BlackbookWikiBaseFeature.new
    end
  end
end
