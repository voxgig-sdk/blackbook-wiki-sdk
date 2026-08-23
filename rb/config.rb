# BlackbookWiki SDK configuration

module BlackbookWikiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "BlackbookWiki",
        "slug" => "blackbook-wiki",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://black-book.wiki/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "person" => {},
        },
      },
      "entity" => {
        "person" => {
          "fields" => [
            {
              "name" => "cases",
              "short" => "List of cases associated with the person",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "details",
              "short" => "Additional details about the person",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the person",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "short" => "Full name of the person",
              "type" => "`$STRING`",
            },
            {
              "name" => "position",
              "short" => "Position or role of the person (e.g., judge, investigator, prosecutor)",
              "type" => "`$STRING`",
            },
          ],
          "name" => "person",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "case_navalny",
                        "orig" => "case_navalny",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "internet_blocking",
                        "orig" => "internet_blocking",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/persons/",
                  "parts" => [
                    "persons",
                  ],
                  "select" => {
                    "exist" => [
                      "case_navalny",
                      "internet_blocking",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BlackbookWikiFeatures.make_feature(name)
  end
end
