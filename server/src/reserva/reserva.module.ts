import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LocalRepository } from 'src/local/local.repository';
import { ReservaController } from './reserva.controller';
import { ReservaRepository } from './reserva.repository';
import { ReservaService } from './reserva.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservaRepository, LocalRepository]),
    AuthModule,
  ],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}
