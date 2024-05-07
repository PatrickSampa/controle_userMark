import { Request, Response } from 'express';
import {  CreateUseUseCase } from './CreateUserUseCase';


export class CreateUseController {
	constructor(private createUseUseCase: CreateUseUseCase){}
	async handle(request: Request, response: Response){
		const {nome, email, password, cpf} = request.body;
		try{
			const role = 1;
			const novoFilme = await this.createUseUseCase.execute({nome, email, password, cpf, role});
			if(novoFilme instanceof Error){
				return response.status(400).json('usuario ja existe');
			}
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro');
		}
	}
}

