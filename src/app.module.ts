import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistanceModule } from './libs/persistance';
import dbConfig from './libs/persistance/db-config';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistanceModule,
    TransferModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
