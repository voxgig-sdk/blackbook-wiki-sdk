<?php
declare(strict_types=1);

// BlackbookWiki SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BlackbookWikiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BlackbookWikiBaseFeature();
            case "test":
                return new BlackbookWikiTestFeature();
            default:
                return new BlackbookWikiBaseFeature();
        }
    }
}
