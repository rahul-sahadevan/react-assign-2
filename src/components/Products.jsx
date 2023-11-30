import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import productFetch from "../redux/function/productsFunction";
import Product from "./Product";

function Products(){
    
    const {fetchData} = useSelector(state => state.products)
    const [products,setProducts] = useState(fetchData);
    console.log(fetchData)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( productFetch())     
    },[])

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