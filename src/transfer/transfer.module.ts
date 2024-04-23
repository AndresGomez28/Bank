import { Module } from '@nestjs/common';
import { TransferController } from './controllers/transfer.controller';
import { TransferService } from './services/transfer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/transfer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])
  ],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
