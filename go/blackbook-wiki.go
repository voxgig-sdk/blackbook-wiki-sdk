package voxgigblackbookwikisdk

import (
	"github.com/voxgig-sdk/blackbook-wiki-sdk/go/core"
	"github.com/voxgig-sdk/blackbook-wiki-sdk/go/entity"
	"github.com/voxgig-sdk/blackbook-wiki-sdk/go/feature"
	_ "github.com/voxgig-sdk/blackbook-wiki-sdk/go/utility"
)

// Type aliases preserve external API.
type BlackbookWikiSDK = core.BlackbookWikiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BlackbookWikiEntity = core.BlackbookWikiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BlackbookWikiError = core.BlackbookWikiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPersonEntityFunc = func(client *core.BlackbookWikiSDK, entopts map[string]any) core.BlackbookWikiEntity {
		return entity.NewPersonEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBlackbookWikiSDK = core.NewBlackbookWikiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBlackbookWikiSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BlackbookWikiSDK  { return NewBlackbookWikiSDK(nil) }
func Test() *BlackbookWikiSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
