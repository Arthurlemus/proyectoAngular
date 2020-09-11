export class ListaItem{
    desc: string;
    completada: boolean;

    constructor(desc: string) {
        this.desc = desc;
        this.completada = false;
    }
}