import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { TransferDto } from '../DTOs/common/transfer.dto';
import { TransferOutputDto } from '../DTOs/responses/transfer-output.dto';
import { TransferInputDto } from '../DTOs/requests/transfer-input.dto';

@Controller('transfers')
export class TransferController {
    constructor(private readonly transferService: TransferService) {}

    @Get('getAll')
    async findAll(): Promise<TransferOutputDto[]> {
        return await this.transferService.findAll();
    }

    @Get('getOne/:id')
    async findOne(@Param('id') id: string): Promise<TransferOutputDto> {
        return await this.transferService.findOne(id);
    }

    @Post('create')
    async create(@Body() transferDto: TransferDto) {
        return await this.transferService.create(transferDto);
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() transfer: TransferDto): Promise<TransferOutputDto> {
        return await this.transferService.update(id, transfer);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string): Promise<TransferOutputDto> {
        return await this.transferService.remove(id);
    }
}
