export class Mensagem{
    constructor(
        public id: number,
        public conteudo: string,
        public idSetor: number,
        public idMensagemPai: number | null,
        public inputPai: number | null,
        public mensagemFilhas: Array<Mensagem> | null
    ){}
}