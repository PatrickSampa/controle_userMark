import { AuthController } from "./AuthController";
import { AuthUseCase } from "./AuthUseCase";
import { PostgreeAuthRepository } from "../../Repository/Implementations/PostgreeAuthRepository";
import { PostgreeUseRepository } from "../../Repository/Implementations/PostgreUserRepository";



export const postgreeAuthRepository = new PostgreeAuthRepository();
export const postgreeUseRepository = new PostgreeUseRepository();
export const authUseCase = new AuthUseCase(postgreeAuthRepository,postgreeUseRepository);
export const authController = new AuthController(authUseCase);