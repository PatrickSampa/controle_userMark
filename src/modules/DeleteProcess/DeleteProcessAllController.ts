import { Request, Response } from 'express';
import { DeleteProcessUseCase } from './DeleteProcessUseCase';




export class DeleteProcessAllController{
	constructor(private deleteProcessUseCase: DeleteProcessUseCase){}
    async handle(request: Request, response: Response){
		const userId = request.userId;
		try{
			const novoFilme = await this.deleteProcessUseCase.executeDeleteAll(userId);
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}