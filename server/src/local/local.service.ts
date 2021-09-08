import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Negocio } from 'src/negocio/negocio.entity';
import { NegocioRepository } from 'src/negocio/negocio.repository';
import { CreateLocalDTO } from './dto/create-local.dto';
import { Local } from './local.entity';
import { LocalRepository } from './local.repository';

@Injectable()
export class LocalService {
  constructor(
    @InjectRepository(LocalRepository) private localRepository: LocalRepository,
    @InjectRepository(NegocioRepository)
    private negocioRepository: NegocioRepository,
  ) {}

  async getLocals(): Promise<Local[]> {
    return this.localRepository.getLocals();
  }

  async createLocal(
    createLocalDTO: CreateLocalDTO,
    negocioId: number,
  ): Promise<Local> {
    const negocio = await this.negocioRepository.findOne({
      where: { id: negocioId },
    });
    return this.localRepository.createLocal(createLocalDTO, negocio);
  }
}
