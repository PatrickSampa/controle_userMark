/* eslint-disable prettier/prettier */
// NestJS
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// Password
import { AuthGuard } from '@nestjs/passport';
// Decorators
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';
// Error Handling
import { UnauthorizedError } from '../errors/unauthorized.error';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): Promise<boolean> | boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    //console.log(context);
    if (isPublic) {
      console.log("RETORNA2")
      return true;
    }

    const canActivate = super.canActivate(context);
    if (typeof canActivate === 'boolean') {
      console.log("RETORNA")
      return canActivate;
    }

    const canActivatePromise = canActivate as Promise<boolean>;
    return canActivatePromise.catch((error) => {
      if (error instanceof UnauthorizedError) {
        throw new UnauthorizedException(error.message);
      }
      console.log('e: ', Error);
      throw new UnauthorizedException();
    });
  }
}
