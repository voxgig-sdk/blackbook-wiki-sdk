import { BlackbookWikiEntityBase } from '../BlackbookWikiEntityBase';
import type { BlackbookWikiSDK } from '../BlackbookWikiSDK';
import type { Control } from '../types';
import type { Person, PersonListMatch } from '../BlackbookWikiTypes';
declare class PersonEntity extends BlackbookWikiEntityBase<Person> {
    constructor(client: BlackbookWikiSDK, entopts: any);
    make(this: PersonEntity): PersonEntity;
    list(this: any, reqmatch?: PersonListMatch, ctrl?: Control): Promise<PersonEntity[]>;
}
export { PersonEntity };
