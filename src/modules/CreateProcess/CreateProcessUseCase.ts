import { IProcessDTO } from "../../DTO/ProcessDTO";
import { ProcessRepository } from "../../Repository/ProcessRepository";

export class CreateProcessUseCase{
    private processRepository: ProcessRepository;
    constructor(processRepository: ProcessRepository){
        this.processRepository = processRepository;
    }
    async execute(process: IProcessDTO){
        console.log(process)
        return await this.processRepository.save(process);
        
    }

}