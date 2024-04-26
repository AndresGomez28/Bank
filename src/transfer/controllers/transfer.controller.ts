import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { TransferDto } from '../DTOs/common/transfer.dto';

@Controller('transfers')
export class TransferController {
    constructor(private readonly transferService: TransferService) {}

    @Get('getAll')
    async findAll() {
        return await this.transferService.findAll();
    }

    @Get('getOne/:id')
    async findOne(@Param('id') id: string) {
        return await this.transferService.findOne(id);
    }

    @Post('create')
    async create(@Body() transferDto: TransferDto) {
        return await this.transferService.create(transferDto);
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() transferDto: TransferDto) {
        return await this.transferService.update(id, transferDto);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        return await this.transferService.remove(id);
    }
}
