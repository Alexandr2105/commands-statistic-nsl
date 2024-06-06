import { Transform } from "class-transformer";
import { IsEmail, Length, Validate } from "class-validator";
import { CheckTeamId } from "src/common/custom.validators/check.teamId";

export class CreateUserDto {
    @Transform(({ value }) => String(value).trim())
    @Length(3, 30)
    userName: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => String(value).trim())
    @Length(3, 30)
    password: string;

    @Validate(CheckTeamId)
    teamId: number;
}