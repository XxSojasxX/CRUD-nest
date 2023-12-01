import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateAlbumDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    lanzamiento: string;

    @IsNumber()
    @IsPositive()
    pistas: number;

    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsString()
    @IsNotEmpty()
    disquera: string
}
