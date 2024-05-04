import { NodeGrafoDto } from "./NodeGrafoDto";
import { EdgeGrafoDto } from "./EdgeGrafoDto";

export interface GrafoMensagemDto {
    nodes: NodeGrafoDto[];
    edges: EdgeGrafoDto[];
}