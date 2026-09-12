import { Context } from './Context';
declare class BlackbookWikiError extends Error {
    isBlackbookWikiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BlackbookWikiError };
