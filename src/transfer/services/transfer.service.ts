import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer } from '../entities/transfer.entity';
import { TransferOutputDto } from '../DTOs/responses/transfer-output.dto';
import { TransferInputDto } from '../DTOs/requests/transfer-input.dto';

@Injectable()
export class TransferService {
    constructor(@InjectModel(Transfer.name) protected transferModel: Model<Transfer>) {}

    async findAll(): Promise<TransferOutputDto[]> {
        const transfers = await this.transferModel.find().exec();
        return transfers.map(transfer => transfer.toObject());
    }

    async findOne(id: string): Promise<TransferOutputDto> {
        const transfer = await this.transferModel.findById(id).exec();
        if (!transfer) {
            throw new NotFoundException(`Transfer with ID ${id} not found`);
        }
        return transfer.toObject();
    }

    async create(createTransferDto: TransferInputDto): Promise<TransferOutputDto> {
        const createdTransfer = new this.transferModel(createTransferDto);
        const savedTransfer = await createdTransfer.save();
        return savedTransfer.toObject();
    }

    async update(id: string, updateTransferDto: TransferInputDto): Promise<TransferOutputDto> {
        const updatedTransfer = await this.transferModel.findByIdAndUpdate(id, updateTransferDto, { new: true }).exec();
        if (!updatedTransfer) {
            throw new NotFoundException(`Transfer with ID ${id} not found`);
        }
        return updatedTransfer.toObject();
    }

    async remove(id: string): Promise<TransferOutputDto> {
        const deletedTransfer = await this.transferModel.findByIdAndDelete(id).exec();
        if (!deletedTransfer) {
            throw new NotFoundException(`Transfer with ID ${id} not found`);
        }
        return deletedTransfer.toObject();
    }
}
