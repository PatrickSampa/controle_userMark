import { DeleteProcessAllController } from "./DeleteProcessAllController";
import { DeleteProcessIdController } from "./DeleteProcessIdController";
import { DeleteProcessUseCase } from "./DeleteProcessUseCase";
import { PostgreeProcessRepository } from "../../Repository/Implementations/PostgreeProcessRepository";

export const postgreeProcessRepository = new PostgreeProcessRepository();
export const deleteProcessUseCase = new DeleteProcessUseCase(postgreeProcessRepository);
export const deleteProcessAllController = new DeleteProcessAllController(deleteProcessUseCase);
export const deleteProcessIdController = new DeleteProcessIdController(deleteProcessUseCase);