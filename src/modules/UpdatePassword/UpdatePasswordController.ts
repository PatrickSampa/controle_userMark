import { Request, Response } from 'express';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController{
	constructor(private updatePasswordUseCase: UpdatePasswordUseCase){}
	async handle(request: Request, response: Response){
		const {cpf, password, email} = request.body;
		try{
			const novoFilme = await this.updatePasswordUseCase.execute(cpf, password, email);
			if(novoFilme instanceof Error){
				console.log(novoFilme)
				if(novoFilme.message.trim() == "cpf e email nao encontrados"){
					return response.status(400).send("cpf e email nao encontrados")
				}else if(novoFilme.message.trim() == "email nao encontrado"){
					return response.status(400).send("email nao encontrado")
				}else if(novoFilme.message.trim() == "cpf nao encontrado"){
					return response.status(400).send("cpf nao encontrado")
				}
				return response.status(400).json(novoFilme.message);
			}
			return response.status(200).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro');
		}
	}    
    
}