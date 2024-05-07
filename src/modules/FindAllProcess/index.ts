import { FindAllController } from "./FindAllController";
import { FindAllUseCase } from "./FindAllUseCase";
import { PostgreeProcessRepository } from "../../Repository/Implementations/PostgreeProcessRepository";

export const postgreeProcessRepository = new PostgreeProcessRepository();
export const findAllUseCase = new FindAllUseCase(postgreeProcessRepository);
export const findAllController = new FindAllController(findAllUseCase);