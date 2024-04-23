import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { TransferDto } from '../DTOs/common/transfer.dto'; // Asegúrate de que este DTO sea el correcto
import { TransferOutputDto } from '../DTOs/responses/transfer-output.dto'; // Asegúrate de que este DTO sea el correcto
import { TransferInputDto } from '../DTOs/requests/transfer-input.dto'; // Asegúrate de que este DTO sea el correcto

@Controller('transfers')
export class TransferController {
    constructor(private readonly transferService: TransferService) {}

    @Get()
    async findAll(): Promise<TransferOutputDto[]> {
        return await this.transferService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<TransferOutputDto> {
        return await this.transferService.findOne(id);
    }

    @Post()
    async create(@Body() transfer: TransferInputDto): Promise<TransferOutputDto> {
        return await this.transferService.create(transfer);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() transfer: TransferDto): Promise<TransferOutputDto> {
        return await this.transferService.update(id, transfer);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<TransferOutputDto> {
        return await this.transferService.remove(id);
    }
}
