import { Transform } from 'class-transformer';
import { IsEmail, Length, Validate } from 'class-validator';
import { CheckTeamId } from 'src/common/custom.validators/check.teamId';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'string' })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  userName: string;

  @ApiProperty({ type: 'string' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string' })
  @Transform(({ value }) => String(value).trim())
  @Length(3, 30)
  password: string;

  @ApiProperty({ type: 'string' })
  @Validate(CheckTeamId)
  teamId: string;
}
