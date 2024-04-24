import { NodeGrafoDto } from "./NodeDto";
import { EdgeGrafoDto } from "./EdgeDto";

export interface GrafoMensagemDto {
    nodes: NodeGrafoDto[];
    edges: EdgeGrafoDto[];
}