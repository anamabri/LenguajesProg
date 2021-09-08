import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { LocalRepository } from 'src/local/local.repository';
import { CreateReservaDTO } from './dto/create-reserva.dto';
import { Reserva } from './reserva.entity';
import { ReservaRepository } from './reserva.repository';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(ReservaRepository)
    private reservaRepository: ReservaRepository,
    @InjectRepository(LocalRepository) private localRepository: LocalRepository,
  ) {}

  async getReservas(user: User): Promise<Reserva[]> {
    return this.reservaRepository.getReservas(user);
  }

  async createReserva(
    createReservaDTO: CreateReservaDTO,
    user: User,
    localId: number,
  ) {
    const local = await this.localRepository.findOne({
      where: { id: localId },
    });
    return this.reservaRepository.createReserva(createReservaDTO, user, local);
  }
}
