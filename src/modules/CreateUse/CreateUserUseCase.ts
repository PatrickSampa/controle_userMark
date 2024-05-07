import { ICreateUserDTO } from '../../DTO/CreateUserDTO';
import { IUserRepository } from '../../Repository/UserRepository';



export class CreateUseUseCase{
	private userRepository: IUserRepository;
	//new 
	constructor(userRepository: IUserRepository){
		this.userRepository = userRepository;
	}
	async execute(user: ICreateUserDTO){
		const userExiste = await this.userRepository.findByEmail(user.email);
		if(userExiste) return new Error('usuario ja existe');
		return await this.userRepository.save(user);

	}
}