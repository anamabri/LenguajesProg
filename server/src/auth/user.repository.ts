import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentiaslDTO } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(
    authCredentialsDTO: AuthCredentiaslDTO,
  ): Promise<{ message: string }> {
    const { username, password, type } = authCredentialsDTO;
    const userExist = await this.findOne({ username });
    if (userExist) {
      throw new ConflictException('An user with this name already exist.');
    }
    const user = this.create();
    const hashedPassword = await bcrypt.hash(password, 12);
    user.username = username;
    user.password = hashedPassword;
    user.type = type;
    await user.save();
    const message: string = `User ${username} created succesfully`;

    return { message };
  }

  async validateUserPassword(authCredentialsDTO: AuthCredentiaslDTO) {
    const { username, password } = authCredentialsDTO;
    const user = await this.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials.');
    }
    const isValid = await user.validateUserPassword(password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid Credentials.');
    }

    return username;
  }
}
