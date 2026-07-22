package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPersonEntityFunc func(client *BlackbookWikiSDK, entopts map[string]any) BlackbookWikiEntity

