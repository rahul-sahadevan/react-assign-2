import { createSlice } from "@reduxjs/toolkit";


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
        ascendingOrder:(state,action)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            
            for(let i=0;i<tempArr.length;i++){
                let price1 = tempArr[i].price;
                for(let j=0;j<tempArr.length;j++){
                    let price2 = tempArr[j].price

                    if(price1 < price2){
                        let temp = tempArr[i];
                        tempArr[i] = tempArr[j];
                        tempArr[j] = temp
                    }
                }
            }

            state.fetchData = [...tempArr];

        },
        descendingOrder:(state)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            
            for(let i=0;i<tempArr.length;i++){
                let price1 = tempArr[i].price;
                for(let j=0;j<tempArr.length;j++){
                    let price2 = tempArr[j].price

                    if(price1 > price2){
                        let temp = tempArr[i];
                        tempArr[i] = tempArr[j];
                        tempArr[j] = temp
                    }
                }
            }

            state.fetchData = [...tempArr];
        },
        sortByRating:(state)=>{
            let s = JSON.stringify(state.fetchData);
            let data = JSON.parse(s);

            let tempArr = data;

            
            for(let i=0;i<tempArr.length;i++){
                let rating1 = tempArr[i].rating.rate;
                for(let j=0;j<tempArr.length;j++){
                    let rating2 = tempArr[j].rating.rate

                    if(rating1 > rating2){
                        let temp = tempArr[i];
                        tempArr[i] = tempArr[j];
                        tempArr[j] = temp
                    }
                }
            }

            state.fetchData = [...tempArr];

        },
        withoutSorting:(state)=>{
            state.fetchData = state.actualData
        },
        filterProduct:(state,action)=>{
            if(action.payload.toLowerCase() === "men's clothing"){
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "women's clothing"){
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "jewelery"){
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else if(action.payload.toLowerCase() === "electronics"){
                state.fetchData = state.fetchData.filter((item)=> 
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
            else{
                state.fetchData = state.actualData
            }
            
        }
    }
})

export const {loading,data,error,ascendingOrder,descendingOrder,sortByRating,withoutSorting,filterProduct} = productSlice.actions
export default productSlice.reducer