import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateNegocioDTO } from './dto/create-negocio.dto';
import { NegocioService } from './negocio.service';

@Controller('negocio')
export class NegocioController {
  constructor(private negocioService: NegocioService) {}

  @Get()
  getNegocios() {
    return this.negocioService.getNegocios();
  }

  @UseGuards(AuthGuard())
  @Post()
  createNegocio(
    @Body() createNegocioDTO: CreateNegocioDTO,
    @GetUser() user: User,
  ) {
    return this.negocioService.createNegocio(createNegocioDTO, user);
  }
}
