import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { TransferDto } from '../DTOs/common/transfer.dto';
import { TransferInputDto } from '../DTOs/requests/transfer-input.dto';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TransferDto> {
    return await this.transferService.findOne(id);
  }

  @Post()
  async create(@Body() transfer: TransferInputDto): Promise<TransferDto> {
    return await this.transferService.create(transfer);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transfer: TransferInputDto): Promise<TransferDto> {
    return await this.transferService.update(id, transfer);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TransferDto> {
    return await this.transferService.remove(id);
  }
}
