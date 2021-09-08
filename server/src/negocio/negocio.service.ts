import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateNegocioDTO } from './dto/create-negocio.dto';
import { Negocio } from './negocio.entity';
import { NegocioRepository } from './negocio.repository';

@Injectable()
export class NegocioService {
  constructor(
    @InjectRepository(NegocioRepository)
    private negocioRepository: NegocioRepository,
  ) {}

  async getNegocios(): Promise<Negocio[]> {
    return this.negocioRepository.getNegocios();
  }

  async getNegocioById(id: number) {
    const negocio = await this.negocioRepository.findOne({ where: { id: id } });
    if (!negocio) {
      throw new NotFoundException();
    }
    return negocio;
  }

  async createNegocio(
    createNegocioDTO: CreateNegocioDTO,
    user: User,
  ): Promise<Negocio> {
    return this.negocioRepository.createNegocio(createNegocioDTO, user);
  }
}
