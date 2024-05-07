import { Request, Response } from 'express';
import { DeleteProcessUseCase } from './DeleteProcessUseCase';




export class DeleteProcessIdController{
	constructor(private deleteProcessUseCase: DeleteProcessUseCase){}
    async handle(request: Request, response: Response){
        const {idProcess} = request.body;
        console.log(idProcess)
		try{
			const novoFilme = await this.deleteProcessUseCase.executeDeleteById(idProcess)
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}