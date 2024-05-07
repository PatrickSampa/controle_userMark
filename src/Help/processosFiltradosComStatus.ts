import { Processo } from "@prisma/client";

export  function processosFiltradosComStatus(processo: Processo[],dataBuscada: Date,status: string){
   const processosTratados = processo.filter(processo => {
    // Compara apenas as datas, ignorando a hora
         return processo.dia.toISOString().split('T')[0] === dataBuscada.toISOString().split('T')[0] && Number(processo.statusProcess) == Number(status)
    });

    return processosTratados;
}