import { DeepPartial } from './defaults';

export type FNCostCenter = DeepPartial<CostCenterClass>;

export type CostCenter = {
    CostCenter: CostCenterClass;
};

export type CostCenterClass = {
    '@url': string;
    Code?: string;
    Description?: string;
    Note?: string;
    Active?: boolean;
};
