import { loading,data,error } from "../action/productsSlice";
import axios from "axios";

// function to fetch the products from api-----------
const productFetch  = ()=>{
    return async function (dispatch){
        const url = "https://fakestoreapi.com/products";
        dispatch(loading())
        try{
            const response = await axios.get(url)
            console.log(response.data)
            dispatch(data(response.data))

        }
        catch(e){
            dispatch(error(error))
        }
    }
}

export default productFetch