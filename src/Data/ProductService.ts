import { getAllInCart } from "./productSource";

export const getProducts= async() => {
    const { result } = await getAllInCart()
    return { result }
}