import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Contract {
  @Prop()
  bpSubPortfolio: string;

  @Prop()
  contractName: string;

  @Prop()
  contractType: string;

  @Prop()
  discountPercentage: string;

  @Prop()
  teamType: string;

  @Prop()
  contractCurrency: string;

  @Prop()
  contractFGID: string;

  @Prop()
  referencePO: string;

  @Prop()
  PORevision: string;

  @Prop()
  contractProgram: string;

  @Prop()
  contractCSG: string;

  @Prop()
  revenueType: string;

  @Prop()
  contractStartDate: string;

  @Prop()
  contractEndDate: string;

  @Prop()
  POAmountOMS: string;

  @Prop()
  POAmountFG: string;

  @Prop()
  POAmountAriba: string;

  @Prop()
  masterProjectCode: string;

  @Prop()
  masterProjectCodePM: string;

  @Prop()
  masterPU: string;

  @Prop()
  LOENumber: string;

  @Prop()
  linkedDPSNumber: string;

  @Prop()
  infosysContractType: string;

  @Prop()
  totalSoWWorkers: string;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);