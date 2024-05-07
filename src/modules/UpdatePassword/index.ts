import { UpdatePasswordController } from "./UpdatePasswordController";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";
import { PostgreeUseRepository } from "../../Repository/Implementations/PostgreUserRepository";


export const postgreeUseRepository = new PostgreeUseRepository();
export const updatePasswordUseCase = new UpdatePasswordUseCase(postgreeUseRepository);
export const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);
