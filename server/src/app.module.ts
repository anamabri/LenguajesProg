import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { LocalModule } from './local/local.module';
import { ReservaModule } from './reserva/reserva.module';
import { NegocioModule } from './negocio/negocio.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, LocalModule, ReservaModule, NegocioModule],
})
export class AppModule {}
