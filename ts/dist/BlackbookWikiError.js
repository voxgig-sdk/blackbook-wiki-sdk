"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackbookWikiError = void 0;
class BlackbookWikiError extends Error {
    isBlackbookWikiError = true;
    sdk = 'BlackbookWiki';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BlackbookWikiError = BlackbookWikiError;
//# sourceMappingURL=BlackbookWikiError.js.map