export class SplitFormModel {

    private cid: string;
    private eip: number;
    private taxes: number;
    private total: number;
    private others: number;
    private basePay: number;
    private adjustments: number;
    private miscServices: number;
    private resourceName: string;

    public static getBillingTotal(billingInfoObj: SplitFormModel): number {
        const bInfo: any =  billingInfoObj;
        if (Object.keys(bInfo).length < 1) {
            return 0;
        }

        let bInfoTotal: number = 0;
        delete bInfo.total;

        for (let i in bInfo) {
            if (typeof bInfo[i] !== 'number') {
                delete bInfo[i];
            } else {
                bInfoTotal += bInfo[i];
            }
        }
        return bInfoTotal;
    }

    public static getUUID(): number {
        return Math.floor(Math.random() * 10000);
    }

    public static generateHash(): string {
        return `${SplitFormModel.getUUID()}-${SplitFormModel.getUUID()}-${SplitFormModel.getUUID()}`;
    }

    constructor(billingInfo: any = {}) {
        this.eip = billingInfo.eip || 0;
        this.taxes = billingInfo.taxes || 0;
        this.others = billingInfo.others || 0;
        this.basePay = billingInfo.basePay || 0;
        this.cid = `C${SplitFormModel.generateHash()}`;
        this.adjustments = billingInfo.adjustments || 0;
        this.miscServices = billingInfo.miscServices || 0;
        this.total = SplitFormModel.getBillingTotal(billingInfo);
        this.resourceName =  billingInfo.resourceName || `UNKNOWN_${SplitFormModel.getUUID()}`;
    }
}
