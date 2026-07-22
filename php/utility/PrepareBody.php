<?php
declare(strict_types=1);

// BlackbookWiki SDK utility: prepare_body

class BlackbookWikiPrepareBody
{
    public static function call(BlackbookWikiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
