import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { Local } from 'src/local/local.entity';
import {
  CannotAttachTreeChildrenEntityError,
  EntityRepository,
  Repository,
} from 'typeorm';
import { CreateReservaDTO } from './dto/create-reserva.dto';
import { Reserva } from './reserva.entity';

@EntityRepository(Reserva)
export class ReservaRepository extends Repository<Reserva> {
  async getReservas(user: User): Promise<Reserva[]> {
    const perPage = 8;
    const query = this.createQueryBuilder('reserva');
    query.limit(perPage);
    query.offset(0);
    query.andWhere('reserva.userId = :userId', { userId: user.id });

    try {
      const reservas = await query.getMany();
      return reservas;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createReserva(
    createReservaDTO: CreateReservaDTO,
    user: User,
    local: Local,
  ): Promise<Reserva> {
    const { day, startHour, hours, totalPay } = createReservaDTO;
    const reserva = new Reserva();
    reserva.day = day;
    reserva.startHour = startHour;
    reserva.hours = hours;
    reserva.totalPay = totalPay;
    reserva.user = user;
    reserva.local = local;

    try {
      await reserva.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    delete reserva.user;
    return reserva;
  }
}
