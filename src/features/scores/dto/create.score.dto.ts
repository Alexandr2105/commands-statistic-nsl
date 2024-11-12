import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScoreDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  points: number;
}
