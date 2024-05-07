import { CreateProcessController } from "./CreateProcessController";
import { CreateProcessUseCase } from "./CreateProcessUseCase";
import { PostgreeProcessRepository } from "../../Repository/Implementations/PostgreeProcessRepository";

export const postgreeProcessRepository = new PostgreeProcessRepository();
export const createProcessUseCase = new CreateProcessUseCase(postgreeProcessRepository);
export const createProcessController = new CreateProcessController(createProcessUseCase);