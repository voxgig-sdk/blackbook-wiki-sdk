<?php
declare(strict_types=1);

// BlackbookWiki SDK utility: result_headers

class BlackbookWikiResultHeaders
{
    public static function call(BlackbookWikiContext $ctx): ?BlackbookWikiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
