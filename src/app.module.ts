import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractSchema } from './schema/contract.schema';
import { ContractManagementService } from './contractManagement/contractManagement.service';
import { ContractManagementController } from './contractManagement/contractManagement.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bpMCOps:bpMCOps@cluster0.javn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: 'Contract', schema: ContractSchema }]),
  ],
  controllers: [AppController, ContractManagementController],
  providers: [AppService, ContractManagementService],
})
export class AppModule {}
