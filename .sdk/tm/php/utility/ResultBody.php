<?php
declare(strict_types=1);

// BlackbookWiki SDK utility: result_body

class BlackbookWikiResultBody
{
    public static function call(BlackbookWikiContext $ctx): ?BlackbookWikiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
