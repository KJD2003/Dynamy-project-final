export interface User {
    id: number;
    name: string;
    surname: string,
    adress: Array<adress>,
    email: string,
    pass: string,
    phone: number,
    year_birth: Date

}
export interface adress{
        road: string,
        number: number,
        cap: number,
        city: string
}
