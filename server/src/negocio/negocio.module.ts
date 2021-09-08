import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { NegocioController } from './negocio.controller';
import { NegocioRepository } from './negocio.repository';
import { NegocioService } from './negocio.service';

@Module({
  imports: [TypeOrmModule.forFeature([NegocioRepository]), AuthModule],
  controllers: [NegocioController],
  providers: [NegocioService],
  exports: [NegocioService],
})
export class NegocioModule {}
