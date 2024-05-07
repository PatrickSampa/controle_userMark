import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { IUserRepository } from '../UserRepository';
import { ICreateUserDTO } from '../../DTO/CreateUserDTO';
import { prismaClient } from '../../database/prismaClient';
import { hash } from 'bcrypt';


export class PostgreeUseRepository implements IUserRepository{
	async findByEmail(email: string): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number | null}| null> {
		return await (await this.repository()).user.findFirst({
			where: {
				email: email
			}
		});
	}
	findByAll(): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number| null}[]> {
		throw new Error('Method not implemented.');
	}
	async save(user: ICreateUserDTO): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number | null}> {
		user.password = await hash(user.password, 8);
		const newUser = await (await this.repository()).user.create({
			data: user
		});
		return newUser;
		
	}
	findById(id: number): Promise<{ id: number; nome: string; email: string; password: string; cpf: string; role: number}> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<{ id: number; nome: string; email: string; password: string; cpf: string; role: number}> {
		throw new Error('Method not implemented.');
	}

	async findByCpf(cpf: string): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number | null} | null> {
		return await (await this.repository()).user.findFirst({
			where: {
				cpf: cpf
			}
		});
	}


	async updatePassord(cpf: string, password: string, email: string): Promise<{ id: number; nome: string; email: string; password: string; cpf: string | null; role: number | null} | Error> {
		const user = await this.findByCpf(cpf);
		const userEmail = await this.findByEmail(email);
		//nunca vai ser 
		if(!user && !userEmail) return new Error("cpf e email nao encontrados")
		if(!user) return new Error('cpf nao encontrado');
		if(!userEmail) return new Error("email nao encontrado")
		
		const newPassord = await hash(password, 8);

		return await (await this.repository()).user.update({
			where: {
				id: user.id
			},
			data: {
				password: newPassord
			}
		});
	}

	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}

}