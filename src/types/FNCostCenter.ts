import { DeepPartial } from './defaults';

export type FNCostCenter = DeepPartial<CostCenterClass>;

export type CostCenter = {
    CostCenter: CostCenterClass;
};

export type CostCenterClass = {
    Code?: 'string';
    Description?: 'string';
    Note?: 'string';
    Active?: boolean;
};
