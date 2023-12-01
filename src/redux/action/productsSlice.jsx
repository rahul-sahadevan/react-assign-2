import { createSlice } from "@reduxjs/toolkit";

// creating a redux slice ----------------
const productSlice = createSlice({
    name:"products",
    initialState:{
        fetchLoading:false,
        fetchData:[],
        actualData:[],
        fetchError:null
    },
    reducers:{
        loading: (state)=>{
            state.fetchLoading = true
        },
        data:(state,action)=>{
            state.fetchData = action.payload
            state.actualData = action.payload
            state.fetchLoading = false
        },
        error:(state,action)=>{
            state.fetchLoading = false;
            state.fetchError = action.payload
        },
        // ascending order sorting
        ascendingOrder:(state,action)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            state.fetchData = [...tempArr].sort((a, b) => a.price - b.price);

        },
    //  descending order sorting
        descendingOrder:(state)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            
            state.fetchData = [...tempArr].sort((a, b) => b.price - a.price);

        },
    //  sorting by rating hight-low
        sortByRating:(state)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            state.fetchData = [...tempArr].sort((a, b) => b.rating.rate - a.rating.rate);

        },
    //   no sort
        withoutSorting:(state)=>{
            state.fetchData = state.actualData
        },
    //  filter products
        filterProduct:(state,action)=>{
            if(action.payload.toLowerCase() === "men's clothing"){
                state.fetchData = state.actualData
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "women's clothing"){
                state.fetchData = state.actualData
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "jewelery"){
                state.fetchData = state.actualData
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "electronics"){
                state.fetchData = state.actualData
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
           
            
        }
    }
})

export const {loading,
    data,
    error,
    ascendingOrder,
    descendingOrder,
    sortByRating,
    withoutSorting,
    filterProduct} = productSlice.actions

export default productSlice.reducer