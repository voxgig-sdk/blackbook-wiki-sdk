-- BlackbookWiki SDK exists test

local sdk = require("blackbook-wiki_sdk")

describe("BlackbookWikiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
