import { Request, Response } from 'express';
import { AuthUseCase } from './AuthUseCase';



export class AuthController {
	constructor(private createUseUseCase: AuthUseCase){}
	async handle(request: Request, response: Response){
		const {email, password} = request.body;
		try{
			const novoFilme = await this.createUseUseCase.execute({email, password});
			if(novoFilme instanceof Error){
				console.log(novoFilme.message)
				if(novoFilme.message.trim() == "User Not Found") return response.status(400).json('User Not Found')
				if(novoFilme.message.trim() == "password invalid") return response.status(400).json('password invalid')
			}
			return response.status(200).json(novoFilme);
		}catch(error){
			console.log(error)
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

