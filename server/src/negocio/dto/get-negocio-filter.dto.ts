import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { NegocioStatus } from '../negocio-status.enum';

export class GetNegocioFilterDTO {
  @IsOptional()
  @IsIn([NegocioStatus.ACTIVE, NegocioStatus.INACTIVE])
  status: NegocioStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
