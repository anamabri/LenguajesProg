import { IsNotEmpty } from "class-validator";
import { ExecOptionsWithStringEncoding } from "node:child_process";

export class CreateReservaDTO {
    @IsNotEmpty()
    day: string;

    @IsNotEmpty()
    startHour: string;

    @IsNotEmpty()
    hours: number;

    @IsNotEmpty()
    totalPay: number;
}
