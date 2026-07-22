<?php
declare(strict_types=1);

// BlackbookWiki SDK log feature

require_once __DIR__ . '/BaseFeature.php';

class BlackbookWikiLogFeature extends BlackbookWikiBaseFeature
{
    private mixed $client;
    private ?array $options;
    private mixed $logger;

    public function __construct()
    {
        parent::__construct();
        $this->version = '0.0.1';
        $this->name = 'log';
        $this->active = true;
        $this->client = null;
        $this->options = null;
        $this->logger = null;
    }

    public function init(BlackbookWikiContext $ctx, array $options): void
    {
        $this->client = $ctx->client;
        $this->options = $options;
        $this->active = ($options['active'] ?? null) === true;

        if ($this->active) {
            if (isset($options['logger'])) {
                $this->logger = $options['logger'];
            } else {
                $this->logger = STDERR;
            }
        }
    }

    private function _loghook(string $hook, BlackbookWikiContext $ctx, string $level = 'info'): void
    {
        if (!$this->logger) {
            return;
        }
        $opname = $ctx->op ? $ctx->op->name : '';
        $msg = "hook={$hook} op={$opname}";
        if (is_resource($this->logger)) {
            fwrite($this->logger, "[" . strtoupper($level) . "] {$msg}\n");
        } elseif (is_callable($this->logger)) {
            ($this->logger)("[" . strtoupper($level) . "] {$msg}");
        }
    }

    public function PostConstruct(BlackbookWikiContext $ctx): void { $this->_loghook('PostConstruct', $ctx); }
    public function PostConstructEntity(BlackbookWikiContext $ctx): void { $this->_loghook('PostConstructEntity', $ctx); }
    public function SetData(BlackbookWikiContext $ctx): void { $this->_loghook('SetData', $ctx); }
    public function GetData(BlackbookWikiContext $ctx): void { $this->_loghook('GetData', $ctx); }
    public function SetMatch(BlackbookWikiContext $ctx): void { $this->_loghook('SetMatch', $ctx); }
    public function GetMatch(BlackbookWikiContext $ctx): void { $this->_loghook('GetMatch', $ctx); }
    public function PrePoint(BlackbookWikiContext $ctx): void { $this->_loghook('PrePoint', $ctx); }
    public function PreSpec(BlackbookWikiContext $ctx): void { $this->_loghook('PreSpec', $ctx); }
    public function PreRequest(BlackbookWikiContext $ctx): void { $this->_loghook('PreRequest', $ctx); }
    public function PreResponse(BlackbookWikiContext $ctx): void { $this->_loghook('PreResponse', $ctx); }
    public function PreResult(BlackbookWikiContext $ctx): void { $this->_loghook('PreResult', $ctx); }
}
