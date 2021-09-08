import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateNegocioDTO } from './dto/create-negocio.dto';
import { GetNegocioFilterDTO } from './dto/get-negocio-filter.dto';
import { NegocioStatus } from './negocio-status.enum';
import { Negocio } from './negocio.entity';

@EntityRepository(Negocio)
export class NegocioRepository extends Repository<Negocio> {
  async getNegocios(): Promise<Negocio[]> {
    const perPage = 6;
    const query = this.createQueryBuilder('negocio');
    query.limit(perPage);
    query.offset(0);
    try {
      const negocios = await query.getMany();
      return negocios;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getOwnNegocios(filterDTO: GetNegocioFilterDTO, user: User) {}

  async createNegocio(
    createNegocioDTO: CreateNegocioDTO,
    user: User,
  ): Promise<Negocio> {
    const { name, description } = createNegocioDTO;
    const negocio = new Negocio();
    negocio.name = name;
    negocio.description = description;
    negocio.status = NegocioStatus.ACTIVE;
    negocio.user = user;
    try {
      await negocio.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    delete negocio.user;
    return negocio;
  }

  async updateNegocioStatus() {}
}
