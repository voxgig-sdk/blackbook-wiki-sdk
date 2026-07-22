-- BlackbookWiki SDK error

local BlackbookWikiError = {}
BlackbookWikiError.__index = BlackbookWikiError


function BlackbookWikiError.new(code, msg, ctx)
  local self = setmetatable({}, BlackbookWikiError)
  self.is_sdk_error = true
  self.sdk = "BlackbookWiki"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BlackbookWikiError:error()
  return self.msg
end


function BlackbookWikiError:__tostring()
  return self.msg
end


return BlackbookWikiError
