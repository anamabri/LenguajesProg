import { Query } from '@nestjs/common';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateLocalDTO } from './dto/create-local.dto';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(private localService: LocalService) {}

  @Get()
  getLocals() {
    return this.localService.getLocals();
  }

  @UseGuards(AuthGuard())
  @Post()
  createLocal(
    @Body() createLocalDTO: CreateLocalDTO,
    @Body('negocioId') negocioId: number,
  ) {
    return this.localService.createLocal(createLocalDTO, negocioId);
  }
}
