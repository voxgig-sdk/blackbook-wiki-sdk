<?php
declare(strict_types=1);

// BlackbookWiki SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BlackbookWikiMakeContext
{
    public static function call(array $ctxmap, ?BlackbookWikiContext $basectx): BlackbookWikiContext
    {
        return new BlackbookWikiContext($ctxmap, $basectx);
    }
}
