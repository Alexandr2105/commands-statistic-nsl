import { Transform } from "class-transformer";
import { Length } from "class-validator";

export class CreateSeasonDto {
    @Transform(({ value }) => String(value).trim())
    @Length(3, 30)
    title: string;

    @Transform(({ value }) => String(value).trim())
    @Length(10, 200)
    description: string;
}