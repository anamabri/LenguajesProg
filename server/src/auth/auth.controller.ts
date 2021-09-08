import { Body, Get, ValidationPipe } from '@nestjs/common';
import { Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentiaslDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentiaslDTO: AuthCredentiaslDTO):Promise<{message:string}> {
    return this.authService.signUp(authCredentiaslDTO);
  }

  @Get('/signin')
  @UsePipes(ValidationPipe)
  signIn(
    @Body() authCredentialsDTO: AuthCredentiaslDTO,
  ): Promise<{ token: string }> {
    return this.authService.signIn(authCredentialsDTO);
  }
}
