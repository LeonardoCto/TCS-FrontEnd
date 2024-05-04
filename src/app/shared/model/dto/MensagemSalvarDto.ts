import { InputSalvarDto } from "./InputSalvarDto";
import { NodeGrafoDto } from "./NodeGrafoDto";

export class MensagemSalvarDto{

    constructor(node: NodeGrafoDto, input: InputSalvarDto){
        this.conteudo = "";
        this.idSetor = node.idSetor
        this.inputPai = input;
    }

    conteudo: string;
    idSetor: number;
    inputPai: InputSalvarDto;
}