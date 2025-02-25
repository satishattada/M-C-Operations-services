import { Document } from 'mongoose';

export interface IContract extends Document {
  readonly bpSubPortfolio: string;
  readonly contractName: string;
  readonly contractType: string;
  readonly discountPercentage: string;
  readonly teamType: string;
  readonly contractCurrency: string;
  readonly contractFGID: string;
  readonly referencePO: string;
  readonly PORevision: string;
  readonly contractProgram: string;
  readonly contractCSG: string;
  readonly revenueType: string;
  readonly contractStartDate: string;
  readonly contractEndDate: string;
  readonly POAmountOMS: string;
  readonly POAmountFG: string;
  readonly POAmountAriba: string;
  readonly masterProjectCode: string;
  readonly masterProjectCodePM: string;
  readonly masterPU: string;
  readonly LOENumber: string;
  readonly linkedDPSNumber: string;
  readonly infosysContractType: string;
  readonly totalSoWWorkers: string;
}