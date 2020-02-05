export class Pomiar {
    private cisnienie: string;
    private pora: string;
    private data: string;
    constructor(cisnienie, pora, data){
        this.cisnienie = cisnienie;
        this.pora = pora;
        this.data = data;
    }

    get $cisnienie(){
        return this.cisnienie;
    }

    set $cisnienie(value:string){
        this.cisnienie = value;
    }

    get $pora(){
        return this.pora;
    }

    set $pora(value:string){
        this.pora = value;
    }

    get $data(){
        return this.data;
    }

    set $data(value:string){
        this.data = value;
    }

}
