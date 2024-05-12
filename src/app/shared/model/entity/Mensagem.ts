import { NodeGrafoDto } from "../dto/NodeGrafoDto";

export class Mensagem {
    constructor(node: NodeGrafoDto){
        this.id = +node.id;
        this.conteudo = node.label;
        this.idSetor = node.idSetor;
    }

    id: number;
    conteudo: string;
    idSetor: number;
}