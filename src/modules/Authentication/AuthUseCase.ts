import { ILoginDTO } from "../../DTO/LoginDTO";
import { IAuthRepository } from "../../Repository/AuthRepository";
import { IUserRepository } from "../../Repository/UserRepository";
import { JsonWebToken } from "../../jsonwebtoken";

export class AuthUseCase{
    private authRepository: IAuthRepository;
    private userRepository: IUserRepository;
    constructor(authRepository: IAuthRepository, userRepository: IUserRepository){
        this.authRepository = authRepository;
        this.userRepository = userRepository;
    }

    async execute(user: ILoginDTO){
        try{
            
           
            const userLogin = await this.userRepository.findByEmail(user.email)
            
            if(!userLogin) throw new Error("User Not Found");
            const valuePassword = await this.authRepository.validation(user.password, userLogin);
            console.log(valuePassword)
            if(!valuePassword) return new Error("password invalid");

            const token = JsonWebToken(userLogin);

            return token





        }catch(e){
            //console.log(e)
            return e
        }

    }
}