export interface order{
        id_order: number,
        data: string,
        n_products: number,
        shipping_address: Array<shipping_address>
}
export interface shipping_address{
        road: string,
        number: number,
        cap: number,
        city: string
}