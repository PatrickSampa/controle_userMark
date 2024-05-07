import { Processo } from "@prisma/client";

export  function processosFiltrados(processo: Processo[],dataBuscada: Date){
   const processosTratados = processo.filter(processo => {
    // Compara apenas as datas, ignorando a hora
         return processo.dia.toISOString().split('T')[0] === dataBuscada.toISOString().split('T')[0];
    });

    return processosTratados;
}