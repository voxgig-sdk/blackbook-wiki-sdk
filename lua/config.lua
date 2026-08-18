-- BlackbookWiki SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BlackbookWiki",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://black-book.wiki/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["person"] = {},
      },
    },
    entity = {
      ["person"] = {
        ["fields"] = {
          {
            ["name"] = "cases",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "details",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "position",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "person",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "case_navalny",
                      ["orig"] = "case_navalny",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "internet_blocking",
                      ["orig"] = "internet_blocking",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/persons/",
                ["parts"] = {
                  "persons",
                },
                ["select"] = {
                  ["exist"] = {
                    "case_navalny",
                    "internet_blocking",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
