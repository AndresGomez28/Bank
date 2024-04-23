import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransferDto } from '../DTOs/common/transfer.dto';
import { TransferInputDto } from '../DTOs/requests/transfer-input.dto';
import { Model } from 'mongoose';
import { User } from '../entities/transfer.entity';

@Injectable()
export class TransferService {
  constructor(@InjectModel(User.name) protected userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const transfer = await this.userModel.findById(id).exec();
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  async create(createTransferDto: TransferDto): Promise<User> {
    const createdTransfer = new this.userModel(createTransferDto);
    return createdTransfer.save();
  }

  async update(id: string, updateTransferDto: TransferDto): Promise<User> {
    const updatedTransfer = await this.userModel.findByIdAndUpdate({ userId: id}, updateTransferDto, {new:true})
    if (!updatedTransfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return updatedTransfer;
  }

  async remove(id: string): Promise<User> {
    const deletedTransfer = await this.userModel.findByIdAndDelete({ userId: id }).exec();
    if (!deletedTransfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return deletedTransfer;
  }
}
