import { TreeNode } from "primeng/api";

export interface Mensagem extends TreeNode{
        idSetor: number,
        inputPai: string | null
}