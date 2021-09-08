import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentiaslDTO } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    authCredentialsDTO: AuthCredentiaslDTO,
  ): Promise<{ message: string }> {
    return await this.userRepository.signUp(authCredentialsDTO);
  }

  async signIn(
    authCredentiadentialsDTO: AuthCredentiaslDTO,
  ): Promise<{ token: string }> {
    const username = await this.userRepository.validateUserPassword(
      authCredentiadentialsDTO,
    );

    const payload: JwtPayload = { username };
    const token = await this.jwtService.sign(payload);
    return { token };
  }
}
