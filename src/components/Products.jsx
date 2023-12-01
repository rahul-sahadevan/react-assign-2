import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import productFetch from "../redux/function/productsFunction";
import Product from "./Product";


function Products(){
    // products from redux store-------------------------
    const {fetchData} = useSelector(state => state.products)
    const products = fetchData;

    console.log(products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( productFetch())    
    },[])

    // creating products------------------------
    return(
        <div>
            {
                fetchData.map((product)=>(
                    <Product product={product}/>
                ))
            }
        </div>
    )
}
export default Products