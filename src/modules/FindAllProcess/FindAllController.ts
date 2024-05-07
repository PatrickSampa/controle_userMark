import { Request, Response } from 'express';
import { FindAllUseCase } from './FindAllUseCase';


export class FindAllController {
	constructor(private findAllUseCase: FindAllUseCase){}
	async handle(request: Request, response: Response){
        const {dataAtual, statusAtual} = request.body;
        console.log(dataAtual)
        console.log(statusAtual)
        console.log("adssadad")
		const userId = request.userId;
        const newDate = new Date(dataAtual)
		try{
			const novoFilme = await this.findAllUseCase.execute(userId, newDate, statusAtual);
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

