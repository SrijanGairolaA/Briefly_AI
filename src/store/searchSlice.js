import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: "india",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setContent: (state, action)=>{
            
            state.content = action.payload
        }
    }
})


export const { setContent } = searchSlice.actions

export default searchSlice.reducer