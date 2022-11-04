import { getProducts } from "../../data/productService";

export async function getProductsUseCase() {
    return (getProducts())
}