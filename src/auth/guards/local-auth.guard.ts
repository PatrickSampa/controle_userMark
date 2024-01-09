/* eslint-disable prettier/prettier */
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    //console.log(context);
    console.log("PASSOU1")
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    console.log("PASSOU25")
    if (err || !user) {
      throw new UnauthorizedException(err?.message);
    }
    console.log(user)
    console.log("AJDASKDJKAS")
    return user;
  }
}
