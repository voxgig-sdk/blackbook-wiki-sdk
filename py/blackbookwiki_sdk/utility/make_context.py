# BlackbookWiki SDK utility: make_context

from blackbookwiki_sdk.core.context import BlackbookWikiContext


def make_context_util(ctxmap, basectx):
    return BlackbookWikiContext(ctxmap, basectx)
