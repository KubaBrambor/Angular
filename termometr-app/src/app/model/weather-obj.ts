export class WeatherObj {
    _id: number
    Opad_typ: string
    Lokalizacja_Opis: string
    Wilgotnosc: string
    T_Grunt: string
    Wiatr_V: string
    Czas_Rejestracji: string
    T_Powietrza: string
    Wiatr_Kierunek: string

    constructor(id, opadTyp, lokalizacja, wilgotnosc, tGrunt, wiatrV, czasRejestracji, tPowietrza, wiatrKierunek){
        this._id = id,
        this.Opad_typ = opadTyp,
        this.Lokalizacja_Opis = lokalizacja,
        this.Wilgotnosc = wilgotnosc,
        this.T_Grunt = tGrunt,
        this.Wiatr_V = wiatrV,
        this.Czas_Rejestracji = czasRejestracji,
        this.T_Powietrza = tPowietrza,
        this.Wiatr_Kierunek = wiatrKierunek
    }
}
