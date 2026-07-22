# ProjectName SDK exists test

import pytest
from blackbookwiki_sdk import BlackbookWikiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BlackbookWikiSDK.test(None, None)
        assert testsdk is not None
