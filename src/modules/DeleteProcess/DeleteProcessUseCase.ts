import { ProcessRepository } from "../../Repository/ProcessRepository";

export class DeleteProcessUseCase{
    private processRepository: ProcessRepository;
    constructor(processRepository: ProcessRepository){
        this.processRepository = processRepository;
    }
    async executeDeleteAll(id: number){
        return await this.processRepository.deleteAll(id);
    }

    async executeDeleteById(id: number){
        return await this.processRepository.deleteById(id);
    }
}