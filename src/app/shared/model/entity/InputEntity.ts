import { EdgeGrafoDto } from "../dto/EdgeGrafoDto";

export class InputEntity{
    constructor(edge: EdgeGrafoDto){
        this.conteudo = edge.label;
        this.idMensagemPai = +edge.source;
        this.idMensagemFilha = +edge.target;
    }
    
    conteudo: string;
    idMensagemPai: number;
    idMensagemFilha: number;
}