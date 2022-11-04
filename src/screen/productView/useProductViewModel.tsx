import { useState } from "react"    
import { getProductsUseCase } from "../../service/products/getAllCart";
import {useDispatch,useSelector} from 'react-redux'
import { saveCart, addQty,reduceQty } from "../../Redux/products/productSlice";


export default function ProductListViewModel() {
  
    const dispatch = useDispatch()
    const all_cart = useSelector((state:any) => state.all_cart.productCart)
    async function getProducts() {

        const {result} = await getProductsUseCase();
        dispatch(saveCart(result))
    }

    const updateStatsInc = (item:number | undefined) =>  {
        dispatch(addQty(item))
    }
    const updateReduceStatsInc = (item:number | undefined) =>  {
        dispatch(reduceQty(item))
    }

    return {
        getProducts,
        all_cart,
        updateStatsInc,
        updateReduceStatsInc
    }
}