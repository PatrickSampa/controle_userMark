/* eslint-disable prettier/prettier */
import { IsString, IsUUID } from 'class-validator';

export class newObjectCreateDTO {
  @IsString()
  name: string;

  @IsUUID()
  @IsString()
  userId: string;
}
