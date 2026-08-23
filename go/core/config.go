package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BlackbookWiki",
			"slug": "blackbook-wiki",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://black-book.wiki/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"person": map[string]any{},
			},
		},
		"entity": map[string]any{
			"person": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cases",
						"short": "List of cases associated with the person",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "details",
						"short": "Additional details about the person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the person",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Full name of the person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"short": "Position or role of the person (e.g., judge, investigator, prosecutor)",
						"type": "`$STRING`",
					},
				},
				"name": "person",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "case_navalny",
											"orig": "case_navalny",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "internet_blocking",
											"orig": "internet_blocking",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/",
								"parts": []any{
									"persons",
								},
								"select": map[string]any{
									"exist": []any{
										"case_navalny",
										"internet_blocking",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
