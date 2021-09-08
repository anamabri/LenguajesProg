import { IsNotEmpty } from "class-validator";

export class CreateNegocioDTO{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

}