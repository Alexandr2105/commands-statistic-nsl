import { Transform } from 'class-transformer';
import { IsNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStageDto {
  @ApiProperty({ type: 'string' })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  title: string;

  @ApiProperty({ type: 'string' })
  @Transform(({ value }) => String(value).trim())
  @Length(10, 200)
  description: string;

  @ApiProperty({ type: 'number' })
  @IsNumber()
  races: number;
}
