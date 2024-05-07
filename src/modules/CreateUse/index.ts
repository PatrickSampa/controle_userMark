import { CreateUseController } from './CreateUserController';
import { CreateUseUseCase } from './CreateUserUseCase';
import { PostgreeUseRepository } from '../../Repository/Implementations/PostgreUserRepository';

export const postgreeMovieRepository = new PostgreeUseRepository();
export const createMovieUseCase = new CreateUseUseCase(postgreeMovieRepository);
export const createuseController = new CreateUseController(createMovieUseCase);