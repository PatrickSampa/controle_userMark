import { CreateProcessUseCase } from "./CreateProcessUseCase";
import { Request, Response } from 'express';

export class CreateProcessController {
	constructor(private createProcessUseCase: CreateProcessUseCase){}
	async handle(request: Request, response: Response){
		const { nup, dia, hora, statusProcess, tarefadId}  = request.body;
		const userId = request.userId;
		try{
			const novoFilme = await this.createProcessUseCase.execute({ nup, dia, hora, statusProcess, userId, tarefadId});
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

