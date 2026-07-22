# BlackbookWiki SDK exists test

require "minitest/autorun"
require_relative "../BlackbookWiki_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = BlackbookWikiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
