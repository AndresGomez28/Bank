import { OmitType } from "@nestjs/swagger";
import { TransferDto } from "../common/transfer.dto";


export class TransferInputDto extends OmitType(TransferDto, ['userId']) {}