import { Dispatch } from './dispatch';
import { FNAccount } from './types/FNAccount';
import { Util } from './utils';

type AccountResult = {
    Account: FNAccount;
};

export class Accounts {
    private dispatch: Dispatch;
    private path = 'accounts';

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
    }

    async get(AccountNumber: string) {
        const result = (await this.dispatch.get(
            `${this.path}/${AccountNumber}`
        )) as unknown as AccountResult;
        return result.Account;
    }

    async getAll({ filter }: { filter?: string } = {}) {
        const result = (await Util.getAllPages(
            this.path,
            'Accounts',
            this.dispatch,
            filter
        )) as FNAccount[];
        return result;
    }

    async create(Account: any) {
        const result = (await this.dispatch.post(this.path, {
            Account: Account,
        })) as AccountResult;
        return result.Account;
    }

    async update(Account: any) {
        const result = (await this.dispatch.put(
            `${this.path}/${Account.Number}`,
            { Account: Account }
        )) as AccountResult;
        return result.Account;
    }

    async remove(AccountNumber: string) {
        //Remove or make inactive
        try {
            const result = await this.dispatch.delete(
                `${this.path}/${AccountNumber}`
            );
            return result;
        } catch (error) {
            const result = await this.update({
                AccountNumber: AccountNumber,
                Active: false,
            });
            return result.Account?.Active === false;
        }
    }
}
