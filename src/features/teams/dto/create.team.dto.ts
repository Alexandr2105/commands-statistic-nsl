import { Transform } from 'class-transformer';
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ type: String })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  title: string;

  @ApiProperty({ type: String })
  @Transform(({ value }) => String(value).trim())
  @Length(10, 200)
  description: string;

  @ApiProperty({ type: String })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  city: string;

  @ApiProperty({ type: String })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  club: string;
}
