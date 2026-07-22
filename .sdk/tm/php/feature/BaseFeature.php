<?php
declare(strict_types=1);

// BlackbookWiki SDK base feature

class BlackbookWikiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BlackbookWikiContext $ctx, array $options): void {}
    public function PostConstruct(BlackbookWikiContext $ctx): void {}
    public function PostConstructEntity(BlackbookWikiContext $ctx): void {}
    public function SetData(BlackbookWikiContext $ctx): void {}
    public function GetData(BlackbookWikiContext $ctx): void {}
    public function GetMatch(BlackbookWikiContext $ctx): void {}
    public function SetMatch(BlackbookWikiContext $ctx): void {}
    public function PrePoint(BlackbookWikiContext $ctx): void {}
    public function PreSpec(BlackbookWikiContext $ctx): void {}
    public function PreRequest(BlackbookWikiContext $ctx): void {}
    public function PreResponse(BlackbookWikiContext $ctx): void {}
    public function PreResult(BlackbookWikiContext $ctx): void {}
    public function PreDone(BlackbookWikiContext $ctx): void {}
    public function PreUnexpected(BlackbookWikiContext $ctx): void {}
}
