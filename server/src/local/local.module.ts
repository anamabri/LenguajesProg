import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { NegocioRepository } from 'src/negocio/negocio.repository';
import { LocalController } from './local.controller';
import { LocalRepository } from './local.repository';
import { LocalService } from './local.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocalRepository, NegocioRepository]),
    AuthModule,
  ],
  controllers: [LocalController],
  providers: [LocalService],
})
export class LocalModule {}
