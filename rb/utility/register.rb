# BlackbookWiki SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BlackbookWikiUtility.registrar = ->(u) {
  u.clean = BlackbookWikiUtilities::Clean
  u.done = BlackbookWikiUtilities::Done
  u.make_error = BlackbookWikiUtilities::MakeError
  u.feature_add = BlackbookWikiUtilities::FeatureAdd
  u.feature_hook = BlackbookWikiUtilities::FeatureHook
  u.feature_init = BlackbookWikiUtilities::FeatureInit
  u.fetcher = BlackbookWikiUtilities::Fetcher
  u.make_fetch_def = BlackbookWikiUtilities::MakeFetchDef
  u.make_context = BlackbookWikiUtilities::MakeContext
  u.make_options = BlackbookWikiUtilities::MakeOptions
  u.make_request = BlackbookWikiUtilities::MakeRequest
  u.make_response = BlackbookWikiUtilities::MakeResponse
  u.make_result = BlackbookWikiUtilities::MakeResult
  u.make_point = BlackbookWikiUtilities::MakePoint
  u.make_spec = BlackbookWikiUtilities::MakeSpec
  u.make_url = BlackbookWikiUtilities::MakeUrl
  u.param = BlackbookWikiUtilities::Param
  u.prepare_auth = BlackbookWikiUtilities::PrepareAuth
  u.prepare_body = BlackbookWikiUtilities::PrepareBody
  u.prepare_headers = BlackbookWikiUtilities::PrepareHeaders
  u.prepare_method = BlackbookWikiUtilities::PrepareMethod
  u.prepare_params = BlackbookWikiUtilities::PrepareParams
  u.prepare_path = BlackbookWikiUtilities::PreparePath
  u.prepare_query = BlackbookWikiUtilities::PrepareQuery
  u.graphql_body = BlackbookWikiUtilities::GraphqlBody
  u.graphql_errors = BlackbookWikiUtilities::GraphqlErrors
  u.result_basic = BlackbookWikiUtilities::ResultBasic
  u.result_body = BlackbookWikiUtilities::ResultBody
  u.result_headers = BlackbookWikiUtilities::ResultHeaders
  u.transform_request = BlackbookWikiUtilities::TransformRequest
  u.transform_response = BlackbookWikiUtilities::TransformResponse
}
