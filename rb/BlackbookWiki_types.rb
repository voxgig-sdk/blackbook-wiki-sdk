# frozen_string_literal: true

# Typed models for the BlackbookWiki SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Person entity data model.
#
# @!attribute [rw] case
#   @return [Array, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [String, nil]
Person = Struct.new(
  :case,
  :detail,
  :id,
  :name,
  :position,
  keyword_init: true
)

# Request payload for Person#list.
#
# @!attribute [rw] case
#   @return [Array, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [String, nil]
PersonListMatch = Struct.new(
  :case,
  :detail,
  :id,
  :name,
  :position,
  keyword_init: true
)

