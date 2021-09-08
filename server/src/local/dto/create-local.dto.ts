import { IsNotEmpty, IsOptional } from 'class-validator';
import { DaysOfTheWeek } from '../days-week.enum';

export class CreateLocalDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  city: string;

  @IsOptional()
  location: string;

  @IsNotEmpty()
  fromDay: DaysOfTheWeek;

  @IsNotEmpty()
  toDay: DaysOfTheWeek;

  @IsNotEmpty()
  fromHour: string;

  @IsNotEmpty()
  toHour: string;

  @IsNotEmpty()
  costPerHour: number;
}
