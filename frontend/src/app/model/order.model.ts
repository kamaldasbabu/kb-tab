export interface Order {
    id: string,
    orderId: string,
    itemName: string,
    price:number,
    quantity: number,
    deliveryAddress: string,
    deliveryPin: number,
    orderStatus: number
    
}