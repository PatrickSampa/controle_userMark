import { ProcessRepository } from '../../Repository/ProcessRepository';




export class FindAllUseCase{
	private processRepository: ProcessRepository;
    constructor(processRepository: ProcessRepository){
        this.processRepository = processRepository;
    }
    async execute(id: number, dataAtual: Date, statusAtual: string){
        console.log(id)
        return await this.processRepository.findAll(id,dataAtual,statusAtual);
        
    }
}