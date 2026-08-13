# BlackbookWiki SDK feature factory

from blackbookwiki_sdk.feature.base_feature import BlackbookWikiBaseFeature
from blackbookwiki_sdk.feature.test_feature import BlackbookWikiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BlackbookWikiBaseFeature(),
        "test": lambda: BlackbookWikiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
