<?php
declare(strict_types=1);

// BlackbookWiki SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

BlackbookWikiUtility::setRegistrar(function (BlackbookWikiUtility $u): void {
    $u->clean = [BlackbookWikiClean::class, 'call'];
    $u->done = [BlackbookWikiDone::class, 'call'];
    $u->make_error = [BlackbookWikiMakeError::class, 'call'];
    $u->feature_add = [BlackbookWikiFeatureAdd::class, 'call'];
    $u->feature_hook = [BlackbookWikiFeatureHook::class, 'call'];
    $u->feature_init = [BlackbookWikiFeatureInit::class, 'call'];
    $u->fetcher = [BlackbookWikiFetcher::class, 'call'];
    $u->make_fetch_def = [BlackbookWikiMakeFetchDef::class, 'call'];
    $u->make_context = [BlackbookWikiMakeContext::class, 'call'];
    $u->make_options = [BlackbookWikiMakeOptions::class, 'call'];
    $u->make_request = [BlackbookWikiMakeRequest::class, 'call'];
    $u->make_response = [BlackbookWikiMakeResponse::class, 'call'];
    $u->make_result = [BlackbookWikiMakeResult::class, 'call'];
    $u->make_point = [BlackbookWikiMakePoint::class, 'call'];
    $u->make_spec = [BlackbookWikiMakeSpec::class, 'call'];
    $u->make_url = [BlackbookWikiMakeUrl::class, 'call'];
    $u->param = [BlackbookWikiParam::class, 'call'];
    $u->prepare_auth = [BlackbookWikiPrepareAuth::class, 'call'];
    $u->prepare_body = [BlackbookWikiPrepareBody::class, 'call'];
    $u->prepare_headers = [BlackbookWikiPrepareHeaders::class, 'call'];
    $u->prepare_method = [BlackbookWikiPrepareMethod::class, 'call'];
    $u->prepare_params = [BlackbookWikiPrepareParams::class, 'call'];
    $u->prepare_path = [BlackbookWikiPreparePath::class, 'call'];
    $u->prepare_query = [BlackbookWikiPrepareQuery::class, 'call'];
    $u->result_basic = [BlackbookWikiResultBasic::class, 'call'];
    $u->result_body = [BlackbookWikiResultBody::class, 'call'];
    $u->result_headers = [BlackbookWikiResultHeaders::class, 'call'];
    $u->transform_request = [BlackbookWikiTransformRequest::class, 'call'];
    $u->transform_response = [BlackbookWikiTransformResponse::class, 'call'];
});
