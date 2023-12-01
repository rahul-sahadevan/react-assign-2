import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import productFetch from "../redux/function/productsFunction";

import { ascendingOrder, 
    descendingOrder, 
    filterProduct, 
    sortByRating, 
    withoutSorting 
} from "../redux/action/productsSlice";



function Navbar(){
    const[sort,setSort] = useState('All');
    const[filter,setFiler] = useState('All');
    const dispatch = useDispatch();

    // function to handle sorting--------------
    function handleSort(){
        if(sort === 'Low-High'){
            dispatch(ascendingOrder())
        }
        else if(sort === 'High-Low'){
            dispatch(descendingOrder())
        }
        else if(sort === 'Rating'){
            dispatch(sortByRating())
        }
        else{
            dispatch(withoutSorting())
        }
    }

    // function to handle filter---------------
    function handleFilter(){
        dispatch(filterProduct(filter))
    }

   

    useEffect(()=>{   
        handleSort()
        handleFilter()
    },[sort,filter])

    // nav bar-----------------
    return (
        <div className="nav-bar">
            <h2>E-Commerse</h2>
            <div className="sort-filter">
                <select onChange={(e=>setSort(e.target.value))}>
                    <option>All</option>
                    <option>Low-High</option>
                    <option>High-Low</option>
                    <option>Rating</option>
                </select>
                <select onChange={(e)=>setFiler(e.target.value)}>
                    <option>All</option>
                    <option>Men's Clothing</option>
                    <option>Women's Clothing</option>
                    <option>jewelery</option>
                    <option>Electronics</option>
                    
                </select>
            </div>
        </div>
    )
}

export default Navbar