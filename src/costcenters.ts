import { Dispatch } from './dispatch';
import { FNCostCenter } from './types/FNCostCenter';
import { Util } from './utils';

type CostCenterResult = {
    CostCenter: FNCostCenter;
};

export class CostCenters {
    private dispatch: Dispatch;
    private path = 'costcenters';

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
    }

    async get(CostCenterNumber: string) {
        const result = (await this.dispatch.get(
            `${this.path}/${CostCenterNumber}`
        )) as unknown as CostCenterResult;
        return result.CostCenter;
    }

    async getAll(filter?: string) {
        const result = (await Util.getAllPages(
            this.path,
            'CostCenters',
            this.dispatch,
            filter
        )) as FNCostCenter[];
        return result;
    }

    async create(CostCenter: any) {
        const result = (await this.dispatch.post(this.path, {
            CostCenter: CostCenter,
        })) as CostCenterResult;
        return result.CostCenter;
    }

    async update(CostCenter: any) {
        const result = (await this.dispatch.put(
            `${this.path}/${CostCenter.CostCenterNumber}`,
            { CostCenter: CostCenter }
        )) as CostCenterResult;
        return result.CostCenter;
    }

    async remove(CostCenterNumber: string) {
        //Remove or make inactive
        try {
            const result = await this.dispatch.delete(
                `${this.path}/${CostCenterNumber}`
            );
            return result;
        } catch (error) {
            const result = await this.update({
                CostCenterNumber: CostCenterNumber,
                Active: false,
            });
            return result.Active === false;
        }
    }
}
