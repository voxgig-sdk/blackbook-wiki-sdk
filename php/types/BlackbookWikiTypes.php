<?php
declare(strict_types=1);

// Typed models for the BlackbookWiki SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Person entity data model. */
class Person
{
    public ?array $cases = null;
    public ?string $details = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $position = null;
}

/** Request payload for Person#list. */
class PersonListMatch
{
    public ?array $cases = null;
    public ?string $details = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $position = null;
}

