import { InternalServerErrorException } from '@nestjs/common';
import { Negocio } from 'src/negocio/negocio.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateLocalDTO } from './dto/create-local.dto';
import { Local } from './local.entity';

@EntityRepository(Local)
export class LocalRepository extends Repository<Local> {
  async getLocals(): Promise<Local[]> {
    const perPage = 8;
    const query = this.createQueryBuilder('local');
    query.limit(perPage);
    query.offset(0);
    try {
      const locales = await query.getMany();
      return locales;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createLocal(
    createLocalDTO: CreateLocalDTO,
    negocio: Negocio,
  ): Promise<Local> {
    const {
      name,
      description,
      city,
      location,
      fromDay,
      toDay,
      fromHour,
      toHour,
      costPerHour,
    } = createLocalDTO;

    const local = new Local();
    local.name = name;
    local.description = description;
    local.city = city;
    if (!location) {
      local.location = 'empty';
    } else {
      local.location = location;
    }
    local.fromDay = fromDay;
    local.toDay = toDay;
    local.fromHour = fromHour;
    local.toHour = toHour;
    local.costPerHour = costPerHour;
    local.negocio = negocio;

    try {
      await local.save();
    } catch (error) {
      console.log(error.name);
      throw new InternalServerErrorException();
    }

    delete local.negocio;
    return local;
  }
}
