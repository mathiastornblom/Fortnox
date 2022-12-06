import { DeepPartial } from './defaults';

export type FNAccount = DeepPartial<AccountClass>;

export type Account = {
    Account: AccountClass;
};

export type AccountClass = {
    Account: {
        '@url': string;
        Active: boolean;
        BalanceBroughtForward: number;
        CostCenter: string;
        CostCenterSettings: string;
        Description: string;
        Number: number;
        Project: string;
        ProjectSettings: string;
        SRU: number;
        Year: number;
        VATCode: string;
        BalanceCarriedForward: number;
        TransactionInformation: string;
        TransactionInformationSettings: string;
        QuantitySettings: string;
        QuantityUnit: string;
        OpeningQuantities: OpeningQuantity[];
    };
};

export type OpeningQuantity = {
    Project: string;
    Balance: number;
};
