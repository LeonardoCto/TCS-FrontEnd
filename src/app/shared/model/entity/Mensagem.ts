export class Mensagem{
    constructor(
        public id: number,
        public conteudo: string,
        public idSetor: number,
        public inputPai: string | null,
        public mensagemFilhas: Array<Mensagem> | null
    ){}
}