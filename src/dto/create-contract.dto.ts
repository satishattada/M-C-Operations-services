import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  readonly bpSubPortfolio: string;

  @IsString()
  @IsNotEmpty()
  readonly contractName: string;

  @IsString()
  @IsNotEmpty()
  readonly contractType: string;

  @IsString()
  @IsNotEmpty()
  readonly discountPercentage: string;

  @IsString()
  @IsNotEmpty()
  readonly teamType: string;

  @IsString()
  @IsNotEmpty()
  readonly contractCurrency: string;

  @IsString()
  @IsNotEmpty()
  readonly contractFGID: string;

  @IsString()
  @IsNotEmpty()
  readonly referencePO: string;

  @IsString()
  @IsNotEmpty()
  readonly PORevision: string;

  @IsString()
  @IsNotEmpty()
  readonly contractProgram: string;

  @IsString()
  readonly contractCSG: string;

  @IsString()
  @IsNotEmpty()
  readonly revenueType: string;

  @IsString()
  @IsNotEmpty()
  readonly contractStartDate: string;

  @IsString()
  @IsNotEmpty()
  readonly contractEndDate: string;

  @IsString()
  readonly POAmountOMS: string;

  @IsString()
  readonly POAmountFG: string;

  @IsString()
  readonly POAmountAriba: string;

  @IsString()
  readonly masterProjectCode: string;

  @IsString()
  readonly masterProjectCodePM: string;

  @IsString()
  @IsNotEmpty()
  readonly masterPU: string;

  @IsString()
  @IsNotEmpty()
  readonly LOENumber: string;

  @IsString()
  @IsNotEmpty()
  readonly linkedDPSNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly infosysContractType: string;

  @IsString()
  @IsNotEmpty()
  readonly totalSoWWorkers: string;
}