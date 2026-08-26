<?php
declare(strict_types=1);

// BlackbookWiki SDK configuration

class BlackbookWikiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "BlackbookWiki",
                "slug" => "blackbook-wiki",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://black-book.wiki/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "person" => [],
                ],
            ],
            "entity" => [
        'person' => [
          'fields' => [
            [
              'name' => 'cases',
              'short' => 'List of cases associated with the person',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'details',
              'short' => 'Additional details about the person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the person',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Full name of the person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'position',
              'short' => 'Position or role of the person (e.g., judge, investigator, prosecutor)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'person',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'case_navalny',
                        'orig' => 'case_navalny',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'internet_blocking',
                        'orig' => 'internet_blocking',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/persons/',
                  'parts' => [
                    'persons',
                  ],
                  'select' => [
                    'exist' => [
                      'case_navalny',
                      'internet_blocking',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BlackbookWikiFeatures::make_feature($name);
    }
}
