export class Stock {
    protected _favourite: boolean = false;
    public name: string;
    public code: string;
    public prize: number;
    public previousPrize: number;
    constructor(name,code,prize,previousPrize){
        this.name = name;
        this.code = code;
        this.prize = prize;
        this.previousPrize = previousPrize;
    }

    get favourite():boolean {
        return this._favourite
    }

    set favourite(value: boolean) {
        this._favourite = value;
    }

    isPositiveChange():boolean {
        return this.prize >= this.previousPrize;
    }

    toggleFavourite() {
        this.favourite = !this.favourite;
    }
}

export class Obligacje extends Stock {
    constructor(name,code,prize,previousPrize, public panstwo:string){
        super(name,code,prize,previousPrize)
    }

    isPositiveChange2():boolean {
        return this.prize >= this.previousPrize;;
    }
}