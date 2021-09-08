import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateReservaDTO } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';

@UseGuards(AuthGuard())
@Controller('reserva')
export class ReservaController {
  constructor(private reservaService: ReservaService) {}

  @Get()
  getReservas(@GetUser() user: User) {
    return this.reservaService.getReservas(user);
  }

  @Post()
  createReserva(
    @Body() createReservaDTO: CreateReservaDTO,
    @GetUser() user: User,
    @Body('localId') localId: number,
  ) {
    return this.reservaService.createReserva(createReservaDTO, user, localId);
  }
}
