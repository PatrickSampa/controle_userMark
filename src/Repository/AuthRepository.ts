import { PrismaClient, User } from '@prisma/client';
import { ILoginDTO } from '../DTO/LoginDTO';
import { ICreateUserDTO } from '../DTO/CreateUserDTO';

export interface IAuthRepository{
    login(userLogin: ILoginDTO): Promise<User | null>
    validation(password: string, user: ICreateUserDTO): Promise<boolean>
    repository(): Promise<PrismaClient>
}