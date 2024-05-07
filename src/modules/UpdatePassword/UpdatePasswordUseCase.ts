import { IUserRepository } from '../../Repository/UserRepository';



export class UpdatePasswordUseCase{
	private userRepository: IUserRepository;
	constructor(userRepository: IUserRepository){
		this.userRepository = userRepository;
	}

	async execute(cpf: string, password: string, email: string){
		return this.userRepository.updatePassord(cpf, password, email);
	}
}