import { PrismaClient, Prisma, User } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ILoginDTO } from '../../DTO/LoginDTO';
import { IAuthRepository } from '../AuthRepository';
import { prismaClient } from '../../database/prismaClient';
import { compare } from 'bcrypt';
import { ICreateUserDTO } from '../../DTO/CreateUserDTO';

export class PostgreeAuthRepository implements IAuthRepository{
	async login(userLogin: ILoginDTO): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number| null} | null> {
		return await (await this.repository()).user.findFirst({
			where: {
				email: userLogin.email
			}
		});
	}


	async validation(password: string, user: User): Promise<boolean> {
		return await compare(password, user.password);
	}


	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
    
}